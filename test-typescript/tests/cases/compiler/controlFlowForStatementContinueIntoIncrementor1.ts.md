__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    410
  ],
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
                "name": "iNext",
                "optional": false,
                "range": [
                  65,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "init": null,
              "range": [
                65,
                70
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            61,
            71
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 4
            }
          }
        },
        {
          "type": "ForStatement",
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iNext",
                          "optional": false,
                          "range": [
                            160,
                            165
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 11
                            },
                            "start": {
                              "column": 6,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"bad\"",
                          "value": "bad",
                          "range": [
                            168,
                            173
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
                        "range": [
                          160,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 6,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        160,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "ContinueStatement",
                      "label": null,
                      "range": [
                        181,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 6,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    152,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      144,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      149,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    144,
                    150
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
                  140,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                    "name": "iNext",
                    "optional": false,
                    "range": [
                      201,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        209,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        213,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      209,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    201,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "range": [
                  201,
                  215
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
              }
            ],
            "range": [
              134,
              219
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "i",
                  "optional": false,
                  "range": [
                    88,
                    89
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    92,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "range": [
                  88,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              84,
              93
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                99,
                100
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
            "right": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                103,
                105
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
            },
            "range": [
              99,
              105
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                111,
                112
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
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNext",
              "optional": false,
              "range": [
                115,
                120
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "range": [
              111,
              120
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
            74,
            219
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 2,
              "line": 5
            }
          }
        }
      ],
      "range": [
        57,
        221
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
                "name": "iNext",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 11,
                      "line": 19
                    }
                  },
                  "range": [
                    236,
                    253
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          238,
                          244
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 19
                          },
                          "start": {
                            "column": 13,
                            "line": 19
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          247,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 19
                          },
                          "start": {
                            "column": 22,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      238,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 13,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  231,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  256,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 31,
                    "line": 19
                  }
                }
              },
              "range": [
                231,
                258
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            227,
            259
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 19
            },
            "start": {
              "column": 2,
              "line": 19
            }
          }
        },
        {
          "type": "ForStatement",
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iNext",
                          "optional": false,
                          "range": [
                            348,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 26
                            },
                            "start": {
                              "column": 6,
                              "line": 26
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"bad\"",
                          "value": "bad",
                          "range": [
                            356,
                            361
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 26
                            },
                            "start": {
                              "column": 14,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          348,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 26
                          },
                          "start": {
                            "column": 6,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        348,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 6,
                          "line": 26
                        }
                      }
                    },
                    {
                      "type": "ContinueStatement",
                      "label": null,
                      "range": [
                        369,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 27
                        },
                        "start": {
                          "column": 6,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    340,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      332,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      337,
                      338
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
                    332,
                    338
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
                  328,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 25
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
                    "name": "iNext",
                    "optional": false,
                    "range": [
                      389,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        397,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 29
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        401,
                        402
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 29
                        },
                        "start": {
                          "column": 16,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      397,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 29
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    389,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "range": [
                  389,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              322,
              407
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 24
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
                  "name": "i",
                  "optional": false,
                  "range": [
                    276,
                    277
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    280,
                    281
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
                  276,
                  281
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              272,
              281
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                287,
                288
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                291,
                293
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "range": [
              287,
              293
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                299,
                300
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNext",
              "optional": false,
              "range": [
                303,
                308
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "range": [
              299,
              308
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "range": [
            262,
            407
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 30
            },
            "start": {
              "column": 2,
              "line": 20
            }
          }
        }
      ],
      "range": [
        223,
        409
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
