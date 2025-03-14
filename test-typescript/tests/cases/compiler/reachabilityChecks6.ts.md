__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1544
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "body": {
              "type": "EmptyStatement",
              "range": [
                33,
                34
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
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                28,
                32
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              34
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
        "range": [
          15,
          36
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
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
        }
      ],
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      83,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    76,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                66,
                90
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "test": {
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
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              59,
              90
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          53,
          92
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
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
        "name": "f1",
        "optional": false,
        "range": [
          47,
          49
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            50,
            51
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "range": [
        38,
        92
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        145,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      141,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    135,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                125,
                159
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                122,
                123
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
              115,
              159
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              164,
              173
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          109,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 15,
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
        "name": "f2",
        "optional": false,
        "range": [
          103,
          105
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            106,
            107
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "range": [
        94,
        175
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        228,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 20
                        },
                        "start": {
                          "column": 18,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      224,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    218,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                208,
                242
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              198,
              242
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          192,
          244
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 15,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          186,
          188
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            189,
            190
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
        }
      ],
      "range": [
        177,
        244
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 18
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
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                280,
                287
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                277,
                278
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "range": [
              270,
              287
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  302,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              },
              "range": [
                298,
                309
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 10,
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
                "column": 22,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          264,
          312
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 18,
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
        "name": "f3_1",
        "optional": false,
        "range": [
          255,
          259
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            261,
            262
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 24
            },
            "start": {
              "column": 15,
              "line": 24
            }
          }
        }
      ],
      "range": [
        246,
        312
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            377,
                            378
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 33
                            },
                            "start": {
                              "column": 19,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          370,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      356,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 15,
                        "line": 32
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      353,
                      354
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
                  },
                  "range": [
                    349,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                339,
                395
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  410,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  407,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              },
              "range": [
                400,
                417
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              335,
              417
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          329,
          419
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 15,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          323,
          325
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            326,
            327
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 30
            },
            "start": {
              "column": 12,
              "line": 30
            }
          }
        }
      ],
      "range": [
        314,
        419
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 30
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            484,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 43
                            },
                            "start": {
                              "column": 19,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          477,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 43
                          },
                          "start": {
                            "column": 12,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "range": [
                      463,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 44
                      },
                      "start": {
                        "column": 15,
                        "line": 42
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      460,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 42
                      },
                      "start": {
                        "column": 12,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    456,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                446,
                502
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 41
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        534,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 47
                        },
                        "start": {
                          "column": 15,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      527,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  517,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 14,
                    "line": 46
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  514,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 46
                  },
                  "start": {
                    "column": 11,
                    "line": 46
                  }
                }
              },
              "range": [
                507,
                542
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              442,
              542
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          436,
          544
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 15,
            "line": 40
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          430,
          432
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 40
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            433,
            434
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
        }
      ],
      "range": [
        421,
        544
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 40
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "range": [
                              668,
                              673
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 58
                              },
                              "start": {
                                "column": 22,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            664,
                            675
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 58
                            },
                            "start": {
                              "column": 18,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          658,
                          676
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 58
                          },
                          "start": {
                            "column": 12,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      644,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            609,
                            610
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 54
                            },
                            "start": {
                              "column": 19,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          602,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "range": [
                      588,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 55
                      },
                      "start": {
                        "column": 15,
                        "line": 53
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      585,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 53
                      },
                      "start": {
                        "column": 12,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    581,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                571,
                692
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  707,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 14,
                    "line": 61
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  704,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 61
                  },
                  "start": {
                    "column": 11,
                    "line": 61
                  }
                }
              },
              "range": [
                697,
                714
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              567,
              714
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          561,
          716
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 15,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          555,
          557
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            558,
            559
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 51
            },
            "start": {
              "column": 12,
              "line": 51
            }
          }
        }
      ],
      "range": [
        546,
        716
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 51
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "range": [
                              831,
                              836
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 71
                              },
                              "start": {
                                "column": 22,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            827,
                            838
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 71
                            },
                            "start": {
                              "column": 18,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          821,
                          839
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 71
                          },
                          "start": {
                            "column": 12,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "range": [
                      807,
                      849
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 13,
                        "line": 70
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            781,
                            782
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 68
                            },
                            "start": {
                              "column": 19,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          774,
                          783
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "range": [
                      760,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 69
                      },
                      "start": {
                        "column": 15,
                        "line": 67
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      757,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 67
                      },
                      "start": {
                        "column": 12,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    753,
                    849
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                743,
                855
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 8,
                  "line": 66
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        887,
                        888
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 75
                        },
                        "start": {
                          "column": 15,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      880,
                      889
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  }
                ],
                "range": [
                  870,
                  895
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 76
                  },
                  "start": {
                    "column": 14,
                    "line": 74
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  867,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 74
                  },
                  "start": {
                    "column": 11,
                    "line": 74
                  }
                }
              },
              "range": [
                860,
                895
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              739,
              895
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          733,
          897
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 15,
            "line": 65
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          727,
          729
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 65
          },
          "start": {
            "column": 9,
            "line": 65
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            730,
            731
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 65
            },
            "start": {
              "column": 12,
              "line": 65
            }
          }
        }
      ],
      "range": [
        718,
        897
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 65
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
            "type": "TryStatement",
            "block": {
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
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1007,
                            1008
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 85
                            },
                            "start": {
                              "column": 19,
                              "line": 85
                            }
                          }
                        },
                        "range": [
                          1000,
                          1009
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 85
                          },
                          "start": {
                            "column": 12,
                            "line": 85
                          }
                        }
                      }
                    ],
                    "range": [
                      986,
                      1019
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 86
                      },
                      "start": {
                        "column": 13,
                        "line": 84
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              958,
                              959
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 82
                              },
                              "start": {
                                "column": 12,
                                "line": 82
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            958,
                            961
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 82
                            },
                            "start": {
                              "column": 12,
                              "line": 82
                            }
                          }
                        },
                        "range": [
                          958,
                          962
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 82
                          },
                          "start": {
                            "column": 12,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "range": [
                      944,
                      972
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 83
                      },
                      "start": {
                        "column": 18,
                        "line": 81
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      938,
                      942
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 81
                      },
                      "start": {
                        "column": 12,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    934,
                    1019
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                924,
                1025
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 87
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1057,
                        1058
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 89
                        },
                        "start": {
                          "column": 15,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      1050,
                      1059
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  }
                ],
                "range": [
                  1040,
                  1065
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 90
                  },
                  "start": {
                    "column": 14,
                    "line": 88
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  1037,
                  1038
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 88
                  },
                  "start": {
                    "column": 11,
                    "line": 88
                  }
                }
              },
              "range": [
                1030,
                1065
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              920,
              1065
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "range": [
          914,
          1067
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 15,
            "line": 79
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "range": [
          908,
          910
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 79
          },
          "start": {
            "column": 9,
            "line": 79
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            911,
            912
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 79
            },
            "start": {
              "column": 12,
              "line": 79
            }
          }
        }
      ],
      "range": [
        899,
        1067
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 79
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1139,
                            1140
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 96
                            },
                            "start": {
                              "column": 19,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          1132,
                          1141
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 96
                          },
                          "start": {
                            "column": 12,
                            "line": 96
                          }
                        }
                      }
                    ],
                    "range": [
                      1118,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 97
                      },
                      "start": {
                        "column": 22,
                        "line": 95
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      1111,
                      1116
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 95
                      },
                      "start": {
                        "column": 15,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    1104,
                    1151
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 95
                    }
                  }
                }
              ],
              "range": [
                1094,
                1157
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 98
                },
                "start": {
                  "column": 8,
                  "line": 94
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1189,
                        1190
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 100
                        },
                        "start": {
                          "column": 15,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      1182,
                      1191
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 100
                      }
                    }
                  }
                ],
                "range": [
                  1172,
                  1197
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 101
                  },
                  "start": {
                    "column": 14,
                    "line": 99
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  1169,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 99
                  },
                  "start": {
                    "column": 11,
                    "line": 99
                  }
                }
              },
              "range": [
                1162,
                1197
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 99
                }
              }
            },
            "range": [
              1090,
              1197
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "range": [
          1084,
          1199
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 102
          },
          "start": {
            "column": 15,
            "line": 93
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "range": [
          1078,
          1080
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 93
          },
          "start": {
            "column": 9,
            "line": 93
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1081,
            1082
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 93
            },
            "start": {
              "column": 12,
              "line": 93
            }
          }
        }
      ],
      "range": [
        1069,
        1199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 93
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "DoWhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1254,
                              1255
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 107
                              },
                              "start": {
                                "column": 12,
                                "line": 107
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            1254,
                            1257
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 107
                            },
                            "start": {
                              "column": 12,
                              "line": 107
                            }
                          }
                        },
                        "range": [
                          1254,
                          1258
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 107
                          },
                          "start": {
                            "column": 12,
                            "line": 107
                          }
                        }
                      }
                    ],
                    "range": [
                      1240,
                      1268
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 108
                      },
                      "start": {
                        "column": 11,
                        "line": 106
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1276,
                      1280
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 108
                      },
                      "start": {
                        "column": 17,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    1237,
                    1282
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 108
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                }
              ],
              "range": [
                1227,
                1288
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 109
                },
                "start": {
                  "column": 8,
                  "line": 105
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1320,
                        1321
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 111
                        },
                        "start": {
                          "column": 15,
                          "line": 111
                        }
                      }
                    },
                    "range": [
                      1313,
                      1322
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 111
                      },
                      "start": {
                        "column": 8,
                        "line": 111
                      }
                    }
                  }
                ],
                "range": [
                  1303,
                  1328
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 112
                  },
                  "start": {
                    "column": 14,
                    "line": 110
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  1300,
                  1301
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 110
                  },
                  "start": {
                    "column": 11,
                    "line": 110
                  }
                }
              },
              "range": [
                1293,
                1328
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 112
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              1223,
              1328
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "range": [
          1217,
          1330
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 16,
            "line": 104
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          1210,
          1213
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 104
          },
          "start": {
            "column": 9,
            "line": 104
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1214,
            1215
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 104
            },
            "start": {
              "column": 13,
              "line": 104
            }
          }
        }
      ],
      "range": [
        1201,
        1330
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 104
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
            "type": "LabeledStatement",
            "body": {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "DoWhileStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "DoWhileStatement",
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    1422,
                                    1426
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 120
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 120
                                    }
                                  }
                                },
                                "range": [
                                  1416,
                                  1427
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 120
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 120
                                  }
                                }
                              }
                            ],
                            "range": [
                              1398,
                              1441
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 121
                              },
                              "start": {
                                "column": 15,
                                "line": 119
                              }
                            }
                          },
                          "test": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              1449,
                              1453
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 121
                              },
                              "start": {
                                "column": 21,
                                "line": 121
                              }
                            }
                          },
                          "range": [
                            1395,
                            1455
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 121
                            },
                            "start": {
                              "column": 12,
                              "line": 119
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1468,
                                1469
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 122
                                },
                                "start": {
                                  "column": 12,
                                  "line": 122
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              1468,
                              1471
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 122
                              },
                              "start": {
                                "column": 12,
                                "line": 122
                              }
                            }
                          },
                          "range": [
                            1468,
                            1472
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 122
                            },
                            "start": {
                              "column": 12,
                              "line": 122
                            }
                          }
                        }
                      ],
                      "range": [
                        1381,
                        1482
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 123
                        },
                        "start": {
                          "column": 11,
                          "line": 118
                        }
                      }
                    },
                    "test": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        1490,
                        1494
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 123
                        },
                        "start": {
                          "column": 17,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      1378,
                      1496
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 123
                      },
                      "start": {
                        "column": 8,
                        "line": 118
                      }
                    }
                  }
                ],
                "range": [
                  1368,
                  1502
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 124
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              },
              "finalizer": null,
              "handler": {
                "type": "CatchClause",
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1534,
                          1535
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 126
                          },
                          "start": {
                            "column": 15,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        1527,
                        1536
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 126
                        },
                        "start": {
                          "column": 8,
                          "line": 126
                        }
                      }
                    }
                  ],
                  "range": [
                    1517,
                    1542
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 127
                    },
                    "start": {
                      "column": 14,
                      "line": 125
                    }
                  }
                },
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "range": [
                    1514,
                    1515
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 125
                    },
                    "start": {
                      "column": 11,
                      "line": 125
                    }
                  }
                },
                "range": [
                  1507,
                  1542
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 127
                  },
                  "start": {
                    "column": 4,
                    "line": 125
                  }
                }
              },
              "range": [
                1364,
                1542
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 127
                },
                "start": {
                  "column": 4,
                  "line": 117
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                1354,
                1358
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 116
                },
                "start": {
                  "column": 4,
                  "line": 116
                }
              }
            },
            "range": [
              1354,
              1542
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          }
        ],
        "range": [
          1348,
          1544
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 16,
            "line": 115
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          1341,
          1344
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 115
          },
          "start": {
            "column": 9,
            "line": 115
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1345,
            1346
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 115
            },
            "start": {
              "column": 13,
              "line": 115
            }
          }
        }
      ],
      "range": [
        1332,
        1544
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 128
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
