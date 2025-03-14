__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    771
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    },
                    "range": [
                      48,
                      75
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            50,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 11,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            60,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 4
                            },
                            "start": {
                              "column": 21,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            69,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 30,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        50,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    47,
                    75
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
                "init": null,
                "range": [
                  47,
                  75
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              43,
              76
            ],
            "loc": {
              "end": {
                "column": 37,
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
                  "type": "ForStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ForStatement",
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            235,
                            237
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
                        "init": {
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "range": [
                                  216,
                                  217
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 8
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  220,
                                  221
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                216,
                                221
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 8
                                },
                                "start": {
                                  "column": 21,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            212,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "range": [
                              223,
                              224
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 8
                              },
                              "start": {
                                "column": 28,
                                "line": 8
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              227,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 8
                              },
                              "start": {
                                "column": 32,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            223,
                            228
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 8
                            },
                            "start": {
                              "column": 28,
                              "line": 8
                            }
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "range": [
                              230,
                              231
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 8
                              },
                              "start": {
                                "column": 35,
                                "line": 8
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            230,
                            233
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 35,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          207,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
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
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ForStatement",
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "range": [
                                          390,
                                          391
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 12
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
                                          392,
                                          398
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        390,
                                        398
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      390,
                                      399
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 12
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  368,
                                  442
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 44,
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
                                      "name": "j",
                                      "optional": false,
                                      "range": [
                                        349,
                                        350
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "raw": "0",
                                      "value": 0,
                                      "range": [
                                        353,
                                        354
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      349,
                                      354
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 11
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var",
                                "range": [
                                  345,
                                  354
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 21,
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
                                  "name": "j",
                                  "optional": false,
                                  "range": [
                                    356,
                                    357
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 11
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    360,
                                    361
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  356,
                                  361
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 11
                                  }
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false,
                                  "range": [
                                    363,
                                    364
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 11
                                    }
                                  }
                                },
                                "operator": "++",
                                "prefix": false,
                                "range": [
                                  363,
                                  366
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                340,
                                442
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 13
                                },
                                "start": {
                                  "column": 16,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "range": [
                            277,
                            456
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 14
                            },
                            "start": {
                              "column": 39,
                              "line": 9
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                261,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 9
                                },
                                "start": {
                                  "column": 23,
                                  "line": 9
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              254,
                              262
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 9
                              },
                              "start": {
                                "column": 16,
                                "line": 9
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'string'",
                            "value": "string",
                            "range": [
                              267,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 9
                              },
                              "start": {
                                "column": 29,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            254,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          250,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      193,
                      466
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 15
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
                          "name": "i",
                          "optional": false,
                          "range": [
                            174,
                            175
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
                          "raw": "0",
                          "value": 0,
                          "range": [
                            178,
                            179
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
                          174,
                          179
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
                    "kind": "var",
                    "range": [
                      170,
                      179
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
                      "name": "i",
                      "optional": false,
                      "range": [
                        181,
                        182
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
                      "raw": "1",
                      "value": 1,
                      "range": [
                        185,
                        186
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
                      181,
                      186
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
                      "name": "i",
                      "optional": false,
                      "range": [
                        188,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 7
                        },
                        "start": {
                          "column": 31,
                          "line": 7
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      188,
                      191
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
                    165,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                109,
                472
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 5
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    92,
                    93
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
                  85,
                  93
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
                "raw": "'boolean'",
                "value": "boolean",
                "range": [
                  98,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                85,
                107
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              81,
              472
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          37,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
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
          32,
          34
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
        23,
        474
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    },
                    "range": [
                      501,
                      518
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            503,
                            509
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 20
                            },
                            "start": {
                              "column": 11,
                              "line": 20
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            512,
                            518
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 20
                            },
                            "start": {
                              "column": 20,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        503,
                        518
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    518
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
                },
                "init": null,
                "range": [
                  500,
                  518
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
            "declare": false,
            "kind": "var",
            "range": [
              496,
              519
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                  "type": "WhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            595,
                            597
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 23
                            },
                            "start": {
                              "column": 22,
                              "line": 23
                            }
                          }
                        },
                        "test": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            592,
                            593
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 23
                            },
                            "start": {
                              "column": 19,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          585,
                          597
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
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
                              "type": "WhileStatement",
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "range": [
                                          687,
                                          688
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 26
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
                                          689,
                                          695
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "range": [
                                        687,
                                        695
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "range": [
                                      687,
                                      696
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 26
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  665,
                                  739
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 25
                                  }
                                }
                              },
                              "test": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  662,
                                  663
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                655,
                                739
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 27
                                },
                                "start": {
                                  "column": 16,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            637,
                            753
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 28
                            },
                            "start": {
                              "column": 39,
                              "line": 24
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                621,
                                622
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 24
                                },
                                "start": {
                                  "column": 23,
                                  "line": 24
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              614,
                              622
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 24
                              },
                              "start": {
                                "column": 16,
                                "line": 24
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'string'",
                            "value": "string",
                            "range": [
                              627,
                              635
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 24
                              },
                              "start": {
                                "column": 29,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            614,
                            635
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 24
                            },
                            "start": {
                              "column": 16,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          610,
                          753
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      571,
                      763
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      568,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    561,
                    763
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                551,
                769
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 31,
                  "line": 21
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    535,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  528,
                  536
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
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  541,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
                  }
                }
              },
              "range": [
                528,
                549
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              524,
              769
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          490,
          771
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 14,
            "line": 19
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
          485,
          487
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [],
      "range": [
        476,
        771
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
