__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1162
  ],
  "body": [
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    62,
                    63
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
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    66,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  62,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
              58,
              69
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    78,
                    79
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
                "init": null,
                "range": [
                  78,
                  79
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              74,
              80
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    85,
                    86
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    87,
                    88
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
                "range": [
                  85,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      93,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "range": [
                        97,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "range": [
                        100,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      97,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    93,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    106,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  92,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                85,
                112
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              85,
              113
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 4,
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    118,
                    119
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    120,
                    121
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
                "range": [
                  118,
                  122
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
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      126,
                      127
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
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            132,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 18,
                              "line": 5
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0x10000",
                          "value": 65536,
                          "range": [
                            136,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 5
                            },
                            "start": {
                              "column": 22,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          132,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          147,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 33,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        131,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            152,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 5
                            },
                            "start": {
                              "column": 38,
                              "line": 5
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a0",
                          "optional": false,
                          "range": [
                            154,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 5
                            },
                            "start": {
                              "column": 40,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          152,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 5
                          },
                          "start": {
                            "column": 38,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "range": [
                          157,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 5
                          },
                          "start": {
                            "column": 43,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        152,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 5
                        },
                        "start": {
                          "column": 38,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      130,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 16,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    126,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    163,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                },
                "range": [
                  125,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                118,
                169
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              118,
              170
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    175,
                    176
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    177,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "range": [
                  175,
                  179
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
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      183,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              189,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 6
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0x10000",
                            "value": 65536,
                            "range": [
                              193,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 6
                              },
                              "start": {
                                "column": 22,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            189,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            204,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 6
                            },
                            "start": {
                              "column": 33,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          188,
                          205
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              209,
                              210
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
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a0",
                            "optional": false,
                            "range": [
                              211,
                              213
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 6
                              },
                              "start": {
                                "column": 40,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            209,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 6
                            },
                            "start": {
                              "column": 38,
                              "line": 6
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "range": [
                            214,
                            216
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 6
                            },
                            "start": {
                              "column": 43,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          209,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 6
                          },
                          "start": {
                            "column": 38,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        187,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "range": [
                          219,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 6
                          },
                          "start": {
                            "column": 48,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "range": [
                          222,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 6
                          },
                          "start": {
                            "column": 51,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        219,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 6
                        },
                        "start": {
                          "column": 48,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      187,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    183,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    228,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 6
                    },
                    "start": {
                      "column": 57,
                      "line": 6
                    }
                  }
                },
                "range": [
                  182,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                175,
                234
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              175,
              235
            ],
            "loc": {
              "end": {
                "column": 64,
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    240,
                    241
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    242,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
                    }
                  }
                },
                "range": [
                  240,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      248,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              254,
                              255
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 7
                              },
                              "start": {
                                "column": 18,
                                "line": 7
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0x10000",
                            "value": 65536,
                            "range": [
                              258,
                              265
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            254,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 7
                            },
                            "start": {
                              "column": 18,
                              "line": 7
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            269,
                            270
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
                        "range": [
                          253,
                          270
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              274,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 7
                              },
                              "start": {
                                "column": 38,
                                "line": 7
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a0",
                            "optional": false,
                            "range": [
                              276,
                              278
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 7
                              },
                              "start": {
                                "column": 40,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            274,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 7
                            },
                            "start": {
                              "column": 38,
                              "line": 7
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "range": [
                            279,
                            281
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 7
                            },
                            "start": {
                              "column": 43,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          274,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 7
                          },
                          "start": {
                            "column": 38,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        252,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            284,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 7
                            },
                            "start": {
                              "column": 48,
                              "line": 7
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "range": [
                            286,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 7
                            },
                            "start": {
                              "column": 50,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          284,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 7
                          },
                          "start": {
                            "column": 48,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "range": [
                          289,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 7
                          },
                          "start": {
                            "column": 53,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        284,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 7
                        },
                        "start": {
                          "column": 48,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      252,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    248,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    295,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 7
                    },
                    "start": {
                      "column": 59,
                      "line": 7
                    }
                  }
                },
                "range": [
                  247,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                240,
                301
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              240,
              302
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 7
              },
              "start": {
                "column": 4,
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    307,
                    308
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    309,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  }
                },
                "range": [
                  307,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      315,
                      316
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
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                321,
                                322
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 8
                                },
                                "start": {
                                  "column": 18,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0x10000",
                              "value": 65536,
                              "range": [
                                325,
                                332
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 22,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              321,
                              332
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 8
                              },
                              "start": {
                                "column": 18,
                                "line": 8
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              336,
                              337
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 8
                              },
                              "start": {
                                "column": 33,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            320,
                            337
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                341,
                                342
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 8
                                },
                                "start": {
                                  "column": 38,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a0",
                              "optional": false,
                              "range": [
                                343,
                                345
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 8
                                },
                                "start": {
                                  "column": 40,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              341,
                              345
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 8
                              },
                              "start": {
                                "column": 38,
                                "line": 8
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a4",
                            "optional": false,
                            "range": [
                              346,
                              348
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 8
                              },
                              "start": {
                                "column": 43,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            341,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 8
                            },
                            "start": {
                              "column": 38,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          319,
                          348
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 8
                          },
                          "start": {
                            "column": 16,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              351,
                              352
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 8
                              },
                              "start": {
                                "column": 48,
                                "line": 8
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a1",
                            "optional": false,
                            "range": [
                              353,
                              355
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 8
                              },
                              "start": {
                                "column": 50,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            351,
                            355
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 8
                            },
                            "start": {
                              "column": 48,
                              "line": 8
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "range": [
                            356,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 8
                            },
                            "start": {
                              "column": 53,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          351,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 8
                          },
                          "start": {
                            "column": 48,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        319,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "range": [
                          361,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 8
                          },
                          "start": {
                            "column": 58,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "range": [
                          364,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 8
                          },
                          "start": {
                            "column": 61,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        361,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 8
                        },
                        "start": {
                          "column": 58,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      319,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    315,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    370,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 8
                    },
                    "start": {
                      "column": 67,
                      "line": 8
                    }
                  }
                },
                "range": [
                  314,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                307,
                376
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              307,
              377
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    382,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    384,
                    385
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
                "range": [
                  382,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      390,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                396,
                                397
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0x10000",
                              "value": 65536,
                              "range": [
                                400,
                                407
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 9
                                },
                                "start": {
                                  "column": 22,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              396,
                              407
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 9
                              },
                              "start": {
                                "column": 18,
                                "line": 9
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              411,
                              412
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 9
                              },
                              "start": {
                                "column": 33,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            395,
                            412
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                416,
                                417
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 9
                                },
                                "start": {
                                  "column": 38,
                                  "line": 9
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a0",
                              "optional": false,
                              "range": [
                                418,
                                420
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 9
                                },
                                "start": {
                                  "column": 40,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              416,
                              420
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 9
                              },
                              "start": {
                                "column": 38,
                                "line": 9
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a5",
                            "optional": false,
                            "range": [
                              421,
                              423
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 9
                              },
                              "start": {
                                "column": 43,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            416,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 9
                            },
                            "start": {
                              "column": 38,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          394,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 9
                          },
                          "start": {
                            "column": 16,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              426,
                              427
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 9
                              },
                              "start": {
                                "column": 48,
                                "line": 9
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a1",
                            "optional": false,
                            "range": [
                              428,
                              430
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 9
                              },
                              "start": {
                                "column": 50,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            426,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 9
                            },
                            "start": {
                              "column": 48,
                              "line": 9
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "range": [
                            431,
                            433
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 9
                            },
                            "start": {
                              "column": 53,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          426,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 9
                          },
                          "start": {
                            "column": 48,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        394,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            436,
                            437
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 9
                            },
                            "start": {
                              "column": 58,
                              "line": 9
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "range": [
                            438,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 9
                            },
                            "start": {
                              "column": 60,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          436,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 9
                          },
                          "start": {
                            "column": 58,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "range": [
                          441,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 9
                          },
                          "start": {
                            "column": 63,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        436,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 9
                        },
                        "start": {
                          "column": 58,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      394,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    390,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    447,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 9
                    },
                    "start": {
                      "column": 69,
                      "line": 9
                    }
                  }
                },
                "range": [
                  389,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "range": [
                382,
                453
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              382,
              454
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    459,
                    460
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "6",
                  "value": 6,
                  "range": [
                    461,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 10
                    },
                    "start": {
                      "column": 6,
                      "line": 10
                    }
                  }
                },
                "range": [
                  459,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      467,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "range": [
                                  473,
                                  474
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 10
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0x10000",
                                "value": 65536,
                                "range": [
                                  477,
                                  484
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                473,
                                484
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 10
                                },
                                "start": {
                                  "column": 18,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                488,
                                489
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 10
                                },
                                "start": {
                                  "column": 33,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              472,
                              489
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 10
                              },
                              "start": {
                                "column": 17,
                                "line": 10
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  493,
                                  494
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 10
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a0",
                                "optional": false,
                                "range": [
                                  495,
                                  497
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                493,
                                497
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 10
                                },
                                "start": {
                                  "column": 38,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a6",
                              "optional": false,
                              "range": [
                                498,
                                500
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 10
                                },
                                "start": {
                                  "column": 43,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              493,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 10
                              },
                              "start": {
                                "column": 38,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            471,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                503,
                                504
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 10
                                },
                                "start": {
                                  "column": 48,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "range": [
                                505,
                                507
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 10
                                },
                                "start": {
                                  "column": 50,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              503,
                              507
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 10
                              },
                              "start": {
                                "column": 48,
                                "line": 10
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a5",
                            "optional": false,
                            "range": [
                              508,
                              510
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 10
                              },
                              "start": {
                                "column": 53,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            503,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 10
                            },
                            "start": {
                              "column": 48,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          471,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 10
                          },
                          "start": {
                            "column": 16,
                            "line": 10
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              513,
                              514
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 10
                              },
                              "start": {
                                "column": 58,
                                "line": 10
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "range": [
                              515,
                              517
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 10
                              },
                              "start": {
                                "column": 60,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            513,
                            517
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 10
                            },
                            "start": {
                              "column": 58,
                              "line": 10
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "range": [
                            518,
                            520
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 10
                            },
                            "start": {
                              "column": 63,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          513,
                          520
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 10
                          },
                          "start": {
                            "column": 58,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        471,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "range": [
                          523,
                          525
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 10
                          },
                          "start": {
                            "column": 68,
                            "line": 10
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "range": [
                          526,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 10
                          },
                          "start": {
                            "column": 71,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        523,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 10
                        },
                        "start": {
                          "column": 68,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      471,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    467,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    532,
                    538
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 10
                    },
                    "start": {
                      "column": 77,
                      "line": 10
                    }
                  }
                },
                "range": [
                  466,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                459,
                538
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              459,
              539
            ],
            "loc": {
              "end": {
                "column": 84,
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    544,
                    545
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "7",
                  "value": 7,
                  "range": [
                    546,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 11
                    },
                    "start": {
                      "column": 6,
                      "line": 11
                    }
                  }
                },
                "range": [
                  544,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      552,
                      553
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
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "range": [
                                  558,
                                  559
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 11
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0x10000",
                                "value": 65536,
                                "range": [
                                  562,
                                  569
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                558,
                                569
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 11
                                },
                                "start": {
                                  "column": 18,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                573,
                                574
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 11
                                },
                                "start": {
                                  "column": 33,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              557,
                              574
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 11
                              },
                              "start": {
                                "column": 17,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  578,
                                  579
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 11
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a0",
                                "optional": false,
                                "range": [
                                  580,
                                  582
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                578,
                                582
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 11
                                },
                                "start": {
                                  "column": 38,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a7",
                              "optional": false,
                              "range": [
                                583,
                                585
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 11
                                },
                                "start": {
                                  "column": 43,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              578,
                              585
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 11
                              },
                              "start": {
                                "column": 38,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            556,
                            585
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                588,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 11
                                },
                                "start": {
                                  "column": 48,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "range": [
                                590,
                                592
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 11
                                },
                                "start": {
                                  "column": 50,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              588,
                              592
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 11
                              },
                              "start": {
                                "column": 48,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a6",
                            "optional": false,
                            "range": [
                              593,
                              595
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 11
                              },
                              "start": {
                                "column": 53,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            588,
                            595
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 11
                            },
                            "start": {
                              "column": 48,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          556,
                          595
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              598,
                              599
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 11
                              },
                              "start": {
                                "column": 58,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "range": [
                              600,
                              602
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 11
                              },
                              "start": {
                                "column": 60,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            598,
                            602
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 11
                            },
                            "start": {
                              "column": 58,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "range": [
                            603,
                            605
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 11
                            },
                            "start": {
                              "column": 63,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          598,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 11
                          },
                          "start": {
                            "column": 58,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        556,
                        605
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            608,
                            609
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 11
                            },
                            "start": {
                              "column": 68,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "range": [
                            610,
                            612
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 11
                            },
                            "start": {
                              "column": 70,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          608,
                          612
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 11
                          },
                          "start": {
                            "column": 68,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "range": [
                          613,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 11
                          },
                          "start": {
                            "column": 73,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        608,
                        615
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 11
                        },
                        "start": {
                          "column": 68,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      556,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    552,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    619,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 11
                    },
                    "start": {
                      "column": 79,
                      "line": 11
                    }
                  }
                },
                "range": [
                  551,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "range": [
                544,
                625
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              544,
              626
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    631,
                    632
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "8",
                  "value": 8,
                  "range": [
                    633,
                    634
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
                "range": [
                  631,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      639,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "range": [
                                  645,
                                  646
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 12
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0x10000",
                                "value": 65536,
                                "range": [
                                  649,
                                  656
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                645,
                                656
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 12
                                },
                                "start": {
                                  "column": 18,
                                  "line": 12
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                660,
                                661
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 12
                                },
                                "start": {
                                  "column": 33,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              644,
                              661
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 12
                              },
                              "start": {
                                "column": 17,
                                "line": 12
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  665,
                                  666
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 12
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "range": [
                                  667,
                                  669
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                665,
                                669
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 12
                                },
                                "start": {
                                  "column": 38,
                                  "line": 12
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a7",
                              "optional": false,
                              "range": [
                                670,
                                672
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 12
                                },
                                "start": {
                                  "column": 43,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              665,
                              672
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 12
                              },
                              "start": {
                                "column": 38,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            643,
                            672
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 12
                            },
                            "start": {
                              "column": 16,
                              "line": 12
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                675,
                                676
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 12
                                },
                                "start": {
                                  "column": 48,
                                  "line": 12
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "range": [
                                677,
                                679
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 12
                                },
                                "start": {
                                  "column": 50,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              675,
                              679
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 12
                              },
                              "start": {
                                "column": 48,
                                "line": 12
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a6",
                            "optional": false,
                            "range": [
                              680,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 12
                              },
                              "start": {
                                "column": 53,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            675,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 12
                            },
                            "start": {
                              "column": 48,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          643,
                          682
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              685,
                              686
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 12
                              },
                              "start": {
                                "column": 58,
                                "line": 12
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a3",
                            "optional": false,
                            "range": [
                              687,
                              689
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 12
                              },
                              "start": {
                                "column": 60,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            685,
                            689
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 12
                            },
                            "start": {
                              "column": 58,
                              "line": 12
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "range": [
                            690,
                            692
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 12
                            },
                            "start": {
                              "column": 63,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          685,
                          692
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 12
                          },
                          "start": {
                            "column": 58,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        643,
                        692
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "range": [
                          695,
                          697
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 12
                          },
                          "start": {
                            "column": 68,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "range": [
                          698,
                          700
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 12
                          },
                          "start": {
                            "column": 71,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        695,
                        700
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 12
                        },
                        "start": {
                          "column": 68,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      643,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    639,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    704,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 12
                    },
                    "start": {
                      "column": 77,
                      "line": 12
                    }
                  }
                },
                "range": [
                  638,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                631,
                710
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              631,
              711
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    716,
                    717
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "9",
                  "value": 9,
                  "range": [
                    718,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                },
                "range": [
                  716,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      724,
                      725
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                730,
                                731
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 13
                                },
                                "start": {
                                  "column": 18,
                                  "line": 13
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0x10000",
                              "value": 65536,
                              "range": [
                                734,
                                741
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 22,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              730,
                              741
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 13
                              },
                              "start": {
                                "column": 18,
                                "line": 13
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              745,
                              746
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 13
                              },
                              "start": {
                                "column": 33,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            729,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                750,
                                751
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 13
                                },
                                "start": {
                                  "column": 38,
                                  "line": 13
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "range": [
                                752,
                                754
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 13
                                },
                                "start": {
                                  "column": 40,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              750,
                              754
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 13
                              },
                              "start": {
                                "column": 38,
                                "line": 13
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a7",
                            "optional": false,
                            "range": [
                              755,
                              757
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 13
                              },
                              "start": {
                                "column": 43,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            750,
                            757
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 13
                            },
                            "start": {
                              "column": 38,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          728,
                          757
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              760,
                              761
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 13
                              },
                              "start": {
                                "column": 48,
                                "line": 13
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a3",
                            "optional": false,
                            "range": [
                              762,
                              764
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 13
                              },
                              "start": {
                                "column": 50,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            760,
                            764
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 13
                            },
                            "start": {
                              "column": 48,
                              "line": 13
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "range": [
                            765,
                            767
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 13
                            },
                            "start": {
                              "column": 53,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          760,
                          767
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 13
                          },
                          "start": {
                            "column": 48,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        728,
                        767
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            770,
                            771
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 13
                            },
                            "start": {
                              "column": 58,
                              "line": 13
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "range": [
                            772,
                            774
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 13
                            },
                            "start": {
                              "column": 60,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          770,
                          774
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 13
                          },
                          "start": {
                            "column": 58,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "range": [
                          775,
                          777
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 13
                          },
                          "start": {
                            "column": 63,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        770,
                        777
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 13
                        },
                        "start": {
                          "column": 58,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      728,
                      777
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 13
                      },
                      "start": {
                        "column": 16,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    724,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    781,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 13
                    },
                    "start": {
                      "column": 69,
                      "line": 13
                    }
                  }
                },
                "range": [
                  723,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "range": [
                716,
                787
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              716,
              788
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    793,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    795,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 6,
                      "line": 14
                    }
                  }
                },
                "range": [
                  793,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      802,
                      803
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                808,
                                809
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 14
                                },
                                "start": {
                                  "column": 19,
                                  "line": 14
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0x10000",
                              "value": 65536,
                              "range": [
                                812,
                                819
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 14
                                },
                                "start": {
                                  "column": 23,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              808,
                              819
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 14
                              },
                              "start": {
                                "column": 19,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              823,
                              824
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 14
                              },
                              "start": {
                                "column": 34,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            807,
                            824
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                828,
                                829
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 14
                                },
                                "start": {
                                  "column": 39,
                                  "line": 14
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a3",
                              "optional": false,
                              "range": [
                                830,
                                832
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 14
                                },
                                "start": {
                                  "column": 41,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              828,
                              832
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 14
                              },
                              "start": {
                                "column": 39,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a7",
                            "optional": false,
                            "range": [
                              833,
                              835
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 14
                              },
                              "start": {
                                "column": 44,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            828,
                            835
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 14
                            },
                            "start": {
                              "column": 39,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          806,
                          835
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              838,
                              839
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 14
                              },
                              "start": {
                                "column": 49,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a4",
                            "optional": false,
                            "range": [
                              840,
                              842
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 14
                              },
                              "start": {
                                "column": 51,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            838,
                            842
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 14
                            },
                            "start": {
                              "column": 49,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "range": [
                            843,
                            845
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 14
                            },
                            "start": {
                              "column": 54,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          838,
                          845
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 14
                          },
                          "start": {
                            "column": 49,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        806,
                        845
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "range": [
                          848,
                          850
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 14
                          },
                          "start": {
                            "column": 59,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "range": [
                          851,
                          853
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 14
                          },
                          "start": {
                            "column": 62,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        848,
                        853
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 14
                        },
                        "start": {
                          "column": 59,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      806,
                      853
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 14
                      },
                      "start": {
                        "column": 17,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    802,
                    853
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    857,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 14
                    },
                    "start": {
                      "column": 68,
                      "line": 14
                    }
                  }
                },
                "range": [
                  801,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              },
              "range": [
                793,
                863
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              793,
              864
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    869,
                    870
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "11",
                  "value": 11,
                  "range": [
                    871,
                    873
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 15
                    },
                    "start": {
                      "column": 6,
                      "line": 15
                    }
                  }
                },
                "range": [
                  869,
                  874
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      878,
                      879
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              884,
                              885
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 15
                              },
                              "start": {
                                "column": 19,
                                "line": 15
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0x10000",
                            "value": 65536,
                            "range": [
                              888,
                              895
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 15
                              },
                              "start": {
                                "column": 23,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            884,
                            895
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 15
                            },
                            "start": {
                              "column": 19,
                              "line": 15
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            899,
                            900
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 15
                            },
                            "start": {
                              "column": 34,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          883,
                          900
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              904,
                              905
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 15
                              },
                              "start": {
                                "column": 39,
                                "line": 15
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a4",
                            "optional": false,
                            "range": [
                              906,
                              908
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 15
                              },
                              "start": {
                                "column": 41,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            904,
                            908
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 15
                            },
                            "start": {
                              "column": 39,
                              "line": 15
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "range": [
                            909,
                            911
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 15
                            },
                            "start": {
                              "column": 44,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          904,
                          911
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 15
                          },
                          "start": {
                            "column": 39,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        882,
                        911
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 15
                        },
                        "start": {
                          "column": 17,
                          "line": 15
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            914,
                            915
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 15
                            },
                            "start": {
                              "column": 49,
                              "line": 15
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "range": [
                            916,
                            918
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 15
                            },
                            "start": {
                              "column": 51,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          914,
                          918
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 15
                          },
                          "start": {
                            "column": 49,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a6",
                        "optional": false,
                        "range": [
                          919,
                          921
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 15
                          },
                          "start": {
                            "column": 54,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        914,
                        921
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 15
                        },
                        "start": {
                          "column": 49,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      882,
                      921
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 15
                      },
                      "start": {
                        "column": 17,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    878,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    925,
                    931
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 15
                    },
                    "start": {
                      "column": 60,
                      "line": 15
                    }
                  }
                },
                "range": [
                  877,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              "range": [
                869,
                931
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              869,
              932
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    937,
                    938
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    939,
                    941
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 6,
                      "line": 16
                    }
                  }
                },
                "range": [
                  937,
                  942
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      946,
                      947
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              952,
                              953
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 16
                              },
                              "start": {
                                "column": 19,
                                "line": 16
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0x10000",
                            "value": 65536,
                            "range": [
                              956,
                              963
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 16
                              },
                              "start": {
                                "column": 23,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            952,
                            963
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 16
                            },
                            "start": {
                              "column": 19,
                              "line": 16
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            967,
                            968
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 16
                            },
                            "start": {
                              "column": 34,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          951,
                          968
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 16
                          },
                          "start": {
                            "column": 18,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              972,
                              973
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 16
                              },
                              "start": {
                                "column": 39,
                                "line": 16
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a5",
                            "optional": false,
                            "range": [
                              974,
                              976
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 16
                              },
                              "start": {
                                "column": 41,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            972,
                            976
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 16
                            },
                            "start": {
                              "column": 39,
                              "line": 16
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "range": [
                            977,
                            979
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 16
                            },
                            "start": {
                              "column": 44,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          972,
                          979
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 16
                          },
                          "start": {
                            "column": 39,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        950,
                        979
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a6",
                        "optional": false,
                        "range": [
                          982,
                          984
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 16
                          },
                          "start": {
                            "column": 49,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a6",
                        "optional": false,
                        "range": [
                          985,
                          987
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 16
                          },
                          "start": {
                            "column": 52,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        982,
                        987
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 16
                        },
                        "start": {
                          "column": 49,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      950,
                      987
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    946,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    991,
                    997
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 16
                    },
                    "start": {
                      "column": 58,
                      "line": 16
                    }
                  }
                },
                "range": [
                  945,
                  997
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 16
                  },
                  "start": {
                    "column": 12,
                    "line": 16
                  }
                }
              },
              "range": [
                937,
                997
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              937,
              998
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    1003,
                    1004
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "13",
                  "value": 13,
                  "range": [
                    1005,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 17
                    },
                    "start": {
                      "column": 6,
                      "line": 17
                    }
                  }
                },
                "range": [
                  1003,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1012,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            1018,
                            1019
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
                        "right": {
                          "type": "Literal",
                          "raw": "0x10000",
                          "value": 65536,
                          "range": [
                            1022,
                            1029
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 17
                            },
                            "start": {
                              "column": 23,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          1018,
                          1029
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1033,
                          1034
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 17
                          },
                          "start": {
                            "column": 34,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        1017,
                        1034
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            1038,
                            1039
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 17
                            },
                            "start": {
                              "column": 39,
                              "line": 17
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "range": [
                            1040,
                            1042
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 17
                            },
                            "start": {
                              "column": 41,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          1038,
                          1042
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 17
                          },
                          "start": {
                            "column": 39,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "range": [
                          1043,
                          1045
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 17
                          },
                          "start": {
                            "column": 44,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        1038,
                        1045
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 17
                        },
                        "start": {
                          "column": 39,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      1016,
                      1045
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    1012,
                    1045
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    1049,
                    1055
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 17
                    },
                    "start": {
                      "column": 50,
                      "line": 17
                    }
                  }
                },
                "range": [
                  1011,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              },
              "range": [
                1003,
                1055
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              1003,
              1056
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 17
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    1061,
                    1062
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "14",
                  "value": 14,
                  "range": [
                    1063,
                    1065
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 6,
                      "line": 18
                    }
                  }
                },
                "range": [
                  1061,
                  1066
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1070,
                      1071
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            1076,
                            1077
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 18
                            },
                            "start": {
                              "column": 19,
                              "line": 18
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0x10000",
                          "value": 65536,
                          "range": [
                            1080,
                            1087
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 18
                            },
                            "start": {
                              "column": 23,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          1076,
                          1087
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 18
                          },
                          "start": {
                            "column": 19,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1091,
                          1092
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 18
                          },
                          "start": {
                            "column": 34,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        1075,
                        1092
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 18
                        },
                        "start": {
                          "column": 18,
                          "line": 18
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "range": [
                          1096,
                          1098
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 18
                          },
                          "start": {
                            "column": 39,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "range": [
                          1099,
                          1101
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 18
                          },
                          "start": {
                            "column": 42,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        1096,
                        1101
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 18
                        },
                        "start": {
                          "column": 39,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      1074,
                      1101
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    1070,
                    1101
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0xFFFF",
                  "value": 65535,
                  "range": [
                    1105,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 18
                    },
                    "start": {
                      "column": 48,
                      "line": 18
                    }
                  }
                },
                "range": [
                  1069,
                  1111
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                }
              },
              "range": [
                1061,
                1111
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              1061,
              1112
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    1117,
                    1118
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "15",
                  "value": 15,
                  "range": [
                    1119,
                    1121
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 19
                    },
                    "start": {
                      "column": 6,
                      "line": 19
                    }
                  }
                },
                "range": [
                  1117,
                  1122
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "|",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1127,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "0x10000",
                    "value": 65536,
                    "range": [
                      1131,
                      1138
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    1127,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1142,
                    1143
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
                    }
                  }
                },
                "range": [
                  1126,
                  1143
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
                  }
                }
              },
              "range": [
                1117,
                1144
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              1117,
              1145
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "range": [
                1157,
                1158
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
              1150,
              1159
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          52,
          1161
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 52,
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
        "name": "c255lsqr8h",
        "optional": false,
        "range": [
          9,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "a7",
          "optional": false,
          "range": [
            20,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "range": [
            24,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "range": [
            28,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "range": [
            32,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "range": [
            36,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "range": [
            40,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "range": [
            44,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 44,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a0",
          "optional": false,
          "range": [
            48,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 48,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        1161
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
