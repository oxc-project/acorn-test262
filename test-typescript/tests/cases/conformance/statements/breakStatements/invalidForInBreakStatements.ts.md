__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    42,
    474
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
        "type": "ForInStatement",
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "range": [
              101,
              104
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
              }
            }
          },
          "range": [
            95,
            105
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 18,
              "line": 8
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
                  86,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "init": null,
              "range": [
                86,
                87
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            }
          ],
          "declare": false,
          "kind": "var",
          "range": [
            82,
            87
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 8
            },
            "start": {
              "column": 5,
              "line": 8
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            91,
            93
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        },
        "range": [
          77,
          105
        ],
        "loc": {
          "end": {
            "column": 28,
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
        105
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "type": "ForInStatement",
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
                      170,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
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
                              197,
                              200
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
                            191,
                            201
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
                        181,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 13
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      175,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    170,
                    207
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
                166,
                207
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
            160,
            209
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 18,
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
                "name": "x",
                "optional": false,
                "range": [
                  151,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "init": null,
              "range": [
                151,
                152
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            }
          ],
          "declare": false,
          "kind": "var",
          "range": [
            147,
            152
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 12
            },
            "start": {
              "column": 5,
              "line": 12
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            156,
            158
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 14,
              "line": 12
            }
          }
        },
        "range": [
          142,
          209
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
          137,
          140
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
        137,
        209
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
        "type": "ForInStatement",
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
                      246,
                      248
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
                              279,
                              284
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
                            273,
                            285
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
                        263,
                        291
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
                      251,
                      291
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
                    246,
                    291
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
                242,
                291
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
            236,
            293
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 19
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
                  227,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "init": null,
              "range": [
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            }
          ],
          "declare": false,
          "kind": "var",
          "range": [
            223,
            228
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 5,
              "line": 19
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            232,
            234
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        },
        "range": [
          218,
          293
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
          211,
          216
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
        211,
        293
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
      "type": "ForInStatement",
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
                342,
                346
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
              336,
              347
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
              "type": "ForInStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  380,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 22,
                    "line": 29
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
                        371,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 29
                        },
                        "start": {
                          "column": 13,
                          "line": 29
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      371,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 29
                      },
                      "start": {
                        "column": 13,
                        "line": 29
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  367,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 29
                  },
                  "start": {
                    "column": 9,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  376,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 29
                  }
                }
              },
              "range": [
                362,
                383
              ],
              "loc": {
                "end": {
                  "column": 25,
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
                352,
                356
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
              352,
              383
            ],
            "loc": {
              "end": {
                "column": 25,
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
          330,
          385
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 18,
            "line": 26
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
                321,
                322
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "init": null,
            "range": [
              321,
              322
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          317,
          322
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          326,
          328
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 26
          },
          "start": {
            "column": 14,
            "line": 26
          }
        }
      },
      "range": [
        312,
        385
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
                428,
                429
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
                432,
                434
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
              428,
              434
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
          424,
          435
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
          418,
          422
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
        418,
        435
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
      "type": "ForInStatement",
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
                467,
                471
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
              461,
              472
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
          455,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 18,
            "line": 36
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
                446,
                447
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "init": null,
            "range": [
              446,
              447
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          442,
          447
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          451,
          453
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 36
          },
          "start": {
            "column": 14,
            "line": 36
          }
        }
      },
      "range": [
        437,
        474
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
