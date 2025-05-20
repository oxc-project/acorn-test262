__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 912,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 912,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 912,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 26,
              "name": "test"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            },
            "value": {
              "type": "Literal",
              "start": 37,
              "end": 39,
              "raw": "24",
              "value": 24
            }
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 366,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
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
              "start": 56,
              "end": 366,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 366,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 79,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 69,
                      "end": 78,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 69,
                        "end": 76,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 70,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 71,
                          "end": 76,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 88,
                    "end": 98,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 88,
                      "end": 97,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 95,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 90,
                          "end": 95,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 107,
                    "end": 117,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 107,
                      "end": 116,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 116,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 110,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 111,
                          "end": 116,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 136,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 126,
                      "end": 135,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 135,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 130,
                          "end": 135,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 165,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 151,
                        "end": 164,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 155,
                          "end": 164,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 155,
                            "end": 162,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 156,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 157,
                              "end": 162,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 174,
                    "end": 194,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 180,
                        "end": 193,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 184,
                          "end": 193,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 184,
                            "end": 191,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 186,
                              "end": 191,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 203,
                    "end": 223,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 209,
                        "end": 222,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 210,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 213,
                          "end": 222,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 215,
                            "end": 222,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 216,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 217,
                              "end": 222,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 232,
                    "end": 252,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 238,
                        "end": 251,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 239,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 242,
                          "end": 251,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 244,
                            "end": 251,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 245,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 246,
                              "end": 251,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ForStatement",
                    "start": 261,
                    "end": 306,
                    "body": {
                      "type": "BlockStatement",
                      "start": 304,
                      "end": 306,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 266,
                      "end": 277,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 266,
                        "end": 273,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 268,
                          "end": 273,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 276,
                        "end": 277,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 279,
                      "end": 291,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 279,
                        "end": 286,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 281,
                          "end": 286,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 289,
                        "end": 291,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 293,
                      "end": 302,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 295,
                        "end": 302,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 295,
                          "end": 296,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 297,
                          "end": 302,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 315,
                    "end": 360,
                    "body": {
                      "type": "BlockStatement",
                      "start": 358,
                      "end": 360,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 320,
                      "end": 331,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 327,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 321,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 322,
                          "end": 327,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 330,
                        "end": 331,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 333,
                      "end": 345,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 333,
                        "end": 340,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 334,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 335,
                          "end": 340,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 343,
                        "end": 345,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 347,
                      "end": 356,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 347,
                        "end": 354,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 348,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 349,
                          "end": 354,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
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
            "start": 371,
            "end": 881,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 375,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 375,
              "end": 881,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 378,
                "end": 881,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 388,
                    "end": 412,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 388,
                      "end": 411,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 388,
                        "end": 409,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 388,
                          "end": 403,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 388,
                            "end": 401,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 388,
                              "end": 392
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 393,
                              "end": 401,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 404,
                          "end": 409,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 445,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 421,
                      "end": 444,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 421,
                        "end": 442,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 421,
                          "end": 436,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 421,
                            "end": 434,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 421,
                              "end": 425
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 434,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 437,
                          "end": 442,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 454,
                    "end": 478,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 454,
                      "end": 477,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 477,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 456,
                          "end": 471,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 456,
                            "end": 469,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 456,
                              "end": 460
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 461,
                              "end": 469,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 472,
                          "end": 477,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 487,
                    "end": 511,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 487,
                      "end": 510,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 489,
                        "end": 510,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 489,
                          "end": 504,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 489,
                            "end": 502,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 489,
                              "end": 493
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 494,
                              "end": 502,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 505,
                          "end": 510,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 520,
                    "end": 554,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 526,
                        "end": 553,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 527,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 530,
                          "end": 553,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 530,
                            "end": 551,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 530,
                              "end": 545,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 530,
                                "end": 543,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 530,
                                  "end": 534
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 535,
                                  "end": 543,
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 546,
                              "end": 551,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 563,
                    "end": 597,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 569,
                        "end": 596,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 569,
                          "end": 570,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 573,
                          "end": 596,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 573,
                            "end": 594,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 573,
                              "end": 588,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 573,
                                "end": 586,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 573,
                                  "end": 577
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 578,
                                  "end": 586,
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 589,
                              "end": 594,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 606,
                    "end": 640,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 612,
                        "end": 639,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 612,
                          "end": 613,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 616,
                          "end": 639,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 618,
                            "end": 639,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 618,
                              "end": 633,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 618,
                                "end": 631,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 618,
                                  "end": 622
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 623,
                                  "end": 631,
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 634,
                              "end": 639,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 649,
                    "end": 683,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 655,
                        "end": 682,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 655,
                          "end": 656,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 659,
                          "end": 682,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 661,
                            "end": 682,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 661,
                              "end": 676,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 661,
                                "end": 674,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 661,
                                  "end": 665
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 666,
                                  "end": 674,
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 677,
                              "end": 682,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ForStatement",
                    "start": 692,
                    "end": 779,
                    "body": {
                      "type": "BlockStatement",
                      "start": 777,
                      "end": 779,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 697,
                      "end": 722,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 697,
                        "end": 718,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 697,
                          "end": 712,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 697,
                            "end": 710,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 697,
                              "end": 701
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 702,
                              "end": 710,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 713,
                          "end": 718,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 721,
                        "end": 722,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 724,
                      "end": 750,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 724,
                        "end": 745,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 724,
                          "end": 739,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 724,
                            "end": 737,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 724,
                              "end": 728
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 729,
                              "end": 737,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 740,
                          "end": 745,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 748,
                        "end": 750,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 752,
                      "end": 775,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 754,
                        "end": 775,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 754,
                          "end": 769,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 754,
                            "end": 767,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 754,
                              "end": 758
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 759,
                              "end": 767,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 770,
                          "end": 775,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 788,
                    "end": 875,
                    "body": {
                      "type": "BlockStatement",
                      "start": 873,
                      "end": 875,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 793,
                      "end": 818,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 793,
                        "end": 814,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 793,
                          "end": 808,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 793,
                            "end": 806,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 793,
                              "end": 797
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 798,
                              "end": 806,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 809,
                          "end": 814,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 817,
                        "end": 818,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 820,
                      "end": 846,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 820,
                        "end": 841,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 820,
                          "end": 835,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 820,
                            "end": 833,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 820,
                              "end": 824
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 825,
                              "end": 833,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 836,
                          "end": 841,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 844,
                        "end": 846,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 848,
                      "end": 871,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 848,
                        "end": 869,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 848,
                          "end": 863,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 848,
                            "end": 861,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 848,
                              "end": 852
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 853,
                              "end": 861,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 864,
                          "end": 869,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
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
            "start": 886,
            "end": 910,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 886,
              "end": 894,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 894,
              "end": 910,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 897,
                "end": 910,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 899,
                    "end": 908,
                    "argument": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 907,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
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
        "end": 7,
        "decorators": [],
        "name": "C",
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
