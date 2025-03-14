__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4785
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      203,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    197,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                187,
                211
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              98,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 4
                              },
                              "start": {
                                "column": 27,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            91,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          88,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        83,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "'b'",
                            "value": "b",
                            "range": [
                              130,
                              133
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 5
                              },
                              "start": {
                                "column": 27,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            123,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          120,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 17,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        115,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    58,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      153,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    153,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                48,
                177
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    42,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  41,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                40,
                46
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              36,
              211
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          30,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            },
            "range": [
              13,
              20
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      15,
                      16
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 1
                    },
                    "start": {
                      "column": 15,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      19,
                      20
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    19,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                15,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          },
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          29
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            23,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
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
        0,
        213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    },
                    "range": [
                      248,
                      256
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        250,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    247,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": null,
                "range": [
                  247,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              243,
              257
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
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          291,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 17
                          },
                          "start": {
                            "column": 16,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          295,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        291,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      291,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      299,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    288,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "range": [
                  283,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          322,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "20",
                        "value": 20,
                        "range": [
                          326,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 18
                          },
                          "start": {
                            "column": 20,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        322,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      322,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 16,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      330,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 24,
                        "line": 18
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  314,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                270,
                271
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
              262,
              342
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
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
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              347,
              349
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          237,
          375
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 22,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          224,
          226
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
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
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            },
            "range": [
              228,
              235
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      230,
                      231
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
                  },
                  "range": [
                    230,
                    231
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
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      234,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    234,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                230,
                235
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            }
          },
          "range": [
            227,
            235
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        }
      ],
      "range": [
        215,
        375
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 14
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        441,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 25
                        },
                        "start": {
                          "column": 23,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      434,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    431,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                },
                "range": [
                  426,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "20",
                      "value": 20,
                      "range": [
                        468,
                        470
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 26
                        },
                        "start": {
                          "column": 23,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      461,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    458,
                    459
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
                "range": [
                  453,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"Bad input\"",
                          "value": "Bad input",
                          "range": [
                            571,
                            582
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 28
                            },
                            "start": {
                              "column": 33,
                              "line": 28
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
                          565,
                          570
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 28
                          },
                          "start": {
                            "column": 27,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        561,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 28
                        },
                        "start": {
                          "column": 23,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      555,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 28
                      },
                      "start": {
                        "column": 17,
                        "line": 28
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  546,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                413,
                414
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "range": [
              405,
              590
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          399,
          592
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 22,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          386,
          388
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
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
                "column": 20,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            },
            "range": [
              390,
              397
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      392,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    392,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      396,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    396,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 19,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                392,
                397
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            }
          },
          "range": [
            389,
            397
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        }
      ],
      "range": [
        377,
        592
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          623,
          631
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                625,
                626
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "range": [
              625,
              626
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 34
              },
              "start": {
                "column": 9,
                "line": 34
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                628,
                629
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
            "range": [
              628,
              629
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
          }
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 34
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          621,
          622
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "range": [
        616,
        631
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        702,
                        703
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 38
                        },
                        "start": {
                          "column": 25,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      695,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 38
                      },
                      "start": {
                        "column": 18,
                        "line": 38
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      690,
                      691
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      692,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 38
                      },
                      "start": {
                        "column": 15,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    690,
                    693
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 38
                    },
                    "start": {
                      "column": 13,
                      "line": 38
                    }
                  }
                },
                "range": [
                  685,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        729,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 39
                        },
                        "start": {
                          "column": 25,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      722,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 39
                      },
                      "start": {
                        "column": 18,
                        "line": 39
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      717,
                      718
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      719,
                      720
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 39
                      },
                      "start": {
                        "column": 15,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    717,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                },
                "range": [
                  712,
                  730
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                672,
                673
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
            },
            "range": [
              664,
              736
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          658,
          738
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 25,
            "line": 36
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          642,
          643
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 15,
                "line": 36
              },
              "start": {
                "column": 12,
                "line": 36
              }
            },
            "range": [
              645,
              648
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  647,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 36
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              },
              "range": [
                647,
                648
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 36
                },
                "start": {
                  "column": 14,
                  "line": 36
                }
              }
            }
          },
          "range": [
            644,
            648
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 36
            },
            "start": {
              "column": 11,
              "line": 36
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 36
          },
          "start": {
            "column": 16,
            "line": 36
          }
        },
        "range": [
          649,
          657
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            651,
            657
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 36
            },
            "start": {
              "column": 18,
              "line": 36
            }
          }
        }
      },
      "range": [
        633,
        738
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 36
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
            "alternate": {
              "type": "SwitchStatement",
              "cases": [
                {
                  "type": "SwitchCase",
                  "consequent": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          859,
                          860
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 48
                          },
                          "start": {
                            "column": 29,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        852,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 48
                        },
                        "start": {
                          "column": 22,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        847,
                        848
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 48
                        },
                        "start": {
                          "column": 17,
                          "line": 48
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        849,
                        850
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 48
                        },
                        "start": {
                          "column": 19,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      847,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 17,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    842,
                    860
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 48
                    },
                    "start": {
                      "column": 12,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "SwitchCase",
                  "consequent": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          890,
                          891
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 49
                          },
                          "start": {
                            "column": 29,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        883,
                        891
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 49
                        },
                        "start": {
                          "column": 22,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        878,
                        879
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 49
                        },
                        "start": {
                          "column": 17,
                          "line": 49
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        880,
                        881
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 49
                        },
                        "start": {
                          "column": 19,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      878,
                      881
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 49
                      },
                      "start": {
                        "column": 17,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    873,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 49
                    },
                    "start": {
                      "column": 12,
                      "line": 49
                    }
                  }
                }
              ],
              "discriminant": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  825,
                  826
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 47
                  },
                  "start": {
                    "column": 16,
                    "line": 47
                  }
                }
              },
              "range": [
                817,
                901
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 47
                }
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    798,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 45
                    },
                    "start": {
                      "column": 16,
                      "line": 45
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  797,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 45
                  },
                  "start": {
                    "column": 15,
                    "line": 45
                  }
                }
              },
              "range": [
                790,
                799
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  776,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 44
                  },
                  "start": {
                    "column": 9,
                    "line": 44
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                775,
                780
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 44
                }
              }
            },
            "range": [
              771,
              901
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          765,
          903
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 25,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          749,
          750
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 15,
                "line": 43
              },
              "start": {
                "column": 12,
                "line": 43
              }
            },
            "range": [
              752,
              755
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  754,
                  755
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 43
                  },
                  "start": {
                    "column": 14,
                    "line": 43
                  }
                }
              },
              "range": [
                754,
                755
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 43
                },
                "start": {
                  "column": 14,
                  "line": 43
                }
              }
            }
          },
          "range": [
            751,
            755
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 43
            },
            "start": {
              "column": 11,
              "line": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 43
          },
          "start": {
            "column": 16,
            "line": 43
          }
        },
        "range": [
          756,
          764
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            758,
            764
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 43
            },
            "start": {
              "column": 18,
              "line": 43
            }
          }
        }
      },
      "range": [
        740,
        903
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          944,
          977
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                946,
                950
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 55
                },
                "start": {
                  "column": 19,
                  "line": 55
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 55
                },
                "start": {
                  "column": 23,
                  "line": 55
                }
              },
              "range": [
                950,
                960
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"square\"",
                  "value": "square",
                  "range": [
                    952,
                    960
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 55
                    },
                    "start": {
                      "column": 25,
                      "line": 55
                    }
                  }
                },
                "range": [
                  952,
                  960
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 55
                  },
                  "start": {
                    "column": 25,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              946,
              961
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 55
              },
              "start": {
                "column": 19,
                "line": 55
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "range": [
                962,
                966
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 55
                },
                "start": {
                  "column": 35,
                  "line": 55
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 55
                },
                "start": {
                  "column": 39,
                  "line": 55
                }
              },
              "range": [
                966,
                974
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  968,
                  974
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 55
                  },
                  "start": {
                    "column": 41,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              962,
              975
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 55
              },
              "start": {
                "column": 35,
                "line": 55
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 55
          },
          "start": {
            "column": 17,
            "line": 55
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Square",
        "optional": false,
        "range": [
          937,
          943
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 55
          },
          "start": {
            "column": 10,
            "line": 55
          }
        }
      },
      "range": [
        927,
        977
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          999,
          1052
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                1001,
                1005
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 57
                },
                "start": {
                  "column": 22,
                  "line": 57
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 57
                },
                "start": {
                  "column": 26,
                  "line": 57
                }
              },
              "range": [
                1005,
                1018
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"rectangle\"",
                  "value": "rectangle",
                  "range": [
                    1007,
                    1018
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 57
                    },
                    "start": {
                      "column": 28,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1007,
                  1018
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 57
                  },
                  "start": {
                    "column": 28,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1001,
              1019
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 57
              },
              "start": {
                "column": 22,
                "line": 57
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "range": [
                1020,
                1025
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 57
                },
                "start": {
                  "column": 41,
                  "line": 57
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 57
                },
                "start": {
                  "column": 46,
                  "line": 57
                }
              },
              "range": [
                1025,
                1033
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1027,
                  1033
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 57
                  },
                  "start": {
                    "column": 48,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1020,
              1034
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 57
              },
              "start": {
                "column": 41,
                "line": 57
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "range": [
                1035,
                1041
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 57
                },
                "start": {
                  "column": 56,
                  "line": 57
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 57
                },
                "start": {
                  "column": 62,
                  "line": 57
                }
              },
              "range": [
                1041,
                1049
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1043,
                  1049
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 57
                  },
                  "start": {
                    "column": 64,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1035,
              1050
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 57
              },
              "start": {
                "column": 56,
                "line": 57
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 57
          },
          "start": {
            "column": 20,
            "line": 57
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "range": [
          989,
          998
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 57
          },
          "start": {
            "column": 10,
            "line": 57
          }
        }
      },
      "range": [
        979,
        1052
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1071,
          1106
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                1073,
                1077
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 59
                },
                "start": {
                  "column": 19,
                  "line": 59
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 59
                },
                "start": {
                  "column": 23,
                  "line": 59
                }
              },
              "range": [
                1077,
                1087
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"circle\"",
                  "value": "circle",
                  "range": [
                    1079,
                    1087
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 59
                    },
                    "start": {
                      "column": 25,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1079,
                  1087
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 59
                  },
                  "start": {
                    "column": 25,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1073,
              1088
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 59
              },
              "start": {
                "column": 19,
                "line": 59
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "range": [
                1089,
                1095
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 59
                },
                "start": {
                  "column": 35,
                  "line": 59
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 59
                },
                "start": {
                  "column": 41,
                  "line": 59
                }
              },
              "range": [
                1095,
                1103
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1097,
                  1103
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 59
                  },
                  "start": {
                    "column": 43,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1089,
              1104
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 59
              },
              "start": {
                "column": 35,
                "line": 59
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 59
          },
          "start": {
            "column": 17,
            "line": 59
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "range": [
          1064,
          1070
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 59
          },
          "start": {
            "column": 10,
            "line": 59
          }
        }
      },
      "range": [
        1054,
        1106
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1127,
          1162
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                1129,
                1133
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 21,
                  "line": 61
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 61
                },
                "start": {
                  "column": 25,
                  "line": 61
                }
              },
              "range": [
                1133,
                1145
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"triangle\"",
                  "value": "triangle",
                  "range": [
                    1135,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 61
                    },
                    "start": {
                      "column": 27,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1135,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 61
                  },
                  "start": {
                    "column": 27,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1129,
              1146
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 61
              },
              "start": {
                "column": 21,
                "line": 61
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "side",
              "optional": false,
              "range": [
                1147,
                1151
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 61
                },
                "start": {
                  "column": 39,
                  "line": 61
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 61
                },
                "start": {
                  "column": 43,
                  "line": 61
                }
              },
              "range": [
                1151,
                1159
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1153,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 61
                  },
                  "start": {
                    "column": 45,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1147,
              1160
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 61
              },
              "start": {
                "column": 39,
                "line": 61
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 61
          },
          "start": {
            "column": 19,
            "line": 61
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Triangle",
        "optional": false,
        "range": [
          1118,
          1126
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 61
          },
          "start": {
            "column": 10,
            "line": 61
          }
        }
      },
      "range": [
        1108,
        1162
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "range": [
          1169,
          1174
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 63
          },
          "start": {
            "column": 5,
            "line": 63
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square",
              "optional": false,
              "range": [
                1177,
                1183
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 63
                },
                "start": {
                  "column": 13,
                  "line": 63
                }
              }
            },
            "range": [
              1177,
              1183
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 63
              },
              "start": {
                "column": 13,
                "line": 63
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "range": [
                1186,
                1195
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 63
                },
                "start": {
                  "column": 22,
                  "line": 63
                }
              }
            },
            "range": [
              1186,
              1195
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 63
              },
              "start": {
                "column": 22,
                "line": 63
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "range": [
                1198,
                1204
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 63
                },
                "start": {
                  "column": 34,
                  "line": 63
                }
              }
            },
            "range": [
              1198,
              1204
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 63
              },
              "start": {
                "column": 34,
                "line": 63
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Triangle",
              "optional": false,
              "range": [
                1207,
                1215
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 63
                },
                "start": {
                  "column": 43,
                  "line": 63
                }
              }
            },
            "range": [
              1207,
              1215
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 63
              },
              "start": {
                "column": 43,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1177,
          1215
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 63
          },
          "start": {
            "column": 13,
            "line": 63
          }
        }
      },
      "range": [
        1164,
        1216
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
                  "name": "area",
                  "optional": false,
                  "range": [
                    1260,
                    1264
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                "init": null,
                "range": [
                  1260,
                  1264
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1256,
              1265
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "range": [
                          1311,
                          1315
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 68
                          },
                          "start": {
                            "column": 23,
                            "line": 68
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1318,
                              1319
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 68
                              },
                              "start": {
                                "column": 30,
                                "line": 68
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "range": [
                              1320,
                              1324
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 68
                              },
                              "start": {
                                "column": 32,
                                "line": 68
                              }
                            }
                          },
                          "range": [
                            1318,
                            1324
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 68
                            },
                            "start": {
                              "column": 30,
                              "line": 68
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1327,
                              1328
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 68
                              },
                              "start": {
                                "column": 39,
                                "line": 68
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "range": [
                              1329,
                              1333
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 68
                              },
                              "start": {
                                "column": 41,
                                "line": 68
                              }
                            }
                          },
                          "range": [
                            1327,
                            1333
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 68
                            },
                            "start": {
                              "column": 39,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1318,
                          1333
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 68
                          },
                          "start": {
                            "column": 30,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1311,
                        1333
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 68
                        },
                        "start": {
                          "column": 23,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1311,
                      1334
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 68
                      },
                      "start": {
                        "column": 23,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      1335,
                      1341
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 68
                      },
                      "start": {
                        "column": 47,
                        "line": 68
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"square\"",
                  "value": "square",
                  "range": [
                    1301,
                    1309
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 68
                    },
                    "start": {
                      "column": 13,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1296,
                  1341
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "range": [
                          1368,
                          1372
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 69
                          },
                          "start": {
                            "column": 26,
                            "line": 69
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1375,
                              1376
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 69
                              },
                              "start": {
                                "column": 33,
                                "line": 69
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "range": [
                              1377,
                              1382
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 69
                              },
                              "start": {
                                "column": 35,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            1375,
                            1382
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 69
                            },
                            "start": {
                              "column": 33,
                              "line": 69
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1385,
                              1386
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 69
                              },
                              "start": {
                                "column": 43,
                                "line": 69
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "height",
                            "optional": false,
                            "range": [
                              1387,
                              1393
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 69
                              },
                              "start": {
                                "column": 45,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            1385,
                            1393
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 69
                            },
                            "start": {
                              "column": 43,
                              "line": 69
                            }
                          }
                        },
                        "range": [
                          1375,
                          1393
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 69
                          },
                          "start": {
                            "column": 33,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1368,
                        1393
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 69
                        },
                        "start": {
                          "column": 26,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1368,
                      1394
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 69
                      },
                      "start": {
                        "column": 26,
                        "line": 69
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      1395,
                      1401
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 69
                      },
                      "start": {
                        "column": 53,
                        "line": 69
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"rectangle\"",
                  "value": "rectangle",
                  "range": [
                    1355,
                    1366
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 69
                    },
                    "start": {
                      "column": 13,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1350,
                  1401
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "range": [
                          1425,
                          1429
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 70
                          },
                          "start": {
                            "column": 23,
                            "line": 70
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Math",
                              "optional": false,
                              "range": [
                                1432,
                                1436
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 70
                                },
                                "start": {
                                  "column": 30,
                                  "line": 70
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PI",
                              "optional": false,
                              "range": [
                                1437,
                                1439
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 70
                                },
                                "start": {
                                  "column": 35,
                                  "line": 70
                                }
                              }
                            },
                            "range": [
                              1432,
                              1439
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 70
                              },
                              "start": {
                                "column": 30,
                                "line": 70
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                1442,
                                1443
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 70
                                },
                                "start": {
                                  "column": 40,
                                  "line": 70
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "radius",
                              "optional": false,
                              "range": [
                                1444,
                                1450
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 70
                                },
                                "start": {
                                  "column": 42,
                                  "line": 70
                                }
                              }
                            },
                            "range": [
                              1442,
                              1450
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 70
                              },
                              "start": {
                                "column": 40,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            1432,
                            1450
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 70
                            },
                            "start": {
                              "column": 30,
                              "line": 70
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1453,
                              1454
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 70
                              },
                              "start": {
                                "column": 51,
                                "line": 70
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "range": [
                              1455,
                              1461
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 70
                              },
                              "start": {
                                "column": 53,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            1453,
                            1461
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 70
                            },
                            "start": {
                              "column": 51,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1432,
                          1461
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 70
                          },
                          "start": {
                            "column": 30,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1425,
                        1461
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 70
                        },
                        "start": {
                          "column": 23,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1425,
                      1462
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 70
                      },
                      "start": {
                        "column": 23,
                        "line": 70
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      1463,
                      1469
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 70
                      },
                      "start": {
                        "column": 61,
                        "line": 70
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"circle\"",
                  "value": "circle",
                  "range": [
                    1415,
                    1423
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 70
                    },
                    "start": {
                      "column": 13,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1410,
                  1469
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "range": [
                          1495,
                          1499
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 71
                          },
                          "start": {
                            "column": 25,
                            "line": 71
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    1512,
                                    1513
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 71
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 71
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
                                  "name": "Math",
                                  "optional": false,
                                  "range": [
                                    1502,
                                    1506
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 71
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 71
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "range": [
                                    1507,
                                    1511
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 71
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 71
                                    }
                                  }
                                },
                                "range": [
                                  1502,
                                  1511
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 71
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1502,
                                1514
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 71
                                },
                                "start": {
                                  "column": 32,
                                  "line": 71
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "4",
                              "value": 4,
                              "range": [
                                1517,
                                1518
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 71
                                },
                                "start": {
                                  "column": 47,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              1502,
                              1518
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 71
                              },
                              "start": {
                                "column": 32,
                                "line": 71
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                1521,
                                1522
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 71
                                },
                                "start": {
                                  "column": 51,
                                  "line": 71
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "side",
                              "optional": false,
                              "range": [
                                1523,
                                1527
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 71
                                },
                                "start": {
                                  "column": 53,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              1521,
                              1527
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 71
                              },
                              "start": {
                                "column": 51,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1502,
                            1527
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 71
                            },
                            "start": {
                              "column": 32,
                              "line": 71
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1530,
                              1531
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 71
                              },
                              "start": {
                                "column": 60,
                                "line": 71
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "side",
                            "optional": false,
                            "range": [
                              1532,
                              1536
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 71
                              },
                              "start": {
                                "column": 62,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1530,
                            1536
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 71
                            },
                            "start": {
                              "column": 60,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1502,
                          1536
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 71
                          },
                          "start": {
                            "column": 32,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1495,
                        1536
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 71
                        },
                        "start": {
                          "column": 25,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1495,
                      1537
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 71
                      },
                      "start": {
                        "column": 25,
                        "line": 71
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      1538,
                      1544
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 71
                      },
                      "start": {
                        "column": 68,
                        "line": 71
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"triangle\"",
                  "value": "triangle",
                  "range": [
                    1483,
                    1493
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 71
                    },
                    "start": {
                      "column": 13,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1478,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1278,
                  1279
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 67
                  },
                  "start": {
                    "column": 12,
                    "line": 67
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  1280,
                  1284
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 67
                  },
                  "start": {
                    "column": 14,
                    "line": 67
                  }
                }
              },
              "range": [
                1278,
                1284
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 67
                },
                "start": {
                  "column": 12,
                  "line": 67
                }
              }
            },
            "range": [
              1270,
              1550
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "area",
              "optional": false,
              "range": [
                1562,
                1566
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 73
                },
                "start": {
                  "column": 11,
                  "line": 73
                }
              }
            },
            "range": [
              1555,
              1567
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "range": [
          1250,
          1569
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 32,
            "line": 65
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area",
        "optional": false,
        "range": [
          1227,
          1231
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 65
          },
          "start": {
            "column": 9,
            "line": 65
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 65
              },
              "start": {
                "column": 15,
                "line": 65
              }
            },
            "range": [
              1233,
              1240
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1235,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 65
                  },
                  "start": {
                    "column": 17,
                    "line": 65
                  }
                }
              },
              "range": [
                1235,
                1240
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 65
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              }
            }
          },
          "range": [
            1232,
            1240
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 65
            },
            "start": {
              "column": 14,
              "line": 65
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 65
          },
          "start": {
            "column": 23,
            "line": 65
          }
        },
        "range": [
          1241,
          1249
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1243,
            1249
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 65
            },
            "start": {
              "column": 25,
              "line": 65
            }
          }
        }
      },
      "range": [
        1218,
        1569
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 65
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
                  "name": "area",
                  "optional": false,
                  "range": [
                    1620,
                    1624
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                "init": null,
                "range": [
                  1620,
                  1624
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 77
                  },
                  "start": {
                    "column": 8,
                    "line": 77
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1616,
              1625
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "area",
                "optional": false,
                "range": [
                  1630,
                  1634
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 78
                  },
                  "start": {
                    "column": 4,
                    "line": 78
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "SwitchStatement",
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "range": [
                                        1706,
                                        1707
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 80
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "range": [
                                        1708,
                                        1712
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 80
                                        }
                                      }
                                    },
                                    "range": [
                                      1706,
                                      1712
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "range": [
                                        1715,
                                        1716
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 80
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "range": [
                                        1717,
                                        1721
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 45,
                                          "line": 80
                                        }
                                      }
                                    },
                                    "range": [
                                      1715,
                                      1721
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "range": [
                                    1706,
                                    1721
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 80
                                    }
                                  }
                                },
                                "range": [
                                  1699,
                                  1722
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 80
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 80
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "raw": "\"square\"",
                              "value": "square",
                              "range": [
                                1689,
                                1697
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 80
                                },
                                "start": {
                                  "column": 17,
                                  "line": 80
                                }
                              }
                            },
                            "range": [
                              1684,
                              1722
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 80
                              },
                              "start": {
                                "column": 12,
                                "line": 80
                              }
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "range": [
                                        1760,
                                        1761
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 81
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "width",
                                      "optional": false,
                                      "range": [
                                        1762,
                                        1767
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 81
                                        }
                                      }
                                    },
                                    "range": [
                                      1760,
                                      1767
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "range": [
                                        1770,
                                        1771
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 81
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "height",
                                      "optional": false,
                                      "range": [
                                        1772,
                                        1778
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 81
                                        }
                                      }
                                    },
                                    "range": [
                                      1770,
                                      1778
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    1760,
                                    1778
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 81
                                    }
                                  }
                                },
                                "range": [
                                  1753,
                                  1779
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 81
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "raw": "\"rectangle\"",
                              "value": "rectangle",
                              "range": [
                                1740,
                                1751
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 81
                                },
                                "start": {
                                  "column": 17,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              1735,
                              1779
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 81
                              },
                              "start": {
                                "column": 12,
                                "line": 81
                              }
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Math",
                                        "optional": false,
                                        "range": [
                                          1814,
                                          1818
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 34,
                                            "line": 82
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "PI",
                                        "optional": false,
                                        "range": [
                                          1819,
                                          1821
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 82
                                          }
                                        }
                                      },
                                      "range": [
                                        1814,
                                        1821
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 82
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "range": [
                                          1824,
                                          1825
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 82
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "radius",
                                        "optional": false,
                                        "range": [
                                          1826,
                                          1832
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 82
                                          }
                                        }
                                      },
                                      "range": [
                                        1824,
                                        1832
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 82
                                        }
                                      }
                                    },
                                    "range": [
                                      1814,
                                      1832
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "range": [
                                        1835,
                                        1836
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 56,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 55,
                                          "line": 82
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "radius",
                                      "optional": false,
                                      "range": [
                                        1837,
                                        1843
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 57,
                                          "line": 82
                                        }
                                      }
                                    },
                                    "range": [
                                      1835,
                                      1843
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 63,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "range": [
                                    1814,
                                    1843
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 82
                                    }
                                  }
                                },
                                "range": [
                                  1807,
                                  1844
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 82
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "raw": "\"circle\"",
                              "value": "circle",
                              "range": [
                                1797,
                                1805
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 82
                                },
                                "start": {
                                  "column": 17,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              1792,
                              1844
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 82
                              },
                              "start": {
                                "column": 12,
                                "line": 82
                              }
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "CallExpression",
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "raw": "3",
                                            "value": 3,
                                            "range": [
                                              1891,
                                              1892
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 47,
                                                "line": 83
                                              },
                                              "start": {
                                                "column": 46,
                                                "line": 83
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
                                            "name": "Math",
                                            "optional": false,
                                            "range": [
                                              1881,
                                              1885
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 40,
                                                "line": 83
                                              },
                                              "start": {
                                                "column": 36,
                                                "line": 83
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "sqrt",
                                            "optional": false,
                                            "range": [
                                              1886,
                                              1890
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 45,
                                                "line": 83
                                              },
                                              "start": {
                                                "column": 41,
                                                "line": 83
                                              }
                                            }
                                          },
                                          "range": [
                                            1881,
                                            1890
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 45,
                                              "line": 83
                                            },
                                            "start": {
                                              "column": 36,
                                              "line": 83
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          1881,
                                          1893
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 83
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 83
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "raw": "4",
                                        "value": 4,
                                        "range": [
                                          1896,
                                          1897
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 83
                                          },
                                          "start": {
                                            "column": 51,
                                            "line": 83
                                          }
                                        }
                                      },
                                      "range": [
                                        1881,
                                        1897
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "range": [
                                          1900,
                                          1901
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 56,
                                            "line": 83
                                          },
                                          "start": {
                                            "column": 55,
                                            "line": 83
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "side",
                                        "optional": false,
                                        "range": [
                                          1902,
                                          1906
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 61,
                                            "line": 83
                                          },
                                          "start": {
                                            "column": 57,
                                            "line": 83
                                          }
                                        }
                                      },
                                      "range": [
                                        1900,
                                        1906
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 55,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "range": [
                                      1881,
                                      1906
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 83
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "range": [
                                        1909,
                                        1910
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 65,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 64,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "side",
                                      "optional": false,
                                      "range": [
                                        1911,
                                        1915
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 66,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "range": [
                                      1909,
                                      1915
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 83
                                      }
                                    }
                                  },
                                  "range": [
                                    1881,
                                    1915
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 83
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 83
                                    }
                                  }
                                },
                                "range": [
                                  1874,
                                  1916
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 83
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "raw": "\"triangle\"",
                              "value": "triangle",
                              "range": [
                                1862,
                                1872
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 83
                                },
                                "start": {
                                  "column": 17,
                                  "line": 83
                                }
                              }
                            },
                            "range": [
                              1857,
                              1916
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 83
                              },
                              "start": {
                                "column": 12,
                                "line": 83
                              }
                            }
                          }
                        ],
                        "discriminant": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              1662,
                              1663
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 79
                              },
                              "start": {
                                "column": 16,
                                "line": 79
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "range": [
                              1664,
                              1668
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 79
                              },
                              "start": {
                                "column": 18,
                                "line": 79
                              }
                            }
                          },
                          "range": [
                            1662,
                            1668
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 79
                            },
                            "start": {
                              "column": 16,
                              "line": 79
                            }
                          }
                        },
                        "range": [
                          1654,
                          1926
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 84
                          },
                          "start": {
                            "column": 8,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "range": [
                      1644,
                      1932
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 85
                      },
                      "start": {
                        "column": 18,
                        "line": 78
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1638,
                    1932
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 85
                    },
                    "start": {
                      "column": 12,
                      "line": 78
                    }
                  }
                },
                "optional": false,
                "range": [
                  1637,
                  1935
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 85
                  },
                  "start": {
                    "column": 11,
                    "line": 78
                  }
                }
              },
              "range": [
                1630,
                1935
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            "range": [
              1630,
              1936
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "area",
              "optional": false,
              "range": [
                1948,
                1952
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 86
                },
                "start": {
                  "column": 11,
                  "line": 86
                }
              }
            },
            "range": [
              1941,
              1953
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1610,
          1955
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 39,
            "line": 76
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "areaWrapped",
        "optional": false,
        "range": [
          1580,
          1591
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 76
          },
          "start": {
            "column": 9,
            "line": 76
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 76
              },
              "start": {
                "column": 22,
                "line": 76
              }
            },
            "range": [
              1593,
              1600
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1595,
                  1600
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 76
                  },
                  "start": {
                    "column": 24,
                    "line": 76
                  }
                }
              },
              "range": [
                1595,
                1600
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 76
                },
                "start": {
                  "column": 24,
                  "line": 76
                }
              }
            }
          },
          "range": [
            1592,
            1600
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 76
            },
            "start": {
              "column": 21,
              "line": 76
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 76
          },
          "start": {
            "column": 30,
            "line": 76
          }
        },
        "range": [
          1601,
          1609
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1603,
            1609
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 76
            },
            "start": {
              "column": 32,
              "line": 76
            }
          }
        }
      },
      "range": [
        1571,
        1955
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1991,
          2001
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1994,
                1995
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 92
                },
                "start": {
                  "column": 1,
                  "line": 92
                }
              }
            },
            "range": [
              1994,
              1995
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 92
              },
              "start": {
                "column": 1,
                "line": 92
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                1998,
                1999
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 93
                },
                "start": {
                  "column": 1,
                  "line": 93
                }
              }
            },
            "range": [
              1998,
              1999
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 93
              },
              "start": {
                "column": 1,
                "line": 93
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 12,
            "line": 91
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "range": [
          1984,
          1990
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 91
          },
          "start": {
            "column": 5,
            "line": 91
          }
        }
      },
      "range": [
        1979,
        2001
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 91
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 97
                      },
                      "start": {
                        "column": 6,
                        "line": 97
                      }
                    },
                    "range": [
                      2054,
                      2062
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2056,
                        2062
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 97
                        },
                        "start": {
                          "column": 8,
                          "line": 97
                        }
                      }
                    }
                  },
                  "range": [
                    2053,
                    2062
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 97
                    },
                    "start": {
                      "column": 5,
                      "line": 97
                    }
                  }
                },
                "init": null,
                "range": [
                  2053,
                  2062
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 97
                  },
                  "start": {
                    "column": 5,
                    "line": 97
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2049,
              2063
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 97
              },
              "start": {
                "column": 1,
                "line": 97
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          2095,
                          2096
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 99
                          },
                          "start": {
                            "column": 17,
                            "line": 99
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"it was A\"",
                        "value": "it was A",
                        "range": [
                          2099,
                          2109
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 99
                          },
                          "start": {
                            "column": 21,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        2095,
                        2109
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 99
                        },
                        "start": {
                          "column": 17,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2095,
                      2110
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 99
                      },
                      "start": {
                        "column": 17,
                        "line": 99
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2111,
                      2117
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 99
                      },
                      "start": {
                        "column": 33,
                        "line": 99
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "range": [
                      2085,
                      2091
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 99
                      },
                      "start": {
                        "column": 7,
                        "line": 99
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      2092,
                      2093
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 99
                      },
                      "start": {
                        "column": 14,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2085,
                    2093
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 99
                    },
                    "start": {
                      "column": 7,
                      "line": 99
                    }
                  }
                },
                "range": [
                  2080,
                  2117
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 99
                  },
                  "start": {
                    "column": 2,
                    "line": 99
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          2135,
                          2136
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 100
                          },
                          "start": {
                            "column": 17,
                            "line": 100
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"it was B\"",
                        "value": "it was B",
                        "range": [
                          2139,
                          2149
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 100
                          },
                          "start": {
                            "column": 21,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        2135,
                        2149
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 100
                        },
                        "start": {
                          "column": 17,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      2135,
                      2150
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 100
                      },
                      "start": {
                        "column": 17,
                        "line": 100
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2151,
                      2157
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 100
                      },
                      "start": {
                        "column": 33,
                        "line": 100
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "range": [
                      2125,
                      2131
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 100
                      },
                      "start": {
                        "column": 7,
                        "line": 100
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      2132,
                      2133
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 100
                      },
                      "start": {
                        "column": 14,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2125,
                    2133
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 100
                    },
                    "start": {
                      "column": 7,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2120,
                  2157
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 100
                  },
                  "start": {
                    "column": 2,
                    "line": 100
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                2073,
                2074
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 98
                },
                "start": {
                  "column": 9,
                  "line": 98
                }
              }
            },
            "range": [
              2065,
              2160
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 101
              },
              "start": {
                "column": 1,
                "line": 98
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                2169,
                2170
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
            "range": [
              2162,
              2171
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 102
              },
              "start": {
                "column": 1,
                "line": 102
              }
            }
          }
        ],
        "range": [
          2046,
          2173
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 43,
            "line": 96
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "thisGivesError",
        "optional": false,
        "range": [
          2012,
          2026
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 96
          },
          "start": {
            "column": 9,
            "line": 96
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 96
              },
              "start": {
                "column": 25,
                "line": 96
              }
            },
            "range": [
              2028,
              2036
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "range": [
                  2030,
                  2036
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 96
                  },
                  "start": {
                    "column": 27,
                    "line": 96
                  }
                }
              },
              "range": [
                2030,
                2036
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 96
                },
                "start": {
                  "column": 27,
                  "line": 96
                }
              }
            }
          },
          "range": [
            2027,
            2036
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 96
            },
            "start": {
              "column": 24,
              "line": 96
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 96
          },
          "start": {
            "column": 34,
            "line": 96
          }
        },
        "range": [
          2037,
          2045
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            2039,
            2045
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 96
            },
            "start": {
              "column": 36,
              "line": 96
            }
          }
        }
      },
      "range": [
        2003,
        2173
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 96
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 106
                      },
                      "start": {
                        "column": 6,
                        "line": 106
                      }
                    },
                    "range": [
                      2217,
                      2225
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2219,
                        2225
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
                    }
                  },
                  "range": [
                    2216,
                    2225
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 106
                    },
                    "start": {
                      "column": 5,
                      "line": 106
                    }
                  }
                },
                "init": null,
                "range": [
                  2216,
                  2225
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 106
                  },
                  "start": {
                    "column": 5,
                    "line": 106
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2212,
              2226
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 106
              },
              "start": {
                "column": 1,
                "line": 106
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          2258,
                          2259
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 108
                          },
                          "start": {
                            "column": 17,
                            "line": 108
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"it was A\"",
                        "value": "it was A",
                        "range": [
                          2262,
                          2272
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 108
                          },
                          "start": {
                            "column": 21,
                            "line": 108
                          }
                        }
                      },
                      "range": [
                        2258,
                        2272
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 108
                        },
                        "start": {
                          "column": 17,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      2258,
                      2273
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 108
                      },
                      "start": {
                        "column": 17,
                        "line": 108
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2274,
                      2280
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 108
                      },
                      "start": {
                        "column": 33,
                        "line": 108
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "range": [
                      2248,
                      2254
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 108
                      },
                      "start": {
                        "column": 7,
                        "line": 108
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      2255,
                      2256
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 108
                      },
                      "start": {
                        "column": 14,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    2248,
                    2256
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 108
                    },
                    "start": {
                      "column": 7,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2243,
                  2280
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 108
                  },
                  "start": {
                    "column": 2,
                    "line": 108
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          2298,
                          2299
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 109
                          },
                          "start": {
                            "column": 17,
                            "line": 109
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"it was B\"",
                        "value": "it was B",
                        "range": [
                          2302,
                          2312
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 109
                          },
                          "start": {
                            "column": 21,
                            "line": 109
                          }
                        }
                      },
                      "range": [
                        2298,
                        2312
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 109
                        },
                        "start": {
                          "column": 17,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      2298,
                      2313
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 109
                      },
                      "start": {
                        "column": 17,
                        "line": 109
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2314,
                      2320
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 109
                      },
                      "start": {
                        "column": 33,
                        "line": 109
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "range": [
                      2288,
                      2294
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 109
                      },
                      "start": {
                        "column": 7,
                        "line": 109
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      2295,
                      2296
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 109
                      },
                      "start": {
                        "column": 14,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    2288,
                    2296
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 109
                    },
                    "start": {
                      "column": 7,
                      "line": 109
                    }
                  }
                },
                "range": [
                  2283,
                  2320
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 109
                  },
                  "start": {
                    "column": 2,
                    "line": 109
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          2332,
                          2333
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 110
                          },
                          "start": {
                            "column": 11,
                            "line": 110
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"it was something else\"",
                        "value": "it was something else",
                        "range": [
                          2336,
                          2359
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 110
                          },
                          "start": {
                            "column": 15,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        2332,
                        2359
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 110
                        },
                        "start": {
                          "column": 11,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      2332,
                      2360
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 110
                      },
                      "start": {
                        "column": 11,
                        "line": 110
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      2361,
                      2367
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 110
                      },
                      "start": {
                        "column": 40,
                        "line": 110
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  2323,
                  2367
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 110
                  },
                  "start": {
                    "column": 2,
                    "line": 110
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                2236,
                2237
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 107
                },
                "start": {
                  "column": 9,
                  "line": 107
                }
              }
            },
            "range": [
              2228,
              2370
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 111
              },
              "start": {
                "column": 1,
                "line": 107
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                2379,
                2380
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 112
                },
                "start": {
                  "column": 8,
                  "line": 112
                }
              }
            },
            "range": [
              2372,
              2381
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 112
              },
              "start": {
                "column": 1,
                "line": 112
              }
            }
          }
        ],
        "range": [
          2209,
          2383
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 34,
            "line": 105
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good1",
        "optional": false,
        "range": [
          2184,
          2189
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 105
          },
          "start": {
            "column": 9,
            "line": 105
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 105
              },
              "start": {
                "column": 16,
                "line": 105
              }
            },
            "range": [
              2191,
              2199
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "range": [
                  2193,
                  2199
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 105
                  },
                  "start": {
                    "column": 18,
                    "line": 105
                  }
                }
              },
              "range": [
                2193,
                2199
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 105
                },
                "start": {
                  "column": 18,
                  "line": 105
                }
              }
            }
          },
          "range": [
            2190,
            2199
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 105
            },
            "start": {
              "column": 15,
              "line": 105
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 105
          },
          "start": {
            "column": 25,
            "line": 105
          }
        },
        "range": [
          2200,
          2208
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            2202,
            2208
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 105
            },
            "start": {
              "column": 27,
              "line": 105
            }
          }
        }
      },
      "range": [
        2175,
        2383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 105
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"it was A\"",
                      "value": "it was A",
                      "range": [
                        2459,
                        2469
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 117
                        },
                        "start": {
                          "column": 24,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      2452,
                      2470
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 117
                      },
                      "start": {
                        "column": 17,
                        "line": 117
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "range": [
                      2442,
                      2448
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 117
                      },
                      "start": {
                        "column": 7,
                        "line": 117
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      2449,
                      2450
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 117
                      },
                      "start": {
                        "column": 14,
                        "line": 117
                      }
                    }
                  },
                  "range": [
                    2442,
                    2450
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 117
                    },
                    "start": {
                      "column": 7,
                      "line": 117
                    }
                  }
                },
                "range": [
                  2437,
                  2470
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 117
                  },
                  "start": {
                    "column": 2,
                    "line": 117
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"it was B\"",
                      "value": "it was B",
                      "range": [
                        2495,
                        2505
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 118
                        },
                        "start": {
                          "column": 24,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      2488,
                      2506
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 118
                      },
                      "start": {
                        "column": 17,
                        "line": 118
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "range": [
                      2478,
                      2484
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 118
                      },
                      "start": {
                        "column": 7,
                        "line": 118
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      2485,
                      2486
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 118
                      },
                      "start": {
                        "column": 14,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    2478,
                    2486
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 118
                    },
                    "start": {
                      "column": 7,
                      "line": 118
                    }
                  }
                },
                "range": [
                  2473,
                  2506
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 118
                  },
                  "start": {
                    "column": 2,
                    "line": 118
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                2430,
                2431
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 116
                },
                "start": {
                  "column": 9,
                  "line": 116
                }
              }
            },
            "range": [
              2422,
              2509
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 119
              },
              "start": {
                "column": 1,
                "line": 116
              }
            }
          }
        ],
        "range": [
          2419,
          2511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 34,
            "line": 115
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good2",
        "optional": false,
        "range": [
          2394,
          2399
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 115
          },
          "start": {
            "column": 9,
            "line": 115
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 115
              },
              "start": {
                "column": 16,
                "line": 115
              }
            },
            "range": [
              2401,
              2409
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "range": [
                  2403,
                  2409
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 115
                  },
                  "start": {
                    "column": 18,
                    "line": 115
                  }
                }
              },
              "range": [
                2403,
                2409
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 115
                },
                "start": {
                  "column": 18,
                  "line": 115
                }
              }
            }
          },
          "range": [
            2400,
            2409
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 115
            },
            "start": {
              "column": 15,
              "line": 115
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 115
          },
          "start": {
            "column": 25,
            "line": 115
          }
        },
        "range": [
          2410,
          2418
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            2412,
            2418
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 115
            },
            "start": {
              "column": 27,
              "line": 115
            }
          }
        }
      },
      "range": [
        2385,
        2511
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          2546,
          2563
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "range": [
                2550,
                2553
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 125
                },
                "start": {
                  "column": 2,
                  "line": 125
                }
              }
            },
            "range": [
              2550,
              2553
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 125
              },
              "start": {
                "column": 2,
                "line": 125
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Two",
              "optional": false,
              "range": [
                2557,
                2560
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 126
                },
                "start": {
                  "column": 2,
                  "line": 126
                }
              }
            },
            "range": [
              2557,
              2560
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 126
              },
              "start": {
                "column": 2,
                "line": 126
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 127
          },
          "start": {
            "column": 11,
            "line": 124
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level",
        "optional": false,
        "range": [
          2540,
          2545
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 124
          },
          "start": {
            "column": 5,
            "line": 124
          }
        }
      },
      "range": [
        2535,
        2563
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 127
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "doSomethingWithLevel",
            "optional": false,
            "range": [
              2571,
              2591
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 129
              },
              "start": {
                "column": 6,
                "line": 129
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 130
                            },
                            "start": {
                              "column": 10,
                              "line": 130
                            }
                          },
                          "range": [
                            2624,
                            2631
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Level",
                              "optional": false,
                              "range": [
                                2626,
                                2631
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 130
                                },
                                "start": {
                                  "column": 12,
                                  "line": 130
                                }
                              }
                            },
                            "range": [
                              2626,
                              2631
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 130
                              },
                              "start": {
                                "column": 12,
                                "line": 130
                              }
                            }
                          }
                        },
                        "range": [
                          2620,
                          2631
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 130
                          },
                          "start": {
                            "column": 6,
                            "line": 130
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2620,
                        2631
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 130
                        },
                        "start": {
                          "column": 6,
                          "line": 130
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    2616,
                    2632
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 130
                    },
                    "start": {
                      "column": 2,
                      "line": 130
                    }
                  }
                },
                {
                  "type": "SwitchStatement",
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "range": [
                                2678,
                                2682
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 133
                                },
                                "start": {
                                  "column": 6,
                                  "line": 133
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Level",
                                "optional": false,
                                "range": [
                                  2685,
                                  2690
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 133
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 133
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Two",
                                "optional": false,
                                "range": [
                                  2691,
                                  2694
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 133
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 133
                                  }
                                }
                              },
                              "range": [
                                2685,
                                2694
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 133
                                },
                                "start": {
                                  "column": 13,
                                  "line": 133
                                }
                              }
                            },
                            "range": [
                              2678,
                              2694
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 133
                              },
                              "start": {
                                "column": 6,
                                "line": 133
                              }
                            }
                          },
                          "range": [
                            2678,
                            2695
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 133
                            },
                            "start": {
                              "column": 6,
                              "line": 133
                            }
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            2702,
                            2708
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 134
                            },
                            "start": {
                              "column": 6,
                              "line": 134
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Level",
                          "optional": false,
                          "range": [
                            2661,
                            2666
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 132
                            },
                            "start": {
                              "column": 9,
                              "line": 132
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "One",
                          "optional": false,
                          "range": [
                            2667,
                            2670
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 132
                            },
                            "start": {
                              "column": 15,
                              "line": 132
                            }
                          }
                        },
                        "range": [
                          2661,
                          2670
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 132
                          },
                          "start": {
                            "column": 9,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        2656,
                        2708
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 134
                        },
                        "start": {
                          "column": 4,
                          "line": 132
                        }
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "range": [
                                2735,
                                2739
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 136
                                },
                                "start": {
                                  "column": 6,
                                  "line": 136
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Level",
                                "optional": false,
                                "range": [
                                  2742,
                                  2747
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 136
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 136
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "One",
                                "optional": false,
                                "range": [
                                  2748,
                                  2751
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 136
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 136
                                  }
                                }
                              },
                              "range": [
                                2742,
                                2751
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 136
                                },
                                "start": {
                                  "column": 13,
                                  "line": 136
                                }
                              }
                            },
                            "range": [
                              2735,
                              2751
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 136
                              },
                              "start": {
                                "column": 6,
                                "line": 136
                              }
                            }
                          },
                          "range": [
                            2735,
                            2752
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 136
                            },
                            "start": {
                              "column": 6,
                              "line": 136
                            }
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            2759,
                            2765
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 137
                            },
                            "start": {
                              "column": 6,
                              "line": 137
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Level",
                          "optional": false,
                          "range": [
                            2718,
                            2723
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 135
                            },
                            "start": {
                              "column": 9,
                              "line": 135
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Two",
                          "optional": false,
                          "range": [
                            2724,
                            2727
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 135
                            },
                            "start": {
                              "column": 15,
                              "line": 135
                            }
                          }
                        },
                        "range": [
                          2718,
                          2727
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 135
                          },
                          "start": {
                            "column": 9,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        2713,
                        2765
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 137
                        },
                        "start": {
                          "column": 4,
                          "line": 135
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "level",
                    "optional": false,
                    "range": [
                      2643,
                      2648
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 131
                      },
                      "start": {
                        "column": 10,
                        "line": 131
                      }
                    }
                  },
                  "range": [
                    2635,
                    2769
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 138
                    },
                    "start": {
                      "column": 2,
                      "line": 131
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "range": [
                      2779,
                      2783
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 139
                      },
                      "start": {
                        "column": 9,
                        "line": 139
                      }
                    }
                  },
                  "range": [
                    2772,
                    2784
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 139
                    },
                    "start": {
                      "column": 2,
                      "line": 139
                    }
                  }
                }
              ],
              "range": [
                2612,
                2786
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 140
                },
                "start": {
                  "column": 47,
                  "line": 129
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "level",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 129
                    },
                    "start": {
                      "column": 35,
                      "line": 129
                    }
                  },
                  "range": [
                    2600,
                    2607
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Level",
                      "optional": false,
                      "range": [
                        2602,
                        2607
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 129
                        },
                        "start": {
                          "column": 37,
                          "line": 129
                        }
                      }
                    },
                    "range": [
                      2602,
                      2607
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 129
                      },
                      "start": {
                        "column": 37,
                        "line": 129
                      }
                    }
                  }
                },
                "range": [
                  2595,
                  2607
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 129
                  },
                  "start": {
                    "column": 30,
                    "line": 129
                  }
                }
              }
            ],
            "range": [
              2594,
              2786
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 140
              },
              "start": {
                "column": 29,
                "line": 129
              }
            }
          },
          "range": [
            2571,
            2786
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 140
            },
            "start": {
              "column": 6,
              "line": 129
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2565,
        2787
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2829,
          2870
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2835,
                2839
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 145
                },
                "start": {
                  "column": 4,
                  "line": 145
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 145
                },
                "start": {
                  "column": 8,
                  "line": 145
                }
              },
              "range": [
                2839,
                2849
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"square\"",
                  "value": "square",
                  "range": [
                    2841,
                    2849
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 145
                    },
                    "start": {
                      "column": 10,
                      "line": 145
                    }
                  }
                },
                "range": [
                  2841,
                  2849
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 145
                  },
                  "start": {
                    "column": 10,
                    "line": 145
                  }
                }
              }
            },
            "range": [
              2835,
              2850
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 145
              },
              "start": {
                "column": 4,
                "line": 145
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "range": [
                2855,
                2859
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 146
                },
                "start": {
                  "column": 4,
                  "line": 146
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 146
                },
                "start": {
                  "column": 8,
                  "line": 146
                }
              },
              "range": [
                2859,
                2867
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2861,
                  2867
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 146
                  },
                  "start": {
                    "column": 10,
                    "line": 146
                  }
                }
              }
            },
            "range": [
              2855,
              2868
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 146
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 147
          },
          "start": {
            "column": 18,
            "line": 144
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Square2",
        "optional": false,
        "range": [
          2821,
          2828
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 144
          },
          "start": {
            "column": 10,
            "line": 144
          }
        }
      },
      "range": [
        2811,
        2870
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 144
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2890,
          2933
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2896,
                2900
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 150
                },
                "start": {
                  "column": 4,
                  "line": 150
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 150
                },
                "start": {
                  "column": 8,
                  "line": 150
                }
              },
              "range": [
                2900,
                2910
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"circle\"",
                  "value": "circle",
                  "range": [
                    2902,
                    2910
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 150
                    },
                    "start": {
                      "column": 10,
                      "line": 150
                    }
                  }
                },
                "range": [
                  2902,
                  2910
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 150
                  },
                  "start": {
                    "column": 10,
                    "line": 150
                  }
                }
              }
            },
            "range": [
              2896,
              2911
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 150
              },
              "start": {
                "column": 4,
                "line": 150
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "range": [
                2916,
                2922
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 151
                },
                "start": {
                  "column": 4,
                  "line": 151
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 151
                },
                "start": {
                  "column": 10,
                  "line": 151
                }
              },
              "range": [
                2922,
                2930
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2924,
                  2930
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 151
                  },
                  "start": {
                    "column": 12,
                    "line": 151
                  }
                }
              }
            },
            "range": [
              2916,
              2931
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 151
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 152
          },
          "start": {
            "column": 18,
            "line": 149
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle2",
        "optional": false,
        "range": [
          2882,
          2889
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 149
          },
          "start": {
            "column": 10,
            "line": 149
          }
        }
      },
      "range": [
        2872,
        2933
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 149
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape2",
        "optional": false,
        "range": [
          2940,
          2946
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 154
          },
          "start": {
            "column": 5,
            "line": 154
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square2",
              "optional": false,
              "range": [
                2949,
                2956
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 154
                },
                "start": {
                  "column": 14,
                  "line": 154
                }
              }
            },
            "range": [
              2949,
              2956
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 154
              },
              "start": {
                "column": 14,
                "line": 154
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle2",
              "optional": false,
              "range": [
                2959,
                2966
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 154
                },
                "start": {
                  "column": 24,
                  "line": 154
                }
              }
            },
            "range": [
              2959,
              2966
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 154
              },
              "start": {
                "column": 24,
                "line": 154
              }
            }
          }
        ],
        "range": [
          2949,
          2966
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 154
          },
          "start": {
            "column": 14,
            "line": 154
          }
        }
      },
      "range": [
        2935,
        2967
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 154
        },
        "start": {
          "column": 0,
          "line": 154
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        3089,
                        3092
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 159
                        },
                        "start": {
                          "column": 19,
                          "line": 159
                        }
                      }
                    },
                    "range": [
                      3082,
                      3093
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 159
                      },
                      "start": {
                        "column": 12,
                        "line": 159
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"square\"",
                  "value": "square",
                  "range": [
                    3060,
                    3068
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 158
                    },
                    "start": {
                      "column": 13,
                      "line": 158
                    }
                  }
                },
                "range": [
                  3055,
                  3093
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 159
                  },
                  "start": {
                    "column": 8,
                    "line": 158
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"2\"",
                              "value": "2",
                              "range": [
                                3206,
                                3209
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 163
                                },
                                "start": {
                                  "column": 27,
                                  "line": 163
                                }
                              }
                            },
                            "range": [
                              3199,
                              3210
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 163
                              },
                              "start": {
                                "column": 20,
                                "line": 163
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "\"square\"",
                          "value": "square",
                          "range": [
                            3169,
                            3177
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 162
                            },
                            "start": {
                              "column": 21,
                              "line": 162
                            }
                          }
                        },
                        "range": [
                          3164,
                          3210
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 163
                          },
                          "start": {
                            "column": 16,
                            "line": 162
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"3\"",
                              "value": "3",
                              "range": [
                                3269,
                                3272
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 165
                                },
                                "start": {
                                  "column": 27,
                                  "line": 165
                                }
                              }
                            },
                            "range": [
                              3262,
                              3273
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 165
                              },
                              "start": {
                                "column": 20,
                                "line": 165
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "\"circle\"",
                          "value": "circle",
                          "range": [
                            3232,
                            3240
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 164
                            },
                            "start": {
                              "column": 21,
                              "line": 164
                            }
                          }
                        },
                        "range": [
                          3227,
                          3273
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 165
                          },
                          "start": {
                            "column": 16,
                            "line": 164
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"never\"",
                              "value": "never",
                              "range": [
                                3326,
                                3333
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 167
                                },
                                "start": {
                                  "column": 27,
                                  "line": 167
                                }
                              }
                            },
                            "range": [
                              3319,
                              3334
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 167
                              },
                              "start": {
                                "column": 20,
                                "line": 167
                              }
                            }
                          }
                        ],
                        "test": null,
                        "range": [
                          3290,
                          3334
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 167
                          },
                          "start": {
                            "column": 16,
                            "line": 166
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "range": [
                          3137,
                          3139
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 161
                          },
                          "start": {
                            "column": 20,
                            "line": 161
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          3140,
                          3144
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 161
                          },
                          "start": {
                            "column": 23,
                            "line": 161
                          }
                        }
                      },
                      "range": [
                        3137,
                        3144
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 161
                        },
                        "start": {
                          "column": 20,
                          "line": 161
                        }
                      }
                    },
                    "range": [
                      3129,
                      3348
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 168
                      },
                      "start": {
                        "column": 12,
                        "line": 161
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"circle\"",
                  "value": "circle",
                  "range": [
                    3107,
                    3115
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 160
                    },
                    "start": {
                      "column": 13,
                      "line": 160
                    }
                  }
                },
                "range": [
                  3102,
                  3348
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 168
                  },
                  "start": {
                    "column": 8,
                    "line": 160
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  3036,
                  3038
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 157
                  },
                  "start": {
                    "column": 12,
                    "line": 157
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  3039,
                  3043
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 157
                  },
                  "start": {
                    "column": 15,
                    "line": 157
                  }
                }
              },
              "range": [
                3036,
                3043
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 157
                },
                "start": {
                  "column": 12,
                  "line": 157
                }
              }
            },
            "range": [
              3028,
              3354
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          }
        ],
        "range": [
          3022,
          3356
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 53,
            "line": 156
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withDefault",
        "optional": false,
        "range": [
          2978,
          2989
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 156
          },
          "start": {
            "column": 9,
            "line": 156
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 156
              },
              "start": {
                "column": 23,
                "line": 156
              }
            },
            "range": [
              2992,
              3000
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "range": [
                  2994,
                  3000
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 156
                  },
                  "start": {
                    "column": 25,
                    "line": 156
                  }
                }
              },
              "range": [
                2994,
                3000
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 156
                },
                "start": {
                  "column": 25,
                  "line": 156
                }
              }
            }
          },
          "range": [
            2990,
            3000
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 156
            },
            "start": {
              "column": 21,
              "line": 156
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 156
              },
              "start": {
                "column": 35,
                "line": 156
              }
            },
            "range": [
              3004,
              3012
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "range": [
                  3006,
                  3012
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 156
                  },
                  "start": {
                    "column": 37,
                    "line": 156
                  }
                }
              },
              "range": [
                3006,
                3012
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 156
                },
                "start": {
                  "column": 37,
                  "line": 156
                }
              }
            }
          },
          "range": [
            3002,
            3012
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 156
            },
            "start": {
              "column": 33,
              "line": 156
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 156
          },
          "start": {
            "column": 44,
            "line": 156
          }
        },
        "range": [
          3013,
          3021
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            3015,
            3021
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 156
            },
            "start": {
              "column": 46,
              "line": 156
            }
          }
        }
      },
      "range": [
        2969,
        3356
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 156
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        3481,
                        3484
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 175
                        },
                        "start": {
                          "column": 19,
                          "line": 175
                        }
                      }
                    },
                    "range": [
                      3474,
                      3485
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 175
                      },
                      "start": {
                        "column": 12,
                        "line": 175
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"square\"",
                  "value": "square",
                  "range": [
                    3452,
                    3460
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 174
                    },
                    "start": {
                      "column": 13,
                      "line": 174
                    }
                  }
                },
                "range": [
                  3447,
                  3485
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 175
                  },
                  "start": {
                    "column": 8,
                    "line": 174
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"2\"",
                              "value": "2",
                              "range": [
                                3598,
                                3601
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 179
                                },
                                "start": {
                                  "column": 27,
                                  "line": 179
                                }
                              }
                            },
                            "range": [
                              3591,
                              3602
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 179
                              },
                              "start": {
                                "column": 20,
                                "line": 179
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "\"square\"",
                          "value": "square",
                          "range": [
                            3561,
                            3569
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 178
                            },
                            "start": {
                              "column": 21,
                              "line": 178
                            }
                          }
                        },
                        "range": [
                          3556,
                          3602
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 179
                          },
                          "start": {
                            "column": 16,
                            "line": 178
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"3\"",
                              "value": "3",
                              "range": [
                                3661,
                                3664
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 181
                                },
                                "start": {
                                  "column": 27,
                                  "line": 181
                                }
                              }
                            },
                            "range": [
                              3654,
                              3665
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 181
                              },
                              "start": {
                                "column": 20,
                                "line": 181
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "\"circle\"",
                          "value": "circle",
                          "range": [
                            3624,
                            3632
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 180
                            },
                            "start": {
                              "column": 21,
                              "line": 180
                            }
                          }
                        },
                        "range": [
                          3619,
                          3665
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 181
                          },
                          "start": {
                            "column": 16,
                            "line": 180
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "range": [
                          3529,
                          3531
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 177
                          },
                          "start": {
                            "column": 20,
                            "line": 177
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          3532,
                          3536
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 177
                          },
                          "start": {
                            "column": 23,
                            "line": 177
                          }
                        }
                      },
                      "range": [
                        3529,
                        3536
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 177
                        },
                        "start": {
                          "column": 20,
                          "line": 177
                        }
                      }
                    },
                    "range": [
                      3521,
                      3679
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 182
                      },
                      "start": {
                        "column": 12,
                        "line": 177
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"circle\"",
                  "value": "circle",
                  "range": [
                    3499,
                    3507
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 176
                    },
                    "start": {
                      "column": 13,
                      "line": 176
                    }
                  }
                },
                "range": [
                  3494,
                  3679
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 182
                  },
                  "start": {
                    "column": 8,
                    "line": 176
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  3428,
                  3430
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 173
                  },
                  "start": {
                    "column": 12,
                    "line": 173
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  3431,
                  3435
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 173
                  },
                  "start": {
                    "column": 15,
                    "line": 173
                  }
                }
              },
              "range": [
                3428,
                3435
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 173
                },
                "start": {
                  "column": 12,
                  "line": 173
                }
              }
            },
            "range": [
              3420,
              3685
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 183
              },
              "start": {
                "column": 4,
                "line": 173
              }
            }
          }
        ],
        "range": [
          3414,
          3687
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 184
          },
          "start": {
            "column": 56,
            "line": 172
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withoutDefault",
        "optional": false,
        "range": [
          3367,
          3381
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 172
          },
          "start": {
            "column": 9,
            "line": 172
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 172
              },
              "start": {
                "column": 26,
                "line": 172
              }
            },
            "range": [
              3384,
              3392
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "range": [
                  3386,
                  3392
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 172
                  },
                  "start": {
                    "column": 28,
                    "line": 172
                  }
                }
              },
              "range": [
                3386,
                3392
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 172
                },
                "start": {
                  "column": 28,
                  "line": 172
                }
              }
            }
          },
          "range": [
            3382,
            3392
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 172
            },
            "start": {
              "column": 24,
              "line": 172
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 172
              },
              "start": {
                "column": 38,
                "line": 172
              }
            },
            "range": [
              3396,
              3404
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "range": [
                  3398,
                  3404
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 172
                  },
                  "start": {
                    "column": 40,
                    "line": 172
                  }
                }
              },
              "range": [
                3398,
                3404
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 172
                },
                "start": {
                  "column": 40,
                  "line": 172
                }
              }
            }
          },
          "range": [
            3394,
            3404
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 172
            },
            "start": {
              "column": 36,
              "line": 172
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 172
          },
          "start": {
            "column": 47,
            "line": 172
          }
        },
        "range": [
          3405,
          3413
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            3407,
            3413
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 172
            },
            "start": {
              "column": 49,
              "line": 172
            }
          }
        }
      },
      "range": [
        3358,
        3687
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 184
        },
        "start": {
          "column": 0,
          "line": 172
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 189
                      },
                      "start": {
                        "column": 9,
                        "line": 189
                      }
                    },
                    "range": [
                      3751,
                      3759
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        3753,
                        3759
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 189
                        },
                        "start": {
                          "column": 11,
                          "line": 189
                        }
                      }
                    }
                  },
                  "range": [
                    3750,
                    3759
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 189
                    },
                    "start": {
                      "column": 8,
                      "line": 189
                    }
                  }
                },
                "init": null,
                "range": [
                  3750,
                  3759
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 189
                  },
                  "start": {
                    "column": 8,
                    "line": 189
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3746,
              3760
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 189
              },
              "start": {
                "column": 4,
                "line": 189
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3798,
                          3799
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 191
                          },
                          "start": {
                            "column": 16,
                            "line": 191
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"one\"",
                        "value": "one",
                        "range": [
                          3802,
                          3807
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 191
                          },
                          "start": {
                            "column": 20,
                            "line": 191
                          }
                        }
                      },
                      "range": [
                        3798,
                        3807
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 191
                        },
                        "start": {
                          "column": 16,
                          "line": 191
                        }
                      }
                    },
                    "range": [
                      3798,
                      3808
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 191
                      },
                      "start": {
                        "column": 16,
                        "line": 191
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3809,
                      3815
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 191
                      },
                      "start": {
                        "column": 27,
                        "line": 191
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    3795,
                    3796
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 191
                    },
                    "start": {
                      "column": 13,
                      "line": 191
                    }
                  }
                },
                "range": [
                  3790,
                  3815
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 191
                  },
                  "start": {
                    "column": 8,
                    "line": 191
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3832,
                          3833
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 192
                          },
                          "start": {
                            "column": 16,
                            "line": 192
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"two\"",
                        "value": "two",
                        "range": [
                          3836,
                          3841
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 192
                          },
                          "start": {
                            "column": 20,
                            "line": 192
                          }
                        }
                      },
                      "range": [
                        3832,
                        3841
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 192
                        },
                        "start": {
                          "column": 16,
                          "line": 192
                        }
                      }
                    },
                    "range": [
                      3832,
                      3842
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 192
                      },
                      "start": {
                        "column": 16,
                        "line": 192
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      3843,
                      3849
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 192
                      },
                      "start": {
                        "column": 27,
                        "line": 192
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    3829,
                    3830
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 192
                    },
                    "start": {
                      "column": 13,
                      "line": 192
                    }
                  }
                },
                "range": [
                  3824,
                  3849
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 192
                  },
                  "start": {
                    "column": 8,
                    "line": 192
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                3773,
                3778
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 190
                },
                "start": {
                  "column": 12,
                  "line": 190
                }
              }
            },
            "range": [
              3765,
              3855
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 193
              },
              "start": {
                "column": 4,
                "line": 190
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                3867,
                3868
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 194
                },
                "start": {
                  "column": 11,
                  "line": 194
                }
              }
            },
            "range": [
              3860,
              3869
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 194
              },
              "start": {
                "column": 4,
                "line": 194
              }
            }
          }
        ],
        "range": [
          3740,
          3871
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 195
          },
          "start": {
            "column": 29,
            "line": 188
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "range": [
          3720,
          3725
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 188
              },
              "start": {
                "column": 20,
                "line": 188
              }
            },
            "range": [
              3731,
              3738
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      3733,
                      3734
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 188
                      },
                      "start": {
                        "column": 22,
                        "line": 188
                      }
                    }
                  },
                  "range": [
                    3733,
                    3734
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 188
                    },
                    "start": {
                      "column": 22,
                      "line": 188
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      3737,
                      3738
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 188
                      },
                      "start": {
                        "column": 26,
                        "line": 188
                      }
                    }
                  },
                  "range": [
                    3737,
                    3738
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 188
                    },
                    "start": {
                      "column": 26,
                      "line": 188
                    }
                  }
                }
              ],
              "range": [
                3733,
                3738
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 188
                },
                "start": {
                  "column": 22,
                  "line": 188
                }
              }
            }
          },
          "range": [
            3726,
            3738
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 188
            },
            "start": {
              "column": 15,
              "line": 188
            }
          }
        }
      ],
      "range": [
        3711,
        3871
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 195
        },
        "start": {
          "column": 0,
          "line": 188
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          3907,
          3919
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DOG",
              "optional": false,
              "range": [
                3909,
                3912
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 199
                },
                "start": {
                  "column": 14,
                  "line": 199
                }
              }
            },
            "range": [
              3909,
              3912
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 199
              },
              "start": {
                "column": 14,
                "line": 199
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "range": [
                3914,
                3917
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 199
                },
                "start": {
                  "column": 19,
                  "line": 199
                }
              }
            },
            "range": [
              3914,
              3917
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 199
              },
              "start": {
                "column": 19,
                "line": 199
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 199
          },
          "start": {
            "column": 12,
            "line": 199
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "range": [
          3900,
          3906
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 199
          },
          "start": {
            "column": 5,
            "line": 199
          }
        }
      },
      "range": [
        3895,
        3919
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 199
        },
        "start": {
          "column": 0,
          "line": 199
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
            "name": "zoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 201
                },
                "start": {
                  "column": 17,
                  "line": 201
                }
              },
              "range": [
                3938,
                3970
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "range": [
                            3942,
                            3948
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 201
                            },
                            "start": {
                              "column": 21,
                              "line": 201
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 201
                            },
                            "start": {
                              "column": 27,
                              "line": 201
                            }
                          },
                          "range": [
                            3948,
                            3956
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Animal",
                              "optional": false,
                              "range": [
                                3950,
                                3956
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 201
                                },
                                "start": {
                                  "column": 29,
                                  "line": 201
                                }
                              }
                            },
                            "range": [
                              3950,
                              3956
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 201
                              },
                              "start": {
                                "column": 29,
                                "line": 201
                              }
                            }
                          }
                        },
                        "range": [
                          3942,
                          3956
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 201
                          },
                          "start": {
                            "column": 21,
                            "line": 201
                          }
                        }
                      }
                    ],
                    "range": [
                      3940,
                      3958
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 201
                      },
                      "start": {
                        "column": 19,
                        "line": 201
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      3961,
                      3970
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 201
                      },
                      "start": {
                        "column": 40,
                        "line": 201
                      }
                    }
                  }
                ],
                "range": [
                  3940,
                  3970
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 201
                  },
                  "start": {
                    "column": 19,
                    "line": 201
                  }
                }
              }
            },
            "range": [
              3935,
              3970
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 201
              },
              "start": {
                "column": 14,
                "line": 201
              }
            }
          },
          "init": null,
          "range": [
            3935,
            3970
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 201
            },
            "start": {
              "column": 14,
              "line": 201
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        3921,
        3971
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 201
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "range": [
                          4078,
                          4084
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 205
                          },
                          "start": {
                            "column": 32,
                            "line": 205
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DOG",
                        "optional": false,
                        "range": [
                          4085,
                          4088
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 205
                          },
                          "start": {
                            "column": 39,
                            "line": 205
                          }
                        }
                      },
                      "range": [
                        4078,
                        4088
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 205
                        },
                        "start": {
                          "column": 32,
                          "line": 205
                        }
                      }
                    },
                    "range": [
                      4071,
                      4088
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 205
                      },
                      "start": {
                        "column": 25,
                        "line": 205
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "range": [
                      4059,
                      4065
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 205
                      },
                      "start": {
                        "column": 13,
                        "line": 205
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DOG",
                    "optional": false,
                    "range": [
                      4066,
                      4069
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 205
                      },
                      "start": {
                        "column": 20,
                        "line": 205
                      }
                    }
                  },
                  "range": [
                    4059,
                    4069
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 205
                    },
                    "start": {
                      "column": 13,
                      "line": 205
                    }
                  }
                },
                "range": [
                  4054,
                  4088
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 205
                  },
                  "start": {
                    "column": 8,
                    "line": 205
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "range": [
                          4121,
                          4127
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 206
                          },
                          "start": {
                            "column": 32,
                            "line": 206
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CAT",
                        "optional": false,
                        "range": [
                          4128,
                          4131
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 206
                          },
                          "start": {
                            "column": 39,
                            "line": 206
                          }
                        }
                      },
                      "range": [
                        4121,
                        4131
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 206
                        },
                        "start": {
                          "column": 32,
                          "line": 206
                        }
                      }
                    },
                    "range": [
                      4114,
                      4131
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 206
                      },
                      "start": {
                        "column": 25,
                        "line": 206
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "range": [
                      4102,
                      4108
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 206
                      },
                      "start": {
                        "column": 13,
                        "line": 206
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "range": [
                      4109,
                      4112
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 206
                      },
                      "start": {
                        "column": 20,
                        "line": 206
                      }
                    }
                  },
                  "range": [
                    4102,
                    4112
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 206
                    },
                    "start": {
                      "column": 13,
                      "line": 206
                    }
                  }
                },
                "range": [
                  4097,
                  4131
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 206
                  },
                  "start": {
                    "column": 8,
                    "line": 206
                  }
                }
              }
            ],
            "discriminant": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zoo",
                    "optional": false,
                    "range": [
                      4017,
                      4020
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 204
                      },
                      "start": {
                        "column": 12,
                        "line": 204
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "animal",
                    "optional": false,
                    "range": [
                      4022,
                      4028
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 204
                      },
                      "start": {
                        "column": 17,
                        "line": 204
                      }
                    }
                  },
                  "range": [
                    4017,
                    4028
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 204
                    },
                    "start": {
                      "column": 12,
                      "line": 204
                    }
                  }
                },
                "range": [
                  4017,
                  4028
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 204
                  },
                  "start": {
                    "column": 12,
                    "line": 204
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Animal",
                  "optional": false,
                  "range": [
                    4032,
                    4038
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 204
                    },
                    "start": {
                      "column": 27,
                      "line": 204
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DOG",
                  "optional": false,
                  "range": [
                    4039,
                    4042
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 204
                    },
                    "start": {
                      "column": 34,
                      "line": 204
                    }
                  }
                },
                "range": [
                  4032,
                  4042
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 204
                  },
                  "start": {
                    "column": 27,
                    "line": 204
                  }
                }
              },
              "range": [
                4017,
                4042
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 204
                },
                "start": {
                  "column": 12,
                  "line": 204
                }
              }
            },
            "range": [
              4009,
              4137
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 207
              },
              "start": {
                "column": 4,
                "line": 204
              }
            }
          }
        ],
        "range": [
          4003,
          4139
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 208
          },
          "start": {
            "column": 30,
            "line": 203
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expression",
        "optional": false,
        "range": [
          3982,
          3992
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 203
          },
          "start": {
            "column": 9,
            "line": 203
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 203
          },
          "start": {
            "column": 21,
            "line": 203
          }
        },
        "range": [
          3994,
          4002
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "range": [
              3996,
              4002
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 203
              },
              "start": {
                "column": 23,
                "line": 203
              }
            }
          },
          "range": [
            3996,
            4002
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 203
            },
            "start": {
              "column": 23,
              "line": 203
            }
          }
        }
      },
      "range": [
        3973,
        4139
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 208
        },
        "start": {
          "column": 0,
          "line": 203
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 213
                      },
                      "start": {
                        "column": 13,
                        "line": 213
                      }
                    },
                    "range": [
                      4193,
                      4213
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            4195,
                            4201
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 213
                            },
                            "start": {
                              "column": 15,
                              "line": 213
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            4204,
                            4213
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 213
                            },
                            "start": {
                              "column": 24,
                              "line": 213
                            }
                          }
                        }
                      ],
                      "range": [
                        4195,
                        4213
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 213
                        },
                        "start": {
                          "column": 15,
                          "line": 213
                        }
                      }
                    }
                  },
                  "range": [
                    4190,
                    4213
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 213
                    },
                    "start": {
                      "column": 10,
                      "line": 213
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4216,
                    4217
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 213
                    },
                    "start": {
                      "column": 36,
                      "line": 213
                    }
                  }
                },
                "range": [
                  4190,
                  4217
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 213
                  },
                  "start": {
                    "column": 10,
                    "line": 213
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4184,
              4218
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 213
              },
              "start": {
                "column": 4,
                "line": 213
              }
            }
          },
          {
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
                        "name": "stats",
                        "optional": false,
                        "range": [
                          4252,
                          4257
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 215
                          },
                          "start": {
                            "column": 14,
                            "line": 215
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          4260,
                          4263
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 215
                          },
                          "start": {
                            "column": 22,
                            "line": 215
                          }
                        }
                      },
                      "range": [
                        4252,
                        4263
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 215
                        },
                        "start": {
                          "column": 14,
                          "line": 215
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    4246,
                    4264
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 215
                    },
                    "start": {
                      "column": 8,
                      "line": 215
                    }
                  }
                },
                {
                  "type": "SwitchStatement",
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            4310,
                            4316
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 217
                            },
                            "start": {
                              "column": 20,
                              "line": 217
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          4307,
                          4308
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 217
                          },
                          "start": {
                            "column": 17,
                            "line": 217
                          }
                        }
                      },
                      "range": [
                        4302,
                        4316
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 217
                        },
                        "start": {
                          "column": 12,
                          "line": 217
                        }
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            4337,
                            4343
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 218
                            },
                            "start": {
                              "column": 20,
                              "line": 218
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          4334,
                          4335
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 218
                          },
                          "start": {
                            "column": 17,
                            "line": 218
                          }
                        }
                      },
                      "range": [
                        4329,
                        4343
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 218
                        },
                        "start": {
                          "column": 12,
                          "line": 218
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stats",
                    "optional": false,
                    "range": [
                      4281,
                      4286
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 216
                      },
                      "start": {
                        "column": 16,
                        "line": 216
                      }
                    }
                  },
                  "range": [
                    4273,
                    4353
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 219
                    },
                    "start": {
                      "column": 8,
                      "line": 216
                    }
                  }
                }
              ],
              "range": [
                4236,
                4359
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 220
                },
                "start": {
                  "column": 17,
                  "line": 214
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                4230,
                4234
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 214
                },
                "start": {
                  "column": 11,
                  "line": 214
                }
              }
            },
            "range": [
              4223,
              4359
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 220
              },
              "start": {
                "column": 4,
                "line": 214
              }
            }
          }
        ],
        "range": [
          4178,
          4361
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 221
          },
          "start": {
            "column": 15,
            "line": 212
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
          4172,
          4175
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 212
          },
          "start": {
            "column": 9,
            "line": 212
          }
        }
      },
      "params": [],
      "range": [
        4163,
        4361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 221
        },
        "start": {
          "column": 0,
          "line": 212
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "range": [
          4390,
          4391
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 225
          },
          "start": {
            "column": 5,
            "line": 225
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                4400,
                4401
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 226
                },
                "start": {
                  "column": 4,
                  "line": 226
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 226
                },
                "start": {
                  "column": 5,
                  "line": 226
                }
              },
              "range": [
                4401,
                4409
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  4403,
                  4409
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 226
                  },
                  "start": {
                    "column": 7,
                    "line": 226
                  }
                }
              }
            },
            "range": [
              4400,
              4410
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 226
              },
              "start": {
                "column": 4,
                "line": 226
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                4415,
                4416
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 227
                },
                "start": {
                  "column": 4,
                  "line": 227
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 227
                },
                "start": {
                  "column": 5,
                  "line": 227
                }
              },
              "range": [
                4416,
                4424
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  4418,
                  4424
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 227
                  },
                  "start": {
                    "column": 7,
                    "line": 227
                  }
                }
              }
            },
            "range": [
              4415,
              4424
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 227
              },
              "start": {
                "column": 4,
                "line": 227
              }
            }
          }
        ],
        "range": [
          4394,
          4426
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 228
          },
          "start": {
            "column": 9,
            "line": 225
          }
        }
      },
      "range": [
        4385,
        4427
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 228
        },
        "start": {
          "column": 0,
          "line": 225
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "range": [
          4433,
          4434
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 229
          },
          "start": {
            "column": 5,
            "line": 229
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "range": [
                  4443,
                  4444
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 229
                  },
                  "start": {
                    "column": 15,
                    "line": 229
                  }
                }
              },
              "range": [
                4443,
                4444
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 229
                },
                "start": {
                  "column": 15,
                  "line": 229
                }
              }
            },
            "range": [
              4437,
              4444
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 229
              },
              "start": {
                "column": 9,
                "line": 229
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'c'",
              "value": "c",
              "range": [
                4447,
                4450
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 229
                },
                "start": {
                  "column": 19,
                  "line": 229
                }
              }
            },
            "range": [
              4447,
              4450
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 229
              },
              "start": {
                "column": 19,
                "line": 229
              }
            }
          }
        ],
        "range": [
          4437,
          4450
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 229
          },
          "start": {
            "column": 9,
            "line": 229
          }
        }
      },
      "range": [
        4428,
        4451
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 229
        },
        "start": {
          "column": 0,
          "line": 229
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          4524,
                          4525
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 233
                          },
                          "start": {
                            "column": 12,
                            "line": 233
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          4528,
                          4531
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 233
                          },
                          "start": {
                            "column": 16,
                            "line": 233
                          }
                        }
                      },
                      "range": [
                        4524,
                        4531
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 233
                        },
                        "start": {
                          "column": 12,
                          "line": 233
                        }
                      }
                    },
                    "range": [
                      4524,
                      4532
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 233
                      },
                      "start": {
                        "column": 12,
                        "line": 233
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "'c'",
                  "value": "c",
                  "range": [
                    4507,
                    4510
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 232
                    },
                    "start": {
                      "column": 13,
                      "line": 232
                    }
                  }
                },
                "range": [
                  4502,
                  4532
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 233
                  },
                  "start": {
                    "column": 8,
                    "line": 232
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                4489,
                4490
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 231
                },
                "start": {
                  "column": 11,
                  "line": 231
                }
              }
            },
            "range": [
              4482,
              4538
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 234
              },
              "start": {
                "column": 4,
                "line": 231
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  4543,
                  4544
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 235
                  },
                  "start": {
                    "column": 4,
                    "line": 235
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'c'",
                "value": "c",
                "range": [
                  4549,
                  4552
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 235
                  },
                  "start": {
                    "column": 10,
                    "line": 235
                  }
                }
              },
              "range": [
                4543,
                4552
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 235
                },
                "start": {
                  "column": 4,
                  "line": 235
                }
              }
            },
            "range": [
              4543,
              4553
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 235
              },
              "start": {
                "column": 4,
                "line": 235
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  4575,
                  4576
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 236
                  },
                  "start": {
                    "column": 11,
                    "line": 236
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  4577,
                  4578
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 236
                  },
                  "start": {
                    "column": 13,
                    "line": 236
                  }
                }
              },
              "range": [
                4575,
                4579
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 236
                },
                "start": {
                  "column": 11,
                  "line": 236
                }
              }
            },
            "range": [
              4568,
              4580
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 236
              },
              "start": {
                "column": 4,
                "line": 236
              }
            }
          }
        ],
        "range": [
          4476,
          4582
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 237
          },
          "start": {
            "column": 24,
            "line": 230
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "range": [
          4461,
          4463
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 230
          },
          "start": {
            "column": 9,
            "line": 230
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 230
              },
              "start": {
                "column": 13,
                "line": 230
              }
            },
            "range": [
              4465,
              4468
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "range": [
                  4467,
                  4468
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 230
                  },
                  "start": {
                    "column": 15,
                    "line": 230
                  }
                }
              },
              "range": [
                4467,
                4468
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 230
                },
                "start": {
                  "column": 15,
                  "line": 230
                }
              }
            }
          },
          "range": [
            4464,
            4468
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 230
            },
            "start": {
              "column": 12,
              "line": 230
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 230
              },
              "start": {
                "column": 19,
                "line": 230
              }
            },
            "range": [
              4471,
              4474
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  4473,
                  4474
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 230
                  },
                  "start": {
                    "column": 21,
                    "line": 230
                  }
                }
              },
              "range": [
                4473,
                4474
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 230
                },
                "start": {
                  "column": 21,
                  "line": 230
                }
              }
            }
          },
          "range": [
            4470,
            4474
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 230
            },
            "start": {
              "column": 18,
              "line": 230
            }
          }
        }
      ],
      "range": [
        4452,
        4582
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 237
        },
        "start": {
          "column": 0,
          "line": 230
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          4610,
          4611
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 240
          },
          "start": {
            "column": 5,
            "line": 240
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    4616,
                    4620
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 240
                    },
                    "start": {
                      "column": 11,
                      "line": 240
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 240
                    },
                    "start": {
                      "column": 15,
                      "line": 240
                    }
                  },
                  "range": [
                    4620,
                    4627
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"abc\"",
                      "value": "abc",
                      "range": [
                        4622,
                        4627
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 240
                        },
                        "start": {
                          "column": 17,
                          "line": 240
                        }
                      }
                    },
                    "range": [
                      4622,
                      4627
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 240
                      },
                      "start": {
                        "column": 17,
                        "line": 240
                      }
                    }
                  }
                },
                "range": [
                  4616,
                  4627
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 240
                  },
                  "start": {
                    "column": 11,
                    "line": 240
                  }
                }
              }
            ],
            "range": [
              4614,
              4629
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 240
              },
              "start": {
                "column": 9,
                "line": 240
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    4634,
                    4638
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 240
                    },
                    "start": {
                      "column": 29,
                      "line": 240
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 240
                    },
                    "start": {
                      "column": 33,
                      "line": 240
                    }
                  },
                  "range": [
                    4638,
                    4645
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"def\"",
                      "value": "def",
                      "range": [
                        4640,
                        4645
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 240
                        },
                        "start": {
                          "column": 35,
                          "line": 240
                        }
                      }
                    },
                    "range": [
                      4640,
                      4645
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 240
                      },
                      "start": {
                        "column": 35,
                        "line": 240
                      }
                    }
                  }
                },
                "range": [
                  4634,
                  4645
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 240
                  },
                  "start": {
                    "column": 29,
                    "line": 240
                  }
                }
              }
            ],
            "range": [
              4632,
              4647
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 240
              },
              "start": {
                "column": 27,
                "line": 240
              }
            }
          }
        ],
        "range": [
          4614,
          4647
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 240
          },
          "start": {
            "column": 9,
            "line": 240
          }
        }
      },
      "range": [
        4605,
        4648
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 240
        },
        "start": {
          "column": 0,
          "line": 240
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "\"abc\"",
                  "value": "abc",
                  "range": [
                    4703,
                    4708
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 244
                    },
                    "start": {
                      "column": 9,
                      "line": 244
                    }
                  }
                },
                "range": [
                  4698,
                  4709
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 244
                  },
                  "start": {
                    "column": 4,
                    "line": 244
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      4726,
                      4733
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 245
                      },
                      "start": {
                        "column": 16,
                        "line": 245
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"def\"",
                  "value": "def",
                  "range": [
                    4719,
                    4724
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 245
                    },
                    "start": {
                      "column": 9,
                      "line": 245
                    }
                  }
                },
                "range": [
                  4714,
                  4733
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 245
                  },
                  "start": {
                    "column": 4,
                    "line": 245
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            4753,
                            4754
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 247
                            },
                            "start": {
                              "column": 6,
                              "line": 247
                            }
                          }
                        },
                        "range": [
                          4753,
                          4755
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 247
                          },
                          "start": {
                            "column": 6,
                            "line": 247
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4756,
                          4760
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 247
                          },
                          "start": {
                            "column": 9,
                            "line": 247
                          }
                        }
                      },
                      "range": [
                        4753,
                        4760
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 247
                        },
                        "start": {
                          "column": 6,
                          "line": 247
                        }
                      }
                    },
                    "range": [
                      4753,
                      4761
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 247
                      },
                      "start": {
                        "column": 6,
                        "line": 247
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  4738,
                  4761
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 247
                  },
                  "start": {
                    "column": 4,
                    "line": 246
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  4684,
                  4685
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 243
                  },
                  "start": {
                    "column": 10,
                    "line": 243
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  4686,
                  4690
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 243
                  },
                  "start": {
                    "column": 12,
                    "line": 243
                  }
                }
              },
              "range": [
                4684,
                4690
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 243
                },
                "start": {
                  "column": 10,
                  "line": 243
                }
              }
            },
            "range": [
              4676,
              4783
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 248
              },
              "start": {
                "column": 2,
                "line": 243
              }
            }
          }
        ],
        "range": [
          4672,
          4785
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 249
          },
          "start": {
            "column": 22,
            "line": 242
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f35431",
        "optional": false,
        "range": [
          4659,
          4665
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 242
          },
          "start": {
            "column": 9,
            "line": 242
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
                "column": 20,
                "line": 242
              },
              "start": {
                "column": 17,
                "line": 242
              }
            },
            "range": [
              4667,
              4670
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  4669,
                  4670
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 242
                  },
                  "start": {
                    "column": 19,
                    "line": 242
                  }
                }
              },
              "range": [
                4669,
                4670
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 242
                },
                "start": {
                  "column": 19,
                  "line": 242
                }
              }
            }
          },
          "range": [
            4666,
            4670
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 242
            },
            "start": {
              "column": 16,
              "line": 242
            }
          }
        }
      ],
      "range": [
        4650,
        4785
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 249
        },
        "start": {
          "column": 0,
          "line": 242
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 249
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
