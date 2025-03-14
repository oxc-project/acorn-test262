__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    596
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
            "name": "sleep",
            "optional": false,
            "range": [
              6,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "range": [
                          64,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 1
                          },
                          "start": {
                            "column": 64,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tm",
                        "optional": false,
                        "range": [
                          73,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 1
                          },
                          "start": {
                            "column": 73,
                            "line": 1
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
                        53,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 1
                        },
                        "start": {
                          "column": 53,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      53,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 1
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        42,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 1
                        },
                        "start": {
                          "column": 42,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    42,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 1
                    },
                    "start": {
                      "column": 42,
                      "line": 1
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  34,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              "range": [
                30,
                77
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tm",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  },
                  "range": [
                    17,
                    25
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      19,
                      25
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  15,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              14,
              77
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            6,
            77
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        78
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              },
              "delegate": false,
              "range": [
                108,
                115
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              108,
              116
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "1000",
                    "value": 1000,
                    "range": [
                      133,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 16,
                        "line": 5
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sleep",
                  "optional": false,
                  "range": [
                    127,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "range": [
                  127,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              },
              "range": [
                121,
                138
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
            },
            "range": [
              121,
              139
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  150,
                  151
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
              "delegate": false,
              "range": [
                144,
                151
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              144,
              152
            ],
            "loc": {
              "end": {
                "column": 12,
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
          102,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "range": [
          96,
          99
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        80,
        154
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              162,
              165
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "range": [
                168,
                175
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "range": [
                176,
                179
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "range": [
              168,
              179
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            162,
            179
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        156,
        180
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": true,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ForOfStatement",
                "await": true,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "TemplateLiteral",
                            "expressions": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "range": [
                                  260,
                                  265
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "tail": false,
                                "value": {
                                  "cooked": "I'm loop ",
                                  "raw": "I'm loop "
                                },
                                "range": [
                                  248,
                                  260
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 13
                                  }
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "tail": true,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                },
                                "range": [
                                  265,
                                  267
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "range": [
                              248,
                              267
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
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
                          "name": "log",
                          "optional": false,
                          "range": [
                            244,
                            247
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
                          244,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        244,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
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
                          "type": "ArrowFunctionExpression",
                          "async": true,
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
                                      "name": "inner",
                                      "optional": false,
                                      "range": [
                                        311,
                                        316
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "outer",
                                      "optional": false,
                                      "range": [
                                        319,
                                        324
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      311,
                                      324
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 15
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const",
                                "range": [
                                  305,
                                  325
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "raw": "2000",
                                        "value": 2000,
                                        "range": [
                                          350,
                                          354
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 16
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "sleep",
                                      "optional": false,
                                      "range": [
                                        344,
                                        349
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      344,
                                      355
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    338,
                                    355
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  338,
                                  356
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 16
                                  }
                                }
                              },
                              {
                                "type": "IfStatement",
                                "alternate": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "range": [
                                                  516,
                                                  521
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 37,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 32,
                                                    "line": 20
                                                  }
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "range": [
                                                  547,
                                                  552
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 68,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 63,
                                                    "line": 20
                                                  }
                                                }
                                              }
                                            ],
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "tail": false,
                                                "value": {
                                                  "cooked": "I'm loop ",
                                                  "raw": "I'm loop "
                                                },
                                                "range": [
                                                  504,
                                                  516
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 32,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 20
                                                  }
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "tail": false,
                                                "value": {
                                                  "cooked": ", but I think I'm loop ",
                                                  "raw": ", but I think I'm loop "
                                                },
                                                "range": [
                                                  521,
                                                  547
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 63,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 37,
                                                    "line": 20
                                                  }
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "tail": true,
                                                "value": {
                                                  "cooked": "",
                                                  "raw": ""
                                                },
                                                "range": [
                                                  552,
                                                  554
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 70,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 68,
                                                    "line": 20
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              504,
                                              554
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 70,
                                                "line": 20
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 20
                                              }
                                            }
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "range": [
                                            500,
                                            503
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 19,
                                              "line": 20
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 20
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          500,
                                          555
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 71,
                                            "line": 20
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 20
                                          }
                                        }
                                      },
                                      "range": [
                                        500,
                                        556
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 72,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 20
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    482,
                                    570
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 19
                                    }
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "range": [
                                                  424,
                                                  429
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 37,
                                                    "line": 18
                                                  },
                                                  "start": {
                                                    "column": 32,
                                                    "line": 18
                                                  }
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "range": [
                                                  453,
                                                  458
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 66,
                                                    "line": 18
                                                  },
                                                  "start": {
                                                    "column": 61,
                                                    "line": 18
                                                  }
                                                }
                                              }
                                            ],
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "tail": false,
                                                "value": {
                                                  "cooked": "I'm loop ",
                                                  "raw": "I'm loop "
                                                },
                                                "range": [
                                                  412,
                                                  424
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 32,
                                                    "line": 18
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 18
                                                  }
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "tail": false,
                                                "value": {
                                                  "cooked": " and I know I'm loop ",
                                                  "raw": " and I know I'm loop "
                                                },
                                                "range": [
                                                  429,
                                                  453
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 61,
                                                    "line": 18
                                                  },
                                                  "start": {
                                                    "column": 37,
                                                    "line": 18
                                                  }
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "tail": true,
                                                "value": {
                                                  "cooked": "",
                                                  "raw": ""
                                                },
                                                "range": [
                                                  458,
                                                  460
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 68,
                                                    "line": 18
                                                  },
                                                  "start": {
                                                    "column": 66,
                                                    "line": 18
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              412,
                                              460
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 68,
                                                "line": 18
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 18
                                              }
                                            }
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "range": [
                                            408,
                                            411
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 19,
                                              "line": 18
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 18
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          408,
                                          461
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 69,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 18
                                          }
                                        }
                                      },
                                      "range": [
                                        408,
                                        462
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 18
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    390,
                                    476
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 17
                                    }
                                  }
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "range": [
                                      373,
                                      378
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "outer",
                                    "optional": false,
                                    "range": [
                                      383,
                                      388
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    373,
                                    388
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  369,
                                  570
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 17
                                  }
                                }
                              }
                            ],
                            "range": [
                              291,
                              580
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 22
                              },
                              "start": {
                                "column": 21,
                                "line": 14
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            279,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 22
                            },
                            "start": {
                              "column": 9,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          278,
                          583
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        278,
                        584
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    234,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 23
                    },
                    "start": {
                      "column": 37,
                      "line": 12
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
                        "name": "outer",
                        "optional": false,
                        "range": [
                          218,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 12
                          },
                          "start": {
                            "column": 21,
                            "line": 12
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        218,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    212,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "gen",
                    "optional": false,
                    "range": [
                      227,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    227,
                    232
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
                "range": [
                  201,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              195,
              592
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            183,
            592
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 1,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          182,
          595
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        182,
        596
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
