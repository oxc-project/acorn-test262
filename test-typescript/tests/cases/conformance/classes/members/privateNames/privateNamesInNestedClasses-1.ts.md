__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 547,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 527,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 527,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 13,
              "end": 17,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 30,
              "raw": "\"A's #foo\"",
              "value": "A's #foo"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 53,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 35,
              "end": 39,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 42,
              "end": 52,
              "raw": "\"A's #bar\"",
              "value": "A's #bar"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 525,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 525,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 525,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 76,
                    "end": 398,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 84,
                      "end": 398,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 97,
                          "end": 115,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 97,
                            "end": 101,
                            "name": "foo"
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "value": {
                            "type": "Literal",
                            "start": 104,
                            "end": 114,
                            "raw": "\"B's #foo\"",
                            "value": "B's #foo"
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 127,
                          "end": 230,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 130,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 131,
                            "end": 230,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 140,
                              "end": 230,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 157,
                                  "end": 164,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 157,
                                    "end": 163,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 157,
                                      "end": 158,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 159,
                                      "end": 163,
                                      "name": "foo"
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
                                "start": 132,
                                "end": 138,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 133,
                                  "end": 138,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 135,
                                    "end": 138
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 242,
                          "end": 322,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 245,
                            "decorators": [],
                            "name": "baz",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 246,
                            "end": 322,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 253,
                              "end": 322,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 270,
                                  "end": 277,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 270,
                                    "end": 276,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 270,
                                      "end": 271,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 272,
                                      "end": 276,
                                      "name": "foo"
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
                                "start": 247,
                                "end": 251,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 248,
                                  "end": 251,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 250,
                                    "end": 251,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 251,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 334,
                          "end": 389,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 338,
                            "decorators": [],
                            "name": "quux",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 339,
                            "end": 389,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 346,
                              "end": 389,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 363,
                                  "end": 370,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 363,
                                    "end": 369,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 363,
                                      "end": 364,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 365,
                                      "end": 369,
                                      "name": "foo"
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
                                "start": 340,
                                "end": 344,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 341,
                                  "end": 344,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 343,
                                    "end": 344,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 343,
                                      "end": 344,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 406,
                    "end": 424,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 412,
                        "end": 423,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 413,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 416,
                          "end": 423,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 421,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 432,
                    "end": 447,
                    "expression": {
                      "type": "CallExpression",
                      "start": 432,
                      "end": 446,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 444,
                          "end": 445,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 432,
                        "end": 443,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 432,
                          "end": 439,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 443,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 455,
                    "end": 470,
                    "expression": {
                      "type": "CallExpression",
                      "start": 455,
                      "end": 469,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 467,
                          "end": 468,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 455,
                        "end": 466,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 455,
                          "end": 462,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 459,
                            "end": 460,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 466,
                          "decorators": [],
                          "name": "baz",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 478,
                    "end": 496,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 484,
                        "end": 495,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 485,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 488,
                          "end": 495,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 493,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 504,
                    "end": 520,
                    "expression": {
                      "type": "CallExpression",
                      "start": 504,
                      "end": 519,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 517,
                          "end": 518,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 504,
                        "end": 516,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 504,
                          "end": 511,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 509,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 516,
                          "decorators": [],
                          "name": "quux",
                          "optional": false
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
      "type": "ExpressionStatement",
      "start": 529,
      "end": 546,
      "expression": {
        "type": "CallExpression",
        "start": 529,
        "end": 545,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 529,
          "end": 543,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 529,
            "end": 536,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 537,
            "end": 543,
            "decorators": [],
            "name": "method",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
