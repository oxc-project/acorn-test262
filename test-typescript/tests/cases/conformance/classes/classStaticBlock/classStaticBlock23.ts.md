__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    278
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
            "name": "nums",
            "optional": false,
            "range": [
              6,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        48,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 1
                        },
                        "start": {
                          "column": 48,
                          "line": 1
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
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        32,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 1
                        },
                        "start": {
                          "column": 32,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        40,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 40,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      32,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 1
                      },
                      "start": {
                        "column": 32,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    32,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
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
                  }
                ],
                "range": [
                  27,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      14,
                      15
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 1
                      },
                      "start": {
                        "column": 14,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      17,
                      18
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      20,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  13,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 13,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  23,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              },
              "range": [
                13,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              13,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "range": [
            6,
            51
          ],
          "loc": {
            "end": {
              "column": 51,
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
        51
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          61,
          144
        ],
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ForOfStatement",
                "await": true,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nn",
                            "optional": false,
                            "range": [
                              129,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
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
                              117,
                              124
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
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              125,
                              128
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
                          "range": [
                            117,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          117,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        117,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
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
                    107,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 33,
                      "line": 5
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
                        "name": "nn",
                        "optional": false,
                        "range": [
                          95,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        95,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    89,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nums",
                  "optional": false,
                  "range": [
                    101,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  }
                },
                "range": [
                  78,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              65,
              142
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          59,
          60
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
      "implements": [],
      "superClass": null,
      "range": [
        53,
        144
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                180,
                275
              ],
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": true,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nn",
                                  "optional": false,
                                  "range": [
                                    254,
                                    256
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 15
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
                                    242,
                                    249
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
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "range": [
                                    250,
                                    253
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  242,
                                  253
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                242,
                                257
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 15
                                },
                                "start": {
                                  "column": 10,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              242,
                              257
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 15
                              },
                              "start": {
                                "column": 10,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          230,
                          265
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 16
                          },
                          "start": {
                            "column": 35,
                            "line": 14
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
                              "name": "nn",
                              "optional": false,
                              "range": [
                                218,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 23,
                                  "line": 14
                                }
                              }
                            },
                            "init": null,
                            "range": [
                              218,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 14
                              },
                              "start": {
                                "column": 23,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          212,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nums",
                        "optional": false,
                        "range": [
                          224,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 14
                          },
                          "start": {
                            "column": 29,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        201,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 16
                        },
                        "start": {
                          "column": 6,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    186,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 18
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                178,
                179
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
            "implements": [],
            "superClass": null,
            "range": [
              172,
              275
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "range": [
          168,
          277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 22,
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
        "name": "foo",
        "optional": false,
        "range": [
          161,
          164
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 11
          }
        }
      },
      "params": [],
      "range": [
        146,
        277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
