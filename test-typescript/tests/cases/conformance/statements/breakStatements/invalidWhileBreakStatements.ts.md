__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    42,
    442
  ],
  "body": [
    {
      "type": "BreakStatement",
      "label": null,
      "range": [
        42,
        48
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "WhileStatement",
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "range": [
              96,
              99
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          },
          "range": [
            90,
            100
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        },
        "test": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            84,
            88
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 8
            },
            "start": {
              "column": 7,
              "line": 8
            }
          }
        },
        "range": [
          77,
          100
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "range": [
          72,
          75
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
      "range": [
        72,
        100
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "WhileStatement",
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
                      159,
                      160
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
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "range": [
                              185,
                              188
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
                            179,
                            189
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        169,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 15
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      163,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    159,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                155,
                195
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            149,
            197
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        },
        "test": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            144,
            148
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 12
            },
            "start": {
              "column": 7,
              "line": 12
            }
          }
        },
        "range": [
          137,
          197
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "range": [
          132,
          135
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        132,
        197
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "WhileStatement",
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
                    "name": "fn",
                    "optional": false,
                    "range": [
                      229,
                      231
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
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
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "range": [
                              262,
                              267
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 21
                              },
                              "start": {
                                "column": 14,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            256,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 21
                            },
                            "start": {
                              "column": 8,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        246,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 22
                        },
                        "start": {
                          "column": 25,
                          "line": 20
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      234,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    229,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                225,
                274
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            219,
            276
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 13,
              "line": 19
            }
          }
        },
        "test": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            213,
            217
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 7,
              "line": 19
            }
          }
        },
        "range": [
          206,
          276
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "range": [
          199,
          204
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        199,
        276
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "range": [
                320,
                324
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 10,
                  "line": 27
                }
              }
            },
            "range": [
              314,
              325
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "LabeledStatement",
            "body": {
              "type": "WhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  353,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              },
              "test": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  347,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              },
              "range": [
                340,
                356
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "range": [
                330,
                334
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              330,
              356
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          308,
          358
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 13,
            "line": 26
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          302,
          306
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "range": [
        295,
        358
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
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
                401,
                402
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "12",
              "value": 12,
              "range": [
                405,
                407
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "range": [
              401,
              407
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          397,
          408
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "range": [
          391,
          395
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        391,
        408
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "range": [
                435,
                439
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 37
                },
                "start": {
                  "column": 10,
                  "line": 37
                }
              }
            },
            "range": [
              429,
              440
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          423,
          442
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 13,
            "line": 36
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          417,
          421
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "range": [
        410,
        442
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
