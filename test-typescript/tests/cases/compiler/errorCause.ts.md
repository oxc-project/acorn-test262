__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    572
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                24
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  17,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        25
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
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
            "name": "err",
            "optional": false,
            "range": [
              31,
              34
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  47,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cause",
                      "optional": false,
                      "range": [
                        56,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"bar\"",
                          "value": "bar",
                          "range": [
                            73,
                            78
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 3
                            },
                            "start": {
                              "column": 46,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          67,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 3
                          },
                          "start": {
                            "column": 40,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        63,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 3
                        },
                        "start": {
                          "column": 36,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      56,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  54,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "range": [
                41,
                46
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              37,
              82
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            31,
            82
          ],
          "loc": {
            "end": {
              "column": 55,
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
      "kind": "let",
      "range": [
        27,
        83
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 3
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "err",
          "optional": false,
          "range": [
            84,
            87
          ],
          "loc": {
            "end": {
              "column": 3,
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
          "name": "cause",
          "optional": false,
          "range": [
            88,
            93
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          84,
          93
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        84,
        94
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "anotherErr",
            "optional": false,
            "range": [
              99,
              109
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
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  122,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cause",
                      "optional": false,
                      "range": [
                        131,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 36,
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        138,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 5
                        },
                        "start": {
                          "column": 43,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      131,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  129,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "range": [
                116,
                121
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              112,
              142
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 17,
                "line": 5
              }
            }
          },
          "range": [
            99,
            142
          ],
          "loc": {
            "end": {
              "column": 47,
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
      "kind": "let",
      "range": [
        95,
        143
      ],
      "loc": {
        "end": {
          "column": 48,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "anotherErr",
          "optional": false,
          "range": [
            144,
            154
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
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cause",
          "optional": false,
          "range": [
            155,
            160
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 6
            },
            "start": {
              "column": 11,
              "line": 6
            }
          }
        },
        "range": [
          144,
          160
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        144,
        161
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              177,
              182
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    186,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        203,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      197,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 8
                      },
                      "start": {
                        "column": 34,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    193,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 8
                    },
                    "start": {
                      "column": 30,
                      "line": 8
                    }
                  }
                },
                "range": [
                  186,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              184,
              211
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "EvalError",
          "optional": false,
          "range": [
            167,
            176
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "range": [
          163,
          212
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        163,
        213
      ],
      "loc": {
        "end": {
          "column": 50,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              228,
              233
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
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    237,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 23,
                      "line": 9
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    244,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 30,
                      "line": 9
                    }
                  }
                },
                "range": [
                  237,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 31,
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
              235,
              247
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "EvalError",
          "optional": false,
          "range": [
            218,
            227
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "range": [
          214,
          248
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        214,
        249
      ],
      "loc": {
        "end": {
          "column": 35,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              265,
              270
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
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    274,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 24,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        291,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 10
                        },
                        "start": {
                          "column": 41,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      285,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    281,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                },
                "range": [
                  274,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              272,
              299
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "RangeError",
          "optional": false,
          "range": [
            254,
            264
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
        "range": [
          250,
          300
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        250,
        301
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              321,
              326
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    330,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 28,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        347,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 11
                        },
                        "start": {
                          "column": 45,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      341,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 11
                      },
                      "start": {
                        "column": 39,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    337,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 11
                    },
                    "start": {
                      "column": 35,
                      "line": 11
                    }
                  }
                },
                "range": [
                  330,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              328,
              355
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 11
              },
              "start": {
                "column": 26,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReferenceError",
          "optional": false,
          "range": [
            306,
            320
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "range": [
          302,
          356
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        302,
        357
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              374,
              379
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 16,
                "line": 12
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    383,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 12
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        400,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 12
                        },
                        "start": {
                          "column": 42,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      394,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 12
                      },
                      "start": {
                        "column": 36,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    390,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 12
                    },
                    "start": {
                      "column": 32,
                      "line": 12
                    }
                  }
                },
                "range": [
                  383,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              381,
              408
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyntaxError",
          "optional": false,
          "range": [
            362,
            373
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "range": [
          358,
          409
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        358,
        410
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              425,
              430
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
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    434,
                    439
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 13
                    },
                    "start": {
                      "column": 23,
                      "line": 13
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        451,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 13
                        },
                        "start": {
                          "column": 40,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      445,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 13
                      },
                      "start": {
                        "column": 34,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    441,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 13
                    },
                    "start": {
                      "column": 30,
                      "line": 13
                    }
                  }
                },
                "range": [
                  434,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 13
                  },
                  "start": {
                    "column": 23,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              432,
              459
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 13
              },
              "start": {
                "column": 21,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeError",
          "optional": false,
          "range": [
            415,
            424
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "range": [
          411,
          460
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        411,
        461
      ],
      "loc": {
        "end": {
          "column": 50,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              475,
              480
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    484,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 22,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        501,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 14
                        },
                        "start": {
                          "column": 39,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      495,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 14
                      },
                      "start": {
                        "column": 33,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    491,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 14
                    },
                    "start": {
                      "column": 29,
                      "line": 14
                    }
                  }
                },
                "range": [
                  484,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 22,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              482,
              509
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 14
              },
              "start": {
                "column": 20,
                "line": 14
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "URIError",
          "optional": false,
          "range": [
            466,
            474
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          462,
          510
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        462,
        511
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              531,
              533
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 19,
                "line": 15
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              535,
              540
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "range": [
                    544,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 32,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        561,
                        566
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 15
                        },
                        "start": {
                          "column": 49,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      555,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 15
                      },
                      "start": {
                        "column": 43,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    551,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 15
                    },
                    "start": {
                      "column": 39,
                      "line": 15
                    }
                  }
                },
                "range": [
                  544,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 15
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              542,
              569
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 15
              },
              "start": {
                "column": 30,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AggregateError",
          "optional": false,
          "range": [
            516,
            530
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "range": [
          512,
          570
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        512,
        571
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
