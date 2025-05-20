__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 765,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 749,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 749,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 25,
              "name": "value"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 57,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 53,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 29,
                      "end": 53,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 31,
                          "end": 51,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 31,
                            "end": 34,
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
                            "start": 34,
                            "end": 51,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 36,
                              "end": 51,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 38,
                                  "end": 49,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 38,
                                    "end": 41,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 41,
                                    "end": 49,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 43,
                                      "end": 49
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
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 64,
              "end": 74,
              "name": "valueRest"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 90,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 86,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 78,
                      "end": 86,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 78,
                        "end": 84
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 97,
              "end": 106,
              "name": "valueOne"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 120,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 120,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 127,
              "end": 141,
              "name": "valueCompound"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 155,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 151,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 747,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 747,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 747,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 169,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 175,
                        "end": 191,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 178,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 181,
                          "end": 191,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 183,
                              "end": 189,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 186,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 188,
                                "end": 189,
                                "raw": "1",
                                "value": 1
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
                    "start": 197,
                    "end": 222,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 197,
                      "end": 221,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 209,
                          "end": 220,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 209,
                            "end": 213
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 214,
                            "end": 220,
                            "name": "value"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 208,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 204,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 208,
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
                    "start": 236,
                    "end": 258,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 236,
                      "end": 257,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 236,
                        "end": 247,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 236,
                          "end": 240
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 241,
                          "end": 247,
                          "name": "value"
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 250,
                        "end": 257,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 252,
                            "end": 255,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 255,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 255,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 269,
                    "end": 291,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 269,
                      "end": 290,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 269,
                        "end": 280,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 274,
                          "end": 280,
                          "name": "value"
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 283,
                        "end": 290,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 285,
                            "end": 288,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 288,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 288,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 302,
                    "end": 324,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 302,
                      "end": 323,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 317,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 302,
                          "end": 313,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 302,
                            "end": 306
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 307,
                            "end": 313,
                            "name": "value"
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 317,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 323,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 339,
                    "end": 377,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 340,
                      "end": 375,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 340,
                        "end": 358,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 342,
                            "end": 356,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 345,
                              "end": 356,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 345,
                                "end": 349
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 350,
                                "end": 356,
                                "name": "value"
                              }
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 361,
                        "end": 375,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 363,
                            "end": 373,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 364,
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 366,
                              "end": 373,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 368,
                                  "end": 371,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 368,
                                    "end": 371,
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 368,
                                    "end": 371,
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 387,
                    "end": 418,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 388,
                      "end": 416,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 388,
                        "end": 406,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "RestElement",
                            "start": 390,
                            "end": 404,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 393,
                              "end": 404,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 393,
                                "end": 397
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 398,
                                "end": 404,
                                "name": "value"
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 409,
                        "end": 416,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 411,
                            "end": 414,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 414,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 414,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 429,
                    "end": 466,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 430,
                      "end": 464,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 430,
                        "end": 454,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 432,
                            "end": 452,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 435,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 437,
                              "end": 452,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 437,
                                "end": 448,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 437,
                                  "end": 441
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 442,
                                  "end": 448,
                                  "name": "value"
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 449,
                                "end": 452,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 457,
                        "end": 464,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 459,
                            "end": 462,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 462,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 462,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 479,
                    "end": 534,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 480,
                      "end": 532,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 480,
                        "end": 522,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 488,
                            "end": 515,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 491,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectPattern",
                              "start": 493,
                              "end": 515,
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "RestElement",
                                  "start": 495,
                                  "end": 513,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 498,
                                    "end": 513,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 498,
                                      "end": 509,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 498,
                                        "end": 502
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 503,
                                        "end": 509,
                                        "name": "value"
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 510,
                                      "end": 513,
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null
                                }
                              ],
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 525,
                        "end": 532,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 527,
                            "end": 530,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 530,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 530,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 548,
                    "end": 575,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 552,
                        "end": 574,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 553,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 556,
                          "end": 574,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 558,
                              "end": 572,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 558,
                                "end": 559,
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "start": 561,
                                "end": 572,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 561,
                                  "end": 565
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 566,
                                  "end": 572,
                                  "name": "value"
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 589,
                    "end": 638,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 589,
                      "end": 637,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 589,
                        "end": 625,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 590,
                            "end": 604,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 590,
                              "end": 594
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 595,
                              "end": 604,
                              "name": "valueOne"
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 606,
                            "end": 624,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 609,
                              "end": 624,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 609,
                                "end": 613
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 614,
                                "end": 624,
                                "name": "valueRest"
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 628,
                        "end": 637,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 629,
                            "end": 630,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 632,
                            "end": 633,
                            "raw": "2",
                            "value": 2
                          },
                          {
                            "type": "Literal",
                            "start": 635,
                            "end": 636,
                            "raw": "3",
                            "value": 3
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 643,
                    "end": 712,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 647,
                        "end": 711,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 650,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 653,
                          "end": 711,
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "start": 663,
                              "end": 677,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 663,
                                "end": 667
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 668,
                                "end": 677,
                                "name": "valueOne"
                              }
                            },
                            {
                              "type": "SpreadElement",
                              "start": 687,
                              "end": 705,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 690,
                                "end": 705,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 690,
                                  "end": 694
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 695,
                                  "end": 705,
                                  "name": "valueRest"
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 718,
                    "end": 743,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 718,
                      "end": 742,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 718,
                        "end": 737,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 723,
                          "end": 737,
                          "name": "valueCompound"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 741,
                        "end": 742,
                        "raw": "3",
                        "value": 3
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
    },
    {
      "type": "ExpressionStatement",
      "start": 750,
      "end": 765,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 750,
        "end": 764,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 750,
          "end": 762,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 750,
            "end": 760,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 761,
            "end": 762,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
