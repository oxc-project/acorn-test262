__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    258
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
            "name": "fn2",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
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
                      "name": "fn2",
                      "optional": false,
                      "range": [
                        29,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 2
                        },
                        "start": {
                          "column": 2,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            43,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 2
                            },
                            "start": {
                              "column": 16,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            49,
                            50
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 2
                            },
                            "start": {
                              "column": 22,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            52,
                            53
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 2
                            },
                            "start": {
                              "column": 25,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "compose",
                        "optional": false,
                        "range": [
                          35,
                          42
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        35,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 8,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      29,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 2,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    29,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 2,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          68,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 3
                          },
                          "start": {
                            "column": 13,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn2",
                      "optional": false,
                      "range": [
                        64,
                        67
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
                    "optional": false,
                    "range": [
                      64,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    57,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "FunctionDeclaration",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "range": [
                                  155,
                                  160
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                148,
                                160
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 7
                                },
                                "start": {
                                  "column": 6,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            140,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 8
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "range": [
                              124,
                              129
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 6
                              },
                              "start": {
                                "column": 8,
                                "line": 6
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "find",
                            "optional": false,
                            "range": [
                              134,
                              138
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            124,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          120,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 8
                          },
                          "start": {
                            "column": 4,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "child",
                              "optional": false,
                              "range": [
                                186,
                                191
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 9
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "range": [
                                  193,
                                  198
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 9
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  201,
                                  202
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                193,
                                202
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 9
                                },
                                "start": {
                                  "column": 26,
                                  "line": 9
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "find",
                              "optional": false,
                              "range": [
                                204,
                                208
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 9
                                },
                                "start": {
                                  "column": 37,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "compose",
                            "optional": false,
                            "range": [
                              178,
                              185
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 9
                              },
                              "start": {
                                "column": 11,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            178,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 9
                            },
                            "start": {
                              "column": 11,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          171,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 9
                          },
                          "start": {
                            "column": 4,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      114,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 10
                      },
                      "start": {
                        "column": 39,
                        "line": 5
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "compose",
                    "optional": false,
                    "range": [
                      86,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "range": [
                        94,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 19,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "level",
                      "optional": false,
                      "range": [
                        101,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "range": [
                        108,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 5
                        },
                        "start": {
                          "column": 33,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    77,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                25,
                215
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 1
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
                "name": "name",
                "optional": false,
                "range": [
                  19,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              10,
              215
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            215
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
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
        215
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "d",
            "optional": false,
            "range": [
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
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
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "range": [
                225,
                228
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              225,
              231
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            221,
            231
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        217,
        232
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              243,
              244
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "redefined",
            "optional": false,
            "range": [
              245,
              254
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          "range": [
            243,
            254
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          243,
          256
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        243,
        257
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
