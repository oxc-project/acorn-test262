__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    355
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    59,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "range": [
                  50,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                50,
                67
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              50,
              68
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          44,
          73
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 44,
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
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            },
            "range": [
              21,
              42
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    },
                    "range": [
                      25,
                      33
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        27,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    24,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
                  }
                },
                "range": [
                  35,
                  42
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    38,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 38,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                23,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
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
        0,
        73
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      93,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    93,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                91,
                96
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
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  88,
                  89
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
              }
            ],
            "range": [
              79,
              96
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
            75,
            78
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          75,
          97
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        75,
        98
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      130,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    130,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                128,
                133
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  123,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              112,
              133
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  101,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              100,
              103
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
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "range": [
              104,
              111
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "range": [
            100,
            111
          ],
          "loc": {
            "end": {
              "column": 11,
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
          100,
          134
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        100,
        135
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      176,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 40,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    169,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 8
                    },
                    "start": {
                      "column": 33,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                168,
                182
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 8
                },
                "start": {
                  "column": 32,
                  "line": 8
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  161,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  163,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 29,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              152,
              182
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  137,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 1,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              136,
              145
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "range": [
              146,
              151
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            136,
            151
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          136,
          183
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        136,
        184
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      219,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 9
                      },
                      "start": {
                        "column": 34,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    212,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                211,
                225
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 26,
                  "line": 9
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  204,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  206,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              195,
              225
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 9
                  },
                  "start": {
                    "column": 1,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              185,
              188
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
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "range": [
              189,
              194
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "range": [
            185,
            194
          ],
          "loc": {
            "end": {
              "column": 9,
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
          185,
          226
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        185,
        227
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      262,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 10
                      },
                      "start": {
                        "column": 34,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    255,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 10
                    },
                    "start": {
                      "column": 27,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                254,
                268
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  247,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 10
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  249,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  251,
                  252
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
              }
            ],
            "range": [
              238,
              268
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 10
                  },
                  "start": {
                    "column": 1,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              228,
              231
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
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "range": [
              232,
              237
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "range": [
            228,
            237
          ],
          "loc": {
            "end": {
              "column": 9,
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
          228,
          269
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        228,
        270
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      307,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 36,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    300,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                299,
                313
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  292,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  294,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 23,
                    "line": 11
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  296,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              283,
              313
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  272,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 11
                  },
                  "start": {
                    "column": 1,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              271,
              276
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "range": [
              277,
              282
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "range": [
            271,
            282
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          271,
          314
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        271,
        315
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      348,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 32,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    348,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 32,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                346,
                351
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 30,
                  "line": 12
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  339,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  341,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  343,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              330,
              351
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  317,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 12
                  },
                  "start": {
                    "column": 1,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              316,
              321
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "range": [
              322,
              329
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "range": [
            316,
            329
          ],
          "loc": {
            "end": {
              "column": 13,
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
          316,
          352
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        316,
        353
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
