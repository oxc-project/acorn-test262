__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    5294
  ],
  "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    },
                    "range": [
                      47,
                      62
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            49,
                            55
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 4
                            },
                            "start": {
                              "column": 11,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            58,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        49,
                        62
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    46,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    65,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 27,
                      "line": 4
                    }
                  }
                },
                "range": [
                  46,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              42,
              70
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        89,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        93,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      89,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    89,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      113,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    106,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
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
                79,
                121
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      223,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 48,
                        "line": 13
                      }
                    }
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "!=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          187,
                          188
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
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          192,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 17,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        187,
                        196
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              210,
                              211
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 13
                              },
                              "start": {
                                "column": 35,
                                "line": 13
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              200,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 13
                              },
                              "start": {
                                "column": 25,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "range": [
                              202,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 13
                              },
                              "start": {
                                "column": 27,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            200,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 25,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          200,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 13
                          },
                          "start": {
                            "column": 25,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"123\"",
                        "value": "123",
                        "range": [
                          216,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 13
                          },
                          "start": {
                            "column": 41,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        200,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 13
                        },
                        "start": {
                          "column": 25,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      187,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    183,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                173,
                241
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "range": [
                        152,
                        153
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
                      146,
                      154
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
                  136,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
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
                  133,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "range": [
                126,
                160
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              75,
              241
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          36,
          243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 14,
            "line": 3
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
          31,
          33
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        22,
        243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
                        "column": 24,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    },
                    "range": [
                      270,
                      285
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              272,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 19
                              },
                              "start": {
                                "column": 11,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            272,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              276,
                              277
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 19
                              },
                              "start": {
                                "column": 15,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            276,
                            277
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
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
                              280,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 19
                              },
                              "start": {
                                "column": 19,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            280,
                            281
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 19
                            },
                            "start": {
                              "column": 19,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              284,
                              285
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 19
                              },
                              "start": {
                                "column": 23,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            284,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 19
                            },
                            "start": {
                              "column": 23,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        272,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 19
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    269,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    288,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 27,
                      "line": 19
                    }
                  }
                },
                "range": [
                  269,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              265,
              290
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        309,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        313,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      309,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    309,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                299,
                321
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
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      398,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    398,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                388,
                420
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          346,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          350,
                          351
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
                        346,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      346,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "range": [
                        367,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 25
                        },
                        "start": {
                          "column": 14,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      361,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  336,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 23
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  333,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "range": [
                326,
                375
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              295,
              420
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 20
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
                425,
                426
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              425,
              427
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          259,
          435
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 14,
            "line": 18
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
          254,
          256
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [],
      "range": [
        245,
        435
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 18
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
                        "column": 24,
                        "line": 34
                      },
                      "start": {
                        "column": 9,
                        "line": 34
                      }
                    },
                    "range": [
                      462,
                      477
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              464,
                              465
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 34
                              },
                              "start": {
                                "column": 11,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            464,
                            465
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 34
                            },
                            "start": {
                              "column": 11,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              468,
                              469
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 34
                              },
                              "start": {
                                "column": 15,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            468,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 34
                            },
                            "start": {
                              "column": 15,
                              "line": 34
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
                              472,
                              473
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 34
                              },
                              "start": {
                                "column": 19,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            472,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 34
                            },
                            "start": {
                              "column": 19,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              476,
                              477
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 34
                              },
                              "start": {
                                "column": 23,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            476,
                            477
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 34
                            },
                            "start": {
                              "column": 23,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        464,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    461,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    480,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 34
                    },
                    "start": {
                      "column": 27,
                      "line": 34
                    }
                  }
                },
                "range": [
                  461,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              457,
              482
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        501,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        505,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 36
                        },
                        "start": {
                          "column": 12,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      501,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    501,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                491,
                513
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      589,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    589,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                579,
                611
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 12,
                  "line": 42
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          538,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          542,
                          543
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
                      },
                      "range": [
                        538,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      538,
                      544
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
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      553,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  528,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 14,
                    "line": 38
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  525,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 38
                  }
                }
              },
              "range": [
                518,
                566
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              487,
              611
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 35
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
                616,
                617
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              616,
              618
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          451,
          626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 14,
            "line": 33
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
          446,
          448
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [],
      "range": [
        437,
        626
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 33
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
                        "column": 24,
                        "line": 49
                      },
                      "start": {
                        "column": 9,
                        "line": 49
                      }
                    },
                    "range": [
                      653,
                      668
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              655,
                              656
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 49
                              },
                              "start": {
                                "column": 11,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            655,
                            656
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 49
                            },
                            "start": {
                              "column": 11,
                              "line": 49
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              659,
                              660
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 49
                              },
                              "start": {
                                "column": 15,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            659,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 49
                            },
                            "start": {
                              "column": 15,
                              "line": 49
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
                              663,
                              664
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
                            663,
                            664
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
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              667,
                              668
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 49
                              },
                              "start": {
                                "column": 23,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            667,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 49
                            },
                            "start": {
                              "column": 23,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "range": [
                        655,
                        668
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 49
                        },
                        "start": {
                          "column": 11,
                          "line": 49
                        }
                      }
                    }
                  },
                  "range": [
                    652,
                    668
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    671,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 49
                    },
                    "start": {
                      "column": 27,
                      "line": 49
                    }
                  }
                },
                "range": [
                  652,
                  672
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              648,
              673
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        692,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 51
                        },
                        "start": {
                          "column": 8,
                          "line": 51
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        696,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 51
                        },
                        "start": {
                          "column": 12,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      692,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    692,
                    698
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                682,
                704
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      764,
                      765
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    764,
                    766
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                754,
                786
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 12,
                  "line": 56
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          729,
                          730
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 54
                          },
                          "start": {
                            "column": 8,
                            "line": 54
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          733,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        729,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      729,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  719,
                  741
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 14,
                    "line": 53
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  716,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 53
                  }
                }
              },
              "range": [
                709,
                741
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              678,
              786
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 50
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
                791,
                792
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              791,
              793
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          642,
          805
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 14,
            "line": 48
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          637,
          639
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 48
          },
          "start": {
            "column": 9,
            "line": 48
          }
        }
      },
      "params": [],
      "range": [
        628,
        805
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 48
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
                        "column": 24,
                        "line": 63
                      },
                      "start": {
                        "column": 9,
                        "line": 63
                      }
                    },
                    "range": [
                      832,
                      847
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              834,
                              835
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 63
                              },
                              "start": {
                                "column": 11,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            834,
                            835
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 63
                            },
                            "start": {
                              "column": 11,
                              "line": 63
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              838,
                              839
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 63
                              },
                              "start": {
                                "column": 15,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            838,
                            839
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 63
                            },
                            "start": {
                              "column": 15,
                              "line": 63
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
                              842,
                              843
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 63
                              },
                              "start": {
                                "column": 19,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            842,
                            843
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 63
                            },
                            "start": {
                              "column": 19,
                              "line": 63
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              846,
                              847
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 63
                              },
                              "start": {
                                "column": 23,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            846,
                            847
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 63
                            },
                            "start": {
                              "column": 23,
                              "line": 63
                            }
                          }
                        }
                      ],
                      "range": [
                        834,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 63
                        },
                        "start": {
                          "column": 11,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    831,
                    847
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    850,
                    851
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 63
                    },
                    "start": {
                      "column": 27,
                      "line": 63
                    }
                  }
                },
                "range": [
                  831,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              827,
              852
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        871,
                        872
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 65
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        875,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 65
                        },
                        "start": {
                          "column": 12,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      871,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    871,
                    877
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    886,
                    893
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                861,
                899
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      959,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    959,
                    961
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                }
              ],
              "range": [
                949,
                981
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 12,
                  "line": 71
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          924,
                          925
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 69
                          },
                          "start": {
                            "column": 8,
                            "line": 69
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          928,
                          929
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 69
                          },
                          "start": {
                            "column": 12,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        924,
                        929
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 69
                        },
                        "start": {
                          "column": 8,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      924,
                      930
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 69
                      },
                      "start": {
                        "column": 8,
                        "line": 69
                      }
                    }
                  }
                ],
                "range": [
                  914,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 70
                  },
                  "start": {
                    "column": 14,
                    "line": 68
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  911,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 68
                  },
                  "start": {
                    "column": 11,
                    "line": 68
                  }
                }
              },
              "range": [
                904,
                936
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              857,
              981
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 64
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
                986,
                987
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              986,
              988
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          821,
          996
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 14,
            "line": 62
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          816,
          818
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [],
      "range": [
        807,
        996
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 62
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
                        "column": 24,
                        "line": 78
                      },
                      "start": {
                        "column": 9,
                        "line": 78
                      }
                    },
                    "range": [
                      1023,
                      1038
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1025,
                              1026
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 78
                              },
                              "start": {
                                "column": 11,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1025,
                            1026
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 78
                            },
                            "start": {
                              "column": 11,
                              "line": 78
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1029,
                              1030
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 78
                              },
                              "start": {
                                "column": 15,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1029,
                            1030
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 78
                            },
                            "start": {
                              "column": 15,
                              "line": 78
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
                              1033,
                              1034
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 78
                              },
                              "start": {
                                "column": 19,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1033,
                            1034
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 78
                            },
                            "start": {
                              "column": 19,
                              "line": 78
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              1037,
                              1038
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 78
                              },
                              "start": {
                                "column": 23,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1037,
                            1038
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 78
                            },
                            "start": {
                              "column": 23,
                              "line": 78
                            }
                          }
                        }
                      ],
                      "range": [
                        1025,
                        1038
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 78
                        },
                        "start": {
                          "column": 11,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    1022,
                    1038
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1041,
                    1042
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 78
                    },
                    "start": {
                      "column": 27,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1022,
                  1042
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 78
                  },
                  "start": {
                    "column": 8,
                    "line": 78
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1018,
              1043
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1062,
                        1063
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 80
                        },
                        "start": {
                          "column": 8,
                          "line": 80
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1066,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 80
                        },
                        "start": {
                          "column": 12,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      1062,
                      1067
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 80
                      },
                      "start": {
                        "column": 8,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    1062,
                    1068
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 80
                    },
                    "start": {
                      "column": 8,
                      "line": 80
                    }
                  }
                }
              ],
              "range": [
                1052,
                1074
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1150,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 87
                      },
                      "start": {
                        "column": 8,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    1150,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                }
              ],
              "range": [
                1140,
                1172
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 12,
                  "line": 86
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1099,
                          1100
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
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          1103,
                          1104
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 83
                          },
                          "start": {
                            "column": 12,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1099,
                        1104
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 83
                        },
                        "start": {
                          "column": 8,
                          "line": 83
                        }
                      }
                    },
                    "range": [
                      1099,
                      1105
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      1114,
                      1121
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 84
                      },
                      "start": {
                        "column": 8,
                        "line": 84
                      }
                    }
                  }
                ],
                "range": [
                  1089,
                  1127
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 85
                  },
                  "start": {
                    "column": 14,
                    "line": 82
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  1086,
                  1087
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
              },
              "range": [
                1079,
                1127
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "range": [
              1048,
              1172
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 79
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
                1177,
                1178
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
                }
              }
            },
            "range": [
              1177,
              1179
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "range": [
          1012,
          1187
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 14,
            "line": 77
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          1007,
          1009
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 77
          }
        }
      },
      "params": [],
      "range": [
        998,
        1187
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 77
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
                        "column": 24,
                        "line": 93
                      },
                      "start": {
                        "column": 9,
                        "line": 93
                      }
                    },
                    "range": [
                      1214,
                      1229
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1216,
                              1217
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 93
                              },
                              "start": {
                                "column": 11,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            1216,
                            1217
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 93
                            },
                            "start": {
                              "column": 11,
                              "line": 93
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1220,
                              1221
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 93
                              },
                              "start": {
                                "column": 15,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            1220,
                            1221
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 93
                            },
                            "start": {
                              "column": 15,
                              "line": 93
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
                              1224,
                              1225
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 93
                              },
                              "start": {
                                "column": 19,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            1224,
                            1225
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 93
                            },
                            "start": {
                              "column": 19,
                              "line": 93
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              1228,
                              1229
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 93
                              },
                              "start": {
                                "column": 23,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            1228,
                            1229
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 93
                            },
                            "start": {
                              "column": 23,
                              "line": 93
                            }
                          }
                        }
                      ],
                      "range": [
                        1216,
                        1229
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 93
                        },
                        "start": {
                          "column": 11,
                          "line": 93
                        }
                      }
                    }
                  },
                  "range": [
                    1213,
                    1229
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1232,
                    1233
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 93
                    },
                    "start": {
                      "column": 27,
                      "line": 93
                    }
                  }
                },
                "range": [
                  1213,
                  1233
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 93
                  },
                  "start": {
                    "column": 8,
                    "line": 93
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1209,
              1234
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1253,
                        1254
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 95
                        },
                        "start": {
                          "column": 8,
                          "line": 95
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1257,
                        1258
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
                    },
                    "range": [
                      1253,
                      1258
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 95
                      },
                      "start": {
                        "column": 8,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    1253,
                    1259
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
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    1268,
                    1275
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 96
                    },
                    "start": {
                      "column": 8,
                      "line": 96
                    }
                  }
                }
              ],
              "range": [
                1243,
                1281
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 97
                },
                "start": {
                  "column": 8,
                  "line": 94
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1357,
                      1358
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
                  },
                  "range": [
                    1357,
                    1359
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                1347,
                1379
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 12,
                  "line": 102
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1306,
                          1307
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 99
                          },
                          "start": {
                            "column": 8,
                            "line": 99
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          1310,
                          1311
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 99
                          },
                          "start": {
                            "column": 12,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        1306,
                        1311
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 99
                        },
                        "start": {
                          "column": 8,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      1306,
                      1312
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 99
                      },
                      "start": {
                        "column": 8,
                        "line": 99
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      1321,
                      1328
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 100
                      }
                    }
                  }
                ],
                "range": [
                  1296,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 101
                  },
                  "start": {
                    "column": 14,
                    "line": 98
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  1293,
                  1294
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 98
                  },
                  "start": {
                    "column": 11,
                    "line": 98
                  }
                }
              },
              "range": [
                1286,
                1334
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            },
            "range": [
              1239,
              1379
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 94
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
                1384,
                1385
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              1384,
              1386
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "range": [
          1203,
          1404
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 14,
            "line": 92
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          1198,
          1200
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 92
          },
          "start": {
            "column": 9,
            "line": 92
          }
        }
      },
      "params": [],
      "range": [
        1189,
        1404
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 92
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
                        "column": 16,
                        "line": 109
                      },
                      "start": {
                        "column": 9,
                        "line": 109
                      }
                    },
                    "range": [
                      1431,
                      1438
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1433,
                              1434
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 109
                              },
                              "start": {
                                "column": 11,
                                "line": 109
                              }
                            }
                          },
                          "range": [
                            1433,
                            1434
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 109
                            },
                            "start": {
                              "column": 11,
                              "line": 109
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1437,
                              1438
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 109
                              },
                              "start": {
                                "column": 15,
                                "line": 109
                              }
                            }
                          },
                          "range": [
                            1437,
                            1438
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 109
                            },
                            "start": {
                              "column": 15,
                              "line": 109
                            }
                          }
                        }
                      ],
                      "range": [
                        1433,
                        1438
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 109
                        },
                        "start": {
                          "column": 11,
                          "line": 109
                        }
                      }
                    }
                  },
                  "range": [
                    1430,
                    1438
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 109
                    },
                    "start": {
                      "column": 8,
                      "line": 109
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1441,
                    1442
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 109
                    },
                    "start": {
                      "column": 19,
                      "line": 109
                    }
                  }
                },
                "range": [
                  1430,
                  1442
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 109
                  },
                  "start": {
                    "column": 8,
                    "line": 109
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1426,
              1443
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
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
                "async": false,
                "body": {
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
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1483,
                                  1484
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
                              "right": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  1487,
                                  1488
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
                                1483,
                                1488
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
                            },
                            "range": [
                              1483,
                              1489
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 112
                              },
                              "start": {
                                "column": 12,
                                "line": 112
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "range": [
                              1502,
                              1509
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 113
                              },
                              "start": {
                                "column": 12,
                                "line": 113
                              }
                            }
                          }
                        ],
                        "range": [
                          1469,
                          1519
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 114
                          },
                          "start": {
                            "column": 12,
                            "line": 111
                          }
                        }
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1550,
                                1551
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 116
                                },
                                "start": {
                                  "column": 12,
                                  "line": 116
                                }
                              }
                            },
                            "range": [
                              1550,
                              1552
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 116
                              },
                              "start": {
                                "column": 12,
                                "line": 116
                              }
                            }
                          }
                        ],
                        "range": [
                          1536,
                          1572
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 117
                          },
                          "start": {
                            "column": 16,
                            "line": 115
                          }
                        }
                      },
                      "handler": null,
                      "range": [
                        1465,
                        1572
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 117
                        },
                        "start": {
                          "column": 8,
                          "line": 111
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
                          1581,
                          1582
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 118
                          },
                          "start": {
                            "column": 8,
                            "line": 118
                          }
                        }
                      },
                      "range": [
                        1581,
                        1583
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 118
                        },
                        "start": {
                          "column": 8,
                          "line": 118
                        }
                      }
                    }
                  ],
                  "range": [
                    1455,
                    1605
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 119
                    },
                    "start": {
                      "column": 11,
                      "line": 110
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  1449,
                  1605
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 119
                  },
                  "start": {
                    "column": 5,
                    "line": 110
                  }
                }
              },
              "optional": false,
              "range": [
                1448,
                1608
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              1448,
              1609
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 110
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
                1614,
                1615
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 120
                },
                "start": {
                  "column": 4,
                  "line": 120
                }
              }
            },
            "range": [
              1614,
              1616
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          }
        ],
        "range": [
          1420,
          1624
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 121
          },
          "start": {
            "column": 14,
            "line": 108
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "range": [
          1415,
          1417
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 108
          },
          "start": {
            "column": 9,
            "line": 108
          }
        }
      },
      "params": [],
      "range": [
        1406,
        1624
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 108
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
                        "column": 20,
                        "line": 124
                      },
                      "start": {
                        "column": 9,
                        "line": 124
                      }
                    },
                    "range": [
                      1651,
                      1662
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1653,
                              1654
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 124
                              },
                              "start": {
                                "column": 11,
                                "line": 124
                              }
                            }
                          },
                          "range": [
                            1653,
                            1654
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 124
                            },
                            "start": {
                              "column": 11,
                              "line": 124
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1657,
                              1658
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 124
                              },
                              "start": {
                                "column": 15,
                                "line": 124
                              }
                            }
                          },
                          "range": [
                            1657,
                            1658
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 124
                            },
                            "start": {
                              "column": 15,
                              "line": 124
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
                              1661,
                              1662
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 124
                              },
                              "start": {
                                "column": 19,
                                "line": 124
                              }
                            }
                          },
                          "range": [
                            1661,
                            1662
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 124
                            },
                            "start": {
                              "column": 19,
                              "line": 124
                            }
                          }
                        }
                      ],
                      "range": [
                        1653,
                        1662
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 124
                        },
                        "start": {
                          "column": 11,
                          "line": 124
                        }
                      }
                    }
                  },
                  "range": [
                    1650,
                    1662
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1665,
                    1666
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 124
                    },
                    "start": {
                      "column": 23,
                      "line": 124
                    }
                  }
                },
                "range": [
                  1650,
                  1666
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 124
                  },
                  "start": {
                    "column": 8,
                    "line": 124
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1646,
              1667
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
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
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "TryStatement",
                      "block": {
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        1737,
                                        1738
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 128
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 128
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        1741,
                                        1742
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 128
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 128
                                        }
                                      }
                                    },
                                    "range": [
                                      1737,
                                      1742
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 128
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 128
                                      }
                                    }
                                  },
                                  "range": [
                                    1737,
                                    1743
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 128
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 128
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "range": [
                                    1760,
                                    1767
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 129
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 129
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1719,
                                1781
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 130
                                },
                                "start": {
                                  "column": 24,
                                  "line": 127
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
                                    1713,
                                    1717
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 127
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 127
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  1712,
                                  1717
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 127
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 127
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                1711,
                                1717
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 127
                                },
                                "start": {
                                  "column": 16,
                                  "line": 127
                                }
                              }
                            },
                            "range": [
                              1707,
                              1781
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 130
                              },
                              "start": {
                                "column": 12,
                                "line": 127
                              }
                            }
                          }
                        ],
                        "range": [
                          1693,
                          1791
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 131
                          },
                          "start": {
                            "column": 12,
                            "line": 126
                          }
                        }
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1822,
                                1823
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 133
                                },
                                "start": {
                                  "column": 12,
                                  "line": 133
                                }
                              }
                            },
                            "range": [
                              1822,
                              1824
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 133
                              },
                              "start": {
                                "column": 12,
                                "line": 133
                              }
                            }
                          }
                        ],
                        "range": [
                          1808,
                          1844
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 134
                          },
                          "start": {
                            "column": 16,
                            "line": 132
                          }
                        }
                      },
                      "handler": null,
                      "range": [
                        1689,
                        1844
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 134
                        },
                        "start": {
                          "column": 8,
                          "line": 126
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
                          1853,
                          1854
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 135
                          },
                          "start": {
                            "column": 8,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        1853,
                        1855
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 135
                        },
                        "start": {
                          "column": 8,
                          "line": 135
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            1870,
                            1871
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 136
                            },
                            "start": {
                              "column": 8,
                              "line": 136
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            1874,
                            1875
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 136
                            },
                            "start": {
                              "column": 12,
                              "line": 136
                            }
                          }
                        },
                        "range": [
                          1870,
                          1875
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 136
                          },
                          "start": {
                            "column": 8,
                            "line": 136
                          }
                        }
                      },
                      "range": [
                        1870,
                        1876
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 136
                        },
                        "start": {
                          "column": 8,
                          "line": 136
                        }
                      }
                    }
                  ],
                  "range": [
                    1679,
                    1882
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 137
                    },
                    "start": {
                      "column": 11,
                      "line": 125
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  1673,
                  1882
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 137
                  },
                  "start": {
                    "column": 5,
                    "line": 125
                  }
                }
              },
              "optional": false,
              "range": [
                1672,
                1885
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 137
                },
                "start": {
                  "column": 4,
                  "line": 125
                }
              }
            },
            "range": [
              1672,
              1886
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 137
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1891,
                1892
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 138
                },
                "start": {
                  "column": 4,
                  "line": 138
                }
              }
            },
            "range": [
              1891,
              1893
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          }
        ],
        "range": [
          1640,
          1905
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 139
          },
          "start": {
            "column": 14,
            "line": 123
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "range": [
          1635,
          1637
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 123
          },
          "start": {
            "column": 9,
            "line": 123
          }
        }
      },
      "params": [],
      "range": [
        1626,
        1905
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 123
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
                        "column": 24,
                        "line": 142
                      },
                      "start": {
                        "column": 9,
                        "line": 142
                      }
                    },
                    "range": [
                      1933,
                      1948
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1935,
                              1936
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 142
                              },
                              "start": {
                                "column": 11,
                                "line": 142
                              }
                            }
                          },
                          "range": [
                            1935,
                            1936
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 142
                            },
                            "start": {
                              "column": 11,
                              "line": 142
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1939,
                              1940
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 142
                              },
                              "start": {
                                "column": 15,
                                "line": 142
                              }
                            }
                          },
                          "range": [
                            1939,
                            1940
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 142
                            },
                            "start": {
                              "column": 15,
                              "line": 142
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
                              1943,
                              1944
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 142
                              },
                              "start": {
                                "column": 19,
                                "line": 142
                              }
                            }
                          },
                          "range": [
                            1943,
                            1944
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 142
                            },
                            "start": {
                              "column": 19,
                              "line": 142
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              1947,
                              1948
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 142
                              },
                              "start": {
                                "column": 23,
                                "line": 142
                              }
                            }
                          },
                          "range": [
                            1947,
                            1948
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 142
                            },
                            "start": {
                              "column": 23,
                              "line": 142
                            }
                          }
                        }
                      ],
                      "range": [
                        1935,
                        1948
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 142
                        },
                        "start": {
                          "column": 11,
                          "line": 142
                        }
                      }
                    }
                  },
                  "range": [
                    1932,
                    1948
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 142
                    },
                    "start": {
                      "column": 8,
                      "line": 142
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1951,
                    1952
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 142
                    },
                    "start": {
                      "column": 27,
                      "line": 142
                    }
                  }
                },
                "range": [
                  1932,
                  1952
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 142
                  },
                  "start": {
                    "column": 8,
                    "line": 142
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1928,
              1953
            ],
            "loc": {
              "end": {
                "column": 29,
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
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
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
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1993,
                                  1994
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 145
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 145
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  1997,
                                  1998
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 145
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 145
                                  }
                                }
                              },
                              "range": [
                                1993,
                                1998
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 145
                                },
                                "start": {
                                  "column": 12,
                                  "line": 145
                                }
                              }
                            },
                            "range": [
                              1993,
                              1999
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 145
                              },
                              "start": {
                                "column": 12,
                                "line": 145
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "range": [
                              2012,
                              2019
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 146
                              },
                              "start": {
                                "column": 12,
                                "line": 146
                              }
                            }
                          }
                        ],
                        "range": [
                          1979,
                          2029
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 147
                          },
                          "start": {
                            "column": 12,
                            "line": 144
                          }
                        }
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2109,
                                2110
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
                            },
                            "range": [
                              2109,
                              2111
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 152
                              },
                              "start": {
                                "column": 12,
                                "line": 152
                              }
                            }
                          }
                        ],
                        "range": [
                          2095,
                          2135
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 153
                          },
                          "start": {
                            "column": 16,
                            "line": 151
                          }
                        }
                      },
                      "handler": {
                        "type": "CatchClause",
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    2062,
                                    2063
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
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "2",
                                  "value": 2,
                                  "range": [
                                    2066,
                                    2067
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 149
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 149
                                    }
                                  }
                                },
                                "range": [
                                  2062,
                                  2067
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 149
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 149
                                  }
                                }
                              },
                              "range": [
                                2062,
                                2068
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 149
                                },
                                "start": {
                                  "column": 12,
                                  "line": 149
                                }
                              }
                            }
                          ],
                          "range": [
                            2048,
                            2078
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 150
                            },
                            "start": {
                              "column": 18,
                              "line": 148
                            }
                          }
                        },
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            2045,
                            2046
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 148
                            },
                            "start": {
                              "column": 15,
                              "line": 148
                            }
                          }
                        },
                        "range": [
                          2038,
                          2078
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 150
                          },
                          "start": {
                            "column": 8,
                            "line": 148
                          }
                        }
                      },
                      "range": [
                        1975,
                        2135
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 153
                        },
                        "start": {
                          "column": 8,
                          "line": 144
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
                          2144,
                          2145
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 154
                          },
                          "start": {
                            "column": 8,
                            "line": 154
                          }
                        }
                      },
                      "range": [
                        2144,
                        2146
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 154
                        },
                        "start": {
                          "column": 8,
                          "line": 154
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            2161,
                            2162
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 155
                            },
                            "start": {
                              "column": 8,
                              "line": 155
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "3",
                          "value": 3,
                          "range": [
                            2165,
                            2166
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
                        },
                        "range": [
                          2161,
                          2166
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 155
                          },
                          "start": {
                            "column": 8,
                            "line": 155
                          }
                        }
                      },
                      "range": [
                        2161,
                        2167
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
                    }
                  ],
                  "range": [
                    1965,
                    2173
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 156
                    },
                    "start": {
                      "column": 11,
                      "line": 143
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  1959,
                  2173
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 156
                  },
                  "start": {
                    "column": 5,
                    "line": 143
                  }
                }
              },
              "optional": false,
              "range": [
                1958,
                2176
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 156
                },
                "start": {
                  "column": 4,
                  "line": 143
                }
              }
            },
            "range": [
              1958,
              2177
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 156
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2182,
                2183
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 157
                },
                "start": {
                  "column": 4,
                  "line": 157
                }
              }
            },
            "range": [
              2182,
              2184
            ],
            "loc": {
              "end": {
                "column": 6,
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
          1922,
          2196
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 15,
            "line": 141
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          1916,
          1919
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 141
          },
          "start": {
            "column": 9,
            "line": 141
          }
        }
      },
      "params": [],
      "range": [
        1907,
        2196
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 141
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
                        "column": 32,
                        "line": 161
                      },
                      "start": {
                        "column": 9,
                        "line": 161
                      }
                    },
                    "range": [
                      2224,
                      2247
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              2226,
                              2227
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 161
                              },
                              "start": {
                                "column": 11,
                                "line": 161
                              }
                            }
                          },
                          "range": [
                            2226,
                            2227
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 161
                            },
                            "start": {
                              "column": 11,
                              "line": 161
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              2230,
                              2231
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
                          "range": [
                            2230,
                            2231
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
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              2234,
                              2235
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
                            2234,
                            2235
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
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              2238,
                              2239
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 161
                              },
                              "start": {
                                "column": 23,
                                "line": 161
                              }
                            }
                          },
                          "range": [
                            2238,
                            2239
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 161
                            },
                            "start": {
                              "column": 23,
                              "line": 161
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "4",
                            "value": 4,
                            "range": [
                              2242,
                              2243
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 161
                              },
                              "start": {
                                "column": 27,
                                "line": 161
                              }
                            }
                          },
                          "range": [
                            2242,
                            2243
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 161
                            },
                            "start": {
                              "column": 27,
                              "line": 161
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "5",
                            "value": 5,
                            "range": [
                              2246,
                              2247
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 161
                              },
                              "start": {
                                "column": 31,
                                "line": 161
                              }
                            }
                          },
                          "range": [
                            2246,
                            2247
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 161
                            },
                            "start": {
                              "column": 31,
                              "line": 161
                            }
                          }
                        }
                      ],
                      "range": [
                        2226,
                        2247
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 161
                        },
                        "start": {
                          "column": 11,
                          "line": 161
                        }
                      }
                    }
                  },
                  "range": [
                    2223,
                    2247
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 161
                    },
                    "start": {
                      "column": 8,
                      "line": 161
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    2250,
                    2251
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 161
                    },
                    "start": {
                      "column": 35,
                      "line": 161
                    }
                  }
                },
                "range": [
                  2223,
                  2251
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 161
                  },
                  "start": {
                    "column": 8,
                    "line": 161
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2219,
              2252
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
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
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "TryStatement",
                      "block": {
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        2322,
                                        2323
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 165
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 165
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        2326,
                                        2327
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 165
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 165
                                        }
                                      }
                                    },
                                    "range": [
                                      2322,
                                      2327
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 165
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 165
                                      }
                                    }
                                  },
                                  "range": [
                                    2322,
                                    2328
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 165
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 165
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "range": [
                                    2345,
                                    2352
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 166
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 166
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2304,
                                2366
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 167
                                },
                                "start": {
                                  "column": 24,
                                  "line": 164
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
                                    2298,
                                    2302
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 164
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 164
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  2297,
                                  2302
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 164
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 164
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                2296,
                                2302
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 164
                                },
                                "start": {
                                  "column": 16,
                                  "line": 164
                                }
                              }
                            },
                            "range": [
                              2292,
                              2366
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 167
                              },
                              "start": {
                                "column": 12,
                                "line": 164
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        2409,
                                        2410
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 169
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 169
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "2",
                                      "value": 2,
                                      "range": [
                                        2413,
                                        2414
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 169
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 169
                                        }
                                      }
                                    },
                                    "range": [
                                      2409,
                                      2414
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 169
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 169
                                      }
                                    }
                                  },
                                  "range": [
                                    2409,
                                    2415
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 169
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 169
                                    }
                                  }
                                },
                                {
                                  "type": "ThrowStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      2438,
                                      2439
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 170
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 170
                                      }
                                    }
                                  },
                                  "range": [
                                    2432,
                                    2440
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 170
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 170
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2391,
                                2454
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 171
                                },
                                "start": {
                                  "column": 24,
                                  "line": 168
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
                                    2385,
                                    2389
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 168
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 168
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  2384,
                                  2389
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 168
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 168
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                2383,
                                2389
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 168
                                },
                                "start": {
                                  "column": 16,
                                  "line": 168
                                }
                              }
                            },
                            "range": [
                              2379,
                              2454
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 171
                              },
                              "start": {
                                "column": 12,
                                "line": 168
                              }
                            }
                          }
                        ],
                        "range": [
                          2278,
                          2464
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 172
                          },
                          "start": {
                            "column": 12,
                            "line": 163
                          }
                        }
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2573,
                                2574
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 178
                                },
                                "start": {
                                  "column": 12,
                                  "line": 178
                                }
                              }
                            },
                            "range": [
                              2573,
                              2575
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 178
                              },
                              "start": {
                                "column": 12,
                                "line": 178
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        2636,
                                        2637
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 180
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 180
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "4",
                                      "value": 4,
                                      "range": [
                                        2640,
                                        2641
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 180
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 180
                                        }
                                      }
                                    },
                                    "range": [
                                      2636,
                                      2641
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 180
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 180
                                      }
                                    }
                                  },
                                  "range": [
                                    2636,
                                    2642
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 180
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 180
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2618,
                                2656
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 181
                                },
                                "start": {
                                  "column": 24,
                                  "line": 179
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
                                    2612,
                                    2616
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 179
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 179
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  2611,
                                  2616
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 179
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 179
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                2610,
                                2616
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 179
                                },
                                "start": {
                                  "column": 16,
                                  "line": 179
                                }
                              }
                            },
                            "range": [
                              2606,
                              2656
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 181
                              },
                              "start": {
                                "column": 12,
                                "line": 179
                              }
                            }
                          }
                        ],
                        "range": [
                          2559,
                          2666
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 182
                          },
                          "start": {
                            "column": 16,
                            "line": 177
                          }
                        }
                      },
                      "handler": {
                        "type": "CatchClause",
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  2497,
                                  2498
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 174
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 174
                                  }
                                }
                              },
                              "range": [
                                2497,
                                2499
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 174
                                },
                                "start": {
                                  "column": 12,
                                  "line": 174
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    2526,
                                    2527
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
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    2530,
                                    2531
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 175
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 175
                                    }
                                  }
                                },
                                "range": [
                                  2526,
                                  2531
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 175
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 175
                                  }
                                }
                              },
                              "range": [
                                2526,
                                2532
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 175
                                },
                                "start": {
                                  "column": 12,
                                  "line": 175
                                }
                              }
                            }
                          ],
                          "range": [
                            2483,
                            2542
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 176
                            },
                            "start": {
                              "column": 18,
                              "line": 173
                            }
                          }
                        },
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            2480,
                            2481
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 173
                            },
                            "start": {
                              "column": 15,
                              "line": 173
                            }
                          }
                        },
                        "range": [
                          2473,
                          2542
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 176
                          },
                          "start": {
                            "column": 8,
                            "line": 173
                          }
                        }
                      },
                      "range": [
                        2274,
                        2666
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 182
                        },
                        "start": {
                          "column": 8,
                          "line": 163
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
                          2675,
                          2676
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 183
                          },
                          "start": {
                            "column": 8,
                            "line": 183
                          }
                        }
                      },
                      "range": [
                        2675,
                        2677
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 183
                        },
                        "start": {
                          "column": 8,
                          "line": 183
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            2700,
                            2701
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
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            2704,
                            2705
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 184
                            },
                            "start": {
                              "column": 12,
                              "line": 184
                            }
                          }
                        },
                        "range": [
                          2700,
                          2705
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 184
                          },
                          "start": {
                            "column": 8,
                            "line": 184
                          }
                        }
                      },
                      "range": [
                        2700,
                        2706
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 184
                        },
                        "start": {
                          "column": 8,
                          "line": 184
                        }
                      }
                    }
                  ],
                  "range": [
                    2264,
                    2712
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 185
                    },
                    "start": {
                      "column": 11,
                      "line": 162
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  2258,
                  2712
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 185
                  },
                  "start": {
                    "column": 5,
                    "line": 162
                  }
                }
              },
              "optional": false,
              "range": [
                2257,
                2715
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 185
                },
                "start": {
                  "column": 4,
                  "line": 162
                }
              }
            },
            "range": [
              2257,
              2716
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 185
              },
              "start": {
                "column": 4,
                "line": 162
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
                2721,
                2722
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 186
                },
                "start": {
                  "column": 4,
                  "line": 186
                }
              }
            },
            "range": [
              2721,
              2723
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 186
              },
              "start": {
                "column": 4,
                "line": 186
              }
            }
          }
        ],
        "range": [
          2213,
          2739
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 187
          },
          "start": {
            "column": 15,
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
        "name": "f11",
        "optional": false,
        "range": [
          2207,
          2210
        ],
        "loc": {
          "end": {
            "column": 12,
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
        2198,
        2739
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 187
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
                        "column": 40,
                        "line": 190
                      },
                      "start": {
                        "column": 9,
                        "line": 190
                      }
                    },
                    "range": [
                      2767,
                      2798
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              2769,
                              2770
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 190
                              },
                              "start": {
                                "column": 11,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2769,
                            2770
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 190
                            },
                            "start": {
                              "column": 11,
                              "line": 190
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              2773,
                              2774
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 190
                              },
                              "start": {
                                "column": 15,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2773,
                            2774
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 190
                            },
                            "start": {
                              "column": 15,
                              "line": 190
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
                              2777,
                              2778
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 190
                              },
                              "start": {
                                "column": 19,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2777,
                            2778
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 190
                            },
                            "start": {
                              "column": 19,
                              "line": 190
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              2781,
                              2782
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 190
                              },
                              "start": {
                                "column": 23,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2781,
                            2782
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 190
                            },
                            "start": {
                              "column": 23,
                              "line": 190
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "4",
                            "value": 4,
                            "range": [
                              2785,
                              2786
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 190
                              },
                              "start": {
                                "column": 27,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2785,
                            2786
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 190
                            },
                            "start": {
                              "column": 27,
                              "line": 190
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "5",
                            "value": 5,
                            "range": [
                              2789,
                              2790
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 190
                              },
                              "start": {
                                "column": 31,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2789,
                            2790
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 190
                            },
                            "start": {
                              "column": 31,
                              "line": 190
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "6",
                            "value": 6,
                            "range": [
                              2793,
                              2794
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 190
                              },
                              "start": {
                                "column": 35,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2793,
                            2794
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 190
                            },
                            "start": {
                              "column": 35,
                              "line": 190
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "7",
                            "value": 7,
                            "range": [
                              2797,
                              2798
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 190
                              },
                              "start": {
                                "column": 39,
                                "line": 190
                              }
                            }
                          },
                          "range": [
                            2797,
                            2798
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 190
                            },
                            "start": {
                              "column": 39,
                              "line": 190
                            }
                          }
                        }
                      ],
                      "range": [
                        2769,
                        2798
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 190
                        },
                        "start": {
                          "column": 11,
                          "line": 190
                        }
                      }
                    }
                  },
                  "range": [
                    2766,
                    2798
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 190
                    },
                    "start": {
                      "column": 8,
                      "line": 190
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    2801,
                    2802
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 190
                    },
                    "start": {
                      "column": 43,
                      "line": 190
                    }
                  }
                },
                "range": [
                  2766,
                  2802
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 190
                  },
                  "start": {
                    "column": 8,
                    "line": 190
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2762,
              2803
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 190
              },
              "start": {
                "column": 4,
                "line": 190
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
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "TryStatement",
                      "block": {
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        2873,
                                        2874
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 194
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 194
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        2877,
                                        2878
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 194
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 194
                                        }
                                      }
                                    },
                                    "range": [
                                      2873,
                                      2878
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 194
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 194
                                      }
                                    }
                                  },
                                  "range": [
                                    2873,
                                    2879
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 194
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 194
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "range": [
                                    2896,
                                    2903
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 195
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 195
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2855,
                                2917
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 196
                                },
                                "start": {
                                  "column": 24,
                                  "line": 193
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
                                    2849,
                                    2853
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 193
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 193
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  2848,
                                  2853
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 193
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 193
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                2847,
                                2853
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 193
                                },
                                "start": {
                                  "column": 16,
                                  "line": 193
                                }
                              }
                            },
                            "range": [
                              2843,
                              2917
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 196
                              },
                              "start": {
                                "column": 12,
                                "line": 193
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        2960,
                                        2961
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 198
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 198
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "2",
                                      "value": 2,
                                      "range": [
                                        2964,
                                        2965
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 198
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 198
                                        }
                                      }
                                    },
                                    "range": [
                                      2960,
                                      2965
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 198
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 198
                                      }
                                    }
                                  },
                                  "range": [
                                    2960,
                                    2966
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 198
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 198
                                    }
                                  }
                                },
                                {
                                  "type": "ThrowStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      2989,
                                      2990
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 199
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 199
                                      }
                                    }
                                  },
                                  "range": [
                                    2983,
                                    2991
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 199
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 199
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2942,
                                3005
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 200
                                },
                                "start": {
                                  "column": 24,
                                  "line": 197
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
                                    2936,
                                    2940
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 197
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 197
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  2935,
                                  2940
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 197
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 197
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                2934,
                                2940
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 197
                                },
                                "start": {
                                  "column": 16,
                                  "line": 197
                                }
                              }
                            },
                            "range": [
                              2930,
                              3005
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 200
                              },
                              "start": {
                                "column": 12,
                                "line": 197
                              }
                            }
                          }
                        ],
                        "range": [
                          2829,
                          3015
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 201
                          },
                          "start": {
                            "column": 12,
                            "line": 192
                          }
                        }
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                3124,
                                3125
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 207
                                },
                                "start": {
                                  "column": 12,
                                  "line": 207
                                }
                              }
                            },
                            "range": [
                              3124,
                              3126
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 207
                              },
                              "start": {
                                "column": 12,
                                "line": 207
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        3187,
                                        3188
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 209
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 209
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "4",
                                      "value": 4,
                                      "range": [
                                        3191,
                                        3192
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 209
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 209
                                        }
                                      }
                                    },
                                    "range": [
                                      3187,
                                      3192
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 209
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 209
                                      }
                                    }
                                  },
                                  "range": [
                                    3187,
                                    3193
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 209
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 209
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "range": [
                                    3210,
                                    3217
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 210
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 210
                                    }
                                  }
                                }
                              ],
                              "range": [
                                3169,
                                3231
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 211
                                },
                                "start": {
                                  "column": 24,
                                  "line": 208
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
                                    3163,
                                    3167
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 208
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 208
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  3162,
                                  3167
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 208
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 208
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                3161,
                                3167
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 208
                                },
                                "start": {
                                  "column": 16,
                                  "line": 208
                                }
                              }
                            },
                            "range": [
                              3157,
                              3231
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 211
                              },
                              "start": {
                                "column": 12,
                                "line": 208
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        3274,
                                        3275
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 213
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 213
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "5",
                                      "value": 5,
                                      "range": [
                                        3278,
                                        3279
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 213
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 213
                                        }
                                      }
                                    },
                                    "range": [
                                      3274,
                                      3279
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 213
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 213
                                      }
                                    }
                                  },
                                  "range": [
                                    3274,
                                    3280
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 213
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 213
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "range": [
                                    3297,
                                    3304
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 214
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 214
                                    }
                                  }
                                }
                              ],
                              "range": [
                                3256,
                                3318
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 215
                                },
                                "start": {
                                  "column": 24,
                                  "line": 212
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
                                    3250,
                                    3254
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 212
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 212
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  3249,
                                  3254
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 212
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 212
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                3248,
                                3254
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 212
                                },
                                "start": {
                                  "column": 16,
                                  "line": 212
                                }
                              }
                            },
                            "range": [
                              3244,
                              3318
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 215
                              },
                              "start": {
                                "column": 12,
                                "line": 212
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
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3331,
                                  3332
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 216
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 216
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "6",
                                "value": 6,
                                "range": [
                                  3335,
                                  3336
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
                              },
                              "range": [
                                3331,
                                3336
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 216
                                },
                                "start": {
                                  "column": 12,
                                  "line": 216
                                }
                              }
                            },
                            "range": [
                              3331,
                              3337
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 216
                              },
                              "start": {
                                "column": 12,
                                "line": 216
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "range": [
                              3350,
                              3357
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 217
                              },
                              "start": {
                                "column": 12,
                                "line": 217
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
                                3370,
                                3371
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 218
                                },
                                "start": {
                                  "column": 12,
                                  "line": 218
                                }
                              }
                            },
                            "range": [
                              3370,
                              3372
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 218
                              },
                              "start": {
                                "column": 12,
                                "line": 218
                              }
                            }
                          }
                        ],
                        "range": [
                          3110,
                          3397
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 219
                          },
                          "start": {
                            "column": 16,
                            "line": 206
                          }
                        }
                      },
                      "handler": {
                        "type": "CatchClause",
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3048,
                                  3049
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
                              },
                              "range": [
                                3048,
                                3050
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 203
                                },
                                "start": {
                                  "column": 12,
                                  "line": 203
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    3077,
                                    3078
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 204
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 204
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    3081,
                                    3082
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 204
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 204
                                    }
                                  }
                                },
                                "range": [
                                  3077,
                                  3082
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 204
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 204
                                  }
                                }
                              },
                              "range": [
                                3077,
                                3083
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 204
                                },
                                "start": {
                                  "column": 12,
                                  "line": 204
                                }
                              }
                            }
                          ],
                          "range": [
                            3034,
                            3093
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 205
                            },
                            "start": {
                              "column": 18,
                              "line": 202
                            }
                          }
                        },
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            3031,
                            3032
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 202
                            },
                            "start": {
                              "column": 15,
                              "line": 202
                            }
                          }
                        },
                        "range": [
                          3024,
                          3093
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 205
                          },
                          "start": {
                            "column": 8,
                            "line": 202
                          }
                        }
                      },
                      "range": [
                        2825,
                        3397
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 219
                        },
                        "start": {
                          "column": 8,
                          "line": 192
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
                          3406,
                          3407
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 220
                          },
                          "start": {
                            "column": 8,
                            "line": 220
                          }
                        }
                      },
                      "range": [
                        3406,
                        3408
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 220
                        },
                        "start": {
                          "column": 8,
                          "line": 220
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            3432,
                            3433
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 221
                            },
                            "start": {
                              "column": 8,
                              "line": 221
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "7",
                          "value": 7,
                          "range": [
                            3436,
                            3437
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 221
                            },
                            "start": {
                              "column": 12,
                              "line": 221
                            }
                          }
                        },
                        "range": [
                          3432,
                          3437
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 221
                          },
                          "start": {
                            "column": 8,
                            "line": 221
                          }
                        }
                      },
                      "range": [
                        3432,
                        3438
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 221
                        },
                        "start": {
                          "column": 8,
                          "line": 221
                        }
                      }
                    }
                  ],
                  "range": [
                    2815,
                    3457
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 222
                    },
                    "start": {
                      "column": 11,
                      "line": 191
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  2809,
                  3457
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 222
                  },
                  "start": {
                    "column": 5,
                    "line": 191
                  }
                }
              },
              "optional": false,
              "range": [
                2808,
                3460
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 222
                },
                "start": {
                  "column": 4,
                  "line": 191
                }
              }
            },
            "range": [
              2808,
              3461
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 222
              },
              "start": {
                "column": 4,
                "line": 191
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
                3466,
                3467
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 223
                },
                "start": {
                  "column": 4,
                  "line": 223
                }
              }
            },
            "range": [
              3466,
              3468
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 223
              },
              "start": {
                "column": 4,
                "line": 223
              }
            }
          }
        ],
        "range": [
          2756,
          3484
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 224
          },
          "start": {
            "column": 15,
            "line": 189
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          2750,
          2753
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 189
          },
          "start": {
            "column": 9,
            "line": 189
          }
        }
      },
      "params": [],
      "range": [
        2741,
        3484
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 224
        },
        "start": {
          "column": 0,
          "line": 189
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
            "name": "main",
            "optional": false,
            "range": [
              3514,
              3518
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 228
              },
              "start": {
                "column": 6,
                "line": 228
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
                        "name": "hoge",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 229
                            },
                            "start": {
                              "column": 12,
                              "line": 229
                            }
                          },
                          "range": [
                            3541,
                            3561
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  3543,
                                  3549
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 229
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 229
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3552,
                                  3561
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 229
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 229
                                  }
                                }
                              }
                            ],
                            "range": [
                              3543,
                              3561
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 229
                              },
                              "start": {
                                "column": 14,
                                "line": 229
                              }
                            }
                          }
                        },
                        "range": [
                          3537,
                          3561
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 229
                          },
                          "start": {
                            "column": 8,
                            "line": 229
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "range": [
                          3564,
                          3573
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 229
                          },
                          "start": {
                            "column": 35,
                            "line": 229
                          }
                        }
                      },
                      "range": [
                        3537,
                        3573
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 229
                        },
                        "start": {
                          "column": 8,
                          "line": 229
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    3533,
                    3574
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 229
                    },
                    "start": {
                      "column": 4,
                      "line": 229
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "hoge",
                            "optional": false,
                            "range": [
                              3593,
                              3597
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 231
                              },
                              "start": {
                                "column": 8,
                                "line": 231
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'hoge!'",
                            "value": "hoge!",
                            "range": [
                              3600,
                              3607
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 231
                              },
                              "start": {
                                "column": 15,
                                "line": 231
                              }
                            }
                          },
                          "range": [
                            3593,
                            3607
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 231
                            },
                            "start": {
                              "column": 8,
                              "line": 231
                            }
                          }
                        },
                        "range": [
                          3593,
                          3608
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 231
                          },
                          "start": {
                            "column": 8,
                            "line": 231
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3617,
                          3624
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 232
                          },
                          "start": {
                            "column": 8,
                            "line": 232
                          }
                        }
                      }
                    ],
                    "range": [
                      3583,
                      3630
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 233
                      },
                      "start": {
                        "column": 8,
                        "line": 230
                      }
                    }
                  },
                  "finalizer": {
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "hoge",
                                  "optional": false,
                                  "range": [
                                    3711,
                                    3715
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 239
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 239
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    3716,
                                    3722
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 239
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 239
                                    }
                                  }
                                },
                                "range": [
                                  3711,
                                  3722
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 239
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 239
                                  }
                                }
                              },
                              "range": [
                                3711,
                                3723
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 239
                                },
                                "start": {
                                  "column": 12,
                                  "line": 239
                                }
                              }
                            }
                          ],
                          "range": [
                            3697,
                            3733
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 240
                            },
                            "start": {
                              "column": 18,
                              "line": 238
                            }
                          }
                        },
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hoge",
                          "optional": false,
                          "range": [
                            3691,
                            3695
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 238
                            },
                            "start": {
                              "column": 12,
                              "line": 238
                            }
                          }
                        },
                        "range": [
                          3687,
                          3733
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 240
                          },
                          "start": {
                            "column": 8,
                            "line": 238
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3742,
                          3749
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 241
                          },
                          "start": {
                            "column": 8,
                            "line": 241
                          }
                        }
                      }
                    ],
                    "range": [
                      3677,
                      3755
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 242
                      },
                      "start": {
                        "column": 12,
                        "line": 237
                      }
                    }
                  },
                  "handler": {
                    "type": "CatchClause",
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "range": [
                            3651,
                            3658
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 235
                            },
                            "start": {
                              "column": 8,
                              "line": 235
                            }
                          }
                        }
                      ],
                      "range": [
                        3641,
                        3664
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 236
                        },
                        "start": {
                          "column": 10,
                          "line": 234
                        }
                      }
                    },
                    "param": null,
                    "range": [
                      3635,
                      3664
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 236
                      },
                      "start": {
                        "column": 4,
                        "line": 234
                      }
                    }
                  },
                  "range": [
                    3579,
                    3755
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 242
                    },
                    "start": {
                      "column": 4,
                      "line": 230
                    }
                  }
                }
              ],
              "range": [
                3527,
                3757
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 243
                },
                "start": {
                  "column": 19,
                  "line": 228
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              3521,
              3757
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 243
              },
              "start": {
                "column": 13,
                "line": 228
              }
            }
          },
          "range": [
            3514,
            3757
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 243
            },
            "start": {
              "column": 6,
              "line": 228
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3508,
        3757
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 243
        },
        "start": {
          "column": 0,
          "line": 228
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
                    3807,
                    3808
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 248
                    },
                    "start": {
                      "column": 10,
                      "line": 248
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TryStatement",
                          "block": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "'x'",
                                  "value": "x",
                                  "range": [
                                    3853,
                                    3856
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 250
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 250
                                    }
                                  }
                                },
                                "range": [
                                  3846,
                                  3857
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 250
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 250
                                  }
                                }
                              }
                            ],
                            "range": [
                              3832,
                              3867
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 251
                              },
                              "start": {
                                "column": 12,
                                "line": 249
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
                                    "type": "Literal",
                                    "raw": "null",
                                    "value": null,
                                    "range": [
                                      3907,
                                      3911
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 253
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 253
                                      }
                                    }
                                  },
                                  "range": [
                                    3900,
                                    3912
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 253
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 253
                                    }
                                  }
                                }
                              ],
                              "range": [
                                3886,
                                3922
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 254
                                },
                                "start": {
                                  "column": 18,
                                  "line": 252
                                }
                              }
                            },
                            "param": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "range": [
                                3883,
                                3884
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 252
                                },
                                "start": {
                                  "column": 15,
                                  "line": 252
                                }
                              }
                            },
                            "range": [
                              3876,
                              3922
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 254
                              },
                              "start": {
                                "column": 8,
                                "line": 252
                              }
                            }
                          },
                          "range": [
                            3828,
                            3922
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 254
                            },
                            "start": {
                              "column": 8,
                              "line": 249
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
                              3931,
                              3932
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 255
                              },
                              "start": {
                                "column": 8,
                                "line": 255
                              }
                            }
                          },
                          "range": [
                            3931,
                            3933
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 255
                            },
                            "start": {
                              "column": 8,
                              "line": 255
                            }
                          }
                        }
                      ],
                      "range": [
                        3818,
                        3955
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 256
                        },
                        "start": {
                          "column": 21,
                          "line": 248
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3812,
                      3955
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 256
                      },
                      "start": {
                        "column": 15,
                        "line": 248
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3811,
                    3958
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 256
                    },
                    "start": {
                      "column": 14,
                      "line": 248
                    }
                  }
                },
                "range": [
                  3807,
                  3958
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 256
                  },
                  "start": {
                    "column": 10,
                    "line": 248
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3801,
              3959
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 256
              },
              "start": {
                "column": 4,
                "line": 248
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
                3964,
                3965
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 257
                },
                "start": {
                  "column": 4,
                  "line": 257
                }
              }
            },
            "range": [
              3964,
              3966
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 257
              },
              "start": {
                "column": 4,
                "line": 257
              }
            }
          }
        ],
        "range": [
          3795,
          3982
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 258
          },
          "start": {
            "column": 14,
            "line": 247
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "range": [
          3790,
          3792
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 247
          },
          "start": {
            "column": 9,
            "line": 247
          }
        }
      },
      "params": [],
      "range": [
        3781,
        3982
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 258
        },
        "start": {
          "column": 0,
          "line": 247
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "range": [
          4011,
          4016
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 262
          },
          "start": {
            "column": 5,
            "line": 262
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
                  "name": "tag",
                  "optional": false,
                  "range": [
                    4021,
                    4024
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 262
                    },
                    "start": {
                      "column": 15,
                      "line": 262
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
                      "column": 25,
                      "line": 262
                    },
                    "start": {
                      "column": 18,
                      "line": 262
                    }
                  },
                  "range": [
                    4024,
                    4031
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"one\"",
                      "value": "one",
                      "range": [
                        4026,
                        4031
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 262
                        },
                        "start": {
                          "column": 20,
                          "line": 262
                        }
                      }
                    },
                    "range": [
                      4026,
                      4031
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 262
                      },
                      "start": {
                        "column": 20,
                        "line": 262
                      }
                    }
                  }
                },
                "range": [
                  4021,
                  4031
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 262
                  },
                  "start": {
                    "column": 15,
                    "line": 262
                  }
                }
              }
            ],
            "range": [
              4019,
              4033
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 262
              },
              "start": {
                "column": 13,
                "line": 262
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
                  "name": "tag",
                  "optional": false,
                  "range": [
                    4038,
                    4041
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 262
                    },
                    "start": {
                      "column": 32,
                      "line": 262
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
                      "column": 42,
                      "line": 262
                    },
                    "start": {
                      "column": 35,
                      "line": 262
                    }
                  },
                  "range": [
                    4041,
                    4048
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"two\"",
                      "value": "two",
                      "range": [
                        4043,
                        4048
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 262
                        },
                        "start": {
                          "column": 37,
                          "line": 262
                        }
                      }
                    },
                    "range": [
                      4043,
                      4048
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 262
                      },
                      "start": {
                        "column": 37,
                        "line": 262
                      }
                    }
                  }
                },
                "range": [
                  4038,
                  4048
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 262
                  },
                  "start": {
                    "column": 32,
                    "line": 262
                  }
                }
              }
            ],
            "range": [
              4036,
              4050
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 262
              },
              "start": {
                "column": 30,
                "line": 262
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
                  "name": "tag",
                  "optional": false,
                  "range": [
                    4055,
                    4058
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 262
                    },
                    "start": {
                      "column": 49,
                      "line": 262
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
                      "column": 61,
                      "line": 262
                    },
                    "start": {
                      "column": 52,
                      "line": 262
                    }
                  },
                  "range": [
                    4058,
                    4067
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"three\"",
                      "value": "three",
                      "range": [
                        4060,
                        4067
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 262
                        },
                        "start": {
                          "column": 54,
                          "line": 262
                        }
                      }
                    },
                    "range": [
                      4060,
                      4067
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 262
                      },
                      "start": {
                        "column": 54,
                        "line": 262
                      }
                    }
                  }
                },
                "range": [
                  4055,
                  4067
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 262
                  },
                  "start": {
                    "column": 49,
                    "line": 262
                  }
                }
              }
            ],
            "range": [
              4053,
              4069
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 262
              },
              "start": {
                "column": 47,
                "line": 262
              }
            }
          }
        ],
        "range": [
          4019,
          4069
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 262
          },
          "start": {
            "column": 13,
            "line": 262
          }
        }
      },
      "range": [
        4006,
        4070
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 262
        },
        "start": {
          "column": 0,
          "line": 262
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 265
                      },
                      "start": {
                        "column": 13,
                        "line": 265
                      }
                    },
                    "range": [
                      4120,
                      4127
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "range": [
                          4122,
                          4127
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 265
                          },
                          "start": {
                            "column": 15,
                            "line": 265
                          }
                        }
                      },
                      "range": [
                        4122,
                        4127
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 265
                        },
                        "start": {
                          "column": 15,
                          "line": 265
                        }
                      }
                    }
                  },
                  "range": [
                    4115,
                    4127
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 265
                    },
                    "start": {
                      "column": 8,
                      "line": 265
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
                        "name": "tag",
                        "optional": false,
                        "range": [
                          4132,
                          4135
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 265
                          },
                          "start": {
                            "column": 25,
                            "line": 265
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"one\"",
                        "value": "one",
                        "range": [
                          4137,
                          4142
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 265
                          },
                          "start": {
                            "column": 30,
                            "line": 265
                          }
                        }
                      },
                      "range": [
                        4132,
                        4142
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 265
                        },
                        "start": {
                          "column": 25,
                          "line": 265
                        }
                      }
                    }
                  ],
                  "range": [
                    4130,
                    4144
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 265
                    },
                    "start": {
                      "column": 23,
                      "line": 265
                    }
                  }
                },
                "range": [
                  4115,
                  4144
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 265
                  },
                  "start": {
                    "column": 8,
                    "line": 265
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              4111,
              4145
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 265
              },
              "start": {
                "column": 4,
                "line": 265
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "state",
                      "optional": false,
                      "range": [
                        4164,
                        4169
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 267
                        },
                        "start": {
                          "column": 8,
                          "line": 267
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "range": [
                              4174,
                              4177
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 267
                              },
                              "start": {
                                "column": 18,
                                "line": 267
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"two\"",
                            "value": "two",
                            "range": [
                              4179,
                              4184
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 267
                              },
                              "start": {
                                "column": 23,
                                "line": 267
                              }
                            }
                          },
                          "range": [
                            4174,
                            4184
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 267
                            },
                            "start": {
                              "column": 18,
                              "line": 267
                            }
                          }
                        }
                      ],
                      "range": [
                        4172,
                        4186
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 267
                        },
                        "start": {
                          "column": 16,
                          "line": 267
                        }
                      }
                    },
                    "range": [
                      4164,
                      4186
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 267
                      },
                      "start": {
                        "column": 8,
                        "line": 267
                      }
                    }
                  },
                  "range": [
                    4164,
                    4187
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 267
                    },
                    "start": {
                      "column": 8,
                      "line": 267
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "state",
                            "optional": false,
                            "range": [
                              4214,
                              4219
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 269
                              },
                              "start": {
                                "column": 12,
                                "line": 269
                              }
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "range": [
                                    4224,
                                    4227
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 269
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 269
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"three\"",
                                  "value": "three",
                                  "range": [
                                    4229,
                                    4236
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 269
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 269
                                    }
                                  }
                                },
                                "range": [
                                  4224,
                                  4236
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 269
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 269
                                  }
                                }
                              }
                            ],
                            "range": [
                              4222,
                              4238
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 269
                              },
                              "start": {
                                "column": 20,
                                "line": 269
                              }
                            }
                          },
                          "range": [
                            4214,
                            4238
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 269
                            },
                            "start": {
                              "column": 12,
                              "line": 269
                            }
                          }
                        },
                        "range": [
                          4214,
                          4239
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 269
                          },
                          "start": {
                            "column": 12,
                            "line": 269
                          }
                        }
                      }
                    ],
                    "range": [
                      4200,
                      4249
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 270
                      },
                      "start": {
                        "column": 12,
                        "line": 268
                      }
                    }
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      4266,
                      4269
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 271
                      },
                      "start": {
                        "column": 16,
                        "line": 271
                      }
                    }
                  },
                  "handler": null,
                  "range": [
                    4196,
                    4269
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 271
                    },
                    "start": {
                      "column": 8,
                      "line": 268
                    }
                  }
                }
              ],
              "range": [
                4154,
                4275
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 272
                },
                "start": {
                  "column": 8,
                  "line": 266
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "range": [
                          4302,
                          4307
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 274
                          },
                          "start": {
                            "column": 8,
                            "line": 274
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "range": [
                          4308,
                          4311
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 274
                          },
                          "start": {
                            "column": 14,
                            "line": 274
                          }
                        }
                      },
                      "range": [
                        4302,
                        4311
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 274
                        },
                        "start": {
                          "column": 8,
                          "line": 274
                        }
                      }
                    },
                    "range": [
                      4302,
                      4312
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 274
                      },
                      "start": {
                        "column": 8,
                        "line": 274
                      }
                    }
                  },
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
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "range": [
                                    4395,
                                    4400
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 276
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 276
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "range": [
                                    4401,
                                    4404
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 276
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 276
                                    }
                                  }
                                },
                                "range": [
                                  4395,
                                  4404
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 276
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 276
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
                                "name": "console",
                                "optional": false,
                                "range": [
                                  4383,
                                  4390
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 276
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 276
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
                                  4391,
                                  4394
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 276
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 276
                                  }
                                }
                              },
                              "range": [
                                4383,
                                4394
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 276
                                },
                                "start": {
                                  "column": 12,
                                  "line": 276
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              4383,
                              4405
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 276
                              },
                              "start": {
                                "column": 12,
                                "line": 276
                              }
                            }
                          },
                          "range": [
                            4383,
                            4406
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 276
                            },
                            "start": {
                              "column": 12,
                              "line": 276
                            }
                          }
                        }
                      ],
                      "range": [
                        4369,
                        4416
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 277
                        },
                        "start": {
                          "column": 56,
                          "line": 275
                        }
                      }
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "range": [
                              4325,
                              4330
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 275
                              },
                              "start": {
                                "column": 12,
                                "line": 275
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "range": [
                              4331,
                              4334
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 275
                              },
                              "start": {
                                "column": 18,
                                "line": 275
                              }
                            }
                          },
                          "range": [
                            4325,
                            4334
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 275
                            },
                            "start": {
                              "column": 12,
                              "line": 275
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"one\"",
                          "value": "one",
                          "range": [
                            4339,
                            4344
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 275
                            },
                            "start": {
                              "column": 26,
                              "line": 275
                            }
                          }
                        },
                        "range": [
                          4325,
                          4344
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 275
                          },
                          "start": {
                            "column": 12,
                            "line": 275
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "range": [
                              4348,
                              4353
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 275
                              },
                              "start": {
                                "column": 35,
                                "line": 275
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "range": [
                              4354,
                              4357
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 275
                              },
                              "start": {
                                "column": 41,
                                "line": 275
                              }
                            }
                          },
                          "range": [
                            4348,
                            4357
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 275
                            },
                            "start": {
                              "column": 35,
                              "line": 275
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"two\"",
                          "value": "two",
                          "range": [
                            4362,
                            4367
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 275
                            },
                            "start": {
                              "column": 49,
                              "line": 275
                            }
                          }
                        },
                        "range": [
                          4348,
                          4367
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 275
                          },
                          "start": {
                            "column": 35,
                            "line": 275
                          }
                        }
                      },
                      "range": [
                        4325,
                        4367
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 275
                        },
                        "start": {
                          "column": 12,
                          "line": 275
                        }
                      }
                    },
                    "range": [
                      4321,
                      4416
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 277
                      },
                      "start": {
                        "column": 8,
                        "line": 275
                      }
                    }
                  }
                ],
                "range": [
                  4292,
                  4422
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 278
                  },
                  "start": {
                    "column": 16,
                    "line": 273
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "range": [
                  4287,
                  4290
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 273
                  },
                  "start": {
                    "column": 11,
                    "line": 273
                  }
                }
              },
              "range": [
                4280,
                4422
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 278
                },
                "start": {
                  "column": 4,
                  "line": 273
                }
              }
            },
            "range": [
              4150,
              4422
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 278
              },
              "start": {
                "column": 4,
                "line": 266
              }
            }
          }
        ],
        "range": [
          4105,
          4424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 279
          },
          "start": {
            "column": 33,
            "line": 264
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notallowed",
        "optional": false,
        "range": [
          4081,
          4091
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 264
          },
          "start": {
            "column": 9,
            "line": 264
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 264
              },
              "start": {
                "column": 23,
                "line": 264
              }
            },
            "range": [
              4095,
              4103
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                4097,
                4103
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 264
                },
                "start": {
                  "column": 25,
                  "line": 264
                }
              }
            }
          },
          "range": [
            4092,
            4103
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 264
            },
            "start": {
              "column": 20,
              "line": 264
            }
          }
        }
      ],
      "range": [
        4072,
        4424
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 279
        },
        "start": {
          "column": 0,
          "line": 264
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
                        "column": 36,
                        "line": 282
                      },
                      "start": {
                        "column": 9,
                        "line": 282
                      }
                    },
                    "range": [
                      4452,
                      4479
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              4454,
                              4455
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 282
                              },
                              "start": {
                                "column": 11,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4454,
                            4455
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 282
                            },
                            "start": {
                              "column": 11,
                              "line": 282
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              4458,
                              4459
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 282
                              },
                              "start": {
                                "column": 15,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4458,
                            4459
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 282
                            },
                            "start": {
                              "column": 15,
                              "line": 282
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
                              4462,
                              4463
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 282
                              },
                              "start": {
                                "column": 19,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4462,
                            4463
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 282
                            },
                            "start": {
                              "column": 19,
                              "line": 282
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              4466,
                              4467
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 282
                              },
                              "start": {
                                "column": 23,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4466,
                            4467
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 282
                            },
                            "start": {
                              "column": 23,
                              "line": 282
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "4",
                            "value": 4,
                            "range": [
                              4470,
                              4471
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 282
                              },
                              "start": {
                                "column": 27,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4470,
                            4471
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 282
                            },
                            "start": {
                              "column": 27,
                              "line": 282
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "5",
                            "value": 5,
                            "range": [
                              4474,
                              4475
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 282
                              },
                              "start": {
                                "column": 31,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4474,
                            4475
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 282
                            },
                            "start": {
                              "column": 31,
                              "line": 282
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "6",
                            "value": 6,
                            "range": [
                              4478,
                              4479
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 282
                              },
                              "start": {
                                "column": 35,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            4478,
                            4479
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 282
                            },
                            "start": {
                              "column": 35,
                              "line": 282
                            }
                          }
                        }
                      ],
                      "range": [
                        4454,
                        4479
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 282
                        },
                        "start": {
                          "column": 11,
                          "line": 282
                        }
                      }
                    }
                  },
                  "range": [
                    4451,
                    4479
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 282
                    },
                    "start": {
                      "column": 8,
                      "line": 282
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4482,
                    4483
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 282
                    },
                    "start": {
                      "column": 39,
                      "line": 282
                    }
                  }
                },
                "range": [
                  4451,
                  4483
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 282
                  },
                  "start": {
                    "column": 8,
                    "line": 282
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              4447,
              4484
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 282
              },
              "start": {
                "column": 4,
                "line": 282
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        4503,
                        4504
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 284
                        },
                        "start": {
                          "column": 8,
                          "line": 284
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        4507,
                        4508
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 284
                        },
                        "start": {
                          "column": 12,
                          "line": 284
                        }
                      }
                    },
                    "range": [
                      4503,
                      4508
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 284
                      },
                      "start": {
                        "column": 8,
                        "line": 284
                      }
                    }
                  },
                  "range": [
                    4503,
                    4509
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 284
                    },
                    "start": {
                      "column": 8,
                      "line": 284
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              4536,
                              4537
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 286
                              },
                              "start": {
                                "column": 12,
                                "line": 286
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              4540,
                              4541
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 286
                              },
                              "start": {
                                "column": 16,
                                "line": 286
                              }
                            }
                          },
                          "range": [
                            4536,
                            4541
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 286
                            },
                            "start": {
                              "column": 12,
                              "line": 286
                            }
                          }
                        },
                        "range": [
                          4536,
                          4542
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 286
                          },
                          "start": {
                            "column": 12,
                            "line": 286
                          }
                        }
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    4577,
                                    4578
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 288
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 288
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    4581,
                                    4582
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 288
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 288
                                    }
                                  }
                                },
                                "range": [
                                  4577,
                                  4582
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 288
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 288
                                  }
                                }
                              },
                              "range": [
                                4577,
                                4583
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 288
                                },
                                "start": {
                                  "column": 16,
                                  "line": 288
                                }
                              }
                            }
                          ],
                          "range": [
                            4559,
                            4597
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 289
                            },
                            "start": {
                              "column": 16,
                              "line": 287
                            }
                          }
                        },
                        "finalizer": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "alternate": null,
                              "consequent": {
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
                                      4648,
                                      4649
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 291
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 291
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "4",
                                    "value": 4,
                                    "range": [
                                      4652,
                                      4653
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 291
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 291
                                      }
                                    }
                                  },
                                  "range": [
                                    4648,
                                    4653
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 291
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 291
                                    }
                                  }
                                },
                                "range": [
                                  4648,
                                  4654
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 291
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 291
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
                                      4642,
                                      4646
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 291
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 291
                                      }
                                    }
                                  },
                                  "operator": "!",
                                  "prefix": true,
                                  "range": [
                                    4641,
                                    4646
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 291
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 291
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  4640,
                                  4646
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 291
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 291
                                  }
                                }
                              },
                              "range": [
                                4636,
                                4654
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 291
                                },
                                "start": {
                                  "column": 16,
                                  "line": 291
                                }
                              }
                            }
                          ],
                          "range": [
                            4618,
                            4668
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 292
                            },
                            "start": {
                              "column": 20,
                              "line": 290
                            }
                          }
                        },
                        "handler": null,
                        "range": [
                          4555,
                          4668
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 292
                          },
                          "start": {
                            "column": 12,
                            "line": 287
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
                            4681,
                            4682
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 293
                            },
                            "start": {
                              "column": 12,
                              "line": 293
                            }
                          }
                        },
                        "range": [
                          4681,
                          4683
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 293
                          },
                          "start": {
                            "column": 12,
                            "line": 293
                          }
                        }
                      }
                    ],
                    "range": [
                      4522,
                      4703
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 294
                      },
                      "start": {
                        "column": 12,
                        "line": 285
                      }
                    }
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
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
                                4746,
                                4747
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 296
                                },
                                "start": {
                                  "column": 24,
                                  "line": 296
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "5",
                              "value": 5,
                              "range": [
                                4750,
                                4751
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 296
                                },
                                "start": {
                                  "column": 28,
                                  "line": 296
                                }
                              }
                            },
                            "range": [
                              4746,
                              4751
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 296
                              },
                              "start": {
                                "column": 24,
                                "line": 296
                              }
                            }
                          },
                          "range": [
                            4746,
                            4752
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 296
                            },
                            "start": {
                              "column": 24,
                              "line": 296
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
                                4740,
                                4744
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 296
                                },
                                "start": {
                                  "column": 18,
                                  "line": 296
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              4739,
                              4744
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 296
                              },
                              "start": {
                                "column": 17,
                                "line": 296
                              }
                            }
                          },
                          "operator": "!",
                          "prefix": true,
                          "range": [
                            4738,
                            4744
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 296
                            },
                            "start": {
                              "column": 16,
                              "line": 296
                            }
                          }
                        },
                        "range": [
                          4734,
                          4752
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 296
                          },
                          "start": {
                            "column": 12,
                            "line": 296
                          }
                        }
                      }
                    ],
                    "range": [
                      4720,
                      4762
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 297
                      },
                      "start": {
                        "column": 16,
                        "line": 295
                      }
                    }
                  },
                  "handler": null,
                  "range": [
                    4518,
                    4762
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 297
                    },
                    "start": {
                      "column": 8,
                      "line": 285
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
                      4771,
                      4772
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 298
                      },
                      "start": {
                        "column": 8,
                        "line": 298
                      }
                    }
                  },
                  "range": [
                    4771,
                    4773
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 298
                    },
                    "start": {
                      "column": 8,
                      "line": 298
                    }
                  }
                }
              ],
              "range": [
                4493,
                4793
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 299
                },
                "start": {
                  "column": 8,
                  "line": 283
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
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
                          4828,
                          4829
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 301
                          },
                          "start": {
                            "column": 20,
                            "line": 301
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "6",
                        "value": 6,
                        "range": [
                          4832,
                          4833
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 301
                          },
                          "start": {
                            "column": 24,
                            "line": 301
                          }
                        }
                      },
                      "range": [
                        4828,
                        4833
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 301
                        },
                        "start": {
                          "column": 20,
                          "line": 301
                        }
                      }
                    },
                    "range": [
                      4828,
                      4834
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 301
                      },
                      "start": {
                        "column": 20,
                        "line": 301
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
                          4822,
                          4826
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 301
                          },
                          "start": {
                            "column": 14,
                            "line": 301
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        4821,
                        4826
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 301
                        },
                        "start": {
                          "column": 13,
                          "line": 301
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      4820,
                      4826
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 301
                      },
                      "start": {
                        "column": 12,
                        "line": 301
                      }
                    }
                  },
                  "range": [
                    4816,
                    4834
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 301
                    },
                    "start": {
                      "column": 8,
                      "line": 301
                    }
                  }
                }
              ],
              "range": [
                4806,
                4840
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 302
                },
                "start": {
                  "column": 12,
                  "line": 300
                }
              }
            },
            "handler": null,
            "range": [
              4489,
              4840
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 302
              },
              "start": {
                "column": 4,
                "line": 283
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
                4845,
                4846
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 303
                },
                "start": {
                  "column": 4,
                  "line": 303
                }
              }
            },
            "range": [
              4845,
              4847
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 303
              },
              "start": {
                "column": 4,
                "line": 303
              }
            }
          }
        ],
        "range": [
          4441,
          4867
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 304
          },
          "start": {
            "column": 15,
            "line": 281
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "range": [
          4435,
          4438
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 281
          },
          "start": {
            "column": 9,
            "line": 281
          }
        }
      },
      "params": [],
      "range": [
        4426,
        4867
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 304
        },
        "start": {
          "column": 0,
          "line": 281
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
                        "column": 32,
                        "line": 307
                      },
                      "start": {
                        "column": 9,
                        "line": 307
                      }
                    },
                    "range": [
                      4895,
                      4918
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              4897,
                              4898
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 307
                              },
                              "start": {
                                "column": 11,
                                "line": 307
                              }
                            }
                          },
                          "range": [
                            4897,
                            4898
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 307
                            },
                            "start": {
                              "column": 11,
                              "line": 307
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              4901,
                              4902
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 307
                              },
                              "start": {
                                "column": 15,
                                "line": 307
                              }
                            }
                          },
                          "range": [
                            4901,
                            4902
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 307
                            },
                            "start": {
                              "column": 15,
                              "line": 307
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
                              4905,
                              4906
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 307
                              },
                              "start": {
                                "column": 19,
                                "line": 307
                              }
                            }
                          },
                          "range": [
                            4905,
                            4906
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 307
                            },
                            "start": {
                              "column": 19,
                              "line": 307
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              4909,
                              4910
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 307
                              },
                              "start": {
                                "column": 23,
                                "line": 307
                              }
                            }
                          },
                          "range": [
                            4909,
                            4910
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 307
                            },
                            "start": {
                              "column": 23,
                              "line": 307
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "4",
                            "value": 4,
                            "range": [
                              4913,
                              4914
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 307
                              },
                              "start": {
                                "column": 27,
                                "line": 307
                              }
                            }
                          },
                          "range": [
                            4913,
                            4914
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 307
                            },
                            "start": {
                              "column": 27,
                              "line": 307
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "5",
                            "value": 5,
                            "range": [
                              4917,
                              4918
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 307
                              },
                              "start": {
                                "column": 31,
                                "line": 307
                              }
                            }
                          },
                          "range": [
                            4917,
                            4918
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 307
                            },
                            "start": {
                              "column": 31,
                              "line": 307
                            }
                          }
                        }
                      ],
                      "range": [
                        4897,
                        4918
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 307
                        },
                        "start": {
                          "column": 11,
                          "line": 307
                        }
                      }
                    }
                  },
                  "range": [
                    4894,
                    4918
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 307
                    },
                    "start": {
                      "column": 8,
                      "line": 307
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4921,
                    4922
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 307
                    },
                    "start": {
                      "column": 35,
                      "line": 307
                    }
                  }
                },
                "range": [
                  4894,
                  4922
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 307
                  },
                  "start": {
                    "column": 8,
                    "line": 307
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              4890,
              4923
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 307
              },
              "start": {
                "column": 4,
                "line": 307
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        4942,
                        4943
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 309
                        },
                        "start": {
                          "column": 8,
                          "line": 309
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        4946,
                        4947
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 309
                        },
                        "start": {
                          "column": 12,
                          "line": 309
                        }
                      }
                    },
                    "range": [
                      4942,
                      4947
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 309
                      },
                      "start": {
                        "column": 8,
                        "line": 309
                      }
                    }
                  },
                  "range": [
                    4942,
                    4948
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 309
                    },
                    "start": {
                      "column": 8,
                      "line": 309
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              4975,
                              4976
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 311
                              },
                              "start": {
                                "column": 12,
                                "line": 311
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              4979,
                              4980
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 311
                              },
                              "start": {
                                "column": 16,
                                "line": 311
                              }
                            }
                          },
                          "range": [
                            4975,
                            4980
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 311
                            },
                            "start": {
                              "column": 12,
                              "line": 311
                            }
                          }
                        },
                        "range": [
                          4975,
                          4981
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 311
                          },
                          "start": {
                            "column": 12,
                            "line": 311
                          }
                        }
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    5016,
                                    5017
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 313
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 313
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    5020,
                                    5021
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 313
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 313
                                    }
                                  }
                                },
                                "range": [
                                  5016,
                                  5021
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 313
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 313
                                  }
                                }
                              },
                              "range": [
                                5016,
                                5022
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 313
                                },
                                "start": {
                                  "column": 16,
                                  "line": 313
                                }
                              }
                            }
                          ],
                          "range": [
                            4998,
                            5036
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 314
                            },
                            "start": {
                              "column": 16,
                              "line": 312
                            }
                          }
                        },
                        "finalizer": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "alternate": null,
                              "consequent": {
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
                                      5087,
                                      5088
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 316
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 316
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "4",
                                    "value": 4,
                                    "range": [
                                      5091,
                                      5092
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 316
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 316
                                      }
                                    }
                                  },
                                  "range": [
                                    5087,
                                    5092
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 316
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 316
                                    }
                                  }
                                },
                                "range": [
                                  5087,
                                  5093
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 316
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 316
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
                                      5081,
                                      5085
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 316
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 316
                                      }
                                    }
                                  },
                                  "operator": "!",
                                  "prefix": true,
                                  "range": [
                                    5080,
                                    5085
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 316
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 316
                                    }
                                  }
                                },
                                "operator": "!",
                                "prefix": true,
                                "range": [
                                  5079,
                                  5085
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 316
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 316
                                  }
                                }
                              },
                              "range": [
                                5075,
                                5093
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 316
                                },
                                "start": {
                                  "column": 16,
                                  "line": 316
                                }
                              }
                            }
                          ],
                          "range": [
                            5057,
                            5107
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 317
                            },
                            "start": {
                              "column": 20,
                              "line": 315
                            }
                          }
                        },
                        "handler": null,
                        "range": [
                          4994,
                          5107
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 317
                          },
                          "start": {
                            "column": 12,
                            "line": 312
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
                            5120,
                            5121
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 318
                            },
                            "start": {
                              "column": 12,
                              "line": 318
                            }
                          }
                        },
                        "range": [
                          5120,
                          5122
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 318
                          },
                          "start": {
                            "column": 12,
                            "line": 318
                          }
                        }
                      }
                    ],
                    "range": [
                      4961,
                      5142
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 319
                      },
                      "start": {
                        "column": 12,
                        "line": 310
                      }
                    }
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
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
                                5185,
                                5186
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 321
                                },
                                "start": {
                                  "column": 24,
                                  "line": 321
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "5",
                              "value": 5,
                              "range": [
                                5189,
                                5190
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 321
                                },
                                "start": {
                                  "column": 28,
                                  "line": 321
                                }
                              }
                            },
                            "range": [
                              5185,
                              5190
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 321
                              },
                              "start": {
                                "column": 24,
                                "line": 321
                              }
                            }
                          },
                          "range": [
                            5185,
                            5191
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 321
                            },
                            "start": {
                              "column": 24,
                              "line": 321
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
                                5179,
                                5183
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 321
                                },
                                "start": {
                                  "column": 18,
                                  "line": 321
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              5178,
                              5183
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 321
                              },
                              "start": {
                                "column": 17,
                                "line": 321
                              }
                            }
                          },
                          "operator": "!",
                          "prefix": true,
                          "range": [
                            5177,
                            5183
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 321
                            },
                            "start": {
                              "column": 16,
                              "line": 321
                            }
                          }
                        },
                        "range": [
                          5173,
                          5191
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 321
                          },
                          "start": {
                            "column": 12,
                            "line": 321
                          }
                        }
                      }
                    ],
                    "range": [
                      5159,
                      5201
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 322
                      },
                      "start": {
                        "column": 16,
                        "line": 320
                      }
                    }
                  },
                  "handler": null,
                  "range": [
                    4957,
                    5201
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 322
                    },
                    "start": {
                      "column": 8,
                      "line": 310
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
                      5210,
                      5211
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 323
                      },
                      "start": {
                        "column": 8,
                        "line": 323
                      }
                    }
                  },
                  "range": [
                    5210,
                    5212
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 323
                    },
                    "start": {
                      "column": 8,
                      "line": 323
                    }
                  }
                }
              ],
              "range": [
                4932,
                5232
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 324
                },
                "start": {
                  "column": 8,
                  "line": 308
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        5257,
                        5258
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 326
                        },
                        "start": {
                          "column": 8,
                          "line": 326
                        }
                      }
                    },
                    "range": [
                      5257,
                      5259
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 326
                      },
                      "start": {
                        "column": 8,
                        "line": 326
                      }
                    }
                  }
                ],
                "range": [
                  5247,
                  5291
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 327
                  },
                  "start": {
                    "column": 14,
                    "line": 325
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  5244,
                  5245
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 325
                  },
                  "start": {
                    "column": 11,
                    "line": 325
                  }
                }
              },
              "range": [
                5237,
                5291
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 327
                },
                "start": {
                  "column": 4,
                  "line": 325
                }
              }
            },
            "range": [
              4928,
              5291
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 327
              },
              "start": {
                "column": 4,
                "line": 308
              }
            }
          }
        ],
        "range": [
          4884,
          5293
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 328
          },
          "start": {
            "column": 15,
            "line": 306
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "range": [
          4878,
          4881
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 306
          },
          "start": {
            "column": 9,
            "line": 306
          }
        }
      },
      "params": [],
      "range": [
        4869,
        5293
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 328
        },
        "start": {
          "column": 0,
          "line": 306
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 329
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
