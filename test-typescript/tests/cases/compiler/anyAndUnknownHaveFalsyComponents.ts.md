__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    407
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              },
              "range": [
                14,
                19
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  16,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        20
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "y1",
            "optional": false,
            "range": [
              27,
              29
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "range": [
                32,
                34
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "range": [
              32,
              39
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          },
          "range": [
            27,
            39
          ],
          "loc": {
            "end": {
              "column": 18,
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
        21,
        40
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
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
            "name": "isTreeHeader1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              },
              "range": [
                77,
                82
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  79,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              64,
              82
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            64,
            82
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        52,
        83
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 5
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "range": [
                      117,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
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
                    "raw": "\"block\"",
                    "value": "block",
                    "range": [
                      126,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    117,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "range": [
                        143,
                        156
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
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "range": [
                              168,
                              175
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 10
                              },
                              "start": {
                                "column": 6,
                                "line": 10
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"flex\"",
                            "value": "flex",
                            "range": [
                              177,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 10
                              },
                              "start": {
                                "column": 15,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            168,
                            183
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 10
                            },
                            "start": {
                              "column": 6,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        160,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      143,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    139,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                111,
                195
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "range": [
              104,
              196
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          100,
          198
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          93,
          97
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [],
      "range": [
        84,
        198
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 14,
                  "line": 15
                }
              },
              "range": [
                214,
                223
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  216,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              212,
              223
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            212,
            223
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        200,
        224
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "y2",
            "optional": false,
            "range": [
              231,
              233
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
          "init": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "range": [
                236,
                238
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                242,
                243
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            },
            "range": [
              236,
              243
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          },
          "range": [
            231,
            243
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        225,
        244
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "isTreeHeader2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 25,
                  "line": 19
                }
              },
              "range": [
                281,
                290
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  283,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 27,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              268,
              290
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            268,
            290
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        256,
        291
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "range": [
                      325,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"block\"",
                    "value": "block",
                    "range": [
                      334,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    325,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "range": [
                        351,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
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
                            "name": "display",
                            "optional": false,
                            "range": [
                              376,
                              383
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 24
                              },
                              "start": {
                                "column": 6,
                                "line": 24
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"flex\"",
                            "value": "flex",
                            "range": [
                              385,
                              391
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 24
                              },
                              "start": {
                                "column": 15,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            376,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 24
                            },
                            "start": {
                              "column": 6,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        368,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 25
                        },
                        "start": {
                          "column": 25,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      351,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    347,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
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
                319,
                403
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "range": [
              312,
              404
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "range": [
          308,
          406
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 16,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          301,
          305
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [],
      "range": [
        292,
        406
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
