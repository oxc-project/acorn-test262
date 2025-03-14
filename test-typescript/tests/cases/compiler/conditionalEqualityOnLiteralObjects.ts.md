__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    577
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
            "name": "a",
            "optional": false,
            "range": [
              6,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
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
                  "name": "a",
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
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
                  12,
                  16
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 1
                  },
                  "start": {
                    "column": 12,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              10,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
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
        18
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "b",
            "optional": false,
            "range": [
              25,
              26
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 6,
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
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
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
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            25,
            32
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        19,
        32
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          61,
          64
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 27,
            "line": 4
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
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
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
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
                  43,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "range": [
                40,
                44
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            38,
            46
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
                  53,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
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
                  56,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
                  }
                }
              },
              "range": [
                53,
                57
              ],
              "loc": {
                "end": {
                  "column": 23,
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
            51,
            59
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 17,
              "line": 4
            }
          }
        },
        "range": [
          38,
          59
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "range": [
        34,
        64
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          82,
          85
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            69,
            72
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 14,
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
            77,
            80
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
          69,
          80
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "range": [
        65,
        85
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          106,
          109
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 20,
            "line": 8
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            90,
            91
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
                  98,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
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
                  101,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "range": [
                98,
                102
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            96,
            104
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 8
            },
            "start": {
              "column": 10,
              "line": 8
            }
          }
        },
        "range": [
          90,
          104
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 8
          },
          "start": {
            "column": 4,
            "line": 8
          }
        }
      },
      "range": [
        86,
        109
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          125,
          128
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            114,
            115
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
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            }
          ],
          "range": [
            120,
            123
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 10
            },
            "start": {
              "column": 10,
              "line": 10
            }
          }
        },
        "range": [
          114,
          123
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        110,
        128
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          149,
          152
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 20,
            "line": 12
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
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
                  135,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
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
                  138,
                  139
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
              "range": [
                135,
                139
              ],
              "loc": {
                "end": {
                  "column": 10,
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
            133,
            141
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            146,
            147
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 12
            },
            "start": {
              "column": 17,
              "line": 12
            }
          }
        },
        "range": [
          133,
          147
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "range": [
        129,
        152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          168,
          171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 14
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                158,
                159
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            157,
            160
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            165,
            166
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
        "range": [
          157,
          166
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 4,
            "line": 14
          }
        }
      },
      "range": [
        153,
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          200,
          203
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 27,
            "line": 17
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
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
                  179,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 17
                  },
                  "start": {
                    "column": 6,
                    "line": 17
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
                  182,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "range": [
                179,
                183
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            177,
            185
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
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
                  192,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 19,
                    "line": 17
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
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 17
                  }
                }
              },
              "range": [
                192,
                196
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 17
                },
                "start": {
                  "column": 19,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            190,
            198
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 17,
              "line": 17
            }
          }
        },
        "range": [
          177,
          198
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        173,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          221,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            208,
            211
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                217,
                218
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            216,
            219
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        },
        "range": [
          208,
          219
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        204,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          245,
          248
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 20,
            "line": 21
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            229,
            230
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
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
                  237,
                  238
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
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  240,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              },
              "range": [
                237,
                241
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            }
          ],
          "range": [
            235,
            243
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 21
            },
            "start": {
              "column": 10,
              "line": 21
            }
          }
        },
        "range": [
          229,
          243
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "range": [
        225,
        248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          264,
          267
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            253,
            254
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
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                260,
                261
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
            }
          ],
          "range": [
            259,
            262
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 23
            },
            "start": {
              "column": 10,
              "line": 23
            }
          }
        },
        "range": [
          253,
          262
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
        249,
        267
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          288,
          291
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 20,
            "line": 25
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
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
                  274,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 25
                  },
                  "start": {
                    "column": 6,
                    "line": 25
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
                  277,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 25
                  },
                  "start": {
                    "column": 9,
                    "line": 25
                  }
                }
              },
              "range": [
                274,
                278
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 25
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              }
            }
          ],
          "range": [
            272,
            280
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            285,
            286
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 25
            },
            "start": {
              "column": 17,
              "line": 25
            }
          }
        },
        "range": [
          272,
          286
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 25
          },
          "start": {
            "column": 4,
            "line": 25
          }
        }
      },
      "range": [
        268,
        291
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          307,
          310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 15,
            "line": 27
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                297,
                298
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 27
                },
                "start": {
                  "column": 5,
                  "line": 27
                }
              }
            }
          ],
          "range": [
            296,
            299
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            304,
            305
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 27
            },
            "start": {
              "column": 12,
              "line": 27
            }
          }
        },
        "range": [
          296,
          305
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 27
          },
          "start": {
            "column": 4,
            "line": 27
          }
        }
      },
      "range": [
        292,
        310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          338,
          341
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 26,
            "line": 30
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
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
                  318,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
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
                  321,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 30
                  }
                }
              },
              "range": [
                318,
                322
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
                }
              }
            }
          ],
          "range": [
            316,
            324
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
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
                  330,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
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
                  333,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 30
                  },
                  "start": {
                    "column": 21,
                    "line": 30
                  }
                }
              },
              "range": [
                330,
                334
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 18,
                  "line": 30
                }
              }
            }
          ],
          "range": [
            328,
            336
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 30
            },
            "start": {
              "column": 16,
              "line": 30
            }
          }
        },
        "range": [
          316,
          336
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 30
          },
          "start": {
            "column": 4,
            "line": 30
          }
        }
      },
      "range": [
        312,
        341
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          358,
          361
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 16,
            "line": 32
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              }
            }
          ],
          "range": [
            346,
            349
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                354,
                355
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 32
                }
              }
            }
          ],
          "range": [
            353,
            356
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 32
            },
            "start": {
              "column": 11,
              "line": 32
            }
          }
        },
        "range": [
          346,
          356
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 4,
            "line": 32
          }
        }
      },
      "range": [
        342,
        361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          381,
          384
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 19,
            "line": 34
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            366,
            367
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
                  373,
                  374
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
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  376,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 14,
                    "line": 34
                  }
                }
              },
              "range": [
                373,
                377
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            }
          ],
          "range": [
            371,
            379
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 34
            },
            "start": {
              "column": 9,
              "line": 34
            }
          }
        },
        "range": [
          366,
          379
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 34
          },
          "start": {
            "column": 4,
            "line": 34
          }
        }
      },
      "range": [
        362,
        384
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          399,
          402
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 14,
            "line": 36
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            389,
            390
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                395,
                396
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 36
                },
                "start": {
                  "column": 10,
                  "line": 36
                }
              }
            }
          ],
          "range": [
            394,
            397
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 36
            },
            "start": {
              "column": 9,
              "line": 36
            }
          }
        },
        "range": [
          389,
          397
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 36
          }
        }
      },
      "range": [
        385,
        402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          422,
          425
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 19,
            "line": 38
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
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
                  409,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 38
                  },
                  "start": {
                    "column": 6,
                    "line": 38
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
                  412,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 38
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                }
              },
              "range": [
                409,
                413
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 38
                },
                "start": {
                  "column": 6,
                  "line": 38
                }
              }
            }
          ],
          "range": [
            407,
            415
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            419,
            420
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 38
            },
            "start": {
              "column": 16,
              "line": 38
            }
          }
        },
        "range": [
          407,
          420
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 38
          },
          "start": {
            "column": 4,
            "line": 38
          }
        }
      },
      "range": [
        403,
        425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          440,
          443
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 14,
            "line": 40
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                431,
                432
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 40
                },
                "start": {
                  "column": 5,
                  "line": 40
                }
              }
            }
          ],
          "range": [
            430,
            433
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            437,
            438
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
          430,
          438
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 40
          },
          "start": {
            "column": 4,
            "line": 40
          }
        }
      },
      "range": [
        426,
        443
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          471,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 26,
            "line": 43
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
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
                  451,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 43
                  },
                  "start": {
                    "column": 6,
                    "line": 43
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
                  454,
                  455
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
              "range": [
                451,
                455
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 43
                },
                "start": {
                  "column": 6,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            449,
            457
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
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
                  463,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 43
                  },
                  "start": {
                    "column": 18,
                    "line": 43
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
                  466,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 43
                  },
                  "start": {
                    "column": 21,
                    "line": 43
                  }
                }
              },
              "range": [
                463,
                467
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 43
                },
                "start": {
                  "column": 18,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            461,
            469
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 43
            },
            "start": {
              "column": 16,
              "line": 43
            }
          }
        },
        "range": [
          449,
          469
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 43
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "range": [
        445,
        474
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          491,
          494
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 16,
            "line": 45
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                480,
                481
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 45
                },
                "start": {
                  "column": 5,
                  "line": 45
                }
              }
            }
          ],
          "range": [
            479,
            482
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                487,
                488
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 45
                },
                "start": {
                  "column": 12,
                  "line": 45
                }
              }
            }
          ],
          "range": [
            486,
            489
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 45
            },
            "start": {
              "column": 11,
              "line": 45
            }
          }
        },
        "range": [
          479,
          489
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 45
          },
          "start": {
            "column": 4,
            "line": 45
          }
        }
      },
      "range": [
        475,
        494
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          514,
          517
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 19,
            "line": 47
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            499,
            500
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
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
                  506,
                  507
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
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  509,
                  510
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 14,
                    "line": 47
                  }
                }
              },
              "range": [
                506,
                510
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 47
                },
                "start": {
                  "column": 11,
                  "line": 47
                }
              }
            }
          ],
          "range": [
            504,
            512
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 47
            },
            "start": {
              "column": 9,
              "line": 47
            }
          }
        },
        "range": [
          499,
          512
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 47
          },
          "start": {
            "column": 4,
            "line": 47
          }
        }
      },
      "range": [
        495,
        517
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          532,
          535
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 14,
            "line": 49
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            522,
            523
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                528,
                529
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 49
                },
                "start": {
                  "column": 10,
                  "line": 49
                }
              }
            }
          ],
          "range": [
            527,
            530
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 49
            },
            "start": {
              "column": 9,
              "line": 49
            }
          }
        },
        "range": [
          522,
          530
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 49
          },
          "start": {
            "column": 4,
            "line": 49
          }
        }
      },
      "range": [
        518,
        535
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          555,
          558
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 19,
            "line": 51
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
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
                  542,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 51
                  },
                  "start": {
                    "column": 6,
                    "line": 51
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
                  545,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 51
                  }
                }
              },
              "range": [
                542,
                546
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 51
                },
                "start": {
                  "column": 6,
                  "line": 51
                }
              }
            }
          ],
          "range": [
            540,
            548
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            552,
            553
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 51
            },
            "start": {
              "column": 16,
              "line": 51
            }
          }
        },
        "range": [
          540,
          553
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 51
          },
          "start": {
            "column": 4,
            "line": 51
          }
        }
      },
      "range": [
        536,
        558
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          573,
          576
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 14,
            "line": 53
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                564,
                565
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 53
                },
                "start": {
                  "column": 5,
                  "line": 53
                }
              }
            }
          ],
          "range": [
            563,
            566
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            570,
            571
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
          563,
          571
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 53
          },
          "start": {
            "column": 4,
            "line": 53
          }
        }
      },
      "range": [
        559,
        576
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
