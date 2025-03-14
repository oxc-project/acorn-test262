__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    501
  ],
  "body": [
    {
      "type": "ContinueStatement",
      "label": null,
      "range": [
        45,
        54
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForInStatement",
        "body": {
          "type": "ContinueStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "range": [
              110,
              113
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            }
          },
          "range": [
            101,
            114
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 18,
              "line": 8
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
                "name": "x",
                "optional": false,
                "range": [
                  92,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "init": null,
              "range": [
                92,
                93
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            }
          ],
          "declare": false,
          "kind": "var",
          "range": [
            88,
            93
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 8
            },
            "start": {
              "column": 5,
              "line": 8
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            97,
            99
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        },
        "range": [
          83,
          114
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "range": [
          78,
          81
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        78,
        114
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForInStatement",
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
                    "name": "fn",
                    "optional": false,
                    "range": [
                      182,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "range": [
                              212,
                              215
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 14
                              },
                              "start": {
                                "column": 17,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            203,
                            216
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        193,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 13
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      187,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    182,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                178,
                222
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            172,
            224
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 18,
              "line": 12
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
                "name": "x",
                "optional": false,
                "range": [
                  163,
                  164
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
              "init": null,
              "range": [
                163,
                164
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
            }
          ],
          "declare": false,
          "kind": "var",
          "range": [
            159,
            164
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 12
            },
            "start": {
              "column": 5,
              "line": 12
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            168,
            170
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 14,
              "line": 12
            }
          }
        },
        "range": [
          154,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "range": [
          149,
          152
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        149,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForInStatement",
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
                    "name": "fn",
                    "optional": false,
                    "range": [
                      261,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "range": [
                              297,
                              302
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 21
                              },
                              "start": {
                                "column": 17,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            288,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
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
                        278,
                        309
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 22
                        },
                        "start": {
                          "column": 25,
                          "line": 20
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      266,
                      309
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    261,
                    309
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
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                257,
                309
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            251,
            311
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 19
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
                "name": "x",
                "optional": false,
                "range": [
                  242,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "init": null,
              "range": [
                242,
                243
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            }
          ],
          "declare": false,
          "kind": "var",
          "range": [
            238,
            243
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 5,
              "line": 19
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            247,
            249
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        },
        "range": [
          233,
          311
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "range": [
          226,
          231
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        226,
        311
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "range": [
                366,
                370
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "range": [
              357,
              371
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "LabeledStatement",
            "body": {
              "type": "ForInStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  404,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 22,
                    "line": 29
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        395,
                        396
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 29
                        },
                        "start": {
                          "column": 13,
                          "line": 29
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      395,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 29
                      },
                      "start": {
                        "column": 13,
                        "line": 29
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  391,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 29
                  },
                  "start": {
                    "column": 9,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  400,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 29
                  }
                }
              },
              "range": [
                386,
                407
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "range": [
                376,
                380
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              376,
              407
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          351,
          409
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 18,
            "line": 26
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
              "name": "x",
              "optional": false,
              "range": [
                342,
                343
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
            "init": null,
            "range": [
              342,
              343
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
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          338,
          343
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          347,
          349
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 26
          },
          "start": {
            "column": 14,
            "line": 26
          }
        }
      },
      "range": [
        333,
        409
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                452,
                453
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
            "init": {
              "type": "Literal",
              "raw": "12",
              "value": 12,
              "range": [
                456,
                458
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "range": [
              452,
              458
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          448,
          459
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "range": [
          442,
          446
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        442,
        459
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "range": [
                494,
                498
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            },
            "range": [
              485,
              499
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          479,
          501
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 18,
            "line": 36
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
              "name": "x",
              "optional": false,
              "range": [
                470,
                471
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "init": null,
            "range": [
              470,
              471
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          466,
          471
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          475,
          477
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 36
          },
          "start": {
            "column": 14,
            "line": 36
          }
        }
      },
      "range": [
        461,
        501
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
