__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    429
  ],
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          4,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 4,
            "line": 1
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "range": [
                      29,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    }
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "range": [
                          47,
                          48
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        40,
                        48
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 3
                        },
                        "start": {
                          "column": 21,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        53,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      40,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    29,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                23,
                62
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            91,
                            92
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "range": [
                            93,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 5
                            },
                            "start": {
                              "column": 10,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          91,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                        91,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      91,
                      107
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
                  }
                ],
                "range": [
                  81,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "range": [
                  71,
                  79
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
              "range": [
                67,
                125
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            168,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "range": [
                            170,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 10,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          168,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        168,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      168,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  158,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "range": [
                      142,
                      143
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
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    135,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    148,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 21,
                      "line": 8
                    }
                  }
                },
                "range": [
                  135,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              },
              "range": [
                131,
                202
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
          "range": [
            17,
            204
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            14,
            15
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        },
        "range": [
          7,
          204
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        0,
        204
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
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          210,
          212
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "range": [
                      235,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 15
                      },
                      "start": {
                        "column": 10,
                        "line": 15
                      }
                    }
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "range": [
                          253,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 15
                          },
                          "start": {
                            "column": 28,
                            "line": 15
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        246,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 15
                        },
                        "start": {
                          "column": 21,
                          "line": 15
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        259,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 15
                        },
                        "start": {
                          "column": 34,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      246,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 15
                      },
                      "start": {
                        "column": 21,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    235,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                229,
                268
              ],
              "loc": {
                "end": {
                  "column": 43,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "range": [
                    274,
                    275
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
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    278,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "range": [
                  274,
                  279
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
              "range": [
                274,
                280
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            310,
                            311
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "range": [
                            312,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 20
                            },
                            "start": {
                              "column": 10,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          310,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        310,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      310,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  300,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 19
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "range": [
                  290,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "range": [
                286,
                349
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
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            392,
                            393
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "range": [
                            394,
                            405
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 24
                            },
                            "start": {
                              "column": 10,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          392,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        392,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      392,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  382,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 31,
                    "line": 23
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "range": [
                      366,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    359,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    372,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 21,
                      "line": 23
                    }
                  }
                },
                "range": [
                  359,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "range": [
                355,
                426
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            223,
            428
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 10,
              "line": 14
            }
          }
        },
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            220,
            221
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 7,
              "line": 14
            }
          }
        },
        "range": [
          213,
          428
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        206,
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
