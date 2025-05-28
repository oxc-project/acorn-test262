__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 560,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 560,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 29,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 78,
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
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 78,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 78,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 53,
                    "end": 74,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 53,
                      "end": 74,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 53,
                        "end": 62,
                        "object": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 62,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 69,
                            "end": 70,
                            "value": 2,
                            "raw": "2"
                          },
                          {
                            "type": "Literal",
                            "start": 72,
                            "end": 73,
                            "value": 3,
                            "raw": "3"
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 176,
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
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 176,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 100,
                    "end": 172,
                    "expression": {
                      "type": "CallExpression",
                      "start": 100,
                      "end": 172,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 100,
                        "end": 114,
                        "object": {
                          "type": "MemberExpression",
                          "start": 100,
                          "end": 109,
                          "object": {
                            "type": "ThisExpression",
                            "start": 100,
                            "end": 104
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 109,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
                          "decorators": [],
                          "name": "find",
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
                          "start": 115,
                          "end": 171,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                                  "left": {
                                    "type": "Identifier",
                                    "start": 143,
                                    "end": 144,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 149,
                                    "end": 165,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 149,
                                      "end": 158,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 149,
                                        "end": 153
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 154,
                                        "end": 158,
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 159,
                                      "end": 165,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 286,
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
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 286,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 286,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 201,
                    "end": 282,
                    "expression": {
                      "type": "CallExpression",
                      "start": 201,
                      "end": 282,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 201,
                        "end": 218,
                        "object": {
                          "type": "MemberExpression",
                          "start": 201,
                          "end": 210,
                          "object": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 210,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 218,
                          "decorators": [],
                          "name": "forEach",
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
                          "start": 219,
                          "end": 281,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 232,
                            "end": 281,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 240,
                                "end": 275,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 240,
                                  "end": 275,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 240,
                                    "end": 251,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 240,
                                      "end": 247,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 248,
                                      "end": 251,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "start": 252,
                                      "end": 274,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 252,
                                        "end": 253,
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 258,
                                        "end": 274,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 258,
                                          "end": 267,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 258,
                                            "end": 262
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 263,
                                            "end": 267,
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 268,
                                          "end": 274,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 428,
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
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 428,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 302,
                "end": 428,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 424,
                    "expression": {
                      "type": "CallExpression",
                      "start": 308,
                      "end": 424,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 325,
                        "object": {
                          "type": "MemberExpression",
                          "start": 308,
                          "end": 317,
                          "object": {
                            "type": "ThisExpression",
                            "start": 308,
                            "end": 312
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 317,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 325,
                          "decorators": [],
                          "name": "forEach",
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
                          "start": 355,
                          "end": 417,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 368,
                            "end": 417,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 376,
                                "end": 411,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 376,
                                  "end": 411,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 376,
                                    "end": 387,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 376,
                                      "end": 383,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 384,
                                      "end": 387,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "start": 388,
                                      "end": 410,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 388,
                                        "end": 389,
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 394,
                                        "end": 410,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 394,
                                          "end": 403,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 394,
                                            "end": 398
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 399,
                                            "end": 403,
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 404,
                                          "end": 410,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        },
                        {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 558,
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
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 558,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 441,
                "end": 558,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 447,
                    "end": 554,
                    "expression": {
                      "type": "CallExpression",
                      "start": 447,
                      "end": 554,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 447,
                        "end": 461,
                        "object": {
                          "type": "MemberExpression",
                          "start": 447,
                          "end": 456,
                          "object": {
                            "type": "ThisExpression",
                            "start": 447,
                            "end": 451
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 461,
                          "decorators": [],
                          "name": "find",
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
                          "start": 491,
                          "end": 547,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                                  "left": {
                                    "type": "Identifier",
                                    "start": 519,
                                    "end": 520,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 525,
                                    "end": 541,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 525,
                                      "end": 534,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 525,
                                        "end": 529
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 530,
                                        "end": 534,
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 535,
                                      "end": 541,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false
                        },
                        {
                          "type": "ThisExpression",
                          "start": 549,
                          "end": 553
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
