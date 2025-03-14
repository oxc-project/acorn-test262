__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    753
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStringOrNumber",
        "optional": false,
        "range": [
          17,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 1
          },
          "start": {
            "column": 36,
            "line": 1
          }
        },
        "range": [
          36,
          53
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                38,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                47,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            38,
            53
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 1
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
                    82,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      86,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    86,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
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
                  105
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              76,
              106
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
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
                          154,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              164,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 6
                              },
                              "start": {
                                "column": 24,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "range": [
                              166,
                              172
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 26,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            164,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          158,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        154,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    148,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
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
                138,
                179
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 5
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    122,
                    123
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
                "operator": "typeof",
                "prefix": true,
                "range": [
                  115,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                115,
                136
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              111,
              179
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
          70,
          181
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 14,
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
        "name": "f1",
        "optional": false,
        "range": [
          65,
          67
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        56,
        181
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    209,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      213,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    213,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "range": [
                  209,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              203,
              233
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    275,
                    282
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
                }
              ],
              "range": [
                265,
                288
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 31,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    249,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  242,
                  250
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
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  255,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 21,
                    "line": 12
                  }
                }
              },
              "range": [
                242,
                263
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              238,
              288
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
                    299,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        309,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 20,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        311,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 15
                        },
                        "start": {
                          "column": 22,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      309,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 20,
                        "line": 15
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    303,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                },
                "range": [
                  299,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 28,
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
              293,
              318
            ],
            "loc": {
              "end": {
                "column": 29,
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
          197,
          320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 14,
            "line": 10
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
          192,
          194
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        183,
        320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 10
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
                    348,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      352,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    352,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "range": [
                  348,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              342,
              372
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
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
                          420,
                          421
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
                      "init": {
                        "type": "FunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    444,
                                    445
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 21
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    446,
                                    452
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  444,
                                  452
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                437,
                                453
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 21
                                },
                                "start": {
                                  "column": 31,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "range": [
                            435,
                            455
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 21
                            },
                            "start": {
                              "column": 29,
                              "line": 21
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          424,
                          455
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 21
                          },
                          "start": {
                            "column": 18,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        420,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    414,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
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
                404,
                462
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 31,
                  "line": 20
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    388,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  381,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  394,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 20
                  },
                  "start": {
                    "column": 21,
                    "line": 20
                  }
                }
              },
              "range": [
                381,
                402
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "range": [
              377,
              462
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
          336,
          464
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 14,
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
          331,
          333
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
      "params": [],
      "range": [
        322,
        464
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
                    492,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      496,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 26
                      },
                      "start": {
                        "column": 14,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    496,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 26
                    },
                    "start": {
                      "column": 14,
                      "line": 26
                    }
                  }
                },
                "range": [
                  492,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              486,
              516
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    558,
                    565
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
              "range": [
                548,
                571
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 31,
                  "line": 27
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    532,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 27
                    },
                    "start": {
                      "column": 15,
                      "line": 27
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  525,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  538,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 21,
                    "line": 27
                  }
                }
              },
              "range": [
                525,
                546
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "range": [
              521,
              571
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    582,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 30
                    },
                    "start": {
                      "column": 10,
                      "line": 30
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              606,
                              607
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 30
                              },
                              "start": {
                                "column": 34,
                                "line": 30
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "range": [
                              608,
                              614
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 30
                              },
                              "start": {
                                "column": 36,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            606,
                            614
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 30
                            },
                            "start": {
                              "column": 34,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          599,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 30
                          },
                          "start": {
                            "column": 27,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      597,
                      617
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    586,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 30
                    },
                    "start": {
                      "column": 14,
                      "line": 30
                    }
                  }
                },
                "range": [
                  582,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              576,
              618
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          480,
          620
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 14,
            "line": 25
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
          475,
          477
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [],
      "range": [
        466,
        620
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 25
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
                    648,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      652,
                      669
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 34
                      },
                      "start": {
                        "column": 14,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    652,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 34
                    },
                    "start": {
                      "column": 14,
                      "line": 34
                    }
                  }
                },
                "range": [
                  648,
                  671
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              642,
              672
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
                          720,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 36
                          },
                          "start": {
                            "column": 14,
                            "line": 36
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                736,
                                737
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 36
                                },
                                "start": {
                                  "column": 30,
                                  "line": 36
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "range": [
                                738,
                                744
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 36
                                },
                                "start": {
                                  "column": 32,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              736,
                              744
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 36
                              },
                              "start": {
                                "column": 30,
                                "line": 36
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            730,
                            744
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 36
                            },
                            "start": {
                              "column": 24,
                              "line": 36
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          724,
                          744
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 36
                          },
                          "start": {
                            "column": 18,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        720,
                        744
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 36
                        },
                        "start": {
                          "column": 14,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    714,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                704,
                751
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 31,
                  "line": 35
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    688,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 35
                    },
                    "start": {
                      "column": 15,
                      "line": 35
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  681,
                  689
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  694,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 35
                  },
                  "start": {
                    "column": 21,
                    "line": 35
                  }
                }
              },
              "range": [
                681,
                702
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "range": [
              677,
              751
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          636,
          753
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 14,
            "line": 33
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
          631,
          633
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [],
      "range": [
        622,
        753
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 33
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
      "line": 1
    }
  },
  "hashbang": null
}
```
