__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    320,
    550
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\"",
            "value": " var x = 1 ",
            "range": [
              325,
              353
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 5,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "range": [
            320,
            324
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          320,
          354
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        320,
        355
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '",
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: ",
                    "range": [
                      380,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      446,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 14
                      },
                      "start": {
                        "column": 75,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    380,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 14
                    },
                    "start": {
                      "column": 9,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "range": [
                  373,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                373,
                449
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "range": [
              373,
              450
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "range": [
          369,
          452
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 13,
            "line": 13
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            360,
            361
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            366,
            367
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 13
            },
            "start": {
              "column": 10,
              "line": 13
            }
          }
        },
        "range": [
          360,
          367
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        356,
        452
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              469,
              470
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 5,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              473,
              474
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            469,
            474
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 18
            },
            "start": {
              "column": 5,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        465,
        476
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 18
        },
        "start": {
          "column": 1,
          "line": 18
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '",
                    "value": "#2:  var x = 1 ; x === 1. Actual: ",
                    "range": [
                      501,
                      537
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      541,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 20
                      },
                      "start": {
                        "column": 49,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    501,
                    543
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 20
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "range": [
                  494,
                  500
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 20
                  },
                  "start": {
                    "column": 2,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                494,
                544
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
                }
              }
            },
            "range": [
              494,
              545
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ],
        "range": [
          490,
          547
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 19
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            481,
            482
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            487,
            488
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 10,
              "line": 19
            }
          }
        },
        "range": [
          481,
          488
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        477,
        547
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 12
    }
  },
  "hashbang": null
}
```
