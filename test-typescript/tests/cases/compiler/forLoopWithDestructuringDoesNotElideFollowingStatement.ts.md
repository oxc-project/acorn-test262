__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    71
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "range": [
              4,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        14,
                        15
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 1
                        },
                        "start": {
                          "column": 14,
                          "line": 1
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        17,
                        18
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 1
                        },
                        "start": {
                          "column": 17,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      14,
                      18
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 1
                      },
                      "start": {
                        "column": 14,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        20,
                        21
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 1
                        },
                        "start": {
                          "column": 20,
                          "line": 1
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        23,
                        24
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 1
                        },
                        "start": {
                          "column": 23,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      20,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  13,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 13,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              12,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            4,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              70,
              71
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "operator": "void",
          "prefix": true,
          "range": [
            65,
            71
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "range": [
          65,
          71
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 4,
            "line": 3
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
              "type": "ObjectPattern",
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      38,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      38,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    38,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "range": [
                      44,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    41,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                36,
                50
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
            "init": null,
            "range": [
              36,
              50
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
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          32,
          50
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "range": [
          54,
          59
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 27,
            "line": 2
          }
        }
      },
      "range": [
        27,
        71
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 10,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
