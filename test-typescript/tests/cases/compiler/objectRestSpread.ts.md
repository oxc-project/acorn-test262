__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    461
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
            "name": "obj",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              10,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            12
          ],
          "loc": {
            "end": {
              "column": 12,
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
        13
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                20,
                23
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            "range": [
              17,
              23
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          16,
          24
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 1,
            "line": 3
          }
        }
      },
      "range": [
        15,
        26
      ],
      "loc": {
        "end": {
          "column": 11,
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
                  "name": "prop",
                  "optional": false,
                  "range": [
                    37,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    37,
                    54
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "range": [
                      37,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            49,
                            52
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          46,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 13,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      44,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
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
                  37,
                  54
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
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "range": [
                    60,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    60,
                    90
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "more",
                    "optional": false,
                    "range": [
                      60,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "range": [
                              72,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 6
                              },
                              "start": {
                                "column": 16,
                                "line": 6
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "range": [
                            69,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
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
                        67,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "range": [
                              85,
                              88
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 29,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            82,
                            88
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 26,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        80,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 24,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      67,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "range": [
                  60,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      97,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'other'",
                    "value": "other",
                    "range": [
                      102,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    97,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    112,
                    130
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "range": [
                      112,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            125,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 7
                            },
                            "start": {
                              "column": 33,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          122,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      120,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                },
                "range": [
                  96,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "range": [
                    136,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    148,
                    247
                  ],
                  "decorators": [],
                  "left": {
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
                          "name": "nested",
                          "optional": false,
                          "range": [
                            149,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "range": [
                            157,
                            233
                          ],
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "optional": false,
                            "properties": [
                              {
                                "type": "Property",
                                "computed": true,
                                "key": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "raw": "'nested'",
                                    "value": "nested",
                                    "range": [
                                      160,
                                      168
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "'prop'",
                                    "value": "prop",
                                    "range": [
                                      171,
                                      177
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    160,
                                    177
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 8
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "AssignmentPattern",
                                  "range": [
                                    180,
                                    203
                                  ],
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nestedProp",
                                    "optional": false,
                                    "range": [
                                      180,
                                      190
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "right": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "SpreadElement",
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "obj",
                                          "optional": false,
                                          "range": [
                                            198,
                                            201
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 69,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 66,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          195,
                                          201
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 69,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 63,
                                            "line": 8
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      193,
                                      203
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 71,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "loc": {
                                    "end": {
                                      "column": 71,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  159,
                                  203
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 8
                                  }
                                }
                              },
                              {
                                "type": "RestElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nestedRest",
                                  "optional": false,
                                  "range": [
                                    208,
                                    218
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 76,
                                      "line": 8
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false,
                                "range": [
                                  205,
                                  218
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              157,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 8
                              },
                              "start": {
                                "column": 25,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "range": [
                                    228,
                                    231
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 99,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 96,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  225,
                                  231
                                ],
                                "loc": {
                                  "end": {
                                    "column": 99,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 93,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              223,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 101,
                                "line": 8
                              },
                              "start": {
                                "column": 91,
                                "line": 8
                              }
                            }
                          },
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 8
                            },
                            "start": {
                              "column": 25,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          149,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      148,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            242,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 113,
                              "line": 8
                            },
                            "start": {
                              "column": 110,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          239,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 113,
                            "line": 8
                          },
                          "start": {
                            "column": 107,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      237,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 115,
                        "line": 8
                      },
                      "start": {
                        "column": 105,
                        "line": 8
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "range": [
                  136,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    253,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    253,
                    278
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "range": [
                      253,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "FunctionExpression",
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        276,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "range": [
                      258,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                "range": [
                  253,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "range": [
                    287,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  284,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              31,
              294
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                297,
                299
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                303,
                306
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "range": [
              297,
              306
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "range": [
            31,
            306
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        27,
        307
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 11
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
        "operator": "=",
        "left": {
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
                "name": "prop",
                "optional": false,
                "range": [
                  316,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    316,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          328,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 16,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        325,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    323,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  316,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "range": [
                316,
                333
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            {
              "type": "Property",
              "computed": true,
              "key": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    340,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 15
                    },
                    "start": {
                      "column": 5,
                      "line": 15
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'other'",
                  "value": "other",
                  "range": [
                    345,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "range": [
                  340,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "range": [
                    355,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          368,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 15
                          },
                          "start": {
                            "column": 33,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        365,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 15
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    363,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 15
                    }
                  }
                },
                "range": [
                  355,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              },
              "range": [
                339,
                373
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "range": [
                  382,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                379,
                387
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            310,
            389
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 13
            }
          }
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              392,
              394
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              398,
              401
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "range": [
            392,
            401
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          310,
          401
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 17
          },
          "start": {
            "column": 1,
            "line": 13
          }
        }
      },
      "range": [
        309,
        402
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 17
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
        "body": [],
        "range": [
          459,
          461
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 22
          },
          "start": {
            "column": 3,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          413,
          417
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
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
                "name": "prop",
                "optional": false,
                "range": [
                  424,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  424,
                  441
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    424,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          436,
                          439
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
                      "range": [
                        433,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 13,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    431,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 11,
                      "line": 20
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "range": [
                424,
                441
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "range": [
                  450,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                447,
                455
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            }
          ],
          "range": [
            418,
            457
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "range": [
        404,
        461
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
