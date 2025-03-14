__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    145
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                135,
                142
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 111,
                  "line": 2
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d1",
                    "optional": false,
                    "range": [
                      45,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    45,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "await using",
              "range": [
                33,
                47
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "range": [
                            61,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 2
                            },
                            "start": {
                              "column": 37,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "range": [
                            68,
                            80
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 2
                            },
                            "start": {
                              "column": 44,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          61,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 2
                          },
                          "start": {
                            "column": 37,
                            "line": 2
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          81,
                          86
                        ],
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            84,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 2
                            },
                            "start": {
                              "column": 60,
                              "line": 2
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 2
                          },
                          "start": {
                            "column": 57,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        54,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    52,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 2
                    },
                    "start": {
                      "column": 28,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "range": [
                            93,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 2
                            },
                            "start": {
                              "column": 69,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dispose",
                          "optional": false,
                          "range": [
                            100,
                            107
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 2
                            },
                            "start": {
                              "column": 76,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          93,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 2
                          },
                          "start": {
                            "column": 69,
                            "line": 2
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          108,
                          113
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            111,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 2
                            },
                            "start": {
                              "column": 87,
                              "line": 2
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 2
                          },
                          "start": {
                            "column": 84,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        92,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 2
                        },
                        "start": {
                          "column": 68,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    90,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 2
                    },
                    "start": {
                      "column": 66,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    117,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 2
                    },
                    "start": {
                      "column": 93,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    123,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 108,
                      "line": 2
                    },
                    "start": {
                      "column": 99,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                51,
                133
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "range": [
              28,
              142
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          144
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main",
        "optional": false,
        "range": [
          15,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        144
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
