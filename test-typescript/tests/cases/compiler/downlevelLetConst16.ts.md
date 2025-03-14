__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3002
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "'use strict'",
        "value": "use strict",
        "range": [
          0,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        12
      ],
      "loc": {
        "end": {
          "column": 12,
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
        "name": "use",
        "optional": false,
        "range": [
          31,
          34
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
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
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              36,
              41
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                38,
                41
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            }
          },
          "range": [
            35,
            41
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        }
      ],
      "range": [
        14,
        43
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "x",
            "optional": false,
            "range": [
              49,
              50
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              53,
              55
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            49,
            55
          ],
          "loc": {
            "end": {
              "column": 10,
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
        45,
        56
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "y",
            "optional": false,
            "range": [
              61,
              62
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            61,
            62
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        57,
        63
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "z",
            "optional": false,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            68,
            69
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        64,
        70
      ],
      "loc": {
        "end": {
          "column": 6,
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
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
            71,
            74
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
          71,
          77
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        71,
        78
      ],
      "loc": {
        "end": {
          "column": 7,
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
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              83,
              84
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
            79,
            82
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
        "range": [
          79,
          85
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        79,
        86
      ],
      "loc": {
        "end": {
          "column": 7,
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
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              91,
              92
            ],
            "loc": {
              "end": {
                "column": 5,
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
            87,
            90
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
          87,
          93
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        87,
        94
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
                    121,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    125,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  121,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              117,
              127
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                    "column": 7,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                132,
                138
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              132,
              139
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
          {
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        149,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    148,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        155,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    154,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                "range": [
                  148,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              144,
              158
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    167,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
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
                  163,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                163,
                169
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              163,
              170
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          180,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
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
                        "name": "z",
                        "optional": false,
                        "range": [
                          183,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        180,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    179,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          189,
                          190
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 18,
                            "line": 16
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          192,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 21,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        189,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 18,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    188,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "range": [
                  179,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              175,
              195
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    204,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
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
                  200,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                200,
                206
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              200,
              207
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          111,
          209
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 16,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          104,
          108
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [],
      "range": [
        95,
        209
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 11
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        247,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        251,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 22
                        },
                        "start": {
                          "column": 16,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      247,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  243,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        266,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 23
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
                      262,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    262,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "range": [
                  262,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            283,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 24
                            },
                            "start": {
                              "column": 13,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        282,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 24
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            289,
                            290
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 24
                            },
                            "start": {
                              "column": 19,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        288,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      282,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  278,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        305,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
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
                      301,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    301,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "range": [
                  301,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
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
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              322,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 26
                              },
                              "start": {
                                "column": 13,
                                "line": 26
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
                            "name": "z",
                            "optional": false,
                            "range": [
                              325,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 26
                              },
                              "start": {
                                "column": 16,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            322,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 26
                            },
                            "start": {
                              "column": 13,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        321,
                        327
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
                        }
                      }
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              332,
                              333
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 26
                              },
                              "start": {
                                "column": 23,
                                "line": 26
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              335,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 26
                              },
                              "start": {
                                "column": 26,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            332,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 26
                            },
                            "start": {
                              "column": 23,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        330,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 21,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      321,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 26
                      },
                      "start": {
                        "column": 12,
                        "line": 26
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  317,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        352,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
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
                      348,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    348,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "range": [
                  348,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              233,
              361
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    370,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
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
                  366,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                366,
                372
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              366,
              373
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          227,
          375
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 16,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          220,
          224
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [],
      "range": [
        211,
        375
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          385,
          725
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "range": [
                391,
                393
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                393,
                524
              ],
              "async": false,
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            410,
                            411
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            414,
                            415
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 34
                            },
                            "start": {
                              "column": 16,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          410,
                          415
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 34
                          },
                          "start": {
                            "column": 12,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      406,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            429,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
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
                          425,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        425,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      425,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
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
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                446,
                                447
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 36
                                },
                                "start": {
                                  "column": 13,
                                  "line": 36
                                }
                              }
                            }
                          ],
                          "optional": false,
                          "range": [
                            445,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                452,
                                453
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 36
                                },
                                "start": {
                                  "column": 19,
                                  "line": 36
                                }
                              }
                            }
                          ],
                          "range": [
                            451,
                            454
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 36
                            },
                            "start": {
                              "column": 18,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          445,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      441,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            468,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
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
                          464,
                          467
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        464,
                        470
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 37
                        },
                        "start": {
                          "column": 8,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      464,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
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
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  485,
                                  486
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 38
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
                                "name": "z",
                                "optional": false,
                                "range": [
                                  488,
                                  489
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                485,
                                489
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 38
                                },
                                "start": {
                                  "column": 13,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "range": [
                            484,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 38
                            },
                            "start": {
                              "column": 12,
                              "line": 38
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  495,
                                  496
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 38
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  498,
                                  499
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                495,
                                499
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 38
                                },
                                "start": {
                                  "column": 23,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "range": [
                            493,
                            501
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 38
                            },
                            "start": {
                              "column": 21,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          484,
                          501
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      480,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            515,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 39
                            },
                            "start": {
                              "column": 12,
                              "line": 39
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
                          511,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        511,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      511,
                      518
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  396,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 33
                }
              }
            },
            "range": [
              391,
              524
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "range": [
                529,
                531
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                531,
                722
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                562,
                                563
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 43
                                },
                                "start": {
                                  "column": 16,
                                  "line": 43
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                566,
                                567
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 43
                                },
                                "start": {
                                  "column": 20,
                                  "line": 43
                                }
                              }
                            },
                            "range": [
                              562,
                              567
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 43
                              },
                              "start": {
                                "column": 16,
                                "line": 43
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          558,
                          568
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 43
                          },
                          "start": {
                            "column": 12,
                            "line": 43
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                585,
                                586
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 44
                                },
                                "start": {
                                  "column": 16,
                                  "line": 44
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
                              581,
                              584
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 44
                              },
                              "start": {
                                "column": 12,
                                "line": 44
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            581,
                            587
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 44
                            },
                            "start": {
                              "column": 12,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          581,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
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
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    606,
                                    607
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 45
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                605,
                                608
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 45
                                },
                                "start": {
                                  "column": 16,
                                  "line": 45
                                }
                              }
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    612,
                                    613
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 45
                                    }
                                  }
                                }
                              ],
                              "range": [
                                611,
                                614
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 45
                                },
                                "start": {
                                  "column": 22,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              605,
                              614
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 45
                              },
                              "start": {
                                "column": 16,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          601,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                632,
                                633
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 46
                                },
                                "start": {
                                  "column": 16,
                                  "line": 46
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
                              628,
                              631
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 46
                              },
                              "start": {
                                "column": 12,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            628,
                            634
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 46
                            },
                            "start": {
                              "column": 12,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          628,
                          635
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
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
                              "type": "ObjectPattern",
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      653,
                                      654
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 47
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      656,
                                      657
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "range": [
                                    653,
                                    657
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 47
                                    }
                                  }
                                }
                              ],
                              "range": [
                                652,
                                658
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 47
                                },
                                "start": {
                                  "column": 16,
                                  "line": 47
                                }
                              }
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      663,
                                      664
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      666,
                                      667
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "range": [
                                    663,
                                    667
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 47
                                    }
                                  }
                                }
                              ],
                              "range": [
                                661,
                                669
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 47
                                },
                                "start": {
                                  "column": 25,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              652,
                              669
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 47
                              },
                              "start": {
                                "column": 16,
                                "line": 47
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          648,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 47
                          },
                          "start": {
                            "column": 12,
                            "line": 47
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                687,
                                688
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 48
                                },
                                "start": {
                                  "column": 16,
                                  "line": 48
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
                              683,
                              686
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 48
                              },
                              "start": {
                                "column": 12,
                                "line": 48
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            683,
                            689
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          683,
                          690
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "range": [
                      544,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            713,
                            714
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 50
                            },
                            "start": {
                              "column": 12,
                              "line": 50
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
                          709,
                          712
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 50
                          },
                          "start": {
                            "column": 8,
                            "line": 50
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        709,
                        715
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 50
                        },
                        "start": {
                          "column": 8,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      709,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    }
                  }
                ],
                "range": [
                  534,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              }
            },
            "range": [
              529,
              722
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 8,
            "line": 32
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          383,
          384
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 32
          },
          "start": {
            "column": 6,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        377,
        725
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          735,
          1088
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "range": [
                741,
                743
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                743,
                881
              ],
              "async": false,
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            762,
                            763
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 57
                            },
                            "start": {
                              "column": 14,
                              "line": 57
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            766,
                            767
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 57
                            },
                            "start": {
                              "column": 18,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          762,
                          767
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 57
                          },
                          "start": {
                            "column": 14,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      756,
                      768
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            781,
                            782
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 58
                            },
                            "start": {
                              "column": 12,
                              "line": 58
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
                          777,
                          780
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        777,
                        783
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      777,
                      784
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
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
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                800,
                                801
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 59
                                },
                                "start": {
                                  "column": 15,
                                  "line": 59
                                }
                              }
                            }
                          ],
                          "optional": false,
                          "range": [
                            799,
                            802
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 59
                            },
                            "start": {
                              "column": 14,
                              "line": 59
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                806,
                                807
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 59
                                },
                                "start": {
                                  "column": 21,
                                  "line": 59
                                }
                              }
                            }
                          ],
                          "range": [
                            805,
                            808
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 59
                            },
                            "start": {
                              "column": 20,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          799,
                          808
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 59
                          },
                          "start": {
                            "column": 14,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      793,
                      809
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            822,
                            823
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 60
                            },
                            "start": {
                              "column": 12,
                              "line": 60
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
                          818,
                          821
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 60
                          },
                          "start": {
                            "column": 8,
                            "line": 60
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        818,
                        824
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 60
                        },
                        "start": {
                          "column": 8,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      818,
                      825
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
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
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  841,
                                  842
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 61
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
                                "name": "z",
                                "optional": false,
                                "range": [
                                  844,
                                  845
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 61
                                  }
                                }
                              },
                              "range": [
                                841,
                                845
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 61
                                },
                                "start": {
                                  "column": 15,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            840,
                            846
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 61
                            },
                            "start": {
                              "column": 14,
                              "line": 61
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  851,
                                  852
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 61
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  854,
                                  855
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 61
                                  }
                                }
                              },
                              "range": [
                                851,
                                855
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 61
                                },
                                "start": {
                                  "column": 25,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            849,
                            857
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 61
                            },
                            "start": {
                              "column": 23,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          840,
                          857
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 61
                          },
                          "start": {
                            "column": 14,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      834,
                      858
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            871,
                            872
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 62
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
                          867,
                          870
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 62
                          },
                          "start": {
                            "column": 8,
                            "line": 62
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        867,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 62
                        },
                        "start": {
                          "column": 8,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      867,
                      874
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 62
                      }
                    }
                  }
                ],
                "range": [
                  746,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 9,
                    "line": 56
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 6,
                  "line": 56
                }
              }
            },
            "range": [
              741,
              881
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "range": [
                886,
                888
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                888,
                1086
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                921,
                                922
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 67
                                },
                                "start": {
                                  "column": 18,
                                  "line": 67
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                925,
                                926
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 67
                                },
                                "start": {
                                  "column": 22,
                                  "line": 67
                                }
                              }
                            },
                            "range": [
                              921,
                              926
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 67
                              },
                              "start": {
                                "column": 18,
                                "line": 67
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          915,
                          927
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                944,
                                945
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 68
                                },
                                "start": {
                                  "column": 16,
                                  "line": 68
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
                              940,
                              943
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 68
                              },
                              "start": {
                                "column": 12,
                                "line": 68
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            940,
                            946
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 68
                            },
                            "start": {
                              "column": 12,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          940,
                          947
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
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
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    967,
                                    968
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 69
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                966,
                                969
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 69
                                },
                                "start": {
                                  "column": 18,
                                  "line": 69
                                }
                              }
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    973,
                                    974
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 69
                                    }
                                  }
                                }
                              ],
                              "range": [
                                972,
                                975
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 69
                                },
                                "start": {
                                  "column": 24,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              966,
                              975
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 69
                              },
                              "start": {
                                "column": 18,
                                "line": 69
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          960,
                          976
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 69
                          },
                          "start": {
                            "column": 12,
                            "line": 69
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                993,
                                994
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 70
                                },
                                "start": {
                                  "column": 16,
                                  "line": 70
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
                              989,
                              992
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 70
                              },
                              "start": {
                                "column": 12,
                                "line": 70
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            989,
                            995
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 70
                            },
                            "start": {
                              "column": 12,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          989,
                          996
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
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
                              "type": "ObjectPattern",
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      1016,
                                      1017
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 71
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 71
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      1019,
                                      1020
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 71
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 71
                                      }
                                    }
                                  },
                                  "range": [
                                    1016,
                                    1020
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 71
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 71
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1015,
                                1021
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 71
                                },
                                "start": {
                                  "column": 18,
                                  "line": 71
                                }
                              }
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      1026,
                                      1027
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 71
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 71
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      1029,
                                      1030
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 71
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 71
                                      }
                                    }
                                  },
                                  "range": [
                                    1026,
                                    1030
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 71
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 71
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1024,
                                1032
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 71
                                },
                                "start": {
                                  "column": 27,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              1015,
                              1032
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 71
                              },
                              "start": {
                                "column": 18,
                                "line": 71
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1009,
                          1033
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 71
                          },
                          "start": {
                            "column": 12,
                            "line": 71
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                1050,
                                1051
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 72
                                },
                                "start": {
                                  "column": 16,
                                  "line": 72
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
                              1046,
                              1049
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 72
                              },
                              "start": {
                                "column": 12,
                                "line": 72
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1046,
                            1052
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 72
                            },
                            "start": {
                              "column": 12,
                              "line": 72
                            }
                          }
                        },
                        "range": [
                          1046,
                          1053
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 72
                          },
                          "start": {
                            "column": 12,
                            "line": 72
                          }
                        }
                      }
                    ],
                    "range": [
                      901,
                      1064
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1077,
                            1078
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 75
                            },
                            "start": {
                              "column": 12,
                              "line": 75
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
                          1073,
                          1076
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 75
                          },
                          "start": {
                            "column": 8,
                            "line": 75
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1073,
                        1079
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 75
                        },
                        "start": {
                          "column": 8,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1073,
                      1080
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  }
                ],
                "range": [
                  891,
                  1086
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 76
                  },
                  "start": {
                    "column": 9,
                    "line": 65
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 6,
                  "line": 65
                }
              }
            },
            "range": [
              886,
              1086
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 8,
            "line": 55
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          733,
          734
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 55
          },
          "start": {
            "column": 6,
            "line": 55
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        727,
        1088
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 55
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
                    1118,
                    1119
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 80
                    },
                    "start": {
                      "column": 10,
                      "line": 80
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1122,
                    1123
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 80
                    },
                    "start": {
                      "column": 14,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1118,
                  1123
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 80
                  },
                  "start": {
                    "column": 10,
                    "line": 80
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1112,
              1124
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1133,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
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
                  1129,
                  1132
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              "optional": false,
              "range": [
                1129,
                1135
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 81
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            "range": [
              1129,
              1136
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1148,
                        1149
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 82
                        },
                        "start": {
                          "column": 11,
                          "line": 82
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1147,
                    1150
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 82
                    },
                    "start": {
                      "column": 10,
                      "line": 82
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1154,
                        1155
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 82
                        },
                        "start": {
                          "column": 17,
                          "line": 82
                        }
                      }
                    }
                  ],
                  "range": [
                    1153,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 82
                    },
                    "start": {
                      "column": 16,
                      "line": 82
                    }
                  }
                },
                "range": [
                  1147,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 82
                  },
                  "start": {
                    "column": 10,
                    "line": 82
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1141,
              1157
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1166,
                    1167
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
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
                  1162,
                  1165
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 83
                  },
                  "start": {
                    "column": 4,
                    "line": 83
                  }
                }
              },
              "optional": false,
              "range": [
                1162,
                1168
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
                }
              }
            },
            "range": [
              1162,
              1169
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1181,
                          1182
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 84
                          },
                          "start": {
                            "column": 11,
                            "line": 84
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
                        "name": "z",
                        "optional": false,
                        "range": [
                          1184,
                          1185
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 84
                          },
                          "start": {
                            "column": 14,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        1181,
                        1185
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 84
                        },
                        "start": {
                          "column": 11,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "range": [
                    1180,
                    1186
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 84
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1191,
                          1192
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 84
                          },
                          "start": {
                            "column": 21,
                            "line": 84
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1194,
                          1195
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 84
                          },
                          "start": {
                            "column": 24,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        1191,
                        1195
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 84
                        },
                        "start": {
                          "column": 21,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "range": [
                    1189,
                    1197
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 84
                    },
                    "start": {
                      "column": 19,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1180,
                  1197
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 84
                  },
                  "start": {
                    "column": 10,
                    "line": 84
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1174,
              1198
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    1207,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 85
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
                  1203,
                  1206
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "range": [
                1203,
                1209
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "range": [
              1203,
              1210
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1106,
          1212
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 16,
            "line": 79
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "range": [
          1099,
          1103
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 79
          },
          "start": {
            "column": 9,
            "line": 79
          }
        }
      },
      "params": [],
      "range": [
        1090,
        1212
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 79
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1252,
                        1253
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 90
                        },
                        "start": {
                          "column": 14,
                          "line": 90
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1256,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 90
                        },
                        "start": {
                          "column": 18,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      1252,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 90
                      },
                      "start": {
                        "column": 14,
                        "line": 90
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1246,
                  1258
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1271,
                        1272
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 91
                        },
                        "start": {
                          "column": 12,
                          "line": 91
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
                      1267,
                      1270
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1267,
                    1273
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                "range": [
                  1267,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1290,
                            1291
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 92
                            },
                            "start": {
                              "column": 15,
                              "line": 92
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        1289,
                        1292
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 92
                        },
                        "start": {
                          "column": 14,
                          "line": 92
                        }
                      }
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1296,
                            1297
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 92
                            },
                            "start": {
                              "column": 21,
                              "line": 92
                            }
                          }
                        }
                      ],
                      "range": [
                        1295,
                        1298
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 92
                        },
                        "start": {
                          "column": 20,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      1289,
                      1298
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 92
                      },
                      "start": {
                        "column": 14,
                        "line": 92
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1283,
                  1299
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 92
                  },
                  "start": {
                    "column": 8,
                    "line": 92
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1312,
                        1313
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 93
                        },
                        "start": {
                          "column": 12,
                          "line": 93
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
                      1308,
                      1311
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1308,
                    1314
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                "range": [
                  1308,
                  1315
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 93
                  },
                  "start": {
                    "column": 8,
                    "line": 93
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
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1331,
                              1332
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 94
                              },
                              "start": {
                                "column": 15,
                                "line": 94
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
                            "name": "z",
                            "optional": false,
                            "range": [
                              1334,
                              1335
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 94
                              },
                              "start": {
                                "column": 18,
                                "line": 94
                              }
                            }
                          },
                          "range": [
                            1331,
                            1335
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 94
                            },
                            "start": {
                              "column": 15,
                              "line": 94
                            }
                          }
                        }
                      ],
                      "range": [
                        1330,
                        1336
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 94
                        },
                        "start": {
                          "column": 14,
                          "line": 94
                        }
                      }
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1341,
                              1342
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 94
                              },
                              "start": {
                                "column": 25,
                                "line": 94
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1344,
                              1345
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 94
                              },
                              "start": {
                                "column": 28,
                                "line": 94
                              }
                            }
                          },
                          "range": [
                            1341,
                            1345
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 94
                            },
                            "start": {
                              "column": 25,
                              "line": 94
                            }
                          }
                        }
                      ],
                      "range": [
                        1339,
                        1347
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 94
                        },
                        "start": {
                          "column": 23,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      1330,
                      1347
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 94
                      },
                      "start": {
                        "column": 14,
                        "line": 94
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1324,
                  1348
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 94
                  },
                  "start": {
                    "column": 8,
                    "line": 94
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        1361,
                        1362
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 95
                        },
                        "start": {
                          "column": 12,
                          "line": 95
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
                      1357,
                      1360
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 95
                      },
                      "start": {
                        "column": 8,
                        "line": 95
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1357,
                    1363
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 95
                    },
                    "start": {
                      "column": 8,
                      "line": 95
                    }
                  }
                },
                "range": [
                  1357,
                  1364
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 95
                  },
                  "start": {
                    "column": 8,
                    "line": 95
                  }
                }
              }
            ],
            "range": [
              1236,
              1371
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1380,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 98
                    },
                    "start": {
                      "column": 8,
                      "line": 98
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
                  1376,
                  1379
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 98
                  },
                  "start": {
                    "column": 4,
                    "line": 98
                  }
                }
              },
              "optional": false,
              "range": [
                1376,
                1382
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            },
            "range": [
              1376,
              1383
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "range": [
          1230,
          1385
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 16,
            "line": 88
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "range": [
          1223,
          1227
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 88
          },
          "start": {
            "column": 9,
            "line": 88
          }
        }
      },
      "params": [],
      "range": [
        1214,
        1385
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1407,
                    1408
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1411,
                    1412
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 102
                    },
                    "start": {
                      "column": 12,
                      "line": 102
                    }
                  }
                },
                "range": [
                  1407,
                  1412
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 102
                  },
                  "start": {
                    "column": 8,
                    "line": 102
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1403,
              1413
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1422,
                    1423
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
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
                  1418,
                  1421
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 103
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              },
              "optional": false,
              "range": [
                1418,
                1424
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            "range": [
              1418,
              1425
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1435,
                        1436
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 104
                        },
                        "start": {
                          "column": 9,
                          "line": 104
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1434,
                    1437
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 104
                    },
                    "start": {
                      "column": 8,
                      "line": 104
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1441,
                        1442
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 104
                        },
                        "start": {
                          "column": 15,
                          "line": 104
                        }
                      }
                    }
                  ],
                  "range": [
                    1440,
                    1443
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 104
                    },
                    "start": {
                      "column": 14,
                      "line": 104
                    }
                  }
                },
                "range": [
                  1434,
                  1443
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 104
                  },
                  "start": {
                    "column": 8,
                    "line": 104
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1430,
              1444
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1453,
                    1454
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 105
                    },
                    "start": {
                      "column": 8,
                      "line": 105
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
                  1449,
                  1452
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 105
                  },
                  "start": {
                    "column": 4,
                    "line": 105
                  }
                }
              },
              "optional": false,
              "range": [
                1449,
                1455
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              1449,
              1456
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1466,
                          1467
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 106
                          },
                          "start": {
                            "column": 9,
                            "line": 106
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
                        "name": "z",
                        "optional": false,
                        "range": [
                          1469,
                          1470
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 106
                          },
                          "start": {
                            "column": 12,
                            "line": 106
                          }
                        }
                      },
                      "range": [
                        1466,
                        1470
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 106
                        },
                        "start": {
                          "column": 9,
                          "line": 106
                        }
                      }
                    }
                  ],
                  "range": [
                    1465,
                    1471
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1476,
                          1477
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 106
                          },
                          "start": {
                            "column": 19,
                            "line": 106
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1479,
                          1480
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 106
                          },
                          "start": {
                            "column": 22,
                            "line": 106
                          }
                        }
                      },
                      "range": [
                        1476,
                        1480
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 106
                        },
                        "start": {
                          "column": 19,
                          "line": 106
                        }
                      }
                    }
                  ],
                  "range": [
                    1474,
                    1482
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 106
                    },
                    "start": {
                      "column": 17,
                      "line": 106
                    }
                  }
                },
                "range": [
                  1465,
                  1482
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 106
                  },
                  "start": {
                    "column": 8,
                    "line": 106
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1461,
              1483
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 106
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    1492,
                    1493
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 107
                    },
                    "start": {
                      "column": 8,
                      "line": 107
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
                  1488,
                  1491
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 107
                  },
                  "start": {
                    "column": 4,
                    "line": 107
                  }
                }
              },
              "optional": false,
              "range": [
                1488,
                1494
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              1488,
              1495
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          }
        ],
        "range": [
          1397,
          1497
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 10,
            "line": 101
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1394,
          1396
        ],
        "decorators": [],
        "name": "M1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 101
          },
          "start": {
            "column": 7,
            "line": 101
          }
        }
      },
      "kind": "module",
      "range": [
        1387,
        1497
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1529,
                        1530
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 112
                        },
                        "start": {
                          "column": 12,
                          "line": 112
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1533,
                        1534
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 112
                        },
                        "start": {
                          "column": 16,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      1529,
                      1534
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 112
                      },
                      "start": {
                        "column": 12,
                        "line": 112
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  1525,
                  1535
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 112
                  },
                  "start": {
                    "column": 8,
                    "line": 112
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1548,
                        1549
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 113
                        },
                        "start": {
                          "column": 12,
                          "line": 113
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
                      1544,
                      1547
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 113
                      },
                      "start": {
                        "column": 8,
                        "line": 113
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1544,
                    1550
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 113
                    },
                    "start": {
                      "column": 8,
                      "line": 113
                    }
                  }
                },
                "range": [
                  1544,
                  1551
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 113
                  },
                  "start": {
                    "column": 8,
                    "line": 113
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1565,
                            1566
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 114
                            },
                            "start": {
                              "column": 13,
                              "line": 114
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        1564,
                        1567
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 114
                        },
                        "start": {
                          "column": 12,
                          "line": 114
                        }
                      }
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1571,
                            1572
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 114
                            },
                            "start": {
                              "column": 19,
                              "line": 114
                            }
                          }
                        }
                      ],
                      "range": [
                        1570,
                        1573
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 114
                        },
                        "start": {
                          "column": 18,
                          "line": 114
                        }
                      }
                    },
                    "range": [
                      1564,
                      1573
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 114
                      },
                      "start": {
                        "column": 12,
                        "line": 114
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  1560,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 114
                  },
                  "start": {
                    "column": 8,
                    "line": 114
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1587,
                        1588
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 115
                        },
                        "start": {
                          "column": 12,
                          "line": 115
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
                      1583,
                      1586
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 115
                      },
                      "start": {
                        "column": 8,
                        "line": 115
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1583,
                    1589
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 115
                    },
                    "start": {
                      "column": 8,
                      "line": 115
                    }
                  }
                },
                "range": [
                  1583,
                  1590
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 115
                  },
                  "start": {
                    "column": 8,
                    "line": 115
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
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1604,
                              1605
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 116
                              },
                              "start": {
                                "column": 13,
                                "line": 116
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
                            "name": "z",
                            "optional": false,
                            "range": [
                              1607,
                              1608
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 116
                              },
                              "start": {
                                "column": 16,
                                "line": 116
                              }
                            }
                          },
                          "range": [
                            1604,
                            1608
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 116
                            },
                            "start": {
                              "column": 13,
                              "line": 116
                            }
                          }
                        }
                      ],
                      "range": [
                        1603,
                        1609
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 116
                        },
                        "start": {
                          "column": 12,
                          "line": 116
                        }
                      }
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1614,
                              1615
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 116
                              },
                              "start": {
                                "column": 23,
                                "line": 116
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1617,
                              1618
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 116
                              },
                              "start": {
                                "column": 26,
                                "line": 116
                              }
                            }
                          },
                          "range": [
                            1614,
                            1618
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 116
                            },
                            "start": {
                              "column": 23,
                              "line": 116
                            }
                          }
                        }
                      ],
                      "range": [
                        1612,
                        1620
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 116
                        },
                        "start": {
                          "column": 21,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      1603,
                      1620
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 116
                      },
                      "start": {
                        "column": 12,
                        "line": 116
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  1599,
                  1621
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 116
                  },
                  "start": {
                    "column": 8,
                    "line": 116
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        1634,
                        1635
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 117
                        },
                        "start": {
                          "column": 12,
                          "line": 117
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
                      1630,
                      1633
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 117
                      },
                      "start": {
                        "column": 8,
                        "line": 117
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1630,
                    1636
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                },
                "range": [
                  1630,
                  1637
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 117
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              }
            ],
            "range": [
              1515,
              1643
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1652,
                    1653
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 119
                    },
                    "start": {
                      "column": 8,
                      "line": 119
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
                  1648,
                  1651
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 119
                  },
                  "start": {
                    "column": 4,
                    "line": 119
                  }
                }
              },
              "optional": false,
              "range": [
                1648,
                1654
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
                }
              }
            },
            "range": [
              1648,
              1655
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          }
        ],
        "range": [
          1509,
          1657
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 10,
            "line": 110
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1506,
          1508
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 110
          },
          "start": {
            "column": 7,
            "line": 110
          }
        }
      },
      "kind": "module",
      "range": [
        1499,
        1657
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1681,
                    1682
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 123
                    },
                    "start": {
                      "column": 10,
                      "line": 123
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1685,
                    1686
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 123
                    },
                    "start": {
                      "column": 14,
                      "line": 123
                    }
                  }
                },
                "range": [
                  1681,
                  1686
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 123
                  },
                  "start": {
                    "column": 10,
                    "line": 123
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1675,
              1687
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1696,
                    1697
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
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
                  1692,
                  1695
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 124
                  },
                  "start": {
                    "column": 4,
                    "line": 124
                  }
                }
              },
              "optional": false,
              "range": [
                1692,
                1698
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
                }
              }
            },
            "range": [
              1692,
              1699
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1711,
                        1712
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 125
                        },
                        "start": {
                          "column": 11,
                          "line": 125
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1710,
                    1713
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 125
                    },
                    "start": {
                      "column": 10,
                      "line": 125
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1717,
                        1718
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 125
                        },
                        "start": {
                          "column": 17,
                          "line": 125
                        }
                      }
                    }
                  ],
                  "range": [
                    1716,
                    1719
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 125
                    },
                    "start": {
                      "column": 16,
                      "line": 125
                    }
                  }
                },
                "range": [
                  1710,
                  1719
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 125
                  },
                  "start": {
                    "column": 10,
                    "line": 125
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1704,
              1720
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 125
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1729,
                    1730
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 126
                    },
                    "start": {
                      "column": 8,
                      "line": 126
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
                  1725,
                  1728
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 126
                  },
                  "start": {
                    "column": 4,
                    "line": 126
                  }
                }
              },
              "optional": false,
              "range": [
                1725,
                1731
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 126
                },
                "start": {
                  "column": 4,
                  "line": 126
                }
              }
            },
            "range": [
              1725,
              1732
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 126
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1744,
                          1745
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 127
                          },
                          "start": {
                            "column": 11,
                            "line": 127
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
                        "name": "z",
                        "optional": false,
                        "range": [
                          1747,
                          1748
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 127
                          },
                          "start": {
                            "column": 14,
                            "line": 127
                          }
                        }
                      },
                      "range": [
                        1744,
                        1748
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 127
                        },
                        "start": {
                          "column": 11,
                          "line": 127
                        }
                      }
                    }
                  ],
                  "range": [
                    1743,
                    1749
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 127
                    },
                    "start": {
                      "column": 10,
                      "line": 127
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1754,
                          1755
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 127
                          },
                          "start": {
                            "column": 21,
                            "line": 127
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1757,
                          1758
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 127
                          },
                          "start": {
                            "column": 24,
                            "line": 127
                          }
                        }
                      },
                      "range": [
                        1754,
                        1758
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 127
                        },
                        "start": {
                          "column": 21,
                          "line": 127
                        }
                      }
                    }
                  ],
                  "range": [
                    1752,
                    1760
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 127
                    },
                    "start": {
                      "column": 19,
                      "line": 127
                    }
                  }
                },
                "range": [
                  1743,
                  1760
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 127
                  },
                  "start": {
                    "column": 10,
                    "line": 127
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1737,
              1761
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 127
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    1770,
                    1771
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 128
                    },
                    "start": {
                      "column": 8,
                      "line": 128
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
                  1766,
                  1769
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 128
                  },
                  "start": {
                    "column": 4,
                    "line": 128
                  }
                }
              },
              "optional": false,
              "range": [
                1766,
                1772
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 128
                },
                "start": {
                  "column": 4,
                  "line": 128
                }
              }
            },
            "range": [
              1766,
              1773
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          }
        ],
        "range": [
          1669,
          1776
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 10,
            "line": 122
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1666,
          1668
        ],
        "decorators": [],
        "name": "M3",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 122
          },
          "start": {
            "column": 7,
            "line": 122
          }
        }
      },
      "kind": "module",
      "range": [
        1659,
        1776
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1810,
                        1811
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 134
                        },
                        "start": {
                          "column": 14,
                          "line": 134
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1814,
                        1815
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 134
                        },
                        "start": {
                          "column": 18,
                          "line": 134
                        }
                      }
                    },
                    "range": [
                      1810,
                      1815
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 134
                      },
                      "start": {
                        "column": 14,
                        "line": 134
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1804,
                  1816
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 134
                  },
                  "start": {
                    "column": 8,
                    "line": 134
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1829,
                        1830
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 135
                        },
                        "start": {
                          "column": 12,
                          "line": 135
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
                      1825,
                      1828
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 135
                      },
                      "start": {
                        "column": 8,
                        "line": 135
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1825,
                    1831
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 135
                    },
                    "start": {
                      "column": 8,
                      "line": 135
                    }
                  }
                },
                "range": [
                  1825,
                  1832
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 135
                  },
                  "start": {
                    "column": 8,
                    "line": 135
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1848,
                            1849
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 136
                            },
                            "start": {
                              "column": 15,
                              "line": 136
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        1847,
                        1850
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 136
                        },
                        "start": {
                          "column": 14,
                          "line": 136
                        }
                      }
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1854,
                            1855
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 136
                            },
                            "start": {
                              "column": 21,
                              "line": 136
                            }
                          }
                        }
                      ],
                      "range": [
                        1853,
                        1856
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 136
                        },
                        "start": {
                          "column": 20,
                          "line": 136
                        }
                      }
                    },
                    "range": [
                      1847,
                      1856
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 136
                      },
                      "start": {
                        "column": 14,
                        "line": 136
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1841,
                  1857
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 136
                  },
                  "start": {
                    "column": 8,
                    "line": 136
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1870,
                        1871
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 137
                        },
                        "start": {
                          "column": 12,
                          "line": 137
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
                      1866,
                      1869
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 137
                      },
                      "start": {
                        "column": 8,
                        "line": 137
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1866,
                    1872
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                },
                "range": [
                  1866,
                  1873
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 137
                  },
                  "start": {
                    "column": 8,
                    "line": 137
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
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1889,
                              1890
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 138
                              },
                              "start": {
                                "column": 15,
                                "line": 138
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
                            "name": "z",
                            "optional": false,
                            "range": [
                              1892,
                              1893
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 138
                              },
                              "start": {
                                "column": 18,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            1889,
                            1893
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 138
                            },
                            "start": {
                              "column": 15,
                              "line": 138
                            }
                          }
                        }
                      ],
                      "range": [
                        1888,
                        1894
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 138
                        },
                        "start": {
                          "column": 14,
                          "line": 138
                        }
                      }
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1899,
                              1900
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 138
                              },
                              "start": {
                                "column": 25,
                                "line": 138
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1902,
                              1903
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 138
                              },
                              "start": {
                                "column": 28,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            1899,
                            1903
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 138
                            },
                            "start": {
                              "column": 25,
                              "line": 138
                            }
                          }
                        }
                      ],
                      "range": [
                        1897,
                        1905
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 138
                        },
                        "start": {
                          "column": 23,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      1888,
                      1905
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 138
                      },
                      "start": {
                        "column": 14,
                        "line": 138
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1882,
                  1906
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 138
                  },
                  "start": {
                    "column": 8,
                    "line": 138
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        1919,
                        1920
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 139
                        },
                        "start": {
                          "column": 12,
                          "line": 139
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
                      1915,
                      1918
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 139
                      },
                      "start": {
                        "column": 8,
                        "line": 139
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1915,
                    1921
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 139
                    }
                  }
                },
                "range": [
                  1915,
                  1922
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 139
                  },
                  "start": {
                    "column": 8,
                    "line": 139
                  }
                }
              }
            ],
            "range": [
              1794,
              1929
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 141
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1938,
                    1939
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 142
                    },
                    "start": {
                      "column": 8,
                      "line": 142
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
                  1934,
                  1937
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 142
                  },
                  "start": {
                    "column": 4,
                    "line": 142
                  }
                }
              },
              "optional": false,
              "range": [
                1934,
                1940
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 142
                },
                "start": {
                  "column": 4,
                  "line": 142
                }
              }
            },
            "range": [
              1934,
              1941
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 142
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1950,
                    1951
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 143
                    },
                    "start": {
                      "column": 8,
                      "line": 143
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
                  1946,
                  1949
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 143
                  },
                  "start": {
                    "column": 4,
                    "line": 143
                  }
                }
              },
              "optional": false,
              "range": [
                1946,
                1952
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 143
                },
                "start": {
                  "column": 4,
                  "line": 143
                }
              }
            },
            "range": [
              1946,
              1953
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    1962,
                    1963
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 144
                    },
                    "start": {
                      "column": 8,
                      "line": 144
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
                  1958,
                  1961
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 144
                  },
                  "start": {
                    "column": 4,
                    "line": 144
                  }
                }
              },
              "optional": false,
              "range": [
                1958,
                1964
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 144
                },
                "start": {
                  "column": 4,
                  "line": 144
                }
              }
            },
            "range": [
              1958,
              1965
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 144
              },
              "start": {
                "column": 4,
                "line": 144
              }
            }
          }
        ],
        "range": [
          1788,
          1967
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 145
          },
          "start": {
            "column": 10,
            "line": 132
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1785,
          1787
        ],
        "decorators": [],
        "name": "M4",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 132
          },
          "start": {
            "column": 7,
            "line": 132
          }
        }
      },
      "kind": "module",
      "range": [
        1778,
        1967
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 145
        },
        "start": {
          "column": 0,
          "line": 132
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
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2020,
                          2021
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 149
                          },
                          "start": {
                            "column": 12,
                            "line": 149
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
                        2016,
                        2019
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 149
                        },
                        "start": {
                          "column": 8,
                          "line": 149
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2016,
                      2022
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 149
                      },
                      "start": {
                        "column": 8,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    2016,
                    2023
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 149
                    },
                    "start": {
                      "column": 8,
                      "line": 149
                    }
                  }
                }
              ],
              "range": [
                2006,
                2029
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 150
                },
                "start": {
                  "column": 19,
                  "line": 148
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
                      2000,
                      2001
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 148
                      },
                      "start": {
                        "column": 13,
                        "line": 148
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2000,
                    2001
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 148
                    },
                    "start": {
                      "column": 13,
                      "line": 148
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1996,
                2001
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 148
                },
                "start": {
                  "column": 9,
                  "line": 148
                }
              }
            },
            "test": null,
            "update": null,
            "range": [
              1991,
              2029
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 150
              },
              "start": {
                "column": 4,
                "line": 148
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2070,
                          2071
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 152
                          },
                          "start": {
                            "column": 12,
                            "line": 152
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
                        2066,
                        2069
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 152
                        },
                        "start": {
                          "column": 8,
                          "line": 152
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2066,
                      2072
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 152
                      },
                      "start": {
                        "column": 8,
                        "line": 152
                      }
                    }
                  },
                  "range": [
                    2066,
                    2073
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 152
                    },
                    "start": {
                      "column": 8,
                      "line": 152
                    }
                  }
                }
              ],
              "range": [
                2056,
                2079
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 153
                },
                "start": {
                  "column": 26,
                  "line": 151
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2044,
                          2045
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 151
                          },
                          "start": {
                            "column": 14,
                            "line": 151
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2043,
                      2046
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 151
                      },
                      "start": {
                        "column": 13,
                        "line": 151
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      2049,
                      2051
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 151
                      },
                      "start": {
                        "column": 19,
                        "line": 151
                      }
                    }
                  },
                  "range": [
                    2043,
                    2051
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 151
                    },
                    "start": {
                      "column": 13,
                      "line": 151
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2039,
                2051
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 151
                },
                "start": {
                  "column": 9,
                  "line": 151
                }
              }
            },
            "test": null,
            "update": null,
            "range": [
              2034,
              2079
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 151
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          2127,
                          2128
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 155
                          },
                          "start": {
                            "column": 12,
                            "line": 155
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
                        2123,
                        2126
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 155
                        },
                        "start": {
                          "column": 8,
                          "line": 155
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2123,
                      2129
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 155
                      },
                      "start": {
                        "column": 8,
                        "line": 155
                      }
                    }
                  },
                  "range": [
                    2123,
                    2130
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 155
                    },
                    "start": {
                      "column": 8,
                      "line": 155
                    }
                  }
                }
              ],
              "range": [
                2113,
                2136
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 156
                },
                "start": {
                  "column": 33,
                  "line": 154
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2094,
                            2095
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 154
                            },
                            "start": {
                              "column": 14,
                              "line": 154
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
                          "name": "z",
                          "optional": false,
                          "range": [
                            2097,
                            2098
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 154
                            },
                            "start": {
                              "column": 17,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          2094,
                          2098
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 154
                          },
                          "start": {
                            "column": 14,
                            "line": 154
                          }
                        }
                      }
                    ],
                    "range": [
                      2093,
                      2099
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 154
                      },
                      "start": {
                        "column": 13,
                        "line": 154
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2103,
                            2104
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 154
                            },
                            "start": {
                              "column": 23,
                              "line": 154
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            2106,
                            2107
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 154
                            },
                            "start": {
                              "column": 26,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          2103,
                          2107
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 154
                          },
                          "start": {
                            "column": 23,
                            "line": 154
                          }
                        }
                      }
                    ],
                    "range": [
                      2102,
                      2108
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 154
                      },
                      "start": {
                        "column": 22,
                        "line": 154
                      }
                    }
                  },
                  "range": [
                    2093,
                    2108
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 154
                    },
                    "start": {
                      "column": 13,
                      "line": 154
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2089,
                2108
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 154
                },
                "start": {
                  "column": 9,
                  "line": 154
                }
              }
            },
            "test": null,
            "update": null,
            "range": [
              2084,
              2136
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 154
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2145,
                    2146
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 157
                    },
                    "start": {
                      "column": 8,
                      "line": 157
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
                  2141,
                  2144
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 157
                  },
                  "start": {
                    "column": 4,
                    "line": 157
                  }
                }
              },
              "optional": false,
              "range": [
                2141,
                2147
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 157
                },
                "start": {
                  "column": 4,
                  "line": 157
                }
              }
            },
            "range": [
              2141,
              2148
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          }
        ],
        "range": [
          1985,
          2150
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 16,
            "line": 147
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          1978,
          1982
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 147
          },
          "start": {
            "column": 9,
            "line": 147
          }
        }
      },
      "params": [],
      "range": [
        1969,
        2150
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 147
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
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2209,
                          2210
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 162
                          },
                          "start": {
                            "column": 12,
                            "line": 162
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
                        2205,
                        2208
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 162
                        },
                        "start": {
                          "column": 8,
                          "line": 162
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2205,
                      2211
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 162
                      },
                      "start": {
                        "column": 8,
                        "line": 162
                      }
                    }
                  },
                  "range": [
                    2205,
                    2212
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 162
                    },
                    "start": {
                      "column": 8,
                      "line": 162
                    }
                  }
                }
              ],
              "range": [
                2195,
                2218
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 163
                },
                "start": {
                  "column": 25,
                  "line": 161
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
                      2185,
                      2186
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 161
                      },
                      "start": {
                        "column": 15,
                        "line": 161
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2189,
                      2190
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 161
                      },
                      "start": {
                        "column": 19,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    2185,
                    2190
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 161
                    },
                    "start": {
                      "column": 15,
                      "line": 161
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2179,
                2190
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 161
                },
                "start": {
                  "column": 9,
                  "line": 161
                }
              }
            },
            "test": null,
            "update": null,
            "range": [
              2174,
              2218
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 163
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2261,
                          2262
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 165
                          },
                          "start": {
                            "column": 12,
                            "line": 165
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
                        2257,
                        2260
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 165
                        },
                        "start": {
                          "column": 8,
                          "line": 165
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2257,
                      2263
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 165
                      },
                      "start": {
                        "column": 8,
                        "line": 165
                      }
                    }
                  },
                  "range": [
                    2257,
                    2264
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 165
                    },
                    "start": {
                      "column": 8,
                      "line": 165
                    }
                  }
                }
              ],
              "range": [
                2247,
                2270
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 166
                },
                "start": {
                  "column": 28,
                  "line": 164
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2235,
                          2236
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 164
                          },
                          "start": {
                            "column": 16,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2234,
                      2237
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 164
                      },
                      "start": {
                        "column": 15,
                        "line": 164
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      2240,
                      2242
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 164
                      },
                      "start": {
                        "column": 21,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    2234,
                    2242
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 164
                    },
                    "start": {
                      "column": 15,
                      "line": 164
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2228,
                2242
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 164
                },
                "start": {
                  "column": 9,
                  "line": 164
                }
              }
            },
            "test": null,
            "update": null,
            "range": [
              2223,
              2270
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          2322,
                          2323
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 168
                          },
                          "start": {
                            "column": 12,
                            "line": 168
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
                        2318,
                        2321
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 168
                        },
                        "start": {
                          "column": 8,
                          "line": 168
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2318,
                      2324
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 168
                      },
                      "start": {
                        "column": 8,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    2318,
                    2325
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 168
                    },
                    "start": {
                      "column": 8,
                      "line": 168
                    }
                  }
                }
              ],
              "range": [
                2308,
                2331
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 169
                },
                "start": {
                  "column": 37,
                  "line": 167
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2287,
                            2288
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 167
                            },
                            "start": {
                              "column": 16,
                              "line": 167
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
                          "name": "z",
                          "optional": false,
                          "range": [
                            2290,
                            2291
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 167
                            },
                            "start": {
                              "column": 19,
                              "line": 167
                            }
                          }
                        },
                        "range": [
                          2287,
                          2291
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 167
                          },
                          "start": {
                            "column": 16,
                            "line": 167
                          }
                        }
                      }
                    ],
                    "range": [
                      2286,
                      2292
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 167
                      },
                      "start": {
                        "column": 15,
                        "line": 167
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2297,
                            2298
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 167
                            },
                            "start": {
                              "column": 26,
                              "line": 167
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            2300,
                            2301
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 167
                            },
                            "start": {
                              "column": 29,
                              "line": 167
                            }
                          }
                        },
                        "range": [
                          2297,
                          2301
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 167
                          },
                          "start": {
                            "column": 26,
                            "line": 167
                          }
                        }
                      }
                    ],
                    "range": [
                      2295,
                      2303
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 167
                      },
                      "start": {
                        "column": 24,
                        "line": 167
                      }
                    }
                  },
                  "range": [
                    2286,
                    2303
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 167
                    },
                    "start": {
                      "column": 15,
                      "line": 167
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2280,
                2303
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 167
                },
                "start": {
                  "column": 9,
                  "line": 167
                }
              }
            },
            "test": null,
            "update": null,
            "range": [
              2275,
              2331
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2340,
                    2341
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 170
                    },
                    "start": {
                      "column": 8,
                      "line": 170
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
                  2336,
                  2339
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 170
                  },
                  "start": {
                    "column": 4,
                    "line": 170
                  }
                }
              },
              "optional": false,
              "range": [
                2336,
                2342
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 170
                },
                "start": {
                  "column": 4,
                  "line": 170
                }
              }
            },
            "range": [
              2336,
              2343
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 170
              },
              "start": {
                "column": 4,
                "line": 170
              }
            }
          }
        ],
        "range": [
          2168,
          2345
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 171
          },
          "start": {
            "column": 16,
            "line": 160
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          2161,
          2165
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 160
          },
          "start": {
            "column": 9,
            "line": 160
          }
        }
      },
      "params": [],
      "range": [
        2152,
        2345
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 171
        },
        "start": {
          "column": 0,
          "line": 160
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
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2401,
                          2402
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 175
                          },
                          "start": {
                            "column": 12,
                            "line": 175
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
                        2397,
                        2400
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 175
                        },
                        "start": {
                          "column": 8,
                          "line": 175
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2397,
                      2403
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 175
                      },
                      "start": {
                        "column": 8,
                        "line": 175
                      }
                    }
                  },
                  "range": [
                    2397,
                    2404
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 175
                    },
                    "start": {
                      "column": 8,
                      "line": 175
                    }
                  }
                }
              ],
              "range": [
                2387,
                2410
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 176
                },
                "start": {
                  "column": 22,
                  "line": 174
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2378,
                      2379
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 174
                      },
                      "start": {
                        "column": 13,
                        "line": 174
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2378,
                    2379
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 174
                    },
                    "start": {
                      "column": 13,
                      "line": 174
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2374,
                2379
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 174
                },
                "start": {
                  "column": 9,
                  "line": 174
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2383,
                2385
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 174
                },
                "start": {
                  "column": 18,
                  "line": 174
                }
              }
            },
            "range": [
              2369,
              2410
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 176
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2419,
                    2420
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 177
                    },
                    "start": {
                      "column": 8,
                      "line": 177
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
                  2415,
                  2418
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 177
                  },
                  "start": {
                    "column": 4,
                    "line": 177
                  }
                }
              },
              "optional": false,
              "range": [
                2415,
                2421
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 177
                },
                "start": {
                  "column": 4,
                  "line": 177
                }
              }
            },
            "range": [
              2415,
              2422
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 177
              },
              "start": {
                "column": 4,
                "line": 177
              }
            }
          }
        ],
        "range": [
          2363,
          2424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 178
          },
          "start": {
            "column": 16,
            "line": 173
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          2356,
          2360
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 173
          },
          "start": {
            "column": 9,
            "line": 173
          }
        }
      },
      "params": [],
      "range": [
        2347,
        2424
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 173
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
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2482,
                          2483
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 182
                          },
                          "start": {
                            "column": 12,
                            "line": 182
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
                        2478,
                        2481
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 182
                        },
                        "start": {
                          "column": 8,
                          "line": 182
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2478,
                      2484
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 182
                      },
                      "start": {
                        "column": 8,
                        "line": 182
                      }
                    }
                  },
                  "range": [
                    2478,
                    2485
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 182
                    },
                    "start": {
                      "column": 8,
                      "line": 182
                    }
                  }
                }
              ],
              "range": [
                2468,
                2491
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 183
                },
                "start": {
                  "column": 24,
                  "line": 181
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2459,
                      2460
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 181
                      },
                      "start": {
                        "column": 15,
                        "line": 181
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2459,
                    2460
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 181
                    },
                    "start": {
                      "column": 15,
                      "line": 181
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2453,
                2460
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 181
                },
                "start": {
                  "column": 9,
                  "line": 181
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2464,
                2466
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 181
                },
                "start": {
                  "column": 20,
                  "line": 181
                }
              }
            },
            "range": [
              2448,
              2491
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 183
              },
              "start": {
                "column": 4,
                "line": 181
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2500,
                    2501
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 184
                    },
                    "start": {
                      "column": 8,
                      "line": 184
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
                  2496,
                  2499
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 184
                  },
                  "start": {
                    "column": 4,
                    "line": 184
                  }
                }
              },
              "optional": false,
              "range": [
                2496,
                2502
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 184
                },
                "start": {
                  "column": 4,
                  "line": 184
                }
              }
            },
            "range": [
              2496,
              2503
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 184
              },
              "start": {
                "column": 4,
                "line": 184
              }
            }
          }
        ],
        "range": [
          2442,
          2505
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 185
          },
          "start": {
            "column": 16,
            "line": 180
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          2435,
          2439
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 180
          },
          "start": {
            "column": 9,
            "line": 180
          }
        }
      },
      "params": [],
      "range": [
        2426,
        2505
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 185
        },
        "start": {
          "column": 0,
          "line": 180
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2561,
                          2562
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 189
                          },
                          "start": {
                            "column": 12,
                            "line": 189
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
                        2557,
                        2560
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 189
                        },
                        "start": {
                          "column": 8,
                          "line": 189
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2557,
                      2563
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 189
                      },
                      "start": {
                        "column": 8,
                        "line": 189
                      }
                    }
                  },
                  "range": [
                    2557,
                    2564
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 189
                    },
                    "start": {
                      "column": 8,
                      "line": 189
                    }
                  }
                }
              ],
              "range": [
                2547,
                2570
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 190
                },
                "start": {
                  "column": 22,
                  "line": 188
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2538,
                      2539
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 188
                      },
                      "start": {
                        "column": 13,
                        "line": 188
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2538,
                    2539
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 188
                    },
                    "start": {
                      "column": 13,
                      "line": 188
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2534,
                2539
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 188
                },
                "start": {
                  "column": 9,
                  "line": 188
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2543,
                2545
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 188
                },
                "start": {
                  "column": 18,
                  "line": 188
                }
              }
            },
            "range": [
              2529,
              2570
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 190
              },
              "start": {
                "column": 4,
                "line": 188
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2579,
                    2580
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 191
                    },
                    "start": {
                      "column": 8,
                      "line": 191
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
                  2575,
                  2578
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 191
                  },
                  "start": {
                    "column": 4,
                    "line": 191
                  }
                }
              },
              "optional": false,
              "range": [
                2575,
                2581
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 191
                },
                "start": {
                  "column": 4,
                  "line": 191
                }
              }
            },
            "range": [
              2575,
              2582
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 191
              },
              "start": {
                "column": 4,
                "line": 191
              }
            }
          }
        ],
        "range": [
          2523,
          2584
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 192
          },
          "start": {
            "column": 16,
            "line": 187
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          2516,
          2520
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 187
          },
          "start": {
            "column": 9,
            "line": 187
          }
        }
      },
      "params": [],
      "range": [
        2507,
        2584
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 192
        },
        "start": {
          "column": 0,
          "line": 187
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2642,
                          2643
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 196
                          },
                          "start": {
                            "column": 12,
                            "line": 196
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
                        2638,
                        2641
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 196
                        },
                        "start": {
                          "column": 8,
                          "line": 196
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2638,
                      2644
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 196
                      },
                      "start": {
                        "column": 8,
                        "line": 196
                      }
                    }
                  },
                  "range": [
                    2638,
                    2645
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 196
                    },
                    "start": {
                      "column": 8,
                      "line": 196
                    }
                  }
                }
              ],
              "range": [
                2628,
                2651
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 197
                },
                "start": {
                  "column": 24,
                  "line": 195
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          2618,
                          2619
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 195
                          },
                          "start": {
                            "column": 14,
                            "line": 195
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2617,
                      2620
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 195
                      },
                      "start": {
                        "column": 13,
                        "line": 195
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2617,
                    2620
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 195
                    },
                    "start": {
                      "column": 13,
                      "line": 195
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2613,
                2620
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 195
                },
                "start": {
                  "column": 9,
                  "line": 195
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2624,
                2626
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 195
                },
                "start": {
                  "column": 20,
                  "line": 195
                }
              }
            },
            "range": [
              2608,
              2651
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 197
              },
              "start": {
                "column": 4,
                "line": 195
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2660,
                    2661
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 198
                    },
                    "start": {
                      "column": 8,
                      "line": 198
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
                  2656,
                  2659
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 198
                  },
                  "start": {
                    "column": 4,
                    "line": 198
                  }
                }
              },
              "optional": false,
              "range": [
                2656,
                2662
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 198
                },
                "start": {
                  "column": 4,
                  "line": 198
                }
              }
            },
            "range": [
              2656,
              2663
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 198
              },
              "start": {
                "column": 4,
                "line": 198
              }
            }
          }
        ],
        "range": [
          2602,
          2665
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 199
          },
          "start": {
            "column": 16,
            "line": 194
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          2595,
          2599
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 194
          },
          "start": {
            "column": 9,
            "line": 194
          }
        }
      },
      "params": [],
      "range": [
        2586,
        2665
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 199
        },
        "start": {
          "column": 0,
          "line": 194
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2726,
                          2727
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 203
                          },
                          "start": {
                            "column": 12,
                            "line": 203
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
                        2722,
                        2725
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 203
                        },
                        "start": {
                          "column": 8,
                          "line": 203
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2722,
                      2728
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 203
                      },
                      "start": {
                        "column": 8,
                        "line": 203
                      }
                    }
                  },
                  "range": [
                    2722,
                    2729
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 203
                    },
                    "start": {
                      "column": 8,
                      "line": 203
                    }
                  }
                }
              ],
              "range": [
                2712,
                2735
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 204
                },
                "start": {
                  "column": 27,
                  "line": 202
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2699,
                            2700
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 202
                            },
                            "start": {
                              "column": 14,
                              "line": 202
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            2702,
                            2703
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 202
                            },
                            "start": {
                              "column": 17,
                              "line": 202
                            }
                          }
                        },
                        "range": [
                          2699,
                          2703
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 202
                          },
                          "start": {
                            "column": 14,
                            "line": 202
                          }
                        }
                      }
                    ],
                    "range": [
                      2698,
                      2704
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 202
                      },
                      "start": {
                        "column": 13,
                        "line": 202
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2698,
                    2704
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 202
                    },
                    "start": {
                      "column": 13,
                      "line": 202
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2694,
                2704
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 202
                },
                "start": {
                  "column": 9,
                  "line": 202
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2708,
                2710
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 202
                },
                "start": {
                  "column": 23,
                  "line": 202
                }
              }
            },
            "range": [
              2689,
              2735
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 204
              },
              "start": {
                "column": 4,
                "line": 202
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2744,
                    2745
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 205
                    },
                    "start": {
                      "column": 8,
                      "line": 205
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
                  2740,
                  2743
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 205
                  },
                  "start": {
                    "column": 4,
                    "line": 205
                  }
                }
              },
              "optional": false,
              "range": [
                2740,
                2746
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 205
                },
                "start": {
                  "column": 4,
                  "line": 205
                }
              }
            },
            "range": [
              2740,
              2747
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 205
              },
              "start": {
                "column": 4,
                "line": 205
              }
            }
          }
        ],
        "range": [
          2683,
          2749
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 206
          },
          "start": {
            "column": 16,
            "line": 201
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "range": [
          2676,
          2680
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 201
          },
          "start": {
            "column": 9,
            "line": 201
          }
        }
      },
      "params": [],
      "range": [
        2667,
        2749
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 206
        },
        "start": {
          "column": 0,
          "line": 201
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2808,
                          2809
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 210
                          },
                          "start": {
                            "column": 12,
                            "line": 210
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
                        2804,
                        2807
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 210
                        },
                        "start": {
                          "column": 8,
                          "line": 210
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2804,
                      2810
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 210
                      },
                      "start": {
                        "column": 8,
                        "line": 210
                      }
                    }
                  },
                  "range": [
                    2804,
                    2811
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 210
                    },
                    "start": {
                      "column": 8,
                      "line": 210
                    }
                  }
                }
              ],
              "range": [
                2794,
                2817
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 211
                },
                "start": {
                  "column": 24,
                  "line": 209
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2785,
                      2786
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 209
                      },
                      "start": {
                        "column": 15,
                        "line": 209
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2785,
                    2786
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 209
                    },
                    "start": {
                      "column": 15,
                      "line": 209
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2779,
                2786
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 209
                },
                "start": {
                  "column": 9,
                  "line": 209
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2790,
                2792
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 209
                },
                "start": {
                  "column": 20,
                  "line": 209
                }
              }
            },
            "range": [
              2774,
              2817
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 211
              },
              "start": {
                "column": 4,
                "line": 209
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2826,
                    2827
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 212
                    },
                    "start": {
                      "column": 8,
                      "line": 212
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
                  2822,
                  2825
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 212
                  },
                  "start": {
                    "column": 4,
                    "line": 212
                  }
                }
              },
              "optional": false,
              "range": [
                2822,
                2828
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 212
                },
                "start": {
                  "column": 4,
                  "line": 212
                }
              }
            },
            "range": [
              2822,
              2829
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 212
              },
              "start": {
                "column": 4,
                "line": 212
              }
            }
          }
        ],
        "range": [
          2768,
          2831
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 213
          },
          "start": {
            "column": 17,
            "line": 208
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "range": [
          2760,
          2765
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 208
          },
          "start": {
            "column": 9,
            "line": 208
          }
        }
      },
      "params": [],
      "range": [
        2751,
        2831
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 213
        },
        "start": {
          "column": 0,
          "line": 208
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2892,
                          2893
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 217
                          },
                          "start": {
                            "column": 12,
                            "line": 217
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
                        2888,
                        2891
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 217
                        },
                        "start": {
                          "column": 8,
                          "line": 217
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2888,
                      2894
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 217
                      },
                      "start": {
                        "column": 8,
                        "line": 217
                      }
                    }
                  },
                  "range": [
                    2888,
                    2895
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 217
                    },
                    "start": {
                      "column": 8,
                      "line": 217
                    }
                  }
                }
              ],
              "range": [
                2878,
                2901
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 218
                },
                "start": {
                  "column": 26,
                  "line": 216
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          2868,
                          2869
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 216
                          },
                          "start": {
                            "column": 16,
                            "line": 216
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2867,
                      2870
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 216
                      },
                      "start": {
                        "column": 15,
                        "line": 216
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2867,
                    2870
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 216
                    },
                    "start": {
                      "column": 15,
                      "line": 216
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2861,
                2870
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 216
                },
                "start": {
                  "column": 9,
                  "line": 216
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2874,
                2876
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 216
                },
                "start": {
                  "column": 22,
                  "line": 216
                }
              }
            },
            "range": [
              2856,
              2901
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 218
              },
              "start": {
                "column": 4,
                "line": 216
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2910,
                    2911
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 219
                    },
                    "start": {
                      "column": 8,
                      "line": 219
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
                  2906,
                  2909
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 219
                  },
                  "start": {
                    "column": 4,
                    "line": 219
                  }
                }
              },
              "optional": false,
              "range": [
                2906,
                2912
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 219
                },
                "start": {
                  "column": 4,
                  "line": 219
                }
              }
            },
            "range": [
              2906,
              2913
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 219
              },
              "start": {
                "column": 4,
                "line": 219
              }
            }
          }
        ],
        "range": [
          2850,
          2915
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 220
          },
          "start": {
            "column": 17,
            "line": 215
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "range": [
          2842,
          2847
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 215
          },
          "start": {
            "column": 9,
            "line": 215
          }
        }
      },
      "params": [],
      "range": [
        2833,
        2915
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 220
        },
        "start": {
          "column": 0,
          "line": 215
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2979,
                          2980
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 224
                          },
                          "start": {
                            "column": 12,
                            "line": 224
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
                        2975,
                        2978
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 224
                        },
                        "start": {
                          "column": 8,
                          "line": 224
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2975,
                      2981
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 224
                      },
                      "start": {
                        "column": 8,
                        "line": 224
                      }
                    }
                  },
                  "range": [
                    2975,
                    2982
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 224
                    },
                    "start": {
                      "column": 8,
                      "line": 224
                    }
                  }
                }
              ],
              "range": [
                2965,
                2988
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 225
                },
                "start": {
                  "column": 29,
                  "line": 223
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2952,
                            2953
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 223
                            },
                            "start": {
                              "column": 16,
                              "line": 223
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            2955,
                            2956
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 223
                            },
                            "start": {
                              "column": 19,
                              "line": 223
                            }
                          }
                        },
                        "range": [
                          2952,
                          2956
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 223
                          },
                          "start": {
                            "column": 16,
                            "line": 223
                          }
                        }
                      }
                    ],
                    "range": [
                      2951,
                      2957
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 223
                      },
                      "start": {
                        "column": 15,
                        "line": 223
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2951,
                    2957
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 223
                    },
                    "start": {
                      "column": 15,
                      "line": 223
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2945,
                2957
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 223
                },
                "start": {
                  "column": 9,
                  "line": 223
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2961,
                2963
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 223
                },
                "start": {
                  "column": 25,
                  "line": 223
                }
              }
            },
            "range": [
              2940,
              2988
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 225
              },
              "start": {
                "column": 4,
                "line": 223
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2997,
                    2998
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 226
                    },
                    "start": {
                      "column": 8,
                      "line": 226
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
                  2993,
                  2996
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 226
                  },
                  "start": {
                    "column": 4,
                    "line": 226
                  }
                }
              },
              "optional": false,
              "range": [
                2993,
                2999
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 226
                },
                "start": {
                  "column": 4,
                  "line": 226
                }
              }
            },
            "range": [
              2993,
              3000
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 226
              },
              "start": {
                "column": 4,
                "line": 226
              }
            }
          }
        ],
        "range": [
          2934,
          3002
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 227
          },
          "start": {
            "column": 17,
            "line": 222
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "range": [
          2926,
          2931
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 222
          },
          "start": {
            "column": 9,
            "line": 222
          }
        }
      },
      "params": [],
      "range": [
        2917,
        3002
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 227
        },
        "start": {
          "column": 0,
          "line": 222
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 227
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
