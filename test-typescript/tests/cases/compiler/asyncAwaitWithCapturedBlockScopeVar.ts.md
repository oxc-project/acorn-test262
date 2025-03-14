__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    571
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
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
                  "name": "ar",
                  "optional": false,
                  "range": [
                    31,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                    36,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                },
                "range": [
                  31,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
              27,
              39
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        88,
                        89
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
                    "range": [
                      82,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    82,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            113,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 5
                            },
                            "start": {
                              "column": 22,
                              "line": 5
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          107,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
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
                        "name": "ar",
                        "optional": false,
                        "range": [
                          99,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          102,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        99,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      99,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    99,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                72,
                122
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 3
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
                    "name": "i",
                    "optional": false,
                    "range": [
                      53,
                      54
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
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      57,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    53,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                49,
                58
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  60,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  64,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "range": [
                60,
                65
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  67,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                67,
                70
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "range": [
              44,
              122
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
          }
        ],
        "range": [
          21,
          124
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 21,
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
        "name": "fn1",
        "optional": false,
        "range": [
          15,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "range": [
                    157,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    162,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  157,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              153,
              165
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        214,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      208,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    208,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            239,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 13
                            },
                            "start": {
                              "column": 22,
                              "line": 13
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          233,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
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
                        "name": "ar",
                        "optional": false,
                        "range": [
                          225,
                          227
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          228,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 11,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        225,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      225,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    225,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    251,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                198,
                263
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 32,
                  "line": 11
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
                    "name": "i",
                    "optional": false,
                    "range": [
                      179,
                      180
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
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      183,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 11
                      },
                      "start": {
                        "column": 17,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    179,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                175,
                184
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  190,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                186,
                191
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  193,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                193,
                196
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            },
            "range": [
              170,
              263
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          147,
          265
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 21,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "range": [
          141,
          144
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "params": [],
      "range": [
        126,
        265
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "range": [
                    298,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    303,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 13,
                      "line": 19
                    }
                  }
                },
                "range": [
                  298,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              294,
              306
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        355,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      349,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    349,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            380,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 22
                            },
                            "start": {
                              "column": 22,
                              "line": 22
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          374,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 22
                          },
                          "start": {
                            "column": 16,
                            "line": 22
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
                        "name": "ar",
                        "optional": false,
                        "range": [
                          366,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          369,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 22
                          },
                          "start": {
                            "column": 11,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        366,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      366,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    366,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "range": [
                    392,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                339,
                407
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 32,
                  "line": 20
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
                    "name": "i",
                    "optional": false,
                    "range": [
                      320,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      324,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 17,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    320,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                316,
                325
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  327,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  331,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              },
              "range": [
                327,
                332
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  334,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                334,
                337
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              }
            },
            "range": [
              311,
              407
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          288,
          409
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 21,
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
        "name": "fn3",
        "optional": false,
        "range": [
          282,
          285
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 18
          },
          "start": {
            "column": 15,
            "line": 18
          }
        }
      },
      "params": [],
      "range": [
        267,
        409
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 18
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "range": [
                    459,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    464,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                },
                "range": [
                  459,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              455,
              467
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        516,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 30
                        },
                        "start": {
                          "column": 14,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      510,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    510,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            541,
                            542
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 31
                            },
                            "start": {
                              "column": 22,
                              "line": 31
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          535,
                          542
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 31
                          },
                          "start": {
                            "column": 16,
                            "line": 31
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
                        "name": "ar",
                        "optional": false,
                        "range": [
                          527,
                          529
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          530,
                          534
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 31
                          },
                          "start": {
                            "column": 11,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        527,
                        534
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      527,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    527,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
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
                      560,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 32
                      },
                      "start": {
                        "column": 15,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    553,
                    562
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                500,
                568
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 32,
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
                    "name": "i",
                    "optional": false,
                    "range": [
                      481,
                      482
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
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      485,
                      486
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
                  "range": [
                    481,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
              "kind": "let",
              "range": [
                477,
                486
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 29
                },
                "start": {
                  "column": 9,
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
                "name": "i",
                "optional": false,
                "range": [
                  488,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 29
                  },
                  "start": {
                    "column": 20,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  492,
                  493
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
              "range": [
                488,
                493
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 20,
                  "line": 29
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  495,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 29
                  },
                  "start": {
                    "column": 27,
                    "line": 29
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                495,
                498
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 29
                },
                "start": {
                  "column": 27,
                  "line": 29
                }
              }
            },
            "range": [
              472,
              568
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          449,
          570
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 38,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "range": [
          426,
          429
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 27
          },
          "start": {
            "column": 15,
            "line": 27
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 27
          },
          "start": {
            "column": 20,
            "line": 27
          }
        },
        "range": [
          431,
          448
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              440,
              448
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  441,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 27
                  },
                  "start": {
                    "column": 30,
                    "line": 27
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 27
              },
              "start": {
                "column": 29,
                "line": 27
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              433,
              440
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          "range": [
            433,
            448
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 27
            },
            "start": {
              "column": 22,
              "line": 27
            }
          }
        }
      },
      "range": [
        411,
        570
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
