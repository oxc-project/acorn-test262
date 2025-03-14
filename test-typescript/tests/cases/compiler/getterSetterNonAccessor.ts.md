__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    209
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            },
            "range": [
              23,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ],
        "range": [
          22,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
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
        "name": "getFunc",
        "optional": false,
        "range": [
          9,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          22
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            19,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
          53,
          55
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setFunc",
        "optional": false,
        "range": [
          43,
          50
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "range": [
            51,
            52
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
        }
      ],
      "range": [
        34,
        55
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              89,
              91
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"0\"",
            "value": "0",
            "range": [
              93,
              96
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "range": [
                      131,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFunc",
                    "optional": false,
                    "range": [
                      136,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    131,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "range": [
                      155,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setFunc",
                    "optional": false,
                    "range": [
                      160,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    155,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "configurable",
                    "optional": false,
                    "range": [
                      179,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      193,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    179,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                119,
                205
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 52,
                  "line": 4
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "range": [
                  99,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              },
              "range": [
                99,
                117
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 4
                }
              }
            },
            "range": [
              98,
              206
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "range": [
              67,
              73
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "range": [
              74,
              88
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 7,
                "line": 4
              }
            }
          },
          "range": [
            67,
            88
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          67,
          207
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        67,
        208
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
