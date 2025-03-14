__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    150
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
            "await": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                141,
                148
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 117,
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
                      51,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    51,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "await using",
              "range": [
                39,
                53
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 15,
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
                            67,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 2
                            },
                            "start": {
                              "column": 43,
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
                            74,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 2
                            },
                            "start": {
                              "column": 50,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          67,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 2
                          },
                          "start": {
                            "column": 43,
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
                          87,
                          92
                        ],
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            90,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 2
                            },
                            "start": {
                              "column": 66,
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
                            "column": 68,
                            "line": 2
                          },
                          "start": {
                            "column": 63,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        60,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 2
                        },
                        "start": {
                          "column": 36,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    58,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 2
                    },
                    "start": {
                      "column": 34,
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
                            99,
                            105
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 2
                            },
                            "start": {
                              "column": 75,
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
                            106,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 2
                            },
                            "start": {
                              "column": 82,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          99,
                          113
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 2
                          },
                          "start": {
                            "column": 75,
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
                          114,
                          119
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            117,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 2
                            },
                            "start": {
                              "column": 93,
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
                            "column": 95,
                            "line": 2
                          },
                          "start": {
                            "column": 90,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        98,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 2
                        },
                        "start": {
                          "column": 74,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    96,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 2
                    },
                    "start": {
                      "column": 72,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    123,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 2
                    },
                    "start": {
                      "column": 99,
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
                    129,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 2
                    },
                    "start": {
                      "column": 105,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                57,
                139
              ],
              "loc": {
                "end": {
                  "column": 115,
                  "line": 2
                },
                "start": {
                  "column": 33,
                  "line": 2
                }
              }
            },
            "range": [
              28,
              148
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
          150
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
        150
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
      "column": 1,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
