__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    979
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                41
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      7,
                      13
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 1
                      },
                      "start": {
                        "column": 7,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      16,
                      22
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 1
                      },
                      "start": {
                        "column": 16,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      25,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "range": [
                        35,
                        41
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      35,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 1
                      },
                      "start": {
                        "column": 35,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  7,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              41
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            41
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        42
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                51,
                60
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  53,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              47,
              60
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            47,
            60
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        43,
        61
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            63,
            64
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "/a/",
          "regex": {
            "flags": "",
            "pattern": "a"
          },
          "value": null,
          "range": [
            67,
            70
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          63,
          70
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        63,
        71
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                149,
                150
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
            },
            "range": [
              149,
              151
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
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
                "name": "x",
                "optional": false,
                "range": [
                  167,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  171,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "range": [
                167,
                173
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              167,
              174
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
          }
        ],
        "range": [
          143,
          176
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "consequent": {
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
                110,
                111
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
            "range": [
              110,
              112
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  128,
                  129
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
                "raw": "\"\"",
                "value": "",
                "range": [
                  132,
                  134
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
                128,
                134
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
            "range": [
              128,
              135
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          104,
          137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 32,
            "line": 5
          }
        }
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              76,
              77
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
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                93,
                94
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
            "right": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                97,
                101
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "range": [
              93,
              101
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          }
        ],
        "range": [
          76,
          102
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "range": [
        72,
        176
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          177,
          178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        177,
        179
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    },
                    "range": [
                      224,
                      241
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            226,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 11,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            235,
                            241
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 16
                            },
                            "start": {
                              "column": 20,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        226,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    223,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  223,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
              219,
              242
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 4,
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        300,
                        301
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
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        304,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      300,
                      306
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
                  },
                  "range": [
                    300,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    316,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                290,
                329
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
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
                        267,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        271,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      267,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    267,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                257,
                280
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                251,
                255
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "range": [
              247,
              329
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 17
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
                334,
                335
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              334,
              336
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          213,
          348
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 13,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          209,
          210
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "range": [
        200,
        348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 15
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
                        "column": 26,
                        "line": 27
                      },
                      "start": {
                        "column": 9,
                        "line": 27
                      }
                    },
                    "range": [
                      373,
                      390
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            375,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 27
                            },
                            "start": {
                              "column": 11,
                              "line": 27
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            384,
                            390
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 27
                            },
                            "start": {
                              "column": 20,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "range": [
                        375,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    372,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": null,
                "range": [
                  372,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              368,
              391
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        467,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        471,
                        473
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 33
                        },
                        "start": {
                          "column": 12,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      467,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    467,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                457,
                480
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
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
                        416,
                        417
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
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        420,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 29
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      416,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    416,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      438,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 30
                      },
                      "start": {
                        "column": 14,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    432,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                406,
                447
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                400,
                404
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              396,
              480
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 28
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
                485,
                486
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              485,
              487
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          362,
          499
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 13,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          358,
          359
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
      "params": [],
      "range": [
        349,
        499
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "range": [
                      638,
                      642
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 42
                      },
                      "start": {
                        "column": 15,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    631,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                621,
                649
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 9,
                  "line": 41
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          599,
                          603
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 39
                          },
                          "start": {
                            "column": 26,
                            "line": 39
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
                        "name": "JSON",
                        "optional": false,
                        "range": [
                          588,
                          592
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 39
                          },
                          "start": {
                            "column": 15,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parse",
                        "optional": false,
                        "range": [
                          593,
                          598
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 39
                          },
                          "start": {
                            "column": 20,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        588,
                        598
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      588,
                      604
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 39
                      },
                      "start": {
                        "column": 15,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    581,
                    605
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                571,
                611
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 34,
                  "line": 38
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    552,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 38
                    },
                    "start": {
                      "column": 15,
                      "line": 38
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  545,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  561,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 24,
                    "line": 38
                  }
                }
              },
              "range": [
                545,
                569
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            },
            "range": [
              541,
              649
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          535,
          651
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 35,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "range": [
          509,
          510
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 37
              },
              "start": {
                "column": 18,
                "line": 37
              }
            },
            "range": [
              518,
              530
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    520,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 37
                    },
                    "start": {
                      "column": 20,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      529,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 37
                      },
                      "start": {
                        "column": 29,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    529,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 37
                    },
                    "start": {
                      "column": 29,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                520,
                530
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 20,
                  "line": 37
                }
              }
            }
          },
          "range": [
            514,
            530
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 37
            },
            "start": {
              "column": 14,
              "line": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 37
          },
          "start": {
            "column": 31,
            "line": 37
          }
        },
        "range": [
          531,
          534
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              533,
              534
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 37
              },
              "start": {
                "column": 33,
                "line": 37
              }
            }
          },
          "range": [
            533,
            534
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 37
            },
            "start": {
              "column": 33,
              "line": 37
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 37
          },
          "start": {
            "column": 10,
            "line": 37
          }
        },
        "range": [
          510,
          513
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                511,
                512
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              511,
              512
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 37
              },
              "start": {
                "column": 11,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        500,
        651
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 37
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "range": [
                      823,
                      827
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 50
                      },
                      "start": {
                        "column": 15,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    816,
                    828
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                806,
                834
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 49
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'will always happen'",
                        "value": "will always happen",
                        "range": [
                          768,
                          788
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 47
                          },
                          "start": {
                            "column": 24,
                            "line": 47
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
                        762,
                        767
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 18,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      758,
                      789
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 47
                      },
                      "start": {
                        "column": 14,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    752,
                    790
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                742,
                796
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 34,
                  "line": 46
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    723,
                    727
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 46
                    },
                    "start": {
                      "column": 15,
                      "line": 46
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  716,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  732,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 46
                  },
                  "start": {
                    "column": 24,
                    "line": 46
                  }
                }
              },
              "range": [
                716,
                740
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 46
                },
                "start": {
                  "column": 8,
                  "line": 46
                }
              }
            },
            "range": [
              712,
              834
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          706,
          836
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 54,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "range": [
          661,
          662
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 45
              },
              "start": {
                "column": 33,
                "line": 45
              }
            },
            "range": [
              685,
              697
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    687,
                    693
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 45
                    },
                    "start": {
                      "column": 35,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      696,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 45
                      },
                      "start": {
                        "column": 44,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    696,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 45
                    },
                    "start": {
                      "column": 44,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                687,
                697
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 45
                },
                "start": {
                  "column": 35,
                  "line": 45
                }
              }
            }
          },
          "range": [
            681,
            697
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 45
            },
            "start": {
              "column": 29,
              "line": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 45
          },
          "start": {
            "column": 46,
            "line": 45
          }
        },
        "range": [
          698,
          705
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            700,
            705
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 45
            },
            "start": {
              "column": 48,
              "line": 45
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 45
          }
        },
        "range": [
          662,
          680
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                673,
                679
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 45
                },
                "start": {
                  "column": 21,
                  "line": 45
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                663,
                664
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "out": false,
            "range": [
              663,
              679
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 45
              },
              "start": {
                "column": 11,
                "line": 45
              }
            }
          }
        ]
      },
      "range": [
        652,
        836
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          853,
          864
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                857,
                858
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 55
                },
                "start": {
                  "column": 2,
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
                  "column": 6,
                  "line": 55
                },
                "start": {
                  "column": 3,
                  "line": 55
                }
              },
              "range": [
                858,
                861
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    860,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 55
                    },
                    "start": {
                      "column": 5,
                      "line": 55
                    }
                  }
                },
                "range": [
                  860,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 55
                  },
                  "start": {
                    "column": 5,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              857,
              862
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 15,
            "line": 54
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          848,
          849
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 54
          },
          "start": {
            "column": 10,
            "line": 54
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 54
          },
          "start": {
            "column": 11,
            "line": 54
          }
        },
        "range": [
          849,
          852
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                850,
                851
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
            "out": false,
            "range": [
              850,
              851
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
          }
        ]
      },
      "range": [
        838,
        864
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 54
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
            "alternate": null,
            "consequent": {
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
                              "column": 18,
                              "line": 59
                            },
                            "start": {
                              "column": 13,
                              "line": 59
                            }
                          },
                          "range": [
                            931,
                            936
                          ],
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"A\"",
                              "value": "A",
                              "range": [
                                933,
                                936
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 59
                                },
                                "start": {
                                  "column": 15,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              933,
                              936
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 59
                              },
                              "start": {
                                "column": 15,
                                "line": 59
                              }
                            }
                          }
                        },
                        "range": [
                          930,
                          936
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              940,
                              944
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 59
                              },
                              "start": {
                                "column": 22,
                                "line": 59
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              948,
                              955
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 59
                              },
                              "start": {
                                "column": 30,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            940,
                            955
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 59
                            },
                            "start": {
                              "column": 22,
                              "line": 59
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                966,
                                967
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 59
                                },
                                "start": {
                                  "column": 48,
                                  "line": 59
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                968,
                                969
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 59
                                },
                                "start": {
                                  "column": 50,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              966,
                              969
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 59
                              },
                              "start": {
                                "column": 48,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            959,
                            969
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 59
                            },
                            "start": {
                              "column": 41,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          940,
                          969
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 59
                          },
                          "start": {
                            "column": 22,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        930,
                        970
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 59
                        },
                        "start": {
                          "column": 12,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    926,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                916,
                976
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 21,
                  "line": 58
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    903,
                    904
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    905,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 58
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                },
                "range": [
                  903,
                  906
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
              "right": {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  911,
                  914
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 58
                  },
                  "start": {
                    "column": 16,
                    "line": 58
                  }
                }
              },
              "range": [
                903,
                914
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 58
                },
                "start": {
                  "column": 8,
                  "line": 58
                }
              }
            },
            "range": [
              899,
              976
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          893,
          978
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 28,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "range": [
          874,
          875
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
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
                "column": 26,
                "line": 57
              },
              "start": {
                "column": 12,
                "line": 57
              }
            },
            "range": [
              877,
              891
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  880,
                  891
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"A\"",
                          "value": "A",
                          "range": [
                            881,
                            884
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 57
                            },
                            "start": {
                              "column": 16,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          881,
                          884
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 57
                          },
                          "start": {
                            "column": 16,
                            "line": 57
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"B\"",
                          "value": "B",
                          "range": [
                            887,
                            890
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 57
                            },
                            "start": {
                              "column": 22,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          887,
                          890
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 57
                          },
                          "start": {
                            "column": 22,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "range": [
                      881,
                      890
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 57
                      },
                      "start": {
                        "column": 16,
                        "line": 57
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 57
                  },
                  "start": {
                    "column": 15,
                    "line": 57
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  879,
                  880
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
              "range": [
                879,
                891
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 57
                },
                "start": {
                  "column": 14,
                  "line": 57
                }
              }
            }
          },
          "range": [
            876,
            891
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 57
            },
            "start": {
              "column": 11,
              "line": 57
            }
          }
        }
      ],
      "range": [
        865,
        978
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 62
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
