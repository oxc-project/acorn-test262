__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    197
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          75,
          77
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 18,
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
        "name": "a",
        "optional": false,
        "range": [
          66,
          67
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          69,
          74
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            71,
            74
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      },
      "range": [
        57,
        77
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 3
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    125,
                    126
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
                "init": null,
                "range": [
                  125,
                  126
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              121,
              127
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          115,
          129
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 36,
            "line": 5
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
          88,
          89
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    92,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
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
                    92,
                    99
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      92,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        96,
                        97
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
                    "optional": false,
                    "range": [
                      96,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  92,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  101,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              90,
              107
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                110,
                111
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              110,
              113
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          },
          "range": [
            90,
            113
          ],
          "loc": {
            "end": {
              "column": 34,
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
        79,
        129
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              137,
              138
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              141,
              143
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            137,
            143
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        131,
        144
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
                    193,
                    194
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
                "init": null,
                "range": [
                  193,
                  194
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              189,
              195
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          183,
          197
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 37,
            "line": 11
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
          155,
          156
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    159,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    159,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  159,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    165,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  162,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              157,
              168
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              171,
              174
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            }
          },
          "range": [
            157,
            174
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 11,
              "line": 11
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              176,
              177
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 30,
                "line": 11
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              180,
              181
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          },
          "range": [
            176,
            181
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 30,
              "line": 11
            }
          }
        }
      ],
      "range": [
        146,
        197
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
