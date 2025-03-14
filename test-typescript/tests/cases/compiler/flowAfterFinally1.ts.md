__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    226
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "openFile",
        "optional": false,
        "range": [
          17,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 27,
            "line": 1
          }
        },
        "range": [
          27,
          33
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            29,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 29,
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "closeFile",
        "optional": false,
        "range": [
          51,
          60
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        },
        "range": [
          62,
          68
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            64,
            68
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 30,
              "line": 2
            }
          }
        }
      },
      "range": [
        34,
        68
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someOperation",
        "optional": false,
        "range": [
          86,
          99
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 32,
            "line": 3
          }
        },
        "range": [
          101,
          105
        ],
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            103,
            105
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        }
      },
      "range": [
        69,
        105
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                117,
                121
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  119,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              111,
              121
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            111,
            121
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        107,
        121
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "openFile",
          "optional": false,
          "range": [
            122,
            130
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          122,
          132
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        122,
        132
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "range": [
                  141,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOperation",
                  "optional": false,
                  "range": [
                    150,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  150,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                141,
                165
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              141,
              165
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "range": [
          137,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "closeFile",
                "optional": false,
                "range": [
                  180,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 10
                  },
                  "start": {
                    "column": 2,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                180,
                191
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "range": [
              180,
              191
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          176,
          193
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "handler": null,
      "range": [
        133,
        193
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
        "type": "Identifier",
        "decorators": [],
        "name": "result",
        "optional": false,
        "range": [
          195,
          201
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        195,
        201
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 31,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
