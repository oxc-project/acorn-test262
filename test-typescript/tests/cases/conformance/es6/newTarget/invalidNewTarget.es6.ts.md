__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "MetaProperty",
            "start": 10,
            "end": 20,
            "meta": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "new",
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "target",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 32,
            "end": 48,
            "async": false,
            "body": {
              "type": "MetaProperty",
              "start": 38,
              "end": 48,
              "meta": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "decorators": [],
                "name": "new",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 42,
                "end": 48,
                "decorators": [],
                "name": "target",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 394,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 394,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 83,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MetaProperty",
              "start": 66,
              "end": 76,
              "meta": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "decorators": [],
                "name": "new",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 76,
                "decorators": [],
                "name": "target",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 83,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 114,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 114,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 94,
                    "end": 112,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 101,
                      "end": 111,
                      "meta": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 104,
                        "decorators": [],
                        "name": "new",
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 111,
                        "decorators": [],
                        "name": "target",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 149,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 147,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 136,
                      "end": 146,
                      "meta": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 139,
                        "decorators": [],
                        "name": "new",
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 146,
                        "decorators": [],
                        "name": "target",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 182,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 182,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 182,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 180,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 165,
                      "end": 179,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "_",
                        "optional": false
                      },
                      "right": {
                        "type": "MetaProperty",
                        "start": 169,
                        "end": 179,
                        "meta": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 172,
                          "decorators": [],
                          "name": "new",
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 179,
                          "decorators": [],
                          "name": "target",
                          "optional": false
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
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 208,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 191,
              "end": 207,
              "async": false,
              "body": {
                "type": "MetaProperty",
                "start": 197,
                "end": 207,
                "meta": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 200,
                  "decorators": [],
                  "name": "new",
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "decorators": [],
                  "name": "target",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 239,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MetaProperty",
              "start": 222,
              "end": 232,
              "meta": {
                "type": "Identifier",
                "start": 222,
                "end": 225,
                "decorators": [],
                "name": "new",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 232,
                "decorators": [],
                "name": "target",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 239,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 239,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 277,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 252,
              "end": 277,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 277,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 257,
                    "end": 275,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 264,
                      "end": 274,
                      "meta": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 267,
                        "decorators": [],
                        "name": "new",
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 274,
                        "decorators": [],
                        "name": "target",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 282,
            "end": 319,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 294,
              "end": 319,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 319,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 317,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 306,
                      "end": 316,
                      "meta": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 309,
                        "decorators": [],
                        "name": "new",
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 316,
                        "decorators": [],
                        "name": "target",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 359,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 359,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 357,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 342,
                      "end": 356,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
                        "decorators": [],
                        "name": "_",
                        "optional": false
                      },
                      "right": {
                        "type": "MetaProperty",
                        "start": 346,
                        "end": 356,
                        "meta": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 349,
                          "decorators": [],
                          "name": "new",
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 356,
                          "decorators": [],
                          "name": "target",
                          "optional": false
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
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 364,
            "end": 392,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 375,
              "end": 391,
              "async": false,
              "body": {
                "type": "MetaProperty",
                "start": 381,
                "end": 391,
                "meta": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 384,
                  "decorators": [],
                  "name": "new",
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 391,
                  "decorators": [],
                  "name": "target",
                  "optional": false
                }
              },
              "expression": true,
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 559,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "decorators": [],
            "name": "O",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 406,
            "end": 559,
            "properties": [
              {
                "type": "Property",
                "start": 412,
                "end": 435,
                "computed": true,
                "key": {
                  "type": "MetaProperty",
                  "start": 413,
                  "end": 423,
                  "meta": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 416,
                    "decorators": [],
                    "name": "new",
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 423,
                    "decorators": [],
                    "name": "target",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 435,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 441,
                "end": 467,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 442,
                  "end": 467,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 445,
                    "end": 467,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 447,
                        "end": 465,
                        "argument": {
                          "type": "MetaProperty",
                          "start": 454,
                          "end": 464,
                          "meta": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 457,
                            "decorators": [],
                            "name": "new",
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 464,
                            "decorators": [],
                            "name": "target",
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
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 473,
                "end": 503,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "decorators": [],
                  "name": "l",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 478,
                  "end": 503,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 481,
                    "end": 503,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 483,
                        "end": 501,
                        "argument": {
                          "type": "MetaProperty",
                          "start": 490,
                          "end": 500,
                          "meta": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 493,
                            "decorators": [],
                            "name": "new",
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 500,
                            "decorators": [],
                            "name": "target",
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
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 509,
                "end": 537,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 514,
                  "end": 537,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 518,
                    "end": 537,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 520,
                        "end": 535,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 520,
                          "end": 534,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 520,
                            "end": 521,
                            "decorators": [],
                            "name": "_",
                            "optional": false
                          },
                          "right": {
                            "type": "MetaProperty",
                            "start": 524,
                            "end": 534,
                            "meta": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 527,
                              "decorators": [],
                              "name": "new",
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 528,
                              "end": 534,
                              "decorators": [],
                              "name": "target",
                              "optional": false
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
                      "start": 515,
                      "end": 516,
                      "decorators": [],
                      "name": "_",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 543,
                "end": 556,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 544,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MetaProperty",
                  "start": 546,
                  "end": 556,
                  "meta": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 549,
                    "decorators": [],
                    "name": "new",
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 556,
                    "decorators": [],
                    "name": "target",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
