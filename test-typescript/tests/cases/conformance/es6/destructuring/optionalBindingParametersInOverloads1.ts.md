__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    2,
    133
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          11,
          14
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            },
            "range": [
              26,
              53
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    29,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    37,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    45,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 43,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                28,
                53
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            }
          },
          "range": [
            15,
            53
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        }
      ],
      "range": [
        2,
        55
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          85,
          89
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 29,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          65,
          68
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "range": [
              72,
              76
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            },
            "range": [
              76,
              83
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  78,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              },
              "range": [
                78,
                83
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            }
          },
          "range": [
            69,
            83
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        56,
        89
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  96,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  100,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  103,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              95,
              109
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            91,
            94
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          91,
          110
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        91,
        111
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  118,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  128,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              117,
              131
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            113,
            116
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          113,
          132
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        113,
        133
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 20,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
