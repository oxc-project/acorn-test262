__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1603
  ],
  "body": [
    {
      "type": "ForStatement",
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
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          60,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
                            "line": 2
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        60,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          66,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        66,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      60,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    54,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  50,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              46,
              70
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForStatement",
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
                              "name": "f",
                              "optional": false,
                              "range": [
                                175,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  185,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 8
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                179,
                                186
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 20,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              175,
                              186
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          171,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
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
                                "type": "UpdateExpression",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    304,
                                    305
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
                                "operator": "++",
                                "prefix": false,
                                "range": [
                                  304,
                                  307
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
                                304,
                                308
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 14
                                },
                                "start": {
                                  "column": 16,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            286,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 15
                            },
                            "start": {
                              "column": 17,
                              "line": 13
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
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    225,
                                    226
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 10
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    229,
                                    230
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  225,
                                  230
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                225,
                                231
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 10
                                },
                                "start": {
                                  "column": 16,
                                  "line": 10
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "range": [
                                248,
                                254
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
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
                            207,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 12
                            },
                            "start": {
                              "column": 19,
                              "line": 9
                            }
                          }
                        },
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            204,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          200,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      157,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 36,
                        "line": 7
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            138,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            142,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          138,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      134,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 7
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
                      145,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 7
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": true,
                    "range": [
                      152,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 7
                      },
                      "start": {
                        "column": 31,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    129,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 7
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        350,
                        351
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
                      "raw": "5",
                      "value": 5,
                      "range": [
                        354,
                        355
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      350,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    350,
                    356
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
                }
              ],
              "range": [
                119,
                362
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    97,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                87,
                109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  79,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              },
              "range": [
                79,
                85
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              75,
              362
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          40,
          364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 40,
            "line": 1
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
              "name": "x",
              "optional": false,
              "range": [
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 9,
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
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
            },
            "range": [
              16,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          5,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            23,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
        "range": [
          23,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              30,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          },
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              35,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
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
          30,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "range": [
        0,
        364
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForStatement",
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
                    417,
                    418
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
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          427,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        427,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          433,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 24
                          },
                          "start": {
                            "column": 24,
                            "line": 24
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        433,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      427,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    421,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                "range": [
                  417,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              413,
              437
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForStatement",
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
                              "name": "f",
                              "optional": false,
                              "range": [
                                545,
                                546
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 30
                                },
                                "start": {
                                  "column": 16,
                                  "line": 30
                                }
                              }
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  555,
                                  556
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 30
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                549,
                                556
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 30
                                },
                                "start": {
                                  "column": 20,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              545,
                              556
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 30
                              },
                              "start": {
                                "column": 16,
                                "line": 30
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          541,
                          557
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
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
                                "type": "UpdateExpression",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    677,
                                    678
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 36
                                    }
                                  }
                                },
                                "operator": "++",
                                "prefix": false,
                                "range": [
                                  677,
                                  680
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                677,
                                681
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 36
                                },
                                "start": {
                                  "column": 16,
                                  "line": 36
                                }
                              }
                            }
                          ],
                          "range": [
                            659,
                            695
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 37
                            },
                            "start": {
                              "column": 17,
                              "line": 35
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
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    595,
                                    596
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 32
                                    }
                                  }
                                },
                                "right": {
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
                                      "column": 21,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 32
                                    }
                                  }
                                },
                                "range": [
                                  595,
                                  600
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                595,
                                601
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 32
                                },
                                "start": {
                                  "column": 16,
                                  "line": 32
                                }
                              }
                            },
                            {
                              "type": "ContinueStatement",
                              "label": null,
                              "range": [
                                618,
                                627
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 33
                                },
                                "start": {
                                  "column": 16,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "range": [
                            577,
                            641
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 34
                            },
                            "start": {
                              "column": 19,
                              "line": 31
                            }
                          }
                        },
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            574,
                            575
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 16,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          570,
                          695
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "range": [
                      527,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 38
                      },
                      "start": {
                        "column": 36,
                        "line": 29
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            508,
                            509
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 29
                            },
                            "start": {
                              "column": 17,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            512,
                            513
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 29
                            },
                            "start": {
                              "column": 21,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          508,
                          513
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      504,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 29
                      },
                      "start": {
                        "column": 13,
                        "line": 29
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        515,
                        516
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 29
                        },
                        "start": {
                          "column": 24,
                          "line": 29
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        519,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 29
                        },
                        "start": {
                          "column": 28,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      515,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 29
                      },
                      "start": {
                        "column": 24,
                        "line": 29
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
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
                          "column": 34,
                          "line": 29
                        },
                        "start": {
                          "column": 33,
                          "line": 29
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": true,
                    "range": [
                      522,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 29
                      },
                      "start": {
                        "column": 31,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    499,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 29
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        723,
                        724
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
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        727,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      723,
                      728
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    723,
                    729
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                489,
                735
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "range": [
                    464,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                454,
                479
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
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
                "name": "x",
                "optional": false,
                "range": [
                  446,
                  447
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
                "raw": "1",
                "value": 1,
                "range": [
                  451,
                  452
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
                446,
                452
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
              442,
              735
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          407,
          737
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 40,
            "line": 23
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
              "name": "x",
              "optional": false,
              "range": [
                376,
                377
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                380,
                381
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              }
            },
            "range": [
              376,
              381
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 23
              },
              "start": {
                "column": 9,
                "line": 23
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
                383,
                384
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 23
                },
                "start": {
                  "column": 16,
                  "line": 23
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                387,
                388
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              }
            },
            "range": [
              383,
              388
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 23
              },
              "start": {
                "column": 16,
                "line": 23
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          372,
          388
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            390,
            391
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 23
            },
            "start": {
              "column": 23,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            394,
            395
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 23
            },
            "start": {
              "column": 27,
              "line": 23
            }
          }
        },
        "range": [
          390,
          395
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 23
          },
          "start": {
            "column": 23,
            "line": 23
          }
        }
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                399,
                400
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 32,
                  "line": 23
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              397,
              400
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 30,
                "line": 23
              }
            }
          },
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                404,
                405
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 23
                },
                "start": {
                  "column": 37,
                  "line": 23
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              402,
              405
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 23
              },
              "start": {
                "column": 35,
                "line": 23
              }
            }
          }
        ],
        "range": [
          397,
          405
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 23
          },
          "start": {
            "column": 30,
            "line": 23
          }
        }
      },
      "range": [
        367,
        737
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForStatement",
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
                      796,
                      797
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    }
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            806,
                            807
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 46
                            },
                            "start": {
                              "column": 18,
                              "line": 46
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          806,
                          809
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 46
                          },
                          "start": {
                            "column": 18,
                            "line": 46
                          }
                        }
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            812,
                            813
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 46
                            },
                            "start": {
                              "column": 24,
                              "line": 46
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          812,
                          815
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 46
                          },
                          "start": {
                            "column": 24,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        806,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 46
                        },
                        "start": {
                          "column": 18,
                          "line": 46
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      800,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 46
                      },
                      "start": {
                        "column": 12,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    796,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                792,
                816
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "body": {
                      "type": "ForStatement",
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
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    942,
                                    943
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 53
                                    }
                                  }
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      952,
                                      953
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 53
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 53
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    946,
                                    953
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 53
                                    }
                                  }
                                },
                                "range": [
                                  942,
                                  953
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 53
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let",
                            "range": [
                              938,
                              954
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 53
                              },
                              "start": {
                                "column": 12,
                                "line": 53
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
                                    "type": "UpdateExpression",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        1077,
                                        1078
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 59
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 59
                                        }
                                      }
                                    },
                                    "operator": "++",
                                    "prefix": false,
                                    "range": [
                                      1077,
                                      1080
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 59
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 59
                                      }
                                    }
                                  },
                                  "range": [
                                    1077,
                                    1081
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 59
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 59
                                    }
                                  }
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop2",
                                    "optional": false,
                                    "range": [
                                      1104,
                                      1109
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 60
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 60
                                      }
                                    }
                                  },
                                  "range": [
                                    1098,
                                    1109
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 60
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1059,
                                1123
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 61
                                },
                                "start": {
                                  "column": 17,
                                  "line": 58
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
                                      "name": "a",
                                      "optional": false,
                                      "range": [
                                        992,
                                        993
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 55
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        996,
                                        997
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 55
                                        }
                                      }
                                    },
                                    "range": [
                                      992,
                                      997
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "range": [
                                    992,
                                    998
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 55
                                    }
                                  }
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop1",
                                    "optional": false,
                                    "range": [
                                      1021,
                                      1026
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 56
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 56
                                      }
                                    }
                                  },
                                  "range": [
                                    1015,
                                    1027
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 56
                                    }
                                  }
                                }
                              ],
                              "range": [
                                974,
                                1041
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 57
                                },
                                "start": {
                                  "column": 19,
                                  "line": 54
                                }
                              }
                            },
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                971,
                                972
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 54
                                },
                                "start": {
                                  "column": 16,
                                  "line": 54
                                }
                              }
                            },
                            "range": [
                              967,
                              1123
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 61
                              },
                              "start": {
                                "column": 12,
                                "line": 54
                              }
                            }
                          }
                        ],
                        "range": [
                          924,
                          1133
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 62
                          },
                          "start": {
                            "column": 36,
                            "line": 52
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                905,
                                906
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 52
                                },
                                "start": {
                                  "column": 17,
                                  "line": 52
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                909,
                                910
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 52
                                },
                                "start": {
                                  "column": 21,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              905,
                              910
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 52
                              },
                              "start": {
                                "column": 17,
                                "line": 52
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          901,
                          910
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 52
                          },
                          "start": {
                            "column": 13,
                            "line": 52
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            912,
                            913
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 52
                            },
                            "start": {
                              "column": 24,
                              "line": 52
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            916,
                            917
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 52
                            },
                            "start": {
                              "column": 28,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          912,
                          917
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 52
                          },
                          "start": {
                            "column": 24,
                            "line": 52
                          }
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            921,
                            922
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 52
                            },
                            "start": {
                              "column": 33,
                              "line": 52
                            }
                          }
                        },
                        "operator": "--",
                        "prefix": true,
                        "range": [
                          919,
                          922
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 52
                          },
                          "start": {
                            "column": 31,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        896,
                        1133
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 62
                        },
                        "start": {
                          "column": 8,
                          "line": 52
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop1",
                      "optional": false,
                      "range": [
                        881,
                        886
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
                      881,
                      1133
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 51
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          1151,
                          1152
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 64
                          },
                          "start": {
                            "column": 8,
                            "line": 64
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          1155,
                          1156
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 64
                          },
                          "start": {
                            "column": 12,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1151,
                        1156
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 64
                        },
                        "start": {
                          "column": 8,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1151,
                      1157
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  871,
                  1163
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 9,
                    "line": 50
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop2",
                      "optional": false,
                      "range": [
                        849,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 48
                        },
                        "start": {
                          "column": 14,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      843,
                      855
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
                  833,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 16,
                    "line": 47
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    825,
                    826
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
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    830,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 13,
                      "line": 47
                    }
                  }
                },
                "range": [
                  825,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "range": [
                821,
                1163
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            }
          ],
          "range": [
            786,
            1165
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 66
            },
            "start": {
              "column": 40,
              "line": 45
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
                "name": "x",
                "optional": false,
                "range": [
                  755,
                  756
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
              "init": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  759,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 45
                  },
                  "start": {
                    "column": 13,
                    "line": 45
                  }
                }
              },
              "range": [
                755,
                760
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 45
                },
                "start": {
                  "column": 9,
                  "line": 45
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
                  762,
                  763
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
              "init": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  766,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 45
                  },
                  "start": {
                    "column": 20,
                    "line": 45
                  }
                }
              },
              "range": [
                762,
                767
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 45
                },
                "start": {
                  "column": 16,
                  "line": 45
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            751,
            767
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 45
            },
            "start": {
              "column": 5,
              "line": 45
            }
          }
        },
        "test": {
          "type": "BinaryExpression",
          "operator": "<",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              769,
              770
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 45
              },
              "start": {
                "column": 23,
                "line": 45
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              773,
              774
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 45
              },
              "start": {
                "column": 27,
                "line": 45
              }
            }
          },
          "range": [
            769,
            774
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 45
            },
            "start": {
              "column": 23,
              "line": 45
            }
          }
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  778,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 45
                  },
                  "start": {
                    "column": 32,
                    "line": 45
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                776,
                779
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 45
                },
                "start": {
                  "column": 30,
                  "line": 45
                }
              }
            },
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  783,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 45
                  },
                  "start": {
                    "column": 37,
                    "line": 45
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                781,
                784
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 45
                },
                "start": {
                  "column": 35,
                  "line": 45
                }
              }
            }
          ],
          "range": [
            776,
            784
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 45
            },
            "start": {
              "column": 30,
              "line": 45
            }
          }
        },
        "range": [
          746,
          1165
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "range": [
          739,
          744
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        739,
        1165
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForStatement",
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
                      1224,
                      1225
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1234,
                            1235
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 70
                            },
                            "start": {
                              "column": 18,
                              "line": 70
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          1234,
                          1237
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 70
                          },
                          "start": {
                            "column": 18,
                            "line": 70
                          }
                        }
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1240,
                            1241
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 70
                            },
                            "start": {
                              "column": 24,
                              "line": 70
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          1240,
                          1243
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 70
                          },
                          "start": {
                            "column": 24,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1234,
                        1243
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 70
                        },
                        "start": {
                          "column": 18,
                          "line": 70
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1228,
                      1243
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 70
                      },
                      "start": {
                        "column": 12,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1224,
                    1243
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1220,
                1244
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "body": {
                      "type": "ForStatement",
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
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    1373,
                                    1374
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 77
                                    }
                                  }
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      1383,
                                      1384
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 77
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 77
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    1377,
                                    1384
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 77
                                    }
                                  }
                                },
                                "range": [
                                  1373,
                                  1384
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 77
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let",
                            "range": [
                              1369,
                              1385
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 77
                              },
                              "start": {
                                "column": 12,
                                "line": 77
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
                                    "type": "UpdateExpression",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        1511,
                                        1512
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "operator": "++",
                                    "prefix": false,
                                    "range": [
                                      1511,
                                      1514
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 83
                                      }
                                    }
                                  },
                                  "range": [
                                    1511,
                                    1515
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 83
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 83
                                    }
                                  }
                                },
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop2",
                                    "optional": false,
                                    "range": [
                                      1541,
                                      1546
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 84
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 84
                                      }
                                    }
                                  },
                                  "range": [
                                    1532,
                                    1546
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 84
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1493,
                                1560
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 85
                                },
                                "start": {
                                  "column": 17,
                                  "line": 82
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
                                      "name": "a",
                                      "optional": false,
                                      "range": [
                                        1423,
                                        1424
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
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        1427,
                                        1428
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 79
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 79
                                        }
                                      }
                                    },
                                    "range": [
                                      1423,
                                      1428
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "range": [
                                    1423,
                                    1429
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
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop1",
                                    "optional": false,
                                    "range": [
                                      1455,
                                      1460
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "range": [
                                    1446,
                                    1461
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 80
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1405,
                                1475
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 81
                                },
                                "start": {
                                  "column": 19,
                                  "line": 78
                                }
                              }
                            },
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                1402,
                                1403
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 78
                                },
                                "start": {
                                  "column": 16,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              1398,
                              1560
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 85
                              },
                              "start": {
                                "column": 12,
                                "line": 78
                              }
                            }
                          }
                        ],
                        "range": [
                          1355,
                          1570
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 86
                          },
                          "start": {
                            "column": 36,
                            "line": 76
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                1336,
                                1337
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 76
                                },
                                "start": {
                                  "column": 17,
                                  "line": 76
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                1340,
                                1341
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 76
                                },
                                "start": {
                                  "column": 21,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              1336,
                              1341
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 76
                              },
                              "start": {
                                "column": 17,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          1332,
                          1341
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 76
                          },
                          "start": {
                            "column": 13,
                            "line": 76
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            1343,
                            1344
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 76
                            },
                            "start": {
                              "column": 24,
                              "line": 76
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            1347,
                            1348
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 76
                            },
                            "start": {
                              "column": 28,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          1343,
                          1348
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
                      "update": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            1352,
                            1353
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 76
                            },
                            "start": {
                              "column": 33,
                              "line": 76
                            }
                          }
                        },
                        "operator": "--",
                        "prefix": true,
                        "range": [
                          1350,
                          1353
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 76
                          },
                          "start": {
                            "column": 31,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1327,
                        1570
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 86
                        },
                        "start": {
                          "column": 8,
                          "line": 76
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop1",
                      "optional": false,
                      "range": [
                        1312,
                        1317
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 75
                        },
                        "start": {
                          "column": 8,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1312,
                      1570
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 75
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          1588,
                          1589
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 88
                          },
                          "start": {
                            "column": 8,
                            "line": 88
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          1592,
                          1593
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 88
                          },
                          "start": {
                            "column": 12,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        1588,
                        1593
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1588,
                      1594
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  }
                ],
                "range": [
                  1302,
                  1600
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 89
                  },
                  "start": {
                    "column": 9,
                    "line": 74
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop2",
                      "optional": false,
                      "range": [
                        1280,
                        1285
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 72
                        },
                        "start": {
                          "column": 17,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1271,
                      1286
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
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
                  1261,
                  1292
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 16,
                    "line": 71
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
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
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1258,
                    1259
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 71
                    },
                    "start": {
                      "column": 13,
                      "line": 71
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
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "range": [
                1249,
                1600
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            }
          ],
          "range": [
            1214,
            1602
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 90
            },
            "start": {
              "column": 40,
              "line": 69
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
                "name": "x",
                "optional": false,
                "range": [
                  1183,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 69
                  },
                  "start": {
                    "column": 9,
                    "line": 69
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1187,
                  1188
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 69
                  },
                  "start": {
                    "column": 13,
                    "line": 69
                  }
                }
              },
              "range": [
                1183,
                1188
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 69
                },
                "start": {
                  "column": 9,
                  "line": 69
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
                  1190,
                  1191
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 69
                  },
                  "start": {
                    "column": 16,
                    "line": 69
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1194,
                  1195
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 69
                  },
                  "start": {
                    "column": 20,
                    "line": 69
                  }
                }
              },
              "range": [
                1190,
                1195
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 69
                },
                "start": {
                  "column": 16,
                  "line": 69
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1179,
            1195
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 69
            },
            "start": {
              "column": 5,
              "line": 69
            }
          }
        },
        "test": {
          "type": "BinaryExpression",
          "operator": "<",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              1197,
              1198
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 69
              },
              "start": {
                "column": 23,
                "line": 69
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              1201,
              1202
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 69
              },
              "start": {
                "column": 27,
                "line": 69
              }
            }
          },
          "range": [
            1197,
            1202
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 69
            },
            "start": {
              "column": 23,
              "line": 69
            }
          }
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1206,
                  1207
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 69
                  },
                  "start": {
                    "column": 32,
                    "line": 69
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                1204,
                1207
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 69
                },
                "start": {
                  "column": 30,
                  "line": 69
                }
              }
            },
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1211,
                  1212
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 69
                  },
                  "start": {
                    "column": 37,
                    "line": 69
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                1209,
                1212
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 69
                },
                "start": {
                  "column": 35,
                  "line": 69
                }
              }
            }
          ],
          "range": [
            1204,
            1212
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 69
            },
            "start": {
              "column": 30,
              "line": 69
            }
          }
        },
        "range": [
          1174,
          1602
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "range": [
          1167,
          1172
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        1167,
        1602
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 91
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
