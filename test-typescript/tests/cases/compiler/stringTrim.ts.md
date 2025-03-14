__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    142
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
            "name": "trimmed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              },
              "range": [
                11,
                19
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  13,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 13,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
      "kind": "var",
      "range": [
        0,
        20
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "range": [
            21,
            28
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "\"abcde\"",
              "value": "abcde",
              "range": [
                31,
                38
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimEnd",
              "optional": false,
              "range": [
                39,
                46
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
              31,
              46
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "optional": false,
          "range": [
            31,
            48
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "range": [
          21,
          48
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
      "range": [
        21,
        49
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "range": [
            50,
            57
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "\"abcde\"",
              "value": "abcde",
              "range": [
                60,
                67
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimStart",
              "optional": false,
              "range": [
                68,
                77
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              60,
              77
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "optional": false,
          "range": [
            60,
            79
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 10,
              "line": 3
            }
          }
        },
        "range": [
          50,
          79
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        50,
        80
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "range": [
            81,
            88
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "\"abcde\"",
              "value": "abcde",
              "range": [
                91,
                98
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimLeft",
              "optional": false,
              "range": [
                99,
                107
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "range": [
              91,
              107
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            91,
            109
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 4
            },
            "start": {
              "column": 10,
              "line": 4
            }
          }
        },
        "range": [
          81,
          109
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        81,
        110
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "range": [
            111,
            118
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "\"abcde\"",
              "value": "abcde",
              "range": [
                121,
                128
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "trimRight",
              "optional": false,
              "range": [
                129,
                138
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "range": [
              121,
              138
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "optional": false,
          "range": [
            121,
            140
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        },
        "range": [
          111,
          140
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        111,
        141
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
