__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 557,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 436,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 436,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 39,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 25,
              "name": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 39,
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
                  "end": 35,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 75,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 57,
              "end": 61,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 75,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 75,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 71,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 65,
                      "end": 71
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 135,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 94,
              "end": 98,
              "name": "baz"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 135,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 135,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 120,
                    "end": 129,
                    "argument": {
                      "type": "Literal",
                      "start": 127,
                      "end": 128,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 108,
                  "decorators": [],
                  "name": "a",
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
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 162,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 147,
              "end": 153,
              "name": "_quux"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 230,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 178,
              "end": 183,
              "name": "quux"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 184,
              "end": 230,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 230,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 205,
                    "end": 224,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 212,
                      "end": 223,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 212,
                        "end": 216
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 217,
                        "end": 223,
                        "name": "_quux"
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 186,
                "end": 194,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 188,
                  "end": 194
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 300,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 246,
              "end": 251,
              "name": "quux"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 252,
              "end": 300,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 300,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 276,
                    "end": 294,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 276,
                      "end": 293,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 276,
                        "end": 287,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 276,
                          "end": 280
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 281,
                          "end": 287,
                          "name": "_quux"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 293,
                        "decorators": [],
                        "name": "val",
                        "optional": false
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
                  "start": 253,
                  "end": 264,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 258,
                      "end": 264
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 305,
            "end": 434,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 316,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 317,
              "end": 434,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 434,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 330,
                    "end": 341,
                    "expression": {
                      "type": "CallExpression",
                      "start": 330,
                      "end": 340,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 337,
                          "end": 339,
                          "raw": "30",
                          "value": 30
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 330,
                        "end": 336,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 331,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 332,
                          "end": 336,
                          "name": "foo"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 350,
                    "end": 361,
                    "expression": {
                      "type": "CallExpression",
                      "start": 350,
                      "end": 360,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 357,
                          "end": 359,
                          "raw": "30",
                          "value": 30
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 350,
                        "end": 356,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 351,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 352,
                          "end": 356,
                          "name": "bar"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 370,
                    "end": 381,
                    "expression": {
                      "type": "CallExpression",
                      "start": 370,
                      "end": 380,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 377,
                          "end": 379,
                          "raw": "30",
                          "value": 30
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 370,
                        "end": 376,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 371,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 372,
                          "end": 376,
                          "name": "bar"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 390,
                    "end": 412,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 390,
                      "end": 411,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 390,
                        "end": 397,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 391,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 392,
                          "end": 397,
                          "name": "quux"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 400,
                        "end": 411,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 400,
                          "end": 407,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 400,
                            "end": 401,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 402,
                            "end": 407,
                            "name": "quux"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 410,
                          "end": 411,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 431,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 421,
                      "end": 430,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 421,
                        "end": 428,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 422,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 423,
                          "end": 428,
                          "name": "quux"
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
              "params": []
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 438,
      "end": 556,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 456,
        "end": 556,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 462,
            "end": 487,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 469,
              "end": 473,
              "name": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 487,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 485,
                "end": 487,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 474,
                  "end": 483,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 492,
            "end": 554,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 492,
              "end": 503,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 504,
              "end": 554,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 507,
                "end": 554,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 517,
                    "end": 525,
                    "expression": {
                      "type": "CallExpression",
                      "start": 517,
                      "end": 524,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 517,
                        "end": 522
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 534,
                    "end": 548,
                    "expression": {
                      "type": "CallExpression",
                      "start": 534,
                      "end": 547,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 541,
                          "end": 546,
                          "raw": "\"str\"",
                          "value": "str"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 534,
                        "end": 540,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 535,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 536,
                          "end": 540,
                          "name": "foo"
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 445,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 454,
        "end": 455,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
