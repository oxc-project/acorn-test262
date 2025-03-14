__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    359
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
            "name": "C",
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
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                16,
                324
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bar",
                    "range": [
                      28,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      32,
                      72
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "42",
                                  "value": 42,
                                  "range": [
                                    66,
                                    68
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 2
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
                                    50,
                                    57
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 2
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
                                    58,
                                    65
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  50,
                                  65
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 2
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                50,
                                69
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 2
                                },
                                "start": {
                                  "column": 32,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              44,
                              69
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 2
                              },
                              "start": {
                                "column": 26,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            37,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 2
                            },
                            "start": {
                              "column": 19,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        35,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    22,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      83,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      86,
                      227
                    ],
                    "async": true,
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
                                "name": "b",
                                "optional": false,
                                "range": [
                                  105,
                                  106
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 4
                                  }
                                }
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        115,
                                        119
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "bar",
                                      "range": [
                                        120,
                                        124
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      115,
                                      124
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    115,
                                    126
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  109,
                                  126
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                105,
                                126
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 4
                                },
                                "start": {
                                  "column": 14,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const",
                          "range": [
                            99,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  143,
                                  144
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 5
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              148,
                                              152
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 24,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "baz",
                                            "range": [
                                              153,
                                              157
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "range": [
                                            148,
                                            157
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 5
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          148,
                                          159
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "range": [
                                          160,
                                          164
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        148,
                                        164
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      148,
                                      166
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      167,
                                      172
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    148,
                                    172
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 5
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "0",
                                  "value": 0,
                                  "range": [
                                    176,
                                    177
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  148,
                                  177
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                143,
                                178
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 5
                                },
                                "start": {
                                  "column": 15,
                                  "line": 5
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              189,
                                              193
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 65,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 61,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "qux",
                                            "range": [
                                              194,
                                              198
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 70,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 66,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "range": [
                                            189,
                                            198
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 70,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 61,
                                              "line": 5
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          189,
                                          200
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 72,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 61,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "range": [
                                          201,
                                          205
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 77,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 73,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        189,
                                        205
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 77,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 61,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      189,
                                      207
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 79,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    183,
                                    207
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 79,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 5
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    209,
                                    214
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 81,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  182,
                                  214
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 5
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  218,
                                  219
                                ],
                                "loc": {
                                  "end": {
                                    "column": 91,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 90,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                182,
                                219
                              ],
                              "loc": {
                                "end": {
                                  "column": 91,
                                  "line": 5
                                },
                                "start": {
                                  "column": 54,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              143,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            136,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        89,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    77,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "baz",
                    "range": [
                      233,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      237,
                      253
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "argument": {
                              "type": "Literal",
                              "raw": "42",
                              "value": 42,
                              "range": [
                                248,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 7
                                },
                                "start": {
                                  "column": 20,
                                  "line": 7
                                }
                              }
                            },
                            "delegate": false,
                            "range": [
                              242,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 7
                              },
                              "start": {
                                "column": 14,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            242,
                            251
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 14,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        240,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    232,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "qux",
                    "range": [
                      265,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      269,
                      322
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "argument": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "42",
                                    "value": 42,
                                    "range": [
                                      311,
                                      313
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 9
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
                                      295,
                                      302
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 9
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
                                      303,
                                      310
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    295,
                                    310
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  295,
                                  314
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                289,
                                314
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 9
                                },
                                "start": {
                                  "column": 15,
                                  "line": 9
                                }
                              }
                            },
                            "delegate": false,
                            "range": [
                              282,
                              315
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 9
                              },
                              "start": {
                                "column": 8,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            282,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        272,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 10
                        },
                        "start": {
                          "column": 18,
                          "line": 8
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    258,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              10,
              324
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            324
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
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
        324
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "range": [
                345,
                352
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
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
                353,
                356
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            },
            "range": [
              345,
              356
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    330,
                    331
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
                "range": [
                  326,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 13
                  },
                  "start": {
                    "column": 0,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  334,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "range": [
                326,
                337
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 0,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              326,
              339
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              340,
              344
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "range": [
            326,
            344
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          326,
          357
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        326,
        358
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
