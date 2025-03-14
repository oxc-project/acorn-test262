__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    193
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
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        34,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        37,
                        38
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
                    }
                  ],
                  "range": [
                    33,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                32,
                40
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              25,
              41
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          21,
          43
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
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
        "name": "baz",
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            },
            "range": [
              14,
              19
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                16,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            }
          },
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
      ],
      "range": [
        0,
        43
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 13,
                              "line": 7
                            }
                          },
                          "range": [
                            129,
                            134
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              131,
                              134
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 7
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          126,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          137,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        126,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    120,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        152,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      146,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    145,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
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
                        "type": "SpreadElement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "range": [
                            182,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 10
                            },
                            "start": {
                              "column": 23,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          179,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "range": [
                            163,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "range": [
                            167,
                            173
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          163,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          174,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        163,
                        178
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
                    },
                    "optional": false,
                    "range": [
                      163,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    163,
                    186
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
              "range": [
                114,
                190
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 44,
                  "line": 6
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          84,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 6
                          },
                          "start": {
                            "column": 21,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      83,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    83,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                77,
                93
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "range": [
                      101,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 31,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "range": [
                      105,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 35,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    101,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "range": [
                  97,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                97,
                112
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "range": [
              72,
              190
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          68,
          192
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 23,
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
        "name": "foo",
        "optional": false,
        "range": [
          54,
          57
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            },
            "range": [
              61,
              66
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                63,
                66
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            }
          },
          "range": [
            58,
            66
          ],
          "loc": {
            "end": {
              "column": 21,
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
        45,
        192
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        192,
        193
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 1,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
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
