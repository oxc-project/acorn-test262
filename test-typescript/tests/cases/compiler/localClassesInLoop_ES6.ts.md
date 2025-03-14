__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    161
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
        "name": "use",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              27
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                24,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          31,
          43
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        31,
        43
      ],
      "loc": {
        "end": {
          "column": 12,
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
            "name": "data",
            "optional": false,
            "range": [
              48,
              52
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              55,
              57
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          "range": [
            48,
            57
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        44,
        58
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                101,
                104
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              93,
              104
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      125,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    119,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
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
                  "name": "data",
                  "optional": false,
                  "range": [
                    109,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    114,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "range": [
                  109,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                109,
                127
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              109,
              128
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          87,
          130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 28,
            "line": 5
          }
        }
      },
      "init": {
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
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              68,
              73
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          64,
          73
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            79,
            80
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        },
        "range": [
          75,
          80
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            84,
            85
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
            }
          }
        },
        "operator": "++",
        "prefix": true,
        "range": [
          82,
          85
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 5
          }
        }
      },
      "range": [
        59,
        130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    136,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    141,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "range": [
                  136,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                136,
                145
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    150,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 10
                    },
                    "start": {
                      "column": 18,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    155,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "range": [
                  150,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                150,
                159
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "range": [
              136,
              159
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "range": [
            132,
            135
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          132,
          160
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        132,
        161
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 29,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
