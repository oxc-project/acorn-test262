__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    261
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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              },
              "range": [
                18,
                35
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      20,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      29,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 29,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  20,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
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
            35
          ],
          "loc": {
            "end": {
              "column": 35,
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
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrNumber",
                    "optional": false,
                    "range": [
                      134,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    134,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                124,
                155
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 44,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringOrNumber",
                  "optional": false,
                  "range": [
                    95,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  88,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"number\"",
                "value": "number",
                "range": [
                  114,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              },
              "range": [
                88,
                122
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              84,
              155
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          78,
          157
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 40,
            "line": 3
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "range": [
              49,
              63
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            42,
            63
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"number\"",
          "value": "number",
          "range": [
            68,
            76
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        },
        "range": [
          42,
          76
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 3
          },
          "start": {
            "column": 4,
            "line": 3
          }
        }
      },
      "range": [
        38,
        157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
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
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "range": [
                243,
                257
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              243,
              258
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          237,
          260
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 78,
            "line": 9
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "range": [
                170,
                184
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              163,
              184
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"number\"",
            "value": "number",
            "range": [
              189,
              197
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 9
              },
              "start": {
                "column": 30,
                "line": 9
              }
            }
          },
          "range": [
            163,
            197
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "!==",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "range": [
                208,
                222
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 9
                },
                "start": {
                  "column": 49,
                  "line": 9
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              201,
              222
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 9
              },
              "start": {
                "column": 42,
                "line": 9
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"number\"",
            "value": "number",
            "range": [
              227,
              235
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 9
              },
              "start": {
                "column": 68,
                "line": 9
              }
            }
          },
          "range": [
            201,
            235
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 9
            },
            "start": {
              "column": 42,
              "line": 9
            }
          }
        },
        "range": [
          163,
          235
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        159,
        260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
