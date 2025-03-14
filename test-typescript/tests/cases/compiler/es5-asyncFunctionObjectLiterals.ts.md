__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    648
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
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
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
          "init": null,
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
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              18,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            18,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            21,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              24,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            24,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              27,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            27,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  69,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        83,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          92,
                          93
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
                        86,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      83,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        103,
                        104
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
                        106,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      103,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  73,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                69,
                113
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              69,
              114
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          63,
          116
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 32,
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
        "name": "objectLiteral0",
        "optional": false,
        "range": [
          46,
          60
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        31,
        116
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  156,
                  157
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
                        170,
                        171
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        173,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      170,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        184,
                        185
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          193,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
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
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      184,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  160,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "range": [
                156,
                200
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              156,
              201
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          150,
          203
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 32,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral1",
        "optional": false,
        "range": [
          133,
          147
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        118,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  243,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          264,
                          265
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
                        258,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        268,
                        269
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
                      257,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        279,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
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
                        282,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      279,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  247,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                243,
                289
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              243,
              290
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          237,
          292
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 32,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral2",
        "optional": false,
        "range": [
          220,
          234
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "params": [],
      "range": [
        205,
        292
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 17
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  332,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        347,
                        348
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          357,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 26
                          },
                          "start": {
                            "column": 19,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        351,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      346,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        368,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
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
                        371,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      368,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
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
                  336,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "range": [
                332,
                378
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
            "range": [
              332,
              379
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          326,
          381
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 32,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral3",
        "optional": false,
        "range": [
          309,
          323
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 15,
            "line": 24
          }
        }
      },
      "params": [],
      "range": [
        294,
        381
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 24
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  421,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        435,
                        436
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          444,
                          445
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        438,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 33
                        },
                        "start": {
                          "column": 11,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      435,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        456,
                        457
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
                        460,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 34
                        },
                        "start": {
                          "column": 13,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      455,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  425,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "range": [
                421,
                467
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              421,
              468
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          415,
          470
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 32,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral4",
        "optional": false,
        "range": [
          398,
          412
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 31
          },
          "start": {
            "column": 15,
            "line": 31
          }
        }
      },
      "params": [],
      "range": [
        383,
        470
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 31
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  510,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        524,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        527,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 40
                        },
                        "start": {
                          "column": 11,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      524,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          545,
                          546
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        539,
                        546
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 41
                        },
                        "start": {
                          "column": 9,
                          "line": 41
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
                        549,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 41
                        },
                        "start": {
                          "column": 19,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      538,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  514,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              "range": [
                510,
                556
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              510,
              557
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          504,
          559
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 32,
            "line": 38
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral5",
        "optional": false,
        "range": [
          487,
          501
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 38
          },
          "start": {
            "column": 15,
            "line": 38
          }
        }
      },
      "params": [],
      "range": [
        472,
        559
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 38
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  599,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        613,
                        614
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        616,
                        617
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      613,
                      617
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        628,
                        629
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 48
                        },
                        "start": {
                          "column": 9,
                          "line": 48
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          638,
                          639
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
                        632,
                        639
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 48
                        },
                        "start": {
                          "column": 13,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      627,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  603,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "range": [
                599,
                645
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              599,
              646
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          593,
          648
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 32,
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
        "name": "objectLiteral6",
        "optional": false,
        "range": [
          576,
          590
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 45
          },
          "start": {
            "column": 15,
            "line": 45
          }
        }
      },
      "params": [],
      "range": [
        561,
        648
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
