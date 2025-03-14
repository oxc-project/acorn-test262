__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    300
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
            "name": "promise",
            "optional": false,
            "range": [
              4,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
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
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "FunctionExpression",
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
                                        "type": "TryStatement",
                                        "block": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "raw": "\"left\"",
                                                    "value": "left",
                                                    "range": [
                                                      146,
                                                      152
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 25,
                                                        "line": 8
                                                      },
                                                      "start": {
                                                        "column": 19,
                                                        "line": 8
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
                                                    "name": "top",
                                                    "optional": false,
                                                    "range": [
                                                      133,
                                                      136
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 9,
                                                        "line": 8
                                                      },
                                                      "start": {
                                                        "column": 6,
                                                        "line": 8
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "doScroll",
                                                    "optional": false,
                                                    "range": [
                                                      137,
                                                      145
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 18,
                                                        "line": 8
                                                      },
                                                      "start": {
                                                        "column": 10,
                                                        "line": 8
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    133,
                                                    145
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 18,
                                                      "line": 8
                                                    },
                                                    "start": {
                                                      "column": 6,
                                                      "line": 8
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "range": [
                                                  133,
                                                  153
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 26,
                                                    "line": 8
                                                  },
                                                  "start": {
                                                    "column": 6,
                                                    "line": 8
                                                  }
                                                }
                                              },
                                              "range": [
                                                133,
                                                154
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 27,
                                                  "line": 8
                                                },
                                                "start": {
                                                  "column": 6,
                                                  "line": 8
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            125,
                                            161
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 6,
                                              "line": 9
                                            },
                                            "start": {
                                              "column": 9,
                                              "line": 7
                                            }
                                          }
                                        },
                                        "finalizer": null,
                                        "handler": {
                                          "type": "CatchClause",
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "CallExpression",
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "doScrollCheck",
                                                      "optional": false,
                                                      "range": [
                                                        198,
                                                        211
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 38,
                                                          "line": 10
                                                        },
                                                        "start": {
                                                          "column": 25,
                                                          "line": 10
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "raw": "50",
                                                      "value": 50,
                                                      "range": [
                                                        213,
                                                        215
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 42,
                                                          "line": 10
                                                        },
                                                        "start": {
                                                          "column": 40,
                                                          "line": 10
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "setTimeout",
                                                    "optional": false,
                                                    "range": [
                                                      186,
                                                      196
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 23,
                                                        "line": 10
                                                      },
                                                      "start": {
                                                        "column": 13,
                                                        "line": 10
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "range": [
                                                    186,
                                                    217
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 44,
                                                      "line": 10
                                                    },
                                                    "start": {
                                                      "column": 13,
                                                      "line": 10
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  179,
                                                  218
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 45,
                                                    "line": 10
                                                  },
                                                  "start": {
                                                    "column": 6,
                                                    "line": 10
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              171,
                                              225
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 6,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 9
                                              }
                                            }
                                          },
                                          "param": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "range": [
                                              168,
                                              169
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 14,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 13,
                                                "line": 9
                                              }
                                            }
                                          },
                                          "range": [
                                            162,
                                            225
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 6,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 7,
                                              "line": 9
                                            }
                                          }
                                        },
                                        "range": [
                                          121,
                                          225
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 6,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 5,
                                            "line": 7
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
                                            "name": "detach",
                                            "optional": false,
                                            "range": [
                                              268,
                                              274
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 11,
                                                "line": 14
                                              },
                                              "start": {
                                                "column": 5,
                                                "line": 14
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            268,
                                            276
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 13,
                                              "line": 14
                                            },
                                            "start": {
                                              "column": 5,
                                              "line": 14
                                            }
                                          }
                                        },
                                        "range": [
                                          268,
                                          277
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 14,
                                            "line": 14
                                          },
                                          "start": {
                                            "column": 5,
                                            "line": 14
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      113,
                                      284
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 5,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "test": {
                                    "type": "Literal",
                                    "raw": "false",
                                    "value": false,
                                    "range": [
                                      105,
                                      110
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
                                  },
                                  "range": [
                                    100,
                                    284
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 5,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "range": [
                                94,
                                289
                              ],
                              "loc": {
                                "end": {
                                  "column": 4,
                                  "line": 17
                                },
                                "start": {
                                  "column": 29,
                                  "line": 4
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "doScrollCheck",
                              "optional": false,
                              "range": [
                                78,
                                91
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 4
                                },
                                "start": {
                                  "column": 13,
                                  "line": 4
                                }
                              }
                            },
                            "params": [],
                            "range": [
                              69,
                              289
                            ],
                            "loc": {
                              "end": {
                                "column": 4,
                                "line": 17
                              },
                              "start": {
                                "column": 4,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            68,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 17
                            },
                            "start": {
                              "column": 3,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          68,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 17
                          },
                          "start": {
                            "column": 3,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      63,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "top",
                      "optional": false,
                      "range": [
                        41,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 3
                        },
                        "start": {
                          "column": 7,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "top",
                        "optional": false,
                        "range": [
                          48,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doScroll",
                        "optional": false,
                        "range": [
                          52,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        48,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      41,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    36,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                30,
                299
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 19
                },
                "start": {
                  "column": 30,
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
                "name": "obj",
                "optional": false,
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
            ],
            "range": [
              14,
              299
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            4,
            299
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
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
        300
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
