__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 561,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 560,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 560,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 29,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 21,
                "end": 29,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 21,
                  "end": 27
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 78,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 78,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 53,
                    "end": 74,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 53,
                      "end": 74,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 53,
                        "end": 62,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 62,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 65,
                        "end": 74,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 66,
                            "end": 67,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 69,
                            "end": 70,
                            "raw": "2",
                            "value": 2
                          },
                          {
                            "type": "Literal",
                            "start": 72,
                            "end": 73,
                            "raw": "3",
                            "value": 3
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 91,
              "decorators": [],
              "name": "finderRaw",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 100,
                    "end": 172,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 100,
                      "end": 172,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 115,
                          "end": 171,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 128,
                            "end": 171,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 136,
                                "end": 165,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 143,
                                  "end": 165,
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 143,
                                    "end": 144,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 149,
                                    "end": 165,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 149,
                                      "end": 158,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 149,
                                        "end": 153
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 154,
                                        "end": 158,
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 159,
                                      "end": 165,
                                      "decorators": [],
                                      "name": "length",
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
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 125,
                              "end": 126,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 100,
                        "end": 114,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 100,
                          "end": 109,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 100,
                            "end": 104
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 109,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
                          "decorators": [],
                          "name": "find",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 286,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 192,
              "decorators": [],
              "name": "forEacherRaw",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 286,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 286,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 201,
                    "end": 282,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 201,
                      "end": 282,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 219,
                          "end": 281,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 232,
                            "end": 281,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 240,
                                "end": 275,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 240,
                                  "end": 275,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "start": 252,
                                      "end": 274,
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 252,
                                        "end": 253,
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 258,
                                        "end": 274,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 258,
                                          "end": 267,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 258,
                                            "end": 262
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 263,
                                            "end": 267,
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 268,
                                          "end": 274,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 240,
                                    "end": 251,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 240,
                                      "end": 247,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 248,
                                      "end": 251,
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
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 201,
                        "end": 218,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 201,
                          "end": 210,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 210,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 218,
                          "decorators": [],
                          "name": "forEach",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 428,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 299,
              "decorators": [],
              "name": "forEacher",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 428,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 302,
                "end": 428,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 424,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 308,
                      "end": 424,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 355,
                          "end": 417,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 368,
                            "end": 417,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 376,
                                "end": 411,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 376,
                                  "end": 411,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "start": 388,
                                      "end": 410,
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 388,
                                        "end": 389,
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 394,
                                        "end": 410,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 394,
                                          "end": 403,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 394,
                                            "end": 398
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 399,
                                            "end": 403,
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 404,
                                          "end": 410,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 376,
                                    "end": 387,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 376,
                                      "end": 383,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 384,
                                      "end": 387,
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
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 365,
                              "end": 366,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        },
                        {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 325,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 308,
                          "end": 317,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 308,
                            "end": 312
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 317,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 325,
                          "decorators": [],
                          "name": "forEach",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 558,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 438,
              "decorators": [],
              "name": "finder",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 558,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 441,
                "end": 558,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 447,
                    "end": 554,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 447,
                      "end": 554,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 491,
                          "end": 547,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 504,
                            "end": 547,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 512,
                                "end": 541,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 519,
                                  "end": 541,
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 519,
                                    "end": 520,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 525,
                                    "end": 541,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 525,
                                      "end": 534,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 525,
                                        "end": 529
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 530,
                                        "end": 534,
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 535,
                                      "end": 541,
                                      "decorators": [],
                                      "name": "length",
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
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 501,
                              "end": 502,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        },
                        {
                          "type": "ThisExpression",
                          "start": 549,
                          "end": 553
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 447,
                        "end": 461,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 447,
                          "end": 456,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 447,
                            "end": 451
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 461,
                          "decorators": [],
                          "name": "find",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
