__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    315
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
            "name": "globalCounter",
            "optional": false,
            "range": [
              22,
              35
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          "range": [
            22,
            39
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        18,
        40
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
        },
        "start": {
          "column": 0,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "range": [
                  62,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  79,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                62,
                80
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              62,
              81
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "range": [
                      95,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      101,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    95,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                93,
                104
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              86,
              105
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          56,
          107
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 15,
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
        "name": "foo",
        "optional": false,
        "range": [
          50,
          53
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "range": [
        41,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                108,
                111
              ],
              "loc": {
                "end": {
                  "column": 3,
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
              108,
              113
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "name": "prop",
            "optional": false,
            "range": [
              114,
              118
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "range": [
            108,
            118
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            123,
            124
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 15,
              "line": 8
            }
          }
        },
        "range": [
          108,
          124
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        108,
        125
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "result0",
            "optional": false,
            "range": [
              130,
              137
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    140,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "range": [
                  140,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  146,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "range": [
                140,
                150
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 29,
                  "line": 9
                }
              }
            },
            "range": [
              140,
              156
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "range": [
            130,
            156
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        126,
        157
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                158,
                161
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
              158,
              163
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "name": "prop",
            "optional": false,
            "range": [
              164,
              168
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "range": [
            158,
            168
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  173,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                173,
                178
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                179,
                183
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "range": [
              173,
              183
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              188,
              189
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 10
              },
              "start": {
                "column": 30,
                "line": 10
              }
            }
          },
          "range": [
            173,
            189
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "range": [
          158,
          189
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        158,
        190
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "result1",
            "optional": false,
            "range": [
              195,
              202
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    205,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "range": [
                  205,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  211,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                205,
                215
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      220,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    220,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    226,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 11
                    },
                    "start": {
                      "column": 35,
                      "line": 11
                    }
                  }
                },
                "range": [
                  220,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  235,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 44,
                    "line": 11
                  }
                }
              },
              "range": [
                220,
                236
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 11
                },
                "start": {
                  "column": 29,
                  "line": 11
                }
              }
            },
            "range": [
              205,
              236
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "range": [
            195,
            236
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        191,
        237
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                238,
                241
              ],
              "loc": {
                "end": {
                  "column": 3,
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
              238,
              243
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
            "name": "prop",
            "optional": false,
            "range": [
              244,
              248
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "range": [
            238,
            248
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  253,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 12
                  },
                  "start": {
                    "column": 15,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                253,
                258
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                259,
                263
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "range": [
              253,
              263
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              267,
              268
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 29,
                "line": 12
              }
            }
          },
          "range": [
            253,
            268
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        },
        "range": [
          238,
          268
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        238,
        269
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "result2",
            "optional": false,
            "range": [
              274,
              281
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    284,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "range": [
                  284,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  290,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              "range": [
                284,
                294
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      299,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    299,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 29,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    305,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 13
                    },
                    "start": {
                      "column": 35,
                      "line": 13
                    }
                  }
                },
                "range": [
                  299,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 13
                  },
                  "start": {
                    "column": 29,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  313,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 13
                  },
                  "start": {
                    "column": 43,
                    "line": 13
                  }
                }
              },
              "range": [
                299,
                314
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 13
                },
                "start": {
                  "column": 29,
                  "line": 13
                }
              }
            },
            "range": [
              284,
              314
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "range": [
            274,
            314
          ],
          "loc": {
            "end": {
              "column": 44,
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
        270,
        315
      ],
      "loc": {
        "end": {
          "column": 45,
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
      "column": 45,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
