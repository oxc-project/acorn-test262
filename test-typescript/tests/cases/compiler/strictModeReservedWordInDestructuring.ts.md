__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    306
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          1,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 1,
            "line": 1
          }
        }
      },
      "range": [
        1,
        13
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 1
        },
        "start": {
          "column": 1,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "public",
                "optional": false,
                "range": [
                  19,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              18,
              26
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  30,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              29,
              32
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
              }
            }
          },
          "range": [
            18,
            32
          ],
          "loc": {
            "end": {
              "column": 18,
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
      "kind": "var",
      "range": [
        14,
        33
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    40,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
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
                  "name": "public",
                  "optional": false,
                  "range": [
                    43,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                },
                "range": [
                  40,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              38,
              51
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    56,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
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
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                "range": [
                  56,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              54,
              62
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          "range": [
            38,
            62
          ],
          "loc": {
            "end": {
              "column": 28,
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
      "kind": "var",
      "range": [
        34,
        63
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "private",
                    "optional": false,
                    "range": [
                      70,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 4
                      },
                      "start": {
                        "column": 6,
                        "line": 4
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  69,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              68,
              79
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      84,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  83,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              82,
              93
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          },
          "range": [
            68,
            93
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        64,
        94
      ],
      "loc": {
        "end": {
          "column": 30,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    101,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
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
                        "name": "s",
                        "optional": false,
                        "range": [
                          106,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
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
                        "name": "static",
                        "optional": false,
                        "range": [
                          109,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        106,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    104,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                },
                "range": [
                  101,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    119,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
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
                        "name": "o",
                        "optional": false,
                        "range": [
                          124,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 29,
                            "line": 5
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                              "name": "p",
                              "optional": false,
                              "range": [
                                129,
                                130
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 5
                                },
                                "start": {
                                  "column": 34,
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
                              "name": "package",
                              "optional": false,
                              "range": [
                                132,
                                139
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 5
                                },
                                "start": {
                                  "column": 37,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              129,
                              139
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 5
                              },
                              "start": {
                                "column": 34,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          127,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 5
                          },
                          "start": {
                            "column": 32,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        124,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    122,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  }
                },
                "range": [
                  119,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              99,
              144
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    149,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 5
                    },
                    "start": {
                      "column": 54,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          154,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 5
                          },
                          "start": {
                            "column": 59,
                            "line": 5
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
                          157,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 5
                          },
                          "start": {
                            "column": 62,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        154,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 5
                        },
                        "start": {
                          "column": 59,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    152,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 5
                    },
                    "start": {
                      "column": 57,
                      "line": 5
                    }
                  }
                },
                "range": [
                  149,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 5
                  },
                  "start": {
                    "column": 54,
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 5
                    },
                    "start": {
                      "column": 67,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "range": [
                          167,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 5
                          },
                          "start": {
                            "column": 72,
                            "line": 5
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                172,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 5
                                },
                                "start": {
                                  "column": 77,
                                  "line": 5
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "'h'",
                              "value": "h",
                              "range": [
                                175,
                                178
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 5
                                },
                                "start": {
                                  "column": 80,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              172,
                              178
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 5
                              },
                              "start": {
                                "column": 77,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          170,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 5
                          },
                          "start": {
                            "column": 75,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        167,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 5
                        },
                        "start": {
                          "column": 72,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    165,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 5
                    },
                    "start": {
                      "column": 70,
                      "line": 5
                    }
                  }
                },
                "range": [
                  162,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 5
                  },
                  "start": {
                    "column": 67,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              147,
              184
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 5
              },
              "start": {
                "column": 52,
                "line": 5
              }
            }
          },
          "range": [
            99,
            184
          ],
          "loc": {
            "end": {
              "column": 89,
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
        95,
        185
      ],
      "loc": {
        "end": {
          "column": 90,
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
                  "name": "public",
                  "optional": false,
                  "range": [
                    192,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "range": [
                    192,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "range": [
                  192,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 6,
                    "line": 6
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "range": [
                    200,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "range": [
                    200,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                },
                "range": [
                  200,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              190,
              211
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "public",
                  "optional": false,
                  "range": [
                    216,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 6
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
                    224,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 38,
                      "line": 6
                    }
                  }
                },
                "range": [
                  216,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 30,
                    "line": 6
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "range": [
                    227,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 6
                    },
                    "start": {
                      "column": 41,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    238,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 6
                    },
                    "start": {
                      "column": 52,
                      "line": 6
                    }
                  }
                },
                "range": [
                  227,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 41,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              214,
              241
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 6
              },
              "start": {
                "column": 28,
                "line": 6
              }
            }
          },
          "range": [
            190,
            241
          ],
          "loc": {
            "end": {
              "column": 55,
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
        186,
        242
      ],
      "loc": {
        "end": {
          "column": 56,
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
                  "name": "public",
                  "optional": false,
                  "range": [
                    249,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
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
                    257,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  }
                },
                "range": [
                  249,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 6,
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
                  "name": "protected",
                  "optional": false,
                  "range": [
                    260,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    271,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                },
                "range": [
                  260,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              247,
              274
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                  "name": "public",
                  "optional": false,
                  "range": [
                    279,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
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
                    287,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
                    }
                  }
                },
                "range": [
                  279,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
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
                  "name": "protected",
                  "optional": false,
                  "range": [
                    290,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 7
                    },
                    "start": {
                      "column": 47,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    301,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 7
                    },
                    "start": {
                      "column": 58,
                      "line": 7
                    }
                  }
                },
                "range": [
                  290,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 7
                  },
                  "start": {
                    "column": 47,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              277,
              304
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          },
          "range": [
            247,
            304
          ],
          "loc": {
            "end": {
              "column": 61,
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
        243,
        305
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
