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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  47,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 1
                  },
                  "start": {
                    "column": 47,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "range": [
                42,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            },
            "range": [
              38,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            }
          },
          {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "range": [
                55,
                59
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 1
                },
                "start": {
                  "column": 55,
                  "line": 1
                }
              }
            },
            "range": [
              51,
              61
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 1
              },
              "start": {
                "column": 51,
                "line": 1
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "range": [
                  4,
                  8
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 1
                  },
                  "start": {
                    "column": 4,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "DateTimeFormat",
                "optional": false,
                "range": [
                  9,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              },
              "range": [
                4,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 4,
                  "line": 1
                }
              }
            },
            "range": [
              0,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 0,
                "line": 1
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "range": [
              26,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "range": [
            0,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 0,
              "line": 1
            }
          }
        },
        "optional": false,
        "range": [
          0,
          62
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        63
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "part",
                "optional": false,
                "range": [
                  72,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              70,
              78
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1000",
                "value": 1000,
                "range": [
                  126,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 2
                  },
                  "start": {
                    "column": 62,
                    "line": 2
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1000000000",
                "value": 1000000000,
                "range": [
                  132,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 2
                  },
                  "start": {
                    "column": 68,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "range": [
                      85,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "range": [
                      90,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    85,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "range": [
                  81,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatRangeToParts",
                "optional": false,
                "range": [
                  107,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 43,
                    "line": 2
                  }
                }
              },
              "range": [
                81,
                125
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              81,
              143
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          "range": [
            70,
            143
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        64,
        144
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 2
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
      "column": 0,
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
