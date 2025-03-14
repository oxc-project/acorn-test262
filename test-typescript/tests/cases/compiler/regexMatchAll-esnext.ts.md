__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    115
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
            "name": "matches",
            "optional": false,
            "range": [
              6,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"matchAll\"",
                "value": "matchAll",
                "range": [
                  39,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Literal",
                "raw": "/\\w/g",
                "regex": {
                  "flags": "g",
                  "pattern": "\\w"
                },
                "value": null,
                "range": [
                  16,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "range": [
                    22,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matchAll",
                  "optional": false,
                  "range": [
                    29,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                },
                "range": [
                  22,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              },
              "range": [
                16,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              16,
              50
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            6,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "range": [
              58,
              63
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matches",
                  "optional": false,
                  "range": [
                    70,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  67,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              66,
              78
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            58,
            78
          ],
          "loc": {
            "end": {
              "column": 26,
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
        52,
        79
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "index",
                  "optional": false,
                  "range": [
                    88,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
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
                  "name": "index",
                  "optional": false,
                  "range": [
                    88,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  88,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "range": [
                    95,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
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
                  "name": "input",
                  "optional": false,
                  "range": [
                    95,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "range": [
                  95,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              86,
              102
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "range": [
                105,
                110
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "range": [
              105,
              113
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          "range": [
            86,
            113
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        80,
        114
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
