__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    8143
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
            "name": "numsOrNull",
            "optional": false,
            "range": [
              63,
              73
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  77,
                  78
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
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  86,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  89,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              76,
              94
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          "range": [
            63,
            94
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        57,
        95
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "filteredNumsTruthy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              },
              "range": [
                120,
                130
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    122,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                },
                "range": [
                  122,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              102,
              130
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        158,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 4
                        },
                        "start": {
                          "column": 62,
                          "line": 4
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      157,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 4
                      },
                      "start": {
                        "column": 61,
                        "line": 4
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    156,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 4
                    },
                    "start": {
                      "column": 60,
                      "line": 4
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      151,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 4
                      },
                      "start": {
                        "column": 55,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 55,
                    "line": 4
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
                "name": "numsOrNull",
                "optional": false,
                "range": [
                  133,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 4
                  },
                  "start": {
                    "column": 37,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  144,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 4
                  },
                  "start": {
                    "column": 48,
                    "line": 4
                  }
                }
              },
              "range": [
                133,
                150
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 37,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              133,
              160
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 4
              },
              "start": {
                "column": 37,
                "line": 4
              }
            }
          },
          "range": [
            102,
            160
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        96,
        161
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "filteredNumsNonNullish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              },
              "range": [
                207,
                217
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    209,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
                    }
                  }
                },
                "range": [
                  209,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              185,
              217
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      243,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 5
                      },
                      "start": {
                        "column": 64,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      249,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 5
                      },
                      "start": {
                        "column": 70,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    243,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 5
                    },
                    "start": {
                      "column": 64,
                      "line": 5
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      238,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 5
                      },
                      "start": {
                        "column": 59,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  238,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 5
                  },
                  "start": {
                    "column": 59,
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
                "name": "numsOrNull",
                "optional": false,
                "range": [
                  220,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 41,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  231,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
                    "line": 5
                  }
                }
              },
              "range": [
                220,
                237
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 5
                },
                "start": {
                  "column": 41,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              220,
              254
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 5
              },
              "start": {
                "column": 41,
                "line": 5
              }
            }
          },
          "range": [
            185,
            254
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        179,
        255
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "evenSquaresInline",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              },
              "range": [
                294,
                304
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    296,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 25,
                      "line": 7
                    }
                  }
                },
                "range": [
                  296,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              277,
              304
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        410,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 10
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      409,
                      411
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    408,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      403,
                      404
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
                  }
                ],
                "range": [
                  403,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 16,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          381,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 9
                          },
                          "start": {
                            "column": 40,
                            "line": 9
                          }
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            373,
                            374
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 9
                            },
                            "start": {
                              "column": 32,
                              "line": 9
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            377,
                            378
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 9
                            },
                            "start": {
                              "column": 36,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          373,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 9
                          },
                          "start": {
                            "column": 32,
                            "line": 9
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              359,
                              360
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
                            "raw": "2",
                            "value": 2,
                            "range": [
                              363,
                              364
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 9
                              },
                              "start": {
                                "column": 22,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            359,
                            364
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
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
                            369,
                            370
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 9
                            },
                            "start": {
                              "column": 28,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          359,
                          370
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
                      "range": [
                        359,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 18,
                          "line": 9
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          354,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      354,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          329,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 8
                          },
                          "start": {
                            "column": 5,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          332,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          335,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "4",
                        "value": 4,
                        "range": [
                          338,
                          339
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      328,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      350,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    328,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  328,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  396,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "range": [
                328,
                402
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              328,
              412
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "range": [
            277,
            412
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        271,
        413
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "isTruthy",
            "optional": false,
            "range": [
              462,
              470
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    497,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  496,
                  498
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
              "operator": "!",
              "prefix": true,
              "range": [
                495,
                498
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 12
                },
                "start": {
                  "column": 39,
                  "line": 12
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 19,
                      "line": 12
                    }
                  },
                  "range": [
                    475,
                    490
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          477,
                          483
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 21,
                            "line": 12
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          486,
                          490
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 12
                          },
                          "start": {
                            "column": 30,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      477,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 21,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  474,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              473,
              498
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 12
              },
              "start": {
                "column": 17,
                "line": 12
              }
            }
          },
          "range": [
            462,
            498
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        456,
        499
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "evenSquares",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              },
              "range": [
                518,
                528
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    520,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 14
                    }
                  }
                },
                "range": [
                  520,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              507,
              528
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isTruthy",
                "optional": false,
                "range": [
                  621,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          601,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 16
                          },
                          "start": {
                            "column": 36,
                            "line": 16
                          }
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            593,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 16
                            },
                            "start": {
                              "column": 28,
                              "line": 16
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            597,
                            598
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 16
                            },
                            "start": {
                              "column": 32,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          593,
                          598
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 16
                          },
                          "start": {
                            "column": 28,
                            "line": 16
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              579,
                              580
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 16
                              },
                              "start": {
                                "column": 14,
                                "line": 16
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              583,
                              584
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 16
                              },
                              "start": {
                                "column": 18,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            579,
                            584
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 14,
                              "line": 16
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            589,
                            590
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          579,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 16
                          },
                          "start": {
                            "column": 14,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        579,
                        605
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          574,
                          575
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      574,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          553,
                          554
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 15
                          },
                          "start": {
                            "column": 5,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          556,
                          557
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          559,
                          560
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
                      {
                        "type": "Literal",
                        "raw": "4",
                        "value": 4,
                        "range": [
                          562,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 15
                          },
                          "start": {
                            "column": 14,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      552,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      570,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 16
                      },
                      "start": {
                        "column": 5,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    552,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "range": [
                  552,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  614,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              },
              "range": [
                552,
                620
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              552,
              630
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "range": [
            507,
            630
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        501,
        631
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "evenSquaresNonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              },
              "range": [
                657,
                667
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    659,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 26,
                      "line": 19
                    }
                  }
                },
                "range": [
                  659,
                  667
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 26,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              639,
              667
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      760,
                      761
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 22
                      },
                      "start": {
                        "column": 17,
                        "line": 22
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      766,
                      770
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 23,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    760,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 22
                    },
                    "start": {
                      "column": 17,
                      "line": 22
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
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
                        "column": 13,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  755,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 22
                  },
                  "start": {
                    "column": 12,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          737,
                          741
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 21
                          },
                          "start": {
                            "column": 36,
                            "line": 21
                          }
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            729,
                            730
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 21
                            },
                            "start": {
                              "column": 28,
                              "line": 21
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            733,
                            734
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 21
                            },
                            "start": {
                              "column": 32,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          729,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 21
                          },
                          "start": {
                            "column": 28,
                            "line": 21
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              715,
                              716
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
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              719,
                              720
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 21
                              },
                              "start": {
                                "column": 18,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            715,
                            720
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 21
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            725,
                            726
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 21
                            },
                            "start": {
                              "column": 24,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          715,
                          726
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        715,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          710,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 21
                          },
                          "start": {
                            "column": 9,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      710,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          689,
                          690
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 20
                          },
                          "start": {
                            "column": 5,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          692,
                          693
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
                      {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          695,
                          696
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
                      {
                        "type": "Literal",
                        "raw": "4",
                        "value": 4,
                        "range": [
                          698,
                          699
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      688,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      706,
                      709
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 21
                      },
                      "start": {
                        "column": 5,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    688,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "range": [
                  688,
                  742
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  748,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 22
                  },
                  "start": {
                    "column": 5,
                    "line": 22
                  }
                }
              },
              "range": [
                688,
                754
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              688,
              771
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "range": [
            639,
            771
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        633,
        772
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 22
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
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  822,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 25
                  },
                  "start": {
                    "column": 9,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  828,
                  832
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 25
                  },
                  "start": {
                    "column": 15,
                    "line": 25
                  }
                }
              },
              "range": [
                822,
                832
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "range": [
              815,
              833
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          }
        ],
        "range": [
          811,
          835
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 37,
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
        "name": "isNonNull",
        "optional": false,
        "range": [
          783,
          792
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 24
              },
              "start": {
                "column": 20,
                "line": 24
              }
            },
            "range": [
              794,
              809
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    796,
                    802
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 22,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    805,
                    809
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                796,
                809
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 24
                },
                "start": {
                  "column": 22,
                  "line": 24
                }
              }
            }
          },
          "range": [
            793,
            809
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 24
            },
            "start": {
              "column": 19,
              "line": 24
            }
          }
        }
      ],
      "range": [
        774,
        835
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ok",
                  "optional": false,
                  "range": [
                    952,
                    954
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      957,
                      958
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 30
                      },
                      "start": {
                        "column": 13,
                        "line": 30
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      963,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 30
                      },
                      "start": {
                        "column": 19,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    957,
                    967
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 30
                    },
                    "start": {
                      "column": 13,
                      "line": 30
                    }
                  }
                },
                "range": [
                  952,
                  967
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              946,
              968
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "range": [
                978,
                980
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "range": [
              971,
              981
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          }
        ],
        "range": [
          942,
          983
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 40,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullVar",
        "optional": false,
        "range": [
          911,
          923
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            },
            "range": [
              925,
              940
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    927,
                    933
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 29
                    },
                    "start": {
                      "column": 25,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    936,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 29
                    },
                    "start": {
                      "column": 34,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                927,
                940
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 29
                },
                "start": {
                  "column": 25,
                  "line": 29
                }
              }
            }
          },
          "range": [
            924,
            940
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 29
            },
            "start": {
              "column": 22,
              "line": 29
            }
          }
        }
      ],
      "range": [
        902,
        983
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 29
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
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1031,
                  1032
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 35
                  },
                  "start": {
                    "column": 9,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  1037,
                  1041
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              },
              "range": [
                1031,
                1041
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 35
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "range": [
              1024,
              1042
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 35
              },
              "start": {
                "column": 2,
                "line": 35
              }
            }
          }
        ],
        "range": [
          1020,
          1044
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 35,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullGeneric",
        "optional": false,
        "range": [
          994,
          1010
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 34
              },
              "start": {
                "column": 30,
                "line": 34
              }
            },
            "range": [
              1015,
              1018
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1017,
                  1018
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 34
                  },
                  "start": {
                    "column": 32,
                    "line": 34
                  }
                }
              },
              "range": [
                1017,
                1018
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 34
                },
                "start": {
                  "column": 32,
                  "line": 34
                }
              }
            }
          },
          "range": [
            1014,
            1018
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 34
            },
            "start": {
              "column": 29,
              "line": 34
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 34
          },
          "start": {
            "column": 25,
            "line": 34
          }
        },
        "range": [
          1010,
          1013
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1011,
                1012
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 34
                },
                "start": {
                  "column": 26,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              1011,
              1012
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 34
              },
              "start": {
                "column": 26,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        985,
        1044
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "myGuard",
            "optional": false,
            "range": [
              1094,
              1101
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1146,
                    1147
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 39
                    },
                    "start": {
                      "column": 58,
                      "line": 39
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  1145,
                  1147
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 39
                  },
                  "start": {
                    "column": 57,
                    "line": 39
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                1144,
                1147
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 39
                },
                "start": {
                  "column": 56,
                  "line": 39
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 39
                    },
                    "start": {
                      "column": 18,
                      "line": 39
                    }
                  },
                  "range": [
                    1106,
                    1126
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1108,
                          1114
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 39
                          },
                          "start": {
                            "column": 20,
                            "line": 39
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1117,
                          1126
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 39
                          },
                          "start": {
                            "column": 29,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      1108,
                      1126
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 39
                      },
                      "start": {
                        "column": 20,
                        "line": 39
                      }
                    }
                  }
                },
                "range": [
                  1105,
                  1126
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 39
                  },
                  "start": {
                    "column": 17,
                    "line": 39
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 39
                },
                "start": {
                  "column": 39,
                  "line": 39
                }
              },
              "range": [
                1127,
                1140
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1129,
                    1130
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 39
                    },
                    "start": {
                      "column": 41,
                      "line": 39
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 39
                    },
                    "start": {
                      "column": 46,
                      "line": 39
                    }
                  },
                  "range": [
                    1134,
                    1140
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1134,
                      1140
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 39
                      },
                      "start": {
                        "column": 46,
                        "line": 39
                      }
                    }
                  }
                },
                "range": [
                  1129,
                  1140
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 39
                  },
                  "start": {
                    "column": 41,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              1104,
              1147
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 39
              },
              "start": {
                "column": 16,
                "line": 39
              }
            }
          },
          "range": [
            1094,
            1147
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1088,
        1148
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "mySecondGuard",
            "optional": false,
            "range": [
              1155,
              1168
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1206,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 40
                    },
                    "start": {
                      "column": 57,
                      "line": 40
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "myGuard",
                "optional": false,
                "range": [
                  1198,
                  1205
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 40
                  },
                  "start": {
                    "column": 49,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                1198,
                1208
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 40
                },
                "start": {
                  "column": 49,
                  "line": 40
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 40
                    },
                    "start": {
                      "column": 24,
                      "line": 40
                    }
                  },
                  "range": [
                    1173,
                    1193
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1175,
                          1181
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 40
                          },
                          "start": {
                            "column": 26,
                            "line": 40
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1184,
                          1193
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 40
                          },
                          "start": {
                            "column": 35,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "range": [
                      1175,
                      1193
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 40
                      },
                      "start": {
                        "column": 26,
                        "line": 40
                      }
                    }
                  }
                },
                "range": [
                  1172,
                  1193
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 40
                  },
                  "start": {
                    "column": 23,
                    "line": 40
                  }
                }
              }
            ],
            "range": [
              1171,
              1208
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 40
              },
              "start": {
                "column": 22,
                "line": 40
              }
            }
          },
          "range": [
            1155,
            1208
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1149,
        1209
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObj",
        "optional": false,
        "range": [
          1414,
          1419
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 45
          },
          "start": {
            "column": 5,
            "line": 45
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                1424,
                1428
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 45
                },
                "start": {
                  "column": 15,
                  "line": 45
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 45
                },
                "start": {
                  "column": 20,
                  "line": 45
                }
              },
              "range": [
                1429,
                1437
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1431,
                  1437
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 45
                  },
                  "start": {
                    "column": 22,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              1424,
              1437
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 45
              },
              "start": {
                "column": 15,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1422,
          1439
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 45
          },
          "start": {
            "column": 13,
            "line": 45
          }
        }
      },
      "range": [
        1409,
        1440
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyArray",
        "optional": false,
        "range": [
          1446,
          1453
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 46
          }
        }
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "range": [
                  1458,
                  1462
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                },
                "range": [
                  1463,
                  1472
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyObj",
                      "optional": false,
                      "range": [
                        1465,
                        1470
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 46
                        },
                        "start": {
                          "column": 24,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1465,
                      1470
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 46
                      },
                      "start": {
                        "column": 24,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1465,
                    1472
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 46
                    },
                    "start": {
                      "column": 24,
                      "line": 46
                    }
                  }
                }
              },
              "range": [
                1458,
                1472
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
                }
              }
            }
          ],
          "range": [
            1456,
            1474
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 46
            },
            "start": {
              "column": 15,
              "line": 46
            }
          }
        },
        "range": [
          1456,
          1476
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 46
          },
          "start": {
            "column": 15,
            "line": 46
          }
        }
      },
      "range": [
        1441,
        1477
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 47
                },
                "start": {
                  "column": 13,
                  "line": 47
                }
              },
              "range": [
                1491,
                1500
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyArray",
                  "optional": false,
                  "range": [
                    1493,
                    1500
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 47
                    },
                    "start": {
                      "column": 15,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1493,
                  1500
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 47
                  },
                  "start": {
                    "column": 15,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1484,
              1500
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              1503,
              1505
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 47
              },
              "start": {
                "column": 25,
                "line": 47
              }
            }
          },
          "range": [
            1484,
            1505
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1478,
        1506
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "result",
            "optional": false,
            "range": [
              1514,
              1520
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                1696,
                                1699
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 54
                                },
                                "start": {
                                  "column": 27,
                                  "line": 54
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "range": [
                                1700,
                                1704
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 54
                                },
                                "start": {
                                  "column": 31,
                                  "line": 54
                                }
                              }
                            },
                            "range": [
                              1696,
                              1704
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 54
                              },
                              "start": {
                                "column": 27,
                                "line": 54
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
                            "name": "JSON",
                            "optional": false,
                            "range": [
                              1685,
                              1689
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 54
                              },
                              "start": {
                                "column": 16,
                                "line": 54
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "range": [
                              1690,
                              1695
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 54
                              },
                              "start": {
                                "column": 21,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            1685,
                            1695
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 54
                            },
                            "start": {
                              "column": 16,
                              "line": 54
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1685,
                          1705
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 54
                          },
                          "start": {
                            "column": 16,
                            "line": 54
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            1678,
                            1681
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 54
                            },
                            "start": {
                              "column": 9,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "range": [
                        1678,
                        1705
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 54
                        },
                        "start": {
                          "column": 9,
                          "line": 54
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                1652,
                                1655
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 53
                                },
                                "start": {
                                  "column": 21,
                                  "line": 53
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "range": [
                                  1659,
                                  1662
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 53
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "range": [
                                  1663,
                                  1667
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 53
                                  }
                                }
                              },
                              "range": [
                                1659,
                                1667
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 53
                                },
                                "start": {
                                  "column": 28,
                                  "line": 53
                                }
                              }
                            },
                            "range": [
                              1652,
                              1667
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 53
                              },
                              "start": {
                                "column": 21,
                                "line": 53
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                1644,
                                1647
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 53
                                },
                                "start": {
                                  "column": 13,
                                  "line": 53
                                }
                              }
                            }
                          ],
                          "range": [
                            1643,
                            1667
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 53
                            },
                            "start": {
                              "column": 12,
                              "line": 53
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
                          "name": "arr",
                          "optional": false,
                          "range": [
                            1611,
                            1614
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 52
                            },
                            "start": {
                              "column": 16,
                              "line": 52
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "range": [
                            1636,
                            1642
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 53
                            },
                            "start": {
                              "column": 5,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          1611,
                          1642
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 53
                          },
                          "start": {
                            "column": 16,
                            "line": 52
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1611,
                        1668
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 53
                        },
                        "start": {
                          "column": 16,
                          "line": 52
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        1674,
                        1677
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 54
                        },
                        "start": {
                          "column": 5,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1611,
                      1677
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 54
                      },
                      "start": {
                        "column": 16,
                        "line": 52
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1611,
                    1706
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 54
                    },
                    "start": {
                      "column": 16,
                      "line": 52
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "range": [
                      1603,
                      1606
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  }
                ],
                "range": [
                  1602,
                  1706
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 54
                  },
                  "start": {
                    "column": 7,
                    "line": 52
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "range": [
                          1576,
                          1579
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 51
                          },
                          "start": {
                            "column": 19,
                            "line": 51
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "range": [
                            1583,
                            1586
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 51
                            },
                            "start": {
                              "column": 26,
                              "line": 51
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
                            1587,
                            1593
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 51
                            },
                            "start": {
                              "column": 30,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          1583,
                          1593
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 51
                          },
                          "start": {
                            "column": 26,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1576,
                        1593
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 51
                        },
                        "start": {
                          "column": 19,
                          "line": 51
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "range": [
                          1568,
                          1571
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 51
                          },
                          "start": {
                            "column": 11,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      1567,
                      1593
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 51
                      },
                      "start": {
                        "column": 10,
                        "line": 51
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "range": [
                              1547,
                              1550
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 50
                              },
                              "start": {
                                "column": 16,
                                "line": 50
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "range": [
                              1551,
                              1555
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 50
                              },
                              "start": {
                                "column": 20,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1547,
                            1555
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 50
                            },
                            "start": {
                              "column": 16,
                              "line": 50
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "range": [
                              1539,
                              1542
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 50
                              },
                              "start": {
                                "column": 8,
                                "line": 50
                              }
                            }
                          }
                        ],
                        "range": [
                          1538,
                          1555
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 50
                          },
                          "start": {
                            "column": 7,
                            "line": 50
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
                        "name": "myArray",
                        "optional": false,
                        "range": [
                          1523,
                          1530
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 49
                          },
                          "start": {
                            "column": 15,
                            "line": 49
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "range": [
                          1534,
                          1537
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 50
                          },
                          "start": {
                            "column": 3,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1523,
                        1537
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 50
                        },
                        "start": {
                          "column": 15,
                          "line": 49
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1523,
                      1556
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 50
                      },
                      "start": {
                        "column": 15,
                        "line": 49
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "range": [
                      1560,
                      1566
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 51
                      },
                      "start": {
                        "column": 3,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1523,
                    1566
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 51
                    },
                    "start": {
                      "column": 15,
                      "line": 49
                    }
                  }
                },
                "optional": false,
                "range": [
                  1523,
                  1594
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 51
                  },
                  "start": {
                    "column": 15,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  1598,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 52
                  },
                  "start": {
                    "column": 3,
                    "line": 52
                  }
                }
              },
              "range": [
                1523,
                1601
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 49
                }
              }
            },
            "optional": false,
            "range": [
              1523,
              1727
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 49
              }
            }
          },
          "range": [
            1514,
            1727
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1508,
        1728
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "result2",
            "optional": false,
            "range": [
              1736,
              1743
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                2050,
                                2053
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 65
                                },
                                "start": {
                                  "column": 27,
                                  "line": 65
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "range": [
                                2054,
                                2058
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 65
                                },
                                "start": {
                                  "column": 31,
                                  "line": 65
                                }
                              }
                            },
                            "range": [
                              2050,
                              2058
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 65
                              },
                              "start": {
                                "column": 27,
                                "line": 65
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
                            "name": "JSON",
                            "optional": false,
                            "range": [
                              2039,
                              2043
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 65
                              },
                              "start": {
                                "column": 16,
                                "line": 65
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "range": [
                              2044,
                              2049
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 65
                              },
                              "start": {
                                "column": 21,
                                "line": 65
                              }
                            }
                          },
                          "range": [
                            2039,
                            2049
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 65
                            },
                            "start": {
                              "column": 16,
                              "line": 65
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2039,
                          2059
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 65
                          },
                          "start": {
                            "column": 16,
                            "line": 65
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            2032,
                            2035
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 65
                            },
                            "start": {
                              "column": 9,
                              "line": 65
                            }
                          }
                        }
                      ],
                      "range": [
                        2032,
                        2059
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 65
                        },
                        "start": {
                          "column": 9,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "range": [
                                    2013,
                                    2016
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 64
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "range": [
                                    2017,
                                    2021
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 64
                                    }
                                  }
                                },
                                "range": [
                                  2013,
                                  2021
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 64
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                2012,
                                2021
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 64
                                },
                                "start": {
                                  "column": 20,
                                  "line": 64
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              2011,
                              2021
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 64
                              },
                              "start": {
                                "column": 19,
                                "line": 64
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                2004,
                                2007
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 64
                                },
                                "start": {
                                  "column": 12,
                                  "line": 64
                                }
                              }
                            }
                          ],
                          "range": [
                            2004,
                            2021
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 64
                            },
                            "start": {
                              "column": 12,
                              "line": 64
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "range": [
                                  1890,
                                  1893
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 62
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "range": [
                                    1882,
                                    1885
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 62
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1881,
                                1893
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 62
                                },
                                "start": {
                                  "column": 12,
                                  "line": 62
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
                              "name": "arr",
                              "optional": false,
                              "range": [
                                1851,
                                1854
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 61
                                },
                                "start": {
                                  "column": 16,
                                  "line": 61
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "range": [
                                1874,
                                1880
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 62
                                },
                                "start": {
                                  "column": 5,
                                  "line": 62
                                }
                              }
                            },
                            "range": [
                              1851,
                              1880
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 62
                              },
                              "start": {
                                "column": 16,
                                "line": 61
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1851,
                            1894
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 62
                            },
                            "start": {
                              "column": 16,
                              "line": 61
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "range": [
                            1997,
                            2003
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 64
                            },
                            "start": {
                              "column": 5,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          1851,
                          2003
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 64
                          },
                          "start": {
                            "column": 16,
                            "line": 61
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1851,
                        2022
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 64
                        },
                        "start": {
                          "column": 16,
                          "line": 61
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        2028,
                        2031
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 65
                        },
                        "start": {
                          "column": 5,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1851,
                      2031
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 65
                      },
                      "start": {
                        "column": 16,
                        "line": 61
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1851,
                    2060
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 65
                    },
                    "start": {
                      "column": 16,
                      "line": 61
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "range": [
                      1843,
                      1846
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  }
                ],
                "range": [
                  1842,
                  2060
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 65
                  },
                  "start": {
                    "column": 7,
                    "line": 61
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "range": [
                          1823,
                          1826
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 60
                          },
                          "start": {
                            "column": 17,
                            "line": 60
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
                          1827,
                          1833
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 60
                          },
                          "start": {
                            "column": 21,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1823,
                        1833
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 60
                        },
                        "start": {
                          "column": 17,
                          "line": 60
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "range": [
                          1816,
                          1819
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 60
                          },
                          "start": {
                            "column": 10,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "range": [
                      1816,
                      1833
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 60
                      },
                      "start": {
                        "column": 10,
                        "line": 60
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "range": [
                                1801,
                                1804
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 59
                                },
                                "start": {
                                  "column": 21,
                                  "line": 59
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              1800,
                              1804
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 59
                              },
                              "start": {
                                "column": 20,
                                "line": 59
                              }
                            }
                          },
                          "operator": "!",
                          "prefix": true,
                          "range": [
                            1799,
                            1804
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 59
                            },
                            "start": {
                              "column": 19,
                              "line": 59
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "range": [
                              1791,
                              1794
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 59
                              },
                              "start": {
                                "column": 11,
                                "line": 59
                              }
                            }
                          }
                        ],
                        "range": [
                          1790,
                          1804
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 59
                          },
                          "start": {
                            "column": 10,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "range": [
                                  1770,
                                  1773
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 58
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "range": [
                                  1774,
                                  1778
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 58
                                  }
                                }
                              },
                              "range": [
                                1770,
                                1778
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 58
                                },
                                "start": {
                                  "column": 16,
                                  "line": 58
                                }
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "range": [
                                  1762,
                                  1765
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 58
                                  }
                                }
                              }
                            ],
                            "range": [
                              1761,
                              1778
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 58
                              },
                              "start": {
                                "column": 7,
                                "line": 58
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
                            "name": "myArray",
                            "optional": false,
                            "range": [
                              1746,
                              1753
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 57
                              },
                              "start": {
                                "column": 16,
                                "line": 57
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "range": [
                              1757,
                              1760
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 58
                              },
                              "start": {
                                "column": 3,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            1746,
                            1760
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 58
                            },
                            "start": {
                              "column": 16,
                              "line": 57
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1746,
                          1779
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 58
                          },
                          "start": {
                            "column": 16,
                            "line": 57
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filter",
                        "optional": false,
                        "range": [
                          1783,
                          1789
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 59
                          },
                          "start": {
                            "column": 3,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1746,
                        1789
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 59
                        },
                        "start": {
                          "column": 16,
                          "line": 57
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1746,
                      1805
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 59
                      },
                      "start": {
                        "column": 16,
                        "line": 57
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "range": [
                      1809,
                      1815
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 3,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1746,
                    1815
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 60
                    },
                    "start": {
                      "column": 16,
                      "line": 57
                    }
                  }
                },
                "optional": false,
                "range": [
                  1746,
                  1834
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 60
                  },
                  "start": {
                    "column": 16,
                    "line": 57
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  1838,
                  1841
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 61
                  },
                  "start": {
                    "column": 3,
                    "line": 61
                  }
                }
              },
              "range": [
                1746,
                1841
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 61
                },
                "start": {
                  "column": 16,
                  "line": 57
                }
              }
            },
            "optional": false,
            "range": [
              1746,
              2064
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 66
              },
              "start": {
                "column": 16,
                "line": 57
              }
            }
          },
          "range": [
            1736,
            2064
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 66
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1730,
        2065
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          2152,
          2155
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 69
          },
          "start": {
            "column": 5,
            "line": 69
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                2162,
                2165
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 2,
                  "line": 70
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 70
                },
                "start": {
                  "column": 5,
                  "line": 70
                }
              },
              "range": [
                2165,
                2173
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2167,
                  2173
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 70
                  },
                  "start": {
                    "column": 7,
                    "line": 70
                  }
                }
              }
            },
            "range": [
              2162,
              2174
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 70
              },
              "start": {
                "column": 2,
                "line": 70
              }
            }
          }
        ],
        "range": [
          2158,
          2176
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 11,
            "line": 69
          }
        }
      },
      "range": [
        2147,
        2176
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          2182,
          2185
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 72
          },
          "start": {
            "column": 5,
            "line": 72
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                2188,
                2191
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 72
                },
                "start": {
                  "column": 11,
                  "line": 72
                }
              }
            },
            "range": [
              2188,
              2191
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 72
              },
              "start": {
                "column": 11,
                "line": 72
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    2198,
                    2201
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 73
                    },
                    "start": {
                      "column": 2,
                      "line": 73
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 73
                    },
                    "start": {
                      "column": 5,
                      "line": 73
                    }
                  },
                  "range": [
                    2201,
                    2209
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2203,
                      2209
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 73
                      },
                      "start": {
                        "column": 7,
                        "line": 73
                      }
                    }
                  }
                },
                "range": [
                  2198,
                  2210
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 73
                  },
                  "start": {
                    "column": 2,
                    "line": 73
                  }
                }
              }
            ],
            "range": [
              2194,
              2212
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 74
              },
              "start": {
                "column": 17,
                "line": 72
              }
            }
          }
        ],
        "range": [
          2188,
          2212
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 11,
            "line": 72
          }
        }
      },
      "range": [
        2177,
        2212
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 72
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 76
                },
                "start": {
                  "column": 10,
                  "line": 76
                }
              },
              "range": [
                2224,
                2239
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          2227,
                          2230
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 76
                          },
                          "start": {
                            "column": 13,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        2227,
                        2230
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 76
                        },
                        "start": {
                          "column": 13,
                          "line": 76
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "range": [
                          2233,
                          2236
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 76
                          },
                          "start": {
                            "column": 19,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        2233,
                        2236
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 76
                        },
                        "start": {
                          "column": 19,
                          "line": 76
                        }
                      }
                    }
                  ],
                  "range": [
                    2227,
                    2236
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
                "range": [
                  2226,
                  2239
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 76
                  },
                  "start": {
                    "column": 12,
                    "line": 76
                  }
                }
              }
            },
            "range": [
              2220,
              2239
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 76
              },
              "start": {
                "column": 6,
                "line": 76
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              2242,
              2244
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 76
              },
              "start": {
                "column": 28,
                "line": 76
              }
            }
          },
          "range": [
            2220,
            2244
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 76
            },
            "start": {
              "column": 6,
              "line": 76
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2214,
        2245
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
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
            "name": "resultBars",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 77
                },
                "start": {
                  "column": 16,
                  "line": 77
                }
              },
              "range": [
                2262,
                2269
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      2264,
                      2267
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 77
                      },
                      "start": {
                        "column": 18,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2264,
                    2267
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 77
                    },
                    "start": {
                      "column": 18,
                      "line": 77
                    }
                  }
                },
                "range": [
                  2264,
                  2269
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 77
                  },
                  "start": {
                    "column": 18,
                    "line": 77
                  }
                }
              }
            },
            "range": [
              2252,
              2269
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 77
              },
              "start": {
                "column": 6,
                "line": 77
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "raw": "'bar'",
                    "value": "bar",
                    "range": [
                      2295,
                      2300
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 77
                      },
                      "start": {
                        "column": 49,
                        "line": 77
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      2304,
                      2309
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 77
                      },
                      "start": {
                        "column": 58,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2295,
                    2309
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 77
                    },
                    "start": {
                      "column": 49,
                      "line": 77
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      2285,
                      2290
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 77
                      },
                      "start": {
                        "column": 39,
                        "line": 77
                      }
                    }
                  }
                ],
                "range": [
                  2284,
                  2309
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 77
                  },
                  "start": {
                    "column": 38,
                    "line": 77
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
                "name": "list",
                "optional": false,
                "range": [
                  2272,
                  2276
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 77
                  },
                  "start": {
                    "column": 26,
                    "line": 77
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  2277,
                  2283
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 77
                  },
                  "start": {
                    "column": 31,
                    "line": 77
                  }
                }
              },
              "range": [
                2272,
                2283
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 77
                },
                "start": {
                  "column": 26,
                  "line": 77
                }
              }
            },
            "optional": false,
            "range": [
              2272,
              2310
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 77
              },
              "start": {
                "column": 26,
                "line": 77
              }
            }
          },
          "range": [
            2252,
            2310
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 77
            },
            "start": {
              "column": 6,
              "line": 77
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2246,
        2311
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "'bar'",
                "value": "bar",
                "range": [
                  2382,
                  2387
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 80
                  },
                  "start": {
                    "column": 10,
                    "line": 80
                  }
                }
              },
              "right": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2391,
                    2392
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 80
                    },
                    "start": {
                      "column": 19,
                      "line": 80
                    }
                  }
                },
                "range": [
                  2391,
                  2393
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 80
                  },
                  "start": {
                    "column": 19,
                    "line": 80
                  }
                }
              },
              "range": [
                2382,
                2393
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 80
                },
                "start": {
                  "column": 10,
                  "line": 80
                }
              }
            },
            "range": [
              2374,
              2395
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 80
              },
              "start": {
                "column": 2,
                "line": 80
              }
            }
          }
        ],
        "range": [
          2370,
          2397
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 43,
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
        "name": "isBarNonNull",
        "optional": false,
        "range": [
          2336,
          2348
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 79
              },
              "start": {
                "column": 23,
                "line": 79
              }
            },
            "range": [
              2350,
              2368
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      2352,
                      2355
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 79
                      },
                      "start": {
                        "column": 25,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2352,
                    2355
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 79
                    },
                    "start": {
                      "column": 25,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      2358,
                      2361
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 79
                      },
                      "start": {
                        "column": 31,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2358,
                    2361
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 79
                    },
                    "start": {
                      "column": 31,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    2364,
                    2368
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 79
                    },
                    "start": {
                      "column": 37,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                2352,
                2368
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 79
                },
                "start": {
                  "column": 25,
                  "line": 79
                }
              }
            }
          },
          "range": [
            2349,
            2368
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 79
            },
            "start": {
              "column": 22,
              "line": 79
            }
          }
        }
      ],
      "range": [
        2327,
        2397
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 79
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
            "name": "fooOrBar",
            "optional": false,
            "range": [
              2404,
              2412
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 82
              },
              "start": {
                "column": 6,
                "line": 82
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "list",
              "optional": false,
              "range": [
                2415,
                2419
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 82
                },
                "start": {
                  "column": 17,
                  "line": 82
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2420,
                2421
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 82
                },
                "start": {
                  "column": 22,
                  "line": 82
                }
              }
            },
            "range": [
              2415,
              2422
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 82
              },
              "start": {
                "column": 17,
                "line": 82
              }
            }
          },
          "range": [
            2404,
            2422
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 82
            },
            "start": {
              "column": 6,
              "line": 82
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2398,
        2423
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 84
                      },
                      "start": {
                        "column": 9,
                        "line": 84
                      }
                    },
                    "range": [
                      2463,
                      2468
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "range": [
                          2465,
                          2468
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 84
                          },
                          "start": {
                            "column": 11,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        2465,
                        2468
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 84
                        },
                        "start": {
                          "column": 11,
                          "line": 84
                        }
                      }
                    }
                  },
                  "range": [
                    2462,
                    2468
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooOrBar",
                  "optional": false,
                  "range": [
                    2471,
                    2479
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 84
                    },
                    "start": {
                      "column": 17,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2462,
                  2479
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2456,
              2480
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 84
              },
              "start": {
                "column": 2,
                "line": 84
              }
            }
          }
        ],
        "range": [
          2452,
          2496
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 28,
            "line": 83
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
            "range": [
              2441,
              2449
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 83
              },
              "start": {
                "column": 17,
                "line": 83
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBarNonNull",
          "optional": false,
          "range": [
            2428,
            2440
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 83
            },
            "start": {
              "column": 4,
              "line": 83
            }
          }
        },
        "optional": false,
        "range": [
          2428,
          2450
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 83
          },
          "start": {
            "column": 4,
            "line": 83
          }
        }
      },
      "range": [
        2424,
        2496
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 83
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
            "name": "a",
            "optional": false,
            "range": [
              2620,
              2621
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 89
              },
              "start": {
                "column": 6,
                "line": 89
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
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
                        2664,
                        2665
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 89
                        },
                        "start": {
                          "column": 50,
                          "line": 89
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      2657,
                      2665
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 89
                      },
                      "start": {
                        "column": 43,
                        "line": 89
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      2670,
                      2678
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 89
                      },
                      "start": {
                        "column": 56,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2657,
                    2678
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 89
                    },
                    "start": {
                      "column": 43,
                      "line": 89
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2652,
                      2653
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 89
                      },
                      "start": {
                        "column": 38,
                        "line": 89
                      }
                    }
                  }
                ],
                "range": [
                  2652,
                  2678
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 89
                  },
                  "start": {
                    "column": 38,
                    "line": 89
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2625,
                      2626
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 89
                      },
                      "start": {
                        "column": 11,
                        "line": 89
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      2628,
                      2633
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 89
                      },
                      "start": {
                        "column": 14,
                        "line": 89
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      2635,
                      2636
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 89
                      },
                      "start": {
                        "column": 21,
                        "line": 89
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      2638,
                      2643
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 89
                      },
                      "start": {
                        "column": 24,
                        "line": 89
                      }
                    }
                  }
                ],
                "range": [
                  2624,
                  2644
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 89
                  },
                  "start": {
                    "column": 10,
                    "line": 89
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  2645,
                  2651
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 89
                  },
                  "start": {
                    "column": 31,
                    "line": 89
                  }
                }
              },
              "range": [
                2624,
                2651
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 89
                },
                "start": {
                  "column": 10,
                  "line": 89
                }
              }
            },
            "optional": false,
            "range": [
              2624,
              2679
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 89
              },
              "start": {
                "column": 10,
                "line": 89
              }
            }
          },
          "range": [
            2620,
            2679
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 89
            },
            "start": {
              "column": 6,
              "line": 89
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2614,
        2680
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              2688,
              2690
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 90
              },
              "start": {
                "column": 7,
                "line": 90
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
            "name": "a",
            "optional": false,
            "range": [
              2681,
              2682
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 90
              },
              "start": {
                "column": 0,
                "line": 90
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
              2683,
              2687
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 90
              },
              "start": {
                "column": 2,
                "line": 90
              }
            }
          },
          "range": [
            2681,
            2687
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 90
            },
            "start": {
              "column": 0,
              "line": 90
            }
          }
        },
        "optional": false,
        "range": [
          2681,
          2691
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 90
          },
          "start": {
            "column": 0,
            "line": 90
          }
        }
      },
      "range": [
        2681,
        2692
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
                    2830,
                    2831
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 94
                    },
                    "start": {
                      "column": 16,
                      "line": 94
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  2823,
                  2831
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 94
                  },
                  "start": {
                    "column": 9,
                    "line": 94
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  2836,
                  2844
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 94
                  },
                  "start": {
                    "column": 22,
                    "line": 94
                  }
                }
              },
              "range": [
                2823,
                2844
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 94
                },
                "start": {
                  "column": 9,
                  "line": 94
                }
              }
            },
            "range": [
              2816,
              2845
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 94
              },
              "start": {
                "column": 2,
                "line": 94
              }
            }
          }
        ],
        "range": [
          2812,
          2847
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 55,
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
        "name": "backwardsGuard",
        "optional": false,
        "range": [
          2766,
          2780
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 93
              },
              "start": {
                "column": 25,
                "line": 93
              }
            },
            "range": [
              2782,
              2797
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2784,
                    2790
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 93
                    },
                    "start": {
                      "column": 27,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2791,
                    2797
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 93
                    },
                    "start": {
                      "column": 34,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                2784,
                2797
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 93
                },
                "start": {
                  "column": 27,
                  "line": 93
                }
              }
            }
          },
          "range": [
            2781,
            2797
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 93
            },
            "start": {
              "column": 24,
              "line": 93
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 93
          },
          "start": {
            "column": 41,
            "line": 93
          }
        },
        "range": [
          2798,
          2811
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              2800,
              2801
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 93
              },
              "start": {
                "column": 43,
                "line": 93
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 93
              },
              "start": {
                "column": 48,
                "line": 93
              }
            },
            "range": [
              2805,
              2811
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2805,
                2811
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 93
                },
                "start": {
                  "column": 48,
                  "line": 93
                }
              }
            }
          },
          "range": [
            2800,
            2811
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 93
            },
            "start": {
              "column": 43,
              "line": 93
            }
          }
        }
      },
      "range": [
        2757,
        2847
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
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
            "type": "ReturnStatement",
            "argument": {
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
                    2951,
                    2952
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 99
                    },
                    "start": {
                      "column": 16,
                      "line": 99
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  2944,
                  2952
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 99
                  },
                  "start": {
                    "column": 9,
                    "line": 99
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  2957,
                  2965
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 99
                  },
                  "start": {
                    "column": 22,
                    "line": 99
                  }
                }
              },
              "range": [
                2944,
                2965
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 99
                },
                "start": {
                  "column": 9,
                  "line": 99
                }
              }
            },
            "range": [
              2937,
              2966
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 99
              },
              "start": {
                "column": 2,
                "line": 99
              }
            }
          }
        ],
        "range": [
          2933,
          2968
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 100
          },
          "start": {
            "column": 38,
            "line": 98
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString",
        "optional": false,
        "range": [
          2904,
          2912
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 98
          },
          "start": {
            "column": 9,
            "line": 98
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 98
              },
              "start": {
                "column": 19,
                "line": 98
              }
            },
            "range": [
              2914,
              2931
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2916,
                    2922
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 98
                    },
                    "start": {
                      "column": 21,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2925,
                    2931
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 98
                    },
                    "start": {
                      "column": 30,
                      "line": 98
                    }
                  }
                }
              ],
              "range": [
                2916,
                2931
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 98
                },
                "start": {
                  "column": 21,
                  "line": 98
                }
              }
            }
          },
          "range": [
            2913,
            2931
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 98
            },
            "start": {
              "column": 18,
              "line": 98
            }
          }
        }
      ],
      "range": [
        2895,
        2968
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 98
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 102
                },
                "start": {
                  "column": 20,
                  "line": 102
                }
              },
              "range": [
                2990,
                3007
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2992,
                      2998
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 102
                      },
                      "start": {
                        "column": 22,
                        "line": 102
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      3001,
                      3007
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 102
                      },
                      "start": {
                        "column": 31,
                        "line": 102
                      }
                    }
                  }
                ],
                "range": [
                  2992,
                  3007
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 102
                  },
                  "start": {
                    "column": 22,
                    "line": 102
                  }
                }
              }
            },
            "range": [
              2982,
              3007
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 102
              },
              "start": {
                "column": 12,
                "line": 102
              }
            }
          },
          "init": null,
          "range": [
            2982,
            3007
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 102
            },
            "start": {
              "column": 12,
              "line": 102
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2970,
        3008
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 106
                      },
                      "start": {
                        "column": 7,
                        "line": 106
                      }
                    },
                    "range": [
                      3093,
                      3101
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3095,
                        3101
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 106
                        },
                        "start": {
                          "column": 9,
                          "line": 106
                        }
                      }
                    }
                  },
                  "range": [
                    3092,
                    3101
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 106
                    },
                    "start": {
                      "column": 6,
                      "line": 106
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "range": [
                    3104,
                    3112
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 106
                    },
                    "start": {
                      "column": 18,
                      "line": 106
                    }
                  }
                },
                "range": [
                  3092,
                  3112
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 106
                  },
                  "start": {
                    "column": 6,
                    "line": 106
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3088,
              3113
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          }
        ],
        "range": [
          3084,
          3129
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 7,
            "line": 105
          }
        }
      },
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 104
                      },
                      "start": {
                        "column": 7,
                        "line": 104
                      }
                    },
                    "range": [
                      3042,
                      3050
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        3044,
                        3050
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 104
                        },
                        "start": {
                          "column": 9,
                          "line": 104
                        }
                      }
                    }
                  },
                  "range": [
                    3041,
                    3050
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 104
                    },
                    "start": {
                      "column": 6,
                      "line": 104
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "range": [
                    3053,
                    3061
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 104
                    },
                    "start": {
                      "column": 18,
                      "line": 104
                    }
                  }
                },
                "range": [
                  3041,
                  3061
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 104
                  },
                  "start": {
                    "column": 6,
                    "line": 104
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3037,
              3062
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 104
              },
              "start": {
                "column": 2,
                "line": 104
              }
            }
          }
        ],
        "range": [
          3033,
          3078
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 24,
            "line": 103
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "range": [
              3022,
              3030
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 103
              },
              "start": {
                "column": 13,
                "line": 103
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isString",
          "optional": false,
          "range": [
            3013,
            3021
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 103
            },
            "start": {
              "column": 4,
              "line": 103
            }
          }
        },
        "optional": false,
        "range": [
          3013,
          3031
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 103
          },
          "start": {
            "column": 4,
            "line": 103
          }
        }
      },
      "range": [
        3009,
        3129
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 103
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
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
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
                      3192,
                      3193
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 110
                      },
                      "start": {
                        "column": 16,
                        "line": 110
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    3185,
                    3193
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 110
                    },
                    "start": {
                      "column": 9,
                      "line": 110
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    3198,
                    3206
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 110
                    },
                    "start": {
                      "column": 22,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3185,
                  3206
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 110
                  },
                  "start": {
                    "column": 9,
                    "line": 110
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "range": [
                        3210,
                        3214
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 110
                        },
                        "start": {
                          "column": 34,
                          "line": 110
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "range": [
                        3215,
                        3221
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 110
                        },
                        "start": {
                          "column": 39,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      3210,
                      3221
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 110
                      },
                      "start": {
                        "column": 34,
                        "line": 110
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3210,
                    3223
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 110
                    },
                    "start": {
                      "column": 34,
                      "line": 110
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0.5",
                  "value": 0.5,
                  "range": [
                    3226,
                    3229
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 110
                    },
                    "start": {
                      "column": 50,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3210,
                  3229
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 110
                  },
                  "start": {
                    "column": 34,
                    "line": 110
                  }
                }
              },
              "range": [
                3185,
                3229
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 110
                },
                "start": {
                  "column": 9,
                  "line": 110
                }
              }
            },
            "range": [
              3178,
              3230
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 110
              },
              "start": {
                "column": 2,
                "line": 110
              }
            }
          }
        ],
        "range": [
          3174,
          3232
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 43,
            "line": 109
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flakyIsString",
        "optional": false,
        "range": [
          3140,
          3153
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 109
          },
          "start": {
            "column": 9,
            "line": 109
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 109
              },
              "start": {
                "column": 24,
                "line": 109
              }
            },
            "range": [
              3155,
              3172
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3157,
                    3163
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 109
                    },
                    "start": {
                      "column": 26,
                      "line": 109
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    3166,
                    3172
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 109
                    },
                    "start": {
                      "column": 35,
                      "line": 109
                    }
                  }
                }
              ],
              "range": [
                3157,
                3172
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 109
                },
                "start": {
                  "column": 26,
                  "line": 109
                }
              }
            }
          },
          "range": [
            3154,
            3172
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 109
            },
            "start": {
              "column": 23,
              "line": 109
            }
          }
        }
      ],
      "range": [
        3131,
        3232
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 115
                      },
                      "start": {
                        "column": 7,
                        "line": 115
                      }
                    },
                    "range": [
                      3325,
                      3333
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3327,
                        3333
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 115
                        },
                        "start": {
                          "column": 9,
                          "line": 115
                        }
                      }
                    }
                  },
                  "range": [
                    3324,
                    3333
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 115
                    },
                    "start": {
                      "column": 6,
                      "line": 115
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "range": [
                    3336,
                    3344
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 115
                    },
                    "start": {
                      "column": 18,
                      "line": 115
                    }
                  }
                },
                "range": [
                  3324,
                  3344
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 115
                  },
                  "start": {
                    "column": 6,
                    "line": 115
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3320,
              3345
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 115
              },
              "start": {
                "column": 2,
                "line": 115
              }
            }
          }
        ],
        "range": [
          3316,
          3364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 7,
            "line": 114
          }
        }
      },
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 113
                      },
                      "start": {
                        "column": 7,
                        "line": 113
                      }
                    },
                    "range": [
                      3271,
                      3279
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        3273,
                        3279
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 113
                        },
                        "start": {
                          "column": 9,
                          "line": 113
                        }
                      }
                    }
                  },
                  "range": [
                    3270,
                    3279
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 113
                    },
                    "start": {
                      "column": 6,
                      "line": 113
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "range": [
                    3282,
                    3290
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 113
                    },
                    "start": {
                      "column": 18,
                      "line": 113
                    }
                  }
                },
                "range": [
                  3270,
                  3290
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 113
                  },
                  "start": {
                    "column": 6,
                    "line": 113
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3266,
              3291
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 113
              },
              "start": {
                "column": 2,
                "line": 113
              }
            }
          }
        ],
        "range": [
          3262,
          3310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 114
          },
          "start": {
            "column": 29,
            "line": 112
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "range": [
              3251,
              3259
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 112
              },
              "start": {
                "column": 18,
                "line": 112
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flakyIsString",
          "optional": false,
          "range": [
            3237,
            3250
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 112
            },
            "start": {
              "column": 4,
              "line": 112
            }
          }
        },
        "optional": false,
        "range": [
          3237,
          3260
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 112
          },
          "start": {
            "column": 4,
            "line": 112
          }
        }
      },
      "range": [
        3233,
        3364
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 112
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
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3404,
                  3405
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 119
                  },
                  "start": {
                    "column": 9,
                    "line": 119
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  3417,
                  3421
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 119
                  },
                  "start": {
                    "column": 22,
                    "line": 119
                  }
                }
              },
              "range": [
                3404,
                3421
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 119
                },
                "start": {
                  "column": 9,
                  "line": 119
                }
              }
            },
            "range": [
              3397,
              3422
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 119
              },
              "start": {
                "column": 2,
                "line": 119
              }
            }
          }
        ],
        "range": [
          3393,
          3424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 27,
            "line": 118
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "range": [
          3375,
          3381
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 118
          },
          "start": {
            "column": 9,
            "line": 118
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 118
              },
              "start": {
                "column": 17,
                "line": 118
              }
            },
            "range": [
              3383,
              3391
            ],
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                3385,
                3391
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 118
                },
                "start": {
                  "column": 19,
                  "line": 118
                }
              }
            }
          },
          "range": [
            3382,
            3391
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 118
            },
            "start": {
              "column": 16,
              "line": 118
            }
          }
        }
      ],
      "range": [
        3366,
        3424
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 118
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
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3468,
                    3469
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 122
                    },
                    "start": {
                      "column": 9,
                      "line": 122
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    3481,
                    3485
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 122
                    },
                    "start": {
                      "column": 22,
                      "line": 122
                    }
                  }
                },
                "range": [
                  3468,
                  3485
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 122
                  },
                  "start": {
                    "column": 9,
                    "line": 122
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "range": [
                        3489,
                        3493
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 122
                        },
                        "start": {
                          "column": 30,
                          "line": 122
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "range": [
                        3494,
                        3500
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 122
                        },
                        "start": {
                          "column": 35,
                          "line": 122
                        }
                      }
                    },
                    "range": [
                      3489,
                      3500
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 122
                      },
                      "start": {
                        "column": 30,
                        "line": 122
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3489,
                    3502
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 122
                    },
                    "start": {
                      "column": 30,
                      "line": 122
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0.5",
                  "value": 0.5,
                  "range": [
                    3505,
                    3508
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 122
                    },
                    "start": {
                      "column": 46,
                      "line": 122
                    }
                  }
                },
                "range": [
                  3489,
                  3508
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 122
                  },
                  "start": {
                    "column": 30,
                    "line": 122
                  }
                }
              },
              "range": [
                3468,
                3508
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 122
                },
                "start": {
                  "column": 9,
                  "line": 122
                }
              }
            },
            "range": [
              3461,
              3509
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 122
              },
              "start": {
                "column": 2,
                "line": 122
              }
            }
          }
        ],
        "range": [
          3457,
          3511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 123
          },
          "start": {
            "column": 32,
            "line": 121
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flakyIsDate",
        "optional": false,
        "range": [
          3434,
          3445
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 121
          },
          "start": {
            "column": 9,
            "line": 121
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 121
              },
              "start": {
                "column": 22,
                "line": 121
              }
            },
            "range": [
              3447,
              3455
            ],
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                3449,
                3455
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 121
                },
                "start": {
                  "column": 24,
                  "line": 121
                }
              }
            }
          },
          "range": [
            3446,
            3455
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 121
            },
            "start": {
              "column": 21,
              "line": 121
            }
          }
        }
      ],
      "range": [
        3425,
        3511
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 121
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
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 125
                },
                "start": {
                  "column": 21,
                  "line": 125
                }
              },
              "range": [
                3534,
                3542
              ],
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "range": [
                  3536,
                  3542
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 125
                  },
                  "start": {
                    "column": 23,
                    "line": 125
                  }
                }
              }
            },
            "range": [
              3525,
              3542
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 125
              },
              "start": {
                "column": 12,
                "line": 125
              }
            }
          },
          "init": null,
          "range": [
            3525,
            3542
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 125
            },
            "start": {
              "column": 12,
              "line": 125
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        3513,
        3543
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 125
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 129
                      },
                      "start": {
                        "column": 7,
                        "line": 129
                      }
                    },
                    "range": [
                      3626,
                      3634
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        3628,
                        3634
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 129
                        },
                        "start": {
                          "column": 9,
                          "line": 129
                        }
                      }
                    }
                  },
                  "range": [
                    3625,
                    3634
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 129
                    },
                    "start": {
                      "column": 6,
                      "line": 129
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "range": [
                    3637,
                    3646
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 129
                    },
                    "start": {
                      "column": 18,
                      "line": 129
                    }
                  }
                },
                "range": [
                  3625,
                  3646
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 129
                  },
                  "start": {
                    "column": 6,
                    "line": 129
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3621,
              3647
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 129
              },
              "start": {
                "column": 2,
                "line": 129
              }
            }
          }
        ],
        "range": [
          3617,
          3663
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 7,
            "line": 128
          }
        }
      },
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 127
                      },
                      "start": {
                        "column": 7,
                        "line": 127
                      }
                    },
                    "range": [
                      3576,
                      3582
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          3578,
                          3582
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 127
                          },
                          "start": {
                            "column": 9,
                            "line": 127
                          }
                        }
                      },
                      "range": [
                        3578,
                        3582
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 127
                        },
                        "start": {
                          "column": 9,
                          "line": 127
                        }
                      }
                    }
                  },
                  "range": [
                    3575,
                    3582
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 127
                    },
                    "start": {
                      "column": 6,
                      "line": 127
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "range": [
                    3585,
                    3594
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 127
                    },
                    "start": {
                      "column": 16,
                      "line": 127
                    }
                  }
                },
                "range": [
                  3575,
                  3594
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 127
                  },
                  "start": {
                    "column": 6,
                    "line": 127
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3571,
              3595
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 127
              },
              "start": {
                "column": 2,
                "line": 127
              }
            }
          }
        ],
        "range": [
          3567,
          3611
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 23,
            "line": 126
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "range": [
              3555,
              3564
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 126
              },
              "start": {
                "column": 11,
                "line": 126
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "range": [
            3548,
            3554
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 126
            },
            "start": {
              "column": 4,
              "line": 126
            }
          }
        },
        "optional": false,
        "range": [
          3548,
          3565
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 126
          },
          "start": {
            "column": 4,
            "line": 126
          }
        }
      },
      "range": [
        3544,
        3663
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 126
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 135
                      },
                      "start": {
                        "column": 7,
                        "line": 135
                      }
                    },
                    "range": [
                      3755,
                      3763
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        3757,
                        3763
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 135
                        },
                        "start": {
                          "column": 9,
                          "line": 135
                        }
                      }
                    }
                  },
                  "range": [
                    3754,
                    3763
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 135
                    },
                    "start": {
                      "column": 6,
                      "line": 135
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "range": [
                    3766,
                    3775
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 135
                    },
                    "start": {
                      "column": 18,
                      "line": 135
                    }
                  }
                },
                "range": [
                  3754,
                  3775
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 135
                  },
                  "start": {
                    "column": 6,
                    "line": 135
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3750,
              3776
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 135
              },
              "start": {
                "column": 2,
                "line": 135
              }
            }
          }
        ],
        "range": [
          3746,
          3792
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 136
          },
          "start": {
            "column": 7,
            "line": 134
          }
        }
      },
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 133
                      },
                      "start": {
                        "column": 7,
                        "line": 133
                      }
                    },
                    "range": [
                      3702,
                      3708
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          3704,
                          3708
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 133
                          },
                          "start": {
                            "column": 9,
                            "line": 133
                          }
                        }
                      },
                      "range": [
                        3704,
                        3708
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 133
                        },
                        "start": {
                          "column": 9,
                          "line": 133
                        }
                      }
                    }
                  },
                  "range": [
                    3701,
                    3708
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 133
                    },
                    "start": {
                      "column": 6,
                      "line": 133
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "range": [
                    3711,
                    3720
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 133
                    },
                    "start": {
                      "column": 16,
                      "line": 133
                    }
                  }
                },
                "range": [
                  3701,
                  3720
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 133
                  },
                  "start": {
                    "column": 6,
                    "line": 133
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3697,
              3721
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 133
              },
              "start": {
                "column": 2,
                "line": 133
              }
            }
          }
        ],
        "range": [
          3693,
          3740
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 134
          },
          "start": {
            "column": 28,
            "line": 132
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "range": [
              3681,
              3690
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 132
              },
              "start": {
                "column": 16,
                "line": 132
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flakyIsDate",
          "optional": false,
          "range": [
            3669,
            3680
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 132
            },
            "start": {
              "column": 4,
              "line": 132
            }
          }
        },
        "optional": false,
        "range": [
          3669,
          3691
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 132
          },
          "start": {
            "column": 4,
            "line": 132
          }
        }
      },
      "range": [
        3665,
        3792
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 132
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3974,
                  3975
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 141
                  },
                  "start": {
                    "column": 1,
                    "line": 141
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    4011,
                    4014
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 141
                    },
                    "start": {
                      "column": 38,
                      "line": 141
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    4000,
                    4008
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 141
                    },
                    "start": {
                      "column": 27,
                      "line": 141
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "range": [
                          3978,
                          3982
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 141
                          },
                          "start": {
                            "column": 5,
                            "line": 141
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "range": [
                          3983,
                          3989
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 141
                          },
                          "start": {
                            "column": 10,
                            "line": 141
                          }
                        }
                      },
                      "range": [
                        3978,
                        3989
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 141
                        },
                        "start": {
                          "column": 5,
                          "line": 141
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3978,
                      3991
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 141
                      },
                      "start": {
                        "column": 5,
                        "line": 141
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "0.5",
                    "value": 0.5,
                    "range": [
                      3994,
                      3997
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 141
                      },
                      "start": {
                        "column": 21,
                        "line": 141
                      }
                    }
                  },
                  "range": [
                    3978,
                    3997
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 141
                    },
                    "start": {
                      "column": 5,
                      "line": 141
                    }
                  }
                },
                "range": [
                  3978,
                  4014
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 141
                  },
                  "start": {
                    "column": 5,
                    "line": 141
                  }
                }
              },
              "range": [
                3974,
                4014
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 141
                },
                "start": {
                  "column": 1,
                  "line": 141
                }
              }
            },
            "range": [
              3974,
              4015
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 141
              },
              "start": {
                "column": 1,
                "line": 141
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
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
                    4032,
                    4033
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 142
                    },
                    "start": {
                      "column": 16,
                      "line": 142
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  4025,
                  4033
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 142
                  },
                  "start": {
                    "column": 9,
                    "line": 142
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  4038,
                  4046
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 142
                  },
                  "start": {
                    "column": 22,
                    "line": 142
                  }
                }
              },
              "range": [
                4025,
                4046
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 142
                },
                "start": {
                  "column": 9,
                  "line": 142
                }
              }
            },
            "range": [
              4018,
              4047
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 142
              },
              "start": {
                "column": 2,
                "line": 142
              }
            }
          }
        ],
        "range": [
          3971,
          4049
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 143
          },
          "start": {
            "column": 48,
            "line": 140
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "irrelevantIsNumber",
        "optional": false,
        "range": [
          3932,
          3950
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 140
          },
          "start": {
            "column": 9,
            "line": 140
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 140
              },
              "start": {
                "column": 29,
                "line": 140
              }
            },
            "range": [
              3952,
              3969
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3954,
                    3960
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 140
                    },
                    "start": {
                      "column": 31,
                      "line": 140
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    3963,
                    3969
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 140
                    },
                    "start": {
                      "column": 40,
                      "line": 140
                    }
                  }
                }
              ],
              "range": [
                3954,
                3969
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 140
                },
                "start": {
                  "column": 31,
                  "line": 140
                }
              }
            }
          },
          "range": [
            3951,
            3969
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 140
            },
            "start": {
              "column": 28,
              "line": 140
            }
          }
        }
      ],
      "range": [
        3923,
        4049
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 140
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4115,
                      4116
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 145
                      },
                      "start": {
                        "column": 2,
                        "line": 145
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  4114,
                  4117
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 145
                  },
                  "start": {
                    "column": 1,
                    "line": 145
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        4154,
                        4157
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 145
                        },
                        "start": {
                          "column": 41,
                          "line": 145
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "\"string\"",
                      "value": "string",
                      "range": [
                        4143,
                        4151
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 145
                        },
                        "start": {
                          "column": 30,
                          "line": 145
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "range": [
                              4121,
                              4125
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 145
                              },
                              "start": {
                                "column": 8,
                                "line": 145
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "range": [
                              4126,
                              4132
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 145
                              },
                              "start": {
                                "column": 13,
                                "line": 145
                              }
                            }
                          },
                          "range": [
                            4121,
                            4132
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 145
                            },
                            "start": {
                              "column": 8,
                              "line": 145
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          4121,
                          4134
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 145
                          },
                          "start": {
                            "column": 8,
                            "line": 145
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          4137,
                          4140
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 145
                          },
                          "start": {
                            "column": 24,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        4121,
                        4140
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 145
                        },
                        "start": {
                          "column": 8,
                          "line": 145
                        }
                      }
                    },
                    "range": [
                      4121,
                      4157
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 145
                      },
                      "start": {
                        "column": 8,
                        "line": 145
                      }
                    }
                  }
                ],
                "range": [
                  4120,
                  4158
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 145
                  },
                  "start": {
                    "column": 7,
                    "line": 145
                  }
                }
              },
              "range": [
                4114,
                4158
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 145
                },
                "start": {
                  "column": 1,
                  "line": 145
                }
              }
            },
            "range": [
              4114,
              4159
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 145
              },
              "start": {
                "column": 1,
                "line": 145
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
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
                    4176,
                    4177
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 146
                    },
                    "start": {
                      "column": 16,
                      "line": 146
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  4169,
                  4177
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 146
                  },
                  "start": {
                    "column": 9,
                    "line": 146
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  4182,
                  4190
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 146
                  },
                  "start": {
                    "column": 22,
                    "line": 146
                  }
                }
              },
              "range": [
                4169,
                4190
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 146
                },
                "start": {
                  "column": 9,
                  "line": 146
                }
              }
            },
            "range": [
              4162,
              4191
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 146
              },
              "start": {
                "column": 2,
                "line": 146
              }
            }
          }
        ],
        "range": [
          4111,
          4193
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 147
          },
          "start": {
            "column": 61,
            "line": 144
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "irrelevantIsNumberDestructuring",
        "optional": false,
        "range": [
          4059,
          4090
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 144
          },
          "start": {
            "column": 9,
            "line": 144
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 144
              },
              "start": {
                "column": 42,
                "line": 144
              }
            },
            "range": [
              4092,
              4109
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4094,
                    4100
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 144
                    },
                    "start": {
                      "column": 44,
                      "line": 144
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4103,
                    4109
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 144
                    },
                    "start": {
                      "column": 53,
                      "line": 144
                    }
                  }
                }
              ],
              "range": [
                4094,
                4109
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 144
                },
                "start": {
                  "column": 44,
                  "line": 144
                }
              }
            }
          },
          "range": [
            4091,
            4109
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 144
            },
            "start": {
              "column": 41,
              "line": 144
            }
          }
        }
      ],
      "range": [
        4050,
        4193
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 144
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
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
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
                      4343,
                      4344
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 151
                      },
                      "start": {
                        "column": 16,
                        "line": 151
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    4336,
                    4344
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 151
                    },
                    "start": {
                      "column": 9,
                      "line": 151
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'number'",
                  "value": "number",
                  "range": [
                    4349,
                    4357
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 151
                    },
                    "start": {
                      "column": 22,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4336,
                  4357
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 151
                  },
                  "start": {
                    "column": 9,
                    "line": 151
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      4368,
                      4369
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 151
                      },
                      "start": {
                        "column": 41,
                        "line": 151
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    4361,
                    4369
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 151
                    },
                    "start": {
                      "column": 34,
                      "line": 151
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'number'",
                  "value": "number",
                  "range": [
                    4374,
                    4382
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 151
                    },
                    "start": {
                      "column": 47,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4361,
                  4382
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 151
                  },
                  "start": {
                    "column": 34,
                    "line": 151
                  }
                }
              },
              "range": [
                4336,
                4382
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 151
                },
                "start": {
                  "column": 9,
                  "line": 151
                }
              }
            },
            "range": [
              4329,
              4383
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 151
              },
              "start": {
                "column": 2,
                "line": 151
              }
            }
          }
        ],
        "range": [
          4325,
          4385
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 152
          },
          "start": {
            "column": 57,
            "line": 150
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "areBothNums",
        "optional": false,
        "range": [
          4277,
          4288
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 150
          },
          "start": {
            "column": 9,
            "line": 150
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 150
              },
              "start": {
                "column": 22,
                "line": 150
              }
            },
            "range": [
              4290,
              4305
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4292,
                    4298
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 150
                    },
                    "start": {
                      "column": 24,
                      "line": 150
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4299,
                    4305
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 150
                    },
                    "start": {
                      "column": 31,
                      "line": 150
                    }
                  }
                }
              ],
              "range": [
                4292,
                4305
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 150
                },
                "start": {
                  "column": 24,
                  "line": 150
                }
              }
            }
          },
          "range": [
            4289,
            4305
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 150
            },
            "start": {
              "column": 21,
              "line": 150
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 150
              },
              "start": {
                "column": 40,
                "line": 150
              }
            },
            "range": [
              4308,
              4323
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4310,
                    4316
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 150
                    },
                    "start": {
                      "column": 42,
                      "line": 150
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4317,
                    4323
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 150
                    },
                    "start": {
                      "column": 49,
                      "line": 150
                    }
                  }
                }
              ],
              "range": [
                4310,
                4323
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 150
                },
                "start": {
                  "column": 42,
                  "line": 150
                }
              }
            }
          },
          "range": [
            4307,
            4323
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 150
            },
            "start": {
              "column": 39,
              "line": 150
            }
          }
        }
      ],
      "range": [
        4268,
        4385
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 150
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
                    "raw": "true",
                    "value": true,
                    "range": [
                      4555,
                      4559
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 157
                      },
                      "start": {
                        "column": 11,
                        "line": 157
                      }
                    }
                  },
                  "range": [
                    4548,
                    4560
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 157
                    },
                    "start": {
                      "column": 4,
                      "line": 157
                    }
                  }
                }
              ],
              "range": [
                4542,
                4564
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 158
                },
                "start": {
                  "column": 29,
                  "line": 156
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
                    4526,
                    4527
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 156
                    },
                    "start": {
                      "column": 13,
                      "line": 156
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  4519,
                  4527
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 156
                  },
                  "start": {
                    "column": 6,
                    "line": 156
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  4532,
                  4540
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 156
                  },
                  "start": {
                    "column": 19,
                    "line": 156
                  }
                }
              },
              "range": [
                4519,
                4540
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 156
                },
                "start": {
                  "column": 6,
                  "line": 156
                }
              }
            },
            "range": [
              4515,
              4564
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 158
              },
              "start": {
                "column": 2,
                "line": 156
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                4574,
                4579
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 159
                },
                "start": {
                  "column": 9,
                  "line": 159
                }
              }
            },
            "range": [
              4567,
              4580
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 159
              },
              "start": {
                "column": 2,
                "line": 159
              }
            }
          }
        ],
        "range": [
          4511,
          4582
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 160
          },
          "start": {
            "column": 40,
            "line": 155
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doubleReturn",
        "optional": false,
        "range": [
          4480,
          4492
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 155
          },
          "start": {
            "column": 9,
            "line": 155
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 155
              },
              "start": {
                "column": 23,
                "line": 155
              }
            },
            "range": [
              4494,
              4509
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4496,
                    4502
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 155
                    },
                    "start": {
                      "column": 25,
                      "line": 155
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4503,
                    4509
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 155
                    },
                    "start": {
                      "column": 32,
                      "line": 155
                    }
                  }
                }
              ],
              "range": [
                4496,
                4509
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 155
                },
                "start": {
                  "column": 25,
                  "line": 155
                }
              }
            }
          },
          "range": [
            4493,
            4509
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 155
            },
            "start": {
              "column": 22,
              "line": 155
            }
          }
        }
      ],
      "range": [
        4471,
        4582
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 155
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    4687,
                    4688
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 163
                    },
                    "start": {
                      "column": 16,
                      "line": 163
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  4680,
                  4688
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 163
                  },
                  "start": {
                    "column": 9,
                    "line": 163
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  4693,
                  4701
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 163
                  },
                  "start": {
                    "column": 22,
                    "line": 163
                  }
                }
              },
              "range": [
                4680,
                4701
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 163
                },
                "start": {
                  "column": 9,
                  "line": 163
                }
              }
            },
            "range": [
              4673,
              4702
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 163
              },
              "start": {
                "column": 2,
                "line": 163
              }
            }
          }
        ],
        "range": [
          4669,
          4704
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 164
          },
          "start": {
            "column": 85,
            "line": 162
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "guardsOneButNotOthers",
        "optional": false,
        "range": [
          4593,
          4614
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 162
          },
          "start": {
            "column": 9,
            "line": 162
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 162
              },
              "start": {
                "column": 32,
                "line": 162
              }
            },
            "range": [
              4616,
              4631
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4618,
                    4624
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 162
                    },
                    "start": {
                      "column": 34,
                      "line": 162
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4625,
                    4631
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 162
                    },
                    "start": {
                      "column": 41,
                      "line": 162
                    }
                  }
                }
              ],
              "range": [
                4618,
                4631
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 162
                },
                "start": {
                  "column": 34,
                  "line": 162
                }
              }
            }
          },
          "range": [
            4615,
            4631
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 162
            },
            "start": {
              "column": 31,
              "line": 162
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 162
              },
              "start": {
                "column": 50,
                "line": 162
              }
            },
            "range": [
              4634,
              4649
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4636,
                    4642
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 162
                    },
                    "start": {
                      "column": 52,
                      "line": 162
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4643,
                    4649
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 162
                    },
                    "start": {
                      "column": 59,
                      "line": 162
                    }
                  }
                }
              ],
              "range": [
                4636,
                4649
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 162
                },
                "start": {
                  "column": 52,
                  "line": 162
                }
              }
            }
          },
          "range": [
            4633,
            4649
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 162
            },
            "start": {
              "column": 49,
              "line": 162
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 83,
                "line": 162
              },
              "start": {
                "column": 68,
                "line": 162
              }
            },
            "range": [
              4652,
              4667
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4654,
                    4660
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 162
                    },
                    "start": {
                      "column": 70,
                      "line": 162
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4661,
                    4667
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 162
                    },
                    "start": {
                      "column": 77,
                      "line": 162
                    }
                  }
                }
              ],
              "range": [
                4654,
                4667
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 162
                },
                "start": {
                  "column": 70,
                  "line": 162
                }
              }
            }
          },
          "range": [
            4651,
            4667
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 162
            },
            "start": {
              "column": 67,
              "line": 162
            }
          }
        }
      ],
      "range": [
        4584,
        4704
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 162
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__x",
                  "optional": false,
                  "range": [
                    4818,
                    4821
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 168
                    },
                    "start": {
                      "column": 16,
                      "line": 168
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  4811,
                  4821
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 168
                  },
                  "start": {
                    "column": 9,
                    "line": 168
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  4827,
                  4835
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 168
                  },
                  "start": {
                    "column": 25,
                    "line": 168
                  }
                }
              },
              "range": [
                4811,
                4835
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 168
                },
                "start": {
                  "column": 9,
                  "line": 168
                }
              }
            },
            "range": [
              4804,
              4836
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 168
              },
              "start": {
                "column": 2,
                "line": 168
              }
            }
          }
        ],
        "range": [
          4800,
          4838
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 169
          },
          "start": {
            "column": 43,
            "line": 167
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dunderguard",
        "optional": false,
        "range": [
          4766,
          4777
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 167
          },
          "start": {
            "column": 9,
            "line": 167
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "__x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 167
              },
              "start": {
                "column": 24,
                "line": 167
              }
            },
            "range": [
              4781,
              4798
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4783,
                    4789
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 167
                    },
                    "start": {
                      "column": 26,
                      "line": 167
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4792,
                    4798
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 167
                    },
                    "start": {
                      "column": 35,
                      "line": 167
                    }
                  }
                }
              ],
              "range": [
                4783,
                4798
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 167
                },
                "start": {
                  "column": 26,
                  "line": 167
                }
              }
            }
          },
          "range": [
            4778,
            4798
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 167
            },
            "start": {
              "column": 21,
              "line": 167
            }
          }
        }
      ],
      "range": [
        4757,
        4838
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 169
        },
        "start": {
          "column": 0,
          "line": 167
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
            "name": "booleanIdentity",
            "optional": false,
            "range": [
              4913,
              4928
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 172
              },
              "start": {
                "column": 6,
                "line": 172
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                4947,
                4948
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 172
                },
                "start": {
                  "column": 40,
                  "line": 172
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 172
                    },
                    "start": {
                      "column": 26,
                      "line": 172
                    }
                  },
                  "range": [
                    4933,
                    4942
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      4935,
                      4942
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 172
                      },
                      "start": {
                        "column": 28,
                        "line": 172
                      }
                    }
                  }
                },
                "range": [
                  4932,
                  4942
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 172
                  },
                  "start": {
                    "column": 25,
                    "line": 172
                  }
                }
              }
            ],
            "range": [
              4931,
              4948
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 172
              },
              "start": {
                "column": 24,
                "line": 172
              }
            }
          },
          "range": [
            4913,
            4948
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 172
            },
            "start": {
              "column": 6,
              "line": 172
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4907,
        4949
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 172
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
            "name": "numOrBoolean",
            "optional": false,
            "range": [
              5034,
              5046
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 175
              },
              "start": {
                "column": 6,
                "line": 175
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
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
                      5081,
                      5082
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 175
                      },
                      "start": {
                        "column": 53,
                        "line": 175
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    5074,
                    5082
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 175
                    },
                    "start": {
                      "column": 46,
                      "line": 175
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'number'",
                  "value": "number",
                  "range": [
                    5087,
                    5095
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 175
                    },
                    "start": {
                      "column": 59,
                      "line": 175
                    }
                  }
                },
                "range": [
                  5074,
                  5095
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 175
                  },
                  "start": {
                    "column": 46,
                    "line": 175
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  5099,
                  5100
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 175
                  },
                  "start": {
                    "column": 71,
                    "line": 175
                  }
                }
              },
              "range": [
                5074,
                5100
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 175
                },
                "start": {
                  "column": 46,
                  "line": 175
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 175
                    },
                    "start": {
                      "column": 23,
                      "line": 175
                    }
                  },
                  "range": [
                    5051,
                    5069
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          5053,
                          5059
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 175
                          },
                          "start": {
                            "column": 25,
                            "line": 175
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          5062,
                          5069
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 175
                          },
                          "start": {
                            "column": 34,
                            "line": 175
                          }
                        }
                      }
                    ],
                    "range": [
                      5053,
                      5069
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 175
                      },
                      "start": {
                        "column": 25,
                        "line": 175
                      }
                    }
                  }
                },
                "range": [
                  5050,
                  5069
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 175
                  },
                  "start": {
                    "column": 22,
                    "line": 175
                  }
                }
              }
            ],
            "range": [
              5049,
              5100
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 175
              },
              "start": {
                "column": 21,
                "line": 175
              }
            }
          },
          "range": [
            5034,
            5100
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 175
            },
            "start": {
              "column": 6,
              "line": 175
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5028,
        5101
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          5158,
          5206
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "range": [
                5162,
                5170
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 179
                },
                "start": {
                  "column": 2,
                  "line": 179
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 179
                    },
                    "start": {
                      "column": 12,
                      "line": 179
                    }
                  },
                  "range": [
                    5172,
                    5189
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          5174,
                          5180
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 179
                          },
                          "start": {
                            "column": 14,
                            "line": 179
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          5183,
                          5189
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 179
                          },
                          "start": {
                            "column": 23,
                            "line": 179
                          }
                        }
                      }
                    ],
                    "range": [
                      5174,
                      5189
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 179
                      },
                      "start": {
                        "column": 14,
                        "line": 179
                      }
                    }
                  }
                },
                "range": [
                  5171,
                  5189
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 179
                  },
                  "start": {
                    "column": 11,
                    "line": 179
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 179
                },
                "start": {
                  "column": 30,
                  "line": 179
                }
              },
              "range": [
                5190,
                5203
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    5192,
                    5193
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 179
                    },
                    "start": {
                      "column": 32,
                      "line": 179
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 179
                    },
                    "start": {
                      "column": 37,
                      "line": 179
                    }
                  },
                  "range": [
                    5197,
                    5203
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      5197,
                      5203
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 179
                      },
                      "start": {
                        "column": 37,
                        "line": 179
                      }
                    }
                  }
                },
                "range": [
                  5192,
                  5203
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 179
                  },
                  "start": {
                    "column": 32,
                    "line": 179
                  }
                }
              }
            },
            "static": false,
            "range": [
              5162,
              5204
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 179
              },
              "start": {
                "column": 2,
                "line": 179
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 180
          },
          "start": {
            "column": 25,
            "line": 178
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberInferrer",
        "optional": false,
        "range": [
          5143,
          5157
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 178
          },
          "start": {
            "column": 10,
            "line": 178
          }
        }
      },
      "range": [
        5133,
        5206
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 180
        },
        "start": {
          "column": 0,
          "line": 178
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          5248,
          5336
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "range": [
                5252,
                5260
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 182
                },
                "start": {
                  "column": 2,
                  "line": 182
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
                5260,
                5334
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                            5315,
                            5316
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 183
                            },
                            "start": {
                              "column": 18,
                              "line": 183
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          5308,
                          5316
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 183
                          },
                          "start": {
                            "column": 11,
                            "line": 183
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "'number'",
                        "value": "number",
                        "range": [
                          5321,
                          5329
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 183
                          },
                          "start": {
                            "column": 24,
                            "line": 183
                          }
                        }
                      },
                      "range": [
                        5308,
                        5329
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 183
                        },
                        "start": {
                          "column": 11,
                          "line": 183
                        }
                      }
                    },
                    "range": [
                      5301,
                      5330
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 183
                      },
                      "start": {
                        "column": 4,
                        "line": 183
                      }
                    }
                  }
                ],
                "range": [
                  5281,
                  5334
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 184
                  },
                  "start": {
                    "column": 31,
                    "line": 182
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 182
                      },
                      "start": {
                        "column": 12,
                        "line": 182
                      }
                    },
                    "range": [
                      5262,
                      5279
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            5264,
                            5270
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 182
                            },
                            "start": {
                              "column": 14,
                              "line": 182
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5273,
                            5279
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 182
                            },
                            "start": {
                              "column": 23,
                              "line": 182
                            }
                          }
                        }
                      ],
                      "range": [
                        5264,
                        5279
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 182
                        },
                        "start": {
                          "column": 14,
                          "line": 182
                        }
                      }
                    }
                  },
                  "range": [
                    5261,
                    5279
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 182
                    },
                    "start": {
                      "column": 11,
                      "line": 182
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 184
                },
                "start": {
                  "column": 10,
                  "line": 182
                }
              }
            },
            "range": [
              5252,
              5334
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 184
              },
              "start": {
                "column": 2,
                "line": 182
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 185
          },
          "start": {
            "column": 41,
            "line": 181
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inferrer",
        "optional": false,
        "range": [
          5213,
          5221
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 181
          },
          "start": {
            "column": 6,
            "line": 181
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberInferrer",
            "optional": false,
            "range": [
              5233,
              5247
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 181
              },
              "start": {
                "column": 26,
                "line": 181
              }
            }
          },
          "range": [
            5233,
            5247
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 181
            },
            "start": {
              "column": 26,
              "line": 181
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        5207,
        5336
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 185
        },
        "start": {
          "column": 0,
          "line": 181
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
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 186
                },
                "start": {
                  "column": 20,
                  "line": 186
                }
              },
              "range": [
                5357,
                5374
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      5359,
                      5365
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 186
                      },
                      "start": {
                        "column": 22,
                        "line": 186
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      5368,
                      5374
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 186
                      },
                      "start": {
                        "column": 31,
                        "line": 186
                      }
                    }
                  }
                ],
                "range": [
                  5359,
                  5374
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 186
                  },
                  "start": {
                    "column": 22,
                    "line": 186
                  }
                }
              }
            },
            "range": [
              5349,
              5374
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 186
              },
              "start": {
                "column": 12,
                "line": 186
              }
            }
          },
          "init": null,
          "range": [
            5349,
            5374
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 186
            },
            "start": {
              "column": 12,
              "line": 186
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        5337,
        5375
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 186
        },
        "start": {
          "column": 0,
          "line": 186
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
            "name": "inf",
            "optional": false,
            "range": [
              5382,
              5385
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 187
              },
              "start": {
                "column": 6,
                "line": 187
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inferrer",
              "optional": false,
              "range": [
                5392,
                5400
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 187
                },
                "start": {
                  "column": 16,
                  "line": 187
                }
              }
            },
            "range": [
              5388,
              5402
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 187
              },
              "start": {
                "column": 12,
                "line": 187
              }
            }
          },
          "range": [
            5382,
            5402
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 187
            },
            "start": {
              "column": 6,
              "line": 187
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5376,
        5403
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 187
        },
        "start": {
          "column": 0,
          "line": 187
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 191
                      },
                      "start": {
                        "column": 7,
                        "line": 191
                      }
                    },
                    "range": [
                      5492,
                      5500
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        5494,
                        5500
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 191
                        },
                        "start": {
                          "column": 9,
                          "line": 191
                        }
                      }
                    }
                  },
                  "range": [
                    5491,
                    5500
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 191
                    },
                    "start": {
                      "column": 6,
                      "line": 191
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "range": [
                    5503,
                    5511
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 191
                    },
                    "start": {
                      "column": 18,
                      "line": 191
                    }
                  }
                },
                "range": [
                  5491,
                  5511
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 191
                  },
                  "start": {
                    "column": 6,
                    "line": 191
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              5487,
              5512
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 191
              },
              "start": {
                "column": 2,
                "line": 191
              }
            }
          }
        ],
        "range": [
          5483,
          5528
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 192
          },
          "start": {
            "column": 7,
            "line": 190
          }
        }
      },
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 189
                      },
                      "start": {
                        "column": 7,
                        "line": 189
                      }
                    },
                    "range": [
                      5441,
                      5449
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        5443,
                        5449
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 189
                        },
                        "start": {
                          "column": 9,
                          "line": 189
                        }
                      }
                    }
                  },
                  "range": [
                    5440,
                    5449
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 189
                    },
                    "start": {
                      "column": 6,
                      "line": 189
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "range": [
                    5452,
                    5460
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 189
                    },
                    "start": {
                      "column": 18,
                      "line": 189
                    }
                  }
                },
                "range": [
                  5440,
                  5460
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 189
                  },
                  "start": {
                    "column": 6,
                    "line": 189
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              5436,
              5461
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 189
              },
              "start": {
                "column": 2,
                "line": 189
              }
            }
          }
        ],
        "range": [
          5432,
          5477
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 190
          },
          "start": {
            "column": 28,
            "line": 188
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "range": [
              5421,
              5429
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 188
              },
              "start": {
                "column": 17,
                "line": 188
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
            "name": "inf",
            "optional": false,
            "range": [
              5408,
              5411
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 188
              },
              "start": {
                "column": 4,
                "line": 188
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNumber",
            "optional": false,
            "range": [
              5412,
              5420
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 188
              },
              "start": {
                "column": 8,
                "line": 188
              }
            }
          },
          "range": [
            5408,
            5420
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 188
            },
            "start": {
              "column": 4,
              "line": 188
            }
          }
        },
        "optional": false,
        "range": [
          5408,
          5430
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 188
          },
          "start": {
            "column": 4,
            "line": 188
          }
        }
      },
      "range": [
        5404,
        5528
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 192
        },
        "start": {
          "column": 0,
          "line": 188
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          5585,
          5634
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "range": [
                5589,
                5593
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 196
                },
                "start": {
                  "column": 2,
                  "line": 196
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
                5593,
                5632
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "range": [
                          5609,
                          5613
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 197
                          },
                          "start": {
                            "column": 11,
                            "line": 197
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "range": [
                          5625,
                          5627
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 197
                          },
                          "start": {
                            "column": 27,
                            "line": 197
                          }
                        }
                      },
                      "range": [
                        5609,
                        5627
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 197
                        },
                        "start": {
                          "column": 11,
                          "line": 197
                        }
                      }
                    },
                    "range": [
                      5602,
                      5628
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 197
                      },
                      "start": {
                        "column": 4,
                        "line": 197
                      }
                    }
                  }
                ],
                "range": [
                  5596,
                  5632
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 198
                  },
                  "start": {
                    "column": 9,
                    "line": 196
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
                  "column": 3,
                  "line": 198
                },
                "start": {
                  "column": 6,
                  "line": 196
                }
              }
            },
            "range": [
              5589,
              5632
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 198
              },
              "start": {
                "column": 2,
                "line": 196
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 199
          },
          "start": {
            "column": 9,
            "line": 195
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          5582,
          5584
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 195
          },
          "start": {
            "column": 6,
            "line": 195
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        5576,
        5634
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 199
        },
        "start": {
          "column": 0,
          "line": 195
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          5655,
          5667
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                5659,
                5660
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 201
                },
                "start": {
                  "column": 2,
                  "line": 201
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                5663,
                5664
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 201
                },
                "start": {
                  "column": 6,
                  "line": 201
                }
              }
            },
            "range": [
              5659,
              5665
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 201
              },
              "start": {
                "column": 2,
                "line": 201
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 202
          },
          "start": {
            "column": 20,
            "line": 200
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          5641,
          5643
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 200
          },
          "start": {
            "column": 6,
            "line": 200
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          5652,
          5654
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 200
          },
          "start": {
            "column": 17,
            "line": 200
          }
        }
      },
      "range": [
        5635,
        5667
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 202
        },
        "start": {
          "column": 0,
          "line": 200
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 203
                },
                "start": {
                  "column": 13,
                  "line": 203
                }
              },
              "range": [
                5681,
                5685
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "range": [
                    5683,
                    5685
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 203
                    },
                    "start": {
                      "column": 15,
                      "line": 203
                    }
                  }
                },
                "range": [
                  5683,
                  5685
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 203
                  },
                  "start": {
                    "column": 15,
                    "line": 203
                  }
                }
              }
            },
            "range": [
              5680,
              5685
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 203
              },
              "start": {
                "column": 12,
                "line": 203
              }
            }
          },
          "init": null,
          "range": [
            5680,
            5685
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 203
            },
            "start": {
              "column": 12,
              "line": 203
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        5668,
        5686
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 203
        },
        "start": {
          "column": 0,
          "line": 203
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 205
                      },
                      "start": {
                        "column": 8,
                        "line": 205
                      }
                    },
                    "range": [
                      5711,
                      5715
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "range": [
                          5713,
                          5715
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 205
                          },
                          "start": {
                            "column": 10,
                            "line": 205
                          }
                        }
                      },
                      "range": [
                        5713,
                        5715
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 205
                        },
                        "start": {
                          "column": 10,
                          "line": 205
                        }
                      }
                    }
                  },
                  "range": [
                    5709,
                    5715
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 205
                    },
                    "start": {
                      "column": 6,
                      "line": 205
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    5718,
                    5719
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 205
                    },
                    "start": {
                      "column": 15,
                      "line": 205
                    }
                  }
                },
                "range": [
                  5709,
                  5719
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 205
                  },
                  "start": {
                    "column": 6,
                    "line": 205
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              5705,
              5720
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 205
              },
              "start": {
                "column": 2,
                "line": 205
              }
            }
          }
        ],
        "range": [
          5701,
          5739
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 206
          },
          "start": {
            "column": 14,
            "line": 204
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              5691,
              5692
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 204
              },
              "start": {
                "column": 4,
                "line": 204
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isC2",
            "optional": false,
            "range": [
              5693,
              5697
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 204
              },
              "start": {
                "column": 6,
                "line": 204
              }
            }
          },
          "range": [
            5691,
            5697
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 204
            },
            "start": {
              "column": 4,
              "line": 204
            }
          }
        },
        "optional": false,
        "range": [
          5691,
          5699
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 204
          },
          "start": {
            "column": 4,
            "line": 204
          }
        }
      },
      "range": [
        5687,
        5739
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 206
        },
        "start": {
          "column": 0,
          "line": 204
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
                    5836,
                    5837
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 209
                    },
                    "start": {
                      "column": 16,
                      "line": 209
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  5829,
                  5837
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 209
                  },
                  "start": {
                    "column": 9,
                    "line": 209
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'number'",
                "value": "number",
                "range": [
                  5842,
                  5850
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 209
                  },
                  "start": {
                    "column": 22,
                    "line": 209
                  }
                }
              },
              "range": [
                5829,
                5850
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 209
                },
                "start": {
                  "column": 9,
                  "line": 209
                }
              }
            },
            "range": [
              5822,
              5851
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 209
              },
              "start": {
                "column": 2,
                "line": 209
              }
            }
          }
        ],
        "range": [
          5818,
          5853
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 210
          },
          "start": {
            "column": 77,
            "line": 208
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doNotRefineDestructuredParam",
        "optional": false,
        "range": [
          5750,
          5778
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 208
          },
          "start": {
            "column": 9,
            "line": 208
          }
        }
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  5780,
                  5781
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 208
                  },
                  "start": {
                    "column": 39,
                    "line": 208
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  5780,
                  5781
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 208
                  },
                  "start": {
                    "column": 39,
                    "line": 208
                  }
                }
              },
              "range": [
                5780,
                5781
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 208
                },
                "start": {
                  "column": 39,
                  "line": 208
                }
              }
            },
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  5783,
                  5784
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 208
                  },
                  "start": {
                    "column": 42,
                    "line": 208
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  5783,
                  5784
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 208
                  },
                  "start": {
                    "column": 42,
                    "line": 208
                  }
                }
              },
              "range": [
                5783,
                5784
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 208
                },
                "start": {
                  "column": 42,
                  "line": 208
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 208
              },
              "start": {
                "column": 44,
                "line": 208
              }
            },
            "range": [
              5785,
              5816
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      5788,
                      5789
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 208
                      },
                      "start": {
                        "column": 47,
                        "line": 208
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 208
                      },
                      "start": {
                        "column": 48,
                        "line": 208
                      }
                    },
                    "range": [
                      5789,
                      5804
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            5791,
                            5797
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 208
                            },
                            "start": {
                              "column": 50,
                              "line": 208
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            5800,
                            5804
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 208
                            },
                            "start": {
                              "column": 59,
                              "line": 208
                            }
                          }
                        }
                      ],
                      "range": [
                        5791,
                        5804
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 208
                        },
                        "start": {
                          "column": 50,
                          "line": 208
                        }
                      }
                    }
                  },
                  "range": [
                    5788,
                    5805
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 208
                    },
                    "start": {
                      "column": 47,
                      "line": 208
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      5806,
                      5807
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 208
                      },
                      "start": {
                        "column": 65,
                        "line": 208
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 208
                      },
                      "start": {
                        "column": 66,
                        "line": 208
                      }
                    },
                    "range": [
                      5807,
                      5815
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        5809,
                        5815
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 208
                        },
                        "start": {
                          "column": 68,
                          "line": 208
                        }
                      }
                    }
                  },
                  "range": [
                    5806,
                    5815
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 208
                    },
                    "start": {
                      "column": 65,
                      "line": 208
                    }
                  }
                }
              ],
              "range": [
                5787,
                5816
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 208
                },
                "start": {
                  "column": 46,
                  "line": 208
                }
              }
            }
          },
          "range": [
            5779,
            5816
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 208
            },
            "start": {
              "column": 38,
              "line": 208
            }
          }
        }
      ],
      "range": [
        5741,
        5853
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 210
        },
        "start": {
          "column": 0,
          "line": 208
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
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
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
                      5991,
                      5992
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 214
                      },
                      "start": {
                        "column": 16,
                        "line": 214
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    5984,
                    5992
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 214
                    },
                    "start": {
                      "column": 9,
                      "line": 214
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    5997,
                    6005
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 214
                    },
                    "start": {
                      "column": 22,
                      "line": 214
                    }
                  }
                },
                "range": [
                  5984,
                  6005
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 214
                  },
                  "start": {
                    "column": 9,
                    "line": 214
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      6009,
                      6010
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 214
                      },
                      "start": {
                        "column": 34,
                        "line": 214
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
                      6011,
                      6017
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 214
                      },
                      "start": {
                        "column": 36,
                        "line": 214
                      }
                    }
                  },
                  "range": [
                    6009,
                    6017
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 214
                    },
                    "start": {
                      "column": 34,
                      "line": 214
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    6020,
                    6022
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 214
                    },
                    "start": {
                      "column": 45,
                      "line": 214
                    }
                  }
                },
                "range": [
                  6009,
                  6022
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 214
                  },
                  "start": {
                    "column": 34,
                    "line": 214
                  }
                }
              },
              "range": [
                5984,
                6022
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 214
                },
                "start": {
                  "column": 9,
                  "line": 214
                }
              }
            },
            "range": [
              5977,
              6023
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 214
              },
              "start": {
                "column": 2,
                "line": 214
              }
            }
          }
        ],
        "range": [
          5973,
          6025
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 215
          },
          "start": {
            "column": 35,
            "line": 213
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isShortString",
        "optional": false,
        "range": [
          5947,
          5960
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 213
          },
          "start": {
            "column": 9,
            "line": 213
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 213
              },
              "start": {
                "column": 24,
                "line": 213
              }
            },
            "range": [
              5962,
              5971
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                5964,
                5971
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 213
                },
                "start": {
                  "column": 26,
                  "line": 213
                }
              }
            }
          },
          "range": [
            5961,
            5971
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 213
            },
            "start": {
              "column": 23,
              "line": 213
            }
          }
        }
      ],
      "range": [
        5938,
        6025
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 215
        },
        "start": {
          "column": 0,
          "line": 213
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 217
                },
                "start": {
                  "column": 15,
                  "line": 217
                }
              },
              "range": [
                6042,
                6050
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  6044,
                  6050
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 217
                  },
                  "start": {
                    "column": 17,
                    "line": 217
                  }
                }
              }
            },
            "range": [
              6039,
              6050
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 217
              },
              "start": {
                "column": 12,
                "line": 217
              }
            }
          },
          "init": null,
          "range": [
            6039,
            6050
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 217
            },
            "start": {
              "column": 12,
              "line": 217
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        6027,
        6051
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 217
        },
        "start": {
          "column": 0,
          "line": 217
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    6131,
                    6132
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 221
                    },
                    "start": {
                      "column": 13,
                      "line": 221
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
                  "name": "str",
                  "optional": false,
                  "range": [
                    6120,
                    6123
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 221
                    },
                    "start": {
                      "column": 2,
                      "line": 221
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "range": [
                    6124,
                    6130
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 221
                    },
                    "start": {
                      "column": 6,
                      "line": 221
                    }
                  }
                },
                "range": [
                  6120,
                  6130
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 221
                  },
                  "start": {
                    "column": 2,
                    "line": 221
                  }
                }
              },
              "optional": false,
              "range": [
                6120,
                6133
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 221
                },
                "start": {
                  "column": 2,
                  "line": 221
                }
              }
            },
            "range": [
              6120,
              6134
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 221
              },
              "start": {
                "column": 2,
                "line": 221
              }
            }
          }
        ],
        "range": [
          6116,
          6150
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 222
          },
          "start": {
            "column": 7,
            "line": 220
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    6091,
                    6092
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 219
                    },
                    "start": {
                      "column": 13,
                      "line": 219
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
                  "name": "str",
                  "optional": false,
                  "range": [
                    6080,
                    6083
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 219
                    },
                    "start": {
                      "column": 2,
                      "line": 219
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "range": [
                    6084,
                    6090
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 219
                    },
                    "start": {
                      "column": 6,
                      "line": 219
                    }
                  }
                },
                "range": [
                  6080,
                  6090
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 219
                  },
                  "start": {
                    "column": 2,
                    "line": 219
                  }
                }
              },
              "optional": false,
              "range": [
                6080,
                6093
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 219
                },
                "start": {
                  "column": 2,
                  "line": 219
                }
              }
            },
            "range": [
              6080,
              6094
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 219
              },
              "start": {
                "column": 2,
                "line": 219
              }
            }
          }
        ],
        "range": [
          6076,
          6110
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 220
          },
          "start": {
            "column": 24,
            "line": 218
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "range": [
              6070,
              6073
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 218
              },
              "start": {
                "column": 18,
                "line": 218
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isShortString",
          "optional": false,
          "range": [
            6056,
            6069
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 218
            },
            "start": {
              "column": 4,
              "line": 218
            }
          }
        },
        "optional": false,
        "range": [
          6056,
          6074
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 218
          },
          "start": {
            "column": 4,
            "line": 218
          }
        }
      },
      "range": [
        6052,
        6150
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 222
        },
        "start": {
          "column": 0,
          "line": 218
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
                    6211,
                    6212
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 225
                    },
                    "start": {
                      "column": 16,
                      "line": 225
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  6204,
                  6212
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 225
                  },
                  "start": {
                    "column": 9,
                    "line": 225
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  6217,
                  6225
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 225
                  },
                  "start": {
                    "column": 22,
                    "line": 225
                  }
                }
              },
              "range": [
                6204,
                6225
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 225
                },
                "start": {
                  "column": 9,
                  "line": 225
                }
              }
            },
            "range": [
              6197,
              6226
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 225
              },
              "start": {
                "column": 2,
                "line": 225
              }
            }
          }
        ],
        "range": [
          6193,
          6228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 226
          },
          "start": {
            "column": 41,
            "line": 224
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isStringFromUnknown",
        "optional": false,
        "range": [
          6161,
          6180
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 224
          },
          "start": {
            "column": 9,
            "line": 224
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 224
              },
              "start": {
                "column": 30,
                "line": 224
              }
            },
            "range": [
              6182,
              6191
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                6184,
                6191
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 224
                },
                "start": {
                  "column": 32,
                  "line": 224
                }
              }
            }
          },
          "range": [
            6181,
            6191
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 224
            },
            "start": {
              "column": 29,
              "line": 224
            }
          }
        }
      ],
      "range": [
        6152,
        6228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 226
        },
        "start": {
          "column": 0,
          "line": 224
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 230
                      },
                      "start": {
                        "column": 7,
                        "line": 230
                      }
                    },
                    "range": [
                      6308,
                      6315
                    ],
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "range": [
                        6310,
                        6315
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 230
                        },
                        "start": {
                          "column": 9,
                          "line": 230
                        }
                      }
                    }
                  },
                  "range": [
                    6307,
                    6315
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 230
                    },
                    "start": {
                      "column": 6,
                      "line": 230
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "range": [
                    6318,
                    6321
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 230
                    },
                    "start": {
                      "column": 17,
                      "line": 230
                    }
                  }
                },
                "range": [
                  6307,
                  6321
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 230
                  },
                  "start": {
                    "column": 6,
                    "line": 230
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              6303,
              6322
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 230
              },
              "start": {
                "column": 2,
                "line": 230
              }
            }
          }
        ],
        "range": [
          6299,
          6338
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 231
          },
          "start": {
            "column": 7,
            "line": 229
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    6274,
                    6275
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 228
                    },
                    "start": {
                      "column": 13,
                      "line": 228
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
                  "name": "str",
                  "optional": false,
                  "range": [
                    6263,
                    6266
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 228
                    },
                    "start": {
                      "column": 2,
                      "line": 228
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "range": [
                    6267,
                    6273
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 228
                    },
                    "start": {
                      "column": 6,
                      "line": 228
                    }
                  }
                },
                "range": [
                  6263,
                  6273
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 228
                  },
                  "start": {
                    "column": 2,
                    "line": 228
                  }
                }
              },
              "optional": false,
              "range": [
                6263,
                6276
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 228
                },
                "start": {
                  "column": 2,
                  "line": 228
                }
              }
            },
            "range": [
              6263,
              6277
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 228
              },
              "start": {
                "column": 2,
                "line": 228
              }
            }
          }
        ],
        "range": [
          6259,
          6293
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 229
          },
          "start": {
            "column": 30,
            "line": 227
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "range": [
              6253,
              6256
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 227
              },
              "start": {
                "column": 24,
                "line": 227
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isStringFromUnknown",
          "optional": false,
          "range": [
            6233,
            6252
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 227
            },
            "start": {
              "column": 4,
              "line": 227
            }
          }
        },
        "optional": false,
        "range": [
          6233,
          6257
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 227
          },
          "start": {
            "column": 4,
            "line": 227
          }
        }
      },
      "range": [
        6229,
        6338
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 231
        },
        "start": {
          "column": 0,
          "line": 227
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
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
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
                      6413,
                      6414
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 235
                      },
                      "start": {
                        "column": 17,
                        "line": 235
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    6406,
                    6414
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 235
                    },
                    "start": {
                      "column": 10,
                      "line": 235
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    6419,
                    6427
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 235
                    },
                    "start": {
                      "column": 23,
                      "line": 235
                    }
                  }
                },
                "range": [
                  6406,
                  6427
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 235
                  },
                  "start": {
                    "column": 10,
                    "line": 235
                  }
                }
              },
              "right": {
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
                      6438,
                      6439
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 235
                      },
                      "start": {
                        "column": 42,
                        "line": 235
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    6431,
                    6439
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 235
                    },
                    "start": {
                      "column": 35,
                      "line": 235
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    6444,
                    6452
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 235
                    },
                    "start": {
                      "column": 48,
                      "line": 235
                    }
                  }
                },
                "range": [
                  6431,
                  6452
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 235
                  },
                  "start": {
                    "column": 35,
                    "line": 235
                  }
                }
              },
              "range": [
                6406,
                6452
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 235
                },
                "start": {
                  "column": 10,
                  "line": 235
                }
              }
            },
            "range": [
              6398,
              6454
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 235
              },
              "start": {
                "column": 2,
                "line": 235
              }
            }
          }
        ],
        "range": [
          6394,
          6456
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 236
          },
          "start": {
            "column": 32,
            "line": 234
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumOrStr",
        "optional": false,
        "range": [
          6371,
          6381
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 234
          },
          "start": {
            "column": 9,
            "line": 234
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 234
              },
              "start": {
                "column": 21,
                "line": 234
              }
            },
            "range": [
              6383,
              6392
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                6385,
                6392
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 234
                },
                "start": {
                  "column": 23,
                  "line": 234
                }
              }
            }
          },
          "range": [
            6382,
            6392
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 234
            },
            "start": {
              "column": 20,
              "line": 234
            }
          }
        }
      ],
      "range": [
        6362,
        6456
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 236
        },
        "start": {
          "column": 0,
          "line": 234
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
            "name": "unk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 237
                },
                "start": {
                  "column": 15,
                  "line": 237
                }
              },
              "range": [
                6472,
                6481
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  6474,
                  6481
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 237
                  },
                  "start": {
                    "column": 17,
                    "line": 237
                  }
                }
              }
            },
            "range": [
              6469,
              6481
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 237
              },
              "start": {
                "column": 12,
                "line": 237
              }
            }
          },
          "init": null,
          "range": [
            6469,
            6481
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 237
            },
            "start": {
              "column": 12,
              "line": 237
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        6457,
        6482
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 237
        },
        "start": {
          "column": 0,
          "line": 237
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 239
                      },
                      "start": {
                        "column": 7,
                        "line": 239
                      }
                    },
                    "range": [
                      6513,
                      6530
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            6515,
                            6521
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 239
                            },
                            "start": {
                              "column": 9,
                              "line": 239
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            6524,
                            6530
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 239
                            },
                            "start": {
                              "column": 18,
                              "line": 239
                            }
                          }
                        }
                      ],
                      "range": [
                        6515,
                        6530
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 239
                        },
                        "start": {
                          "column": 9,
                          "line": 239
                        }
                      }
                    }
                  },
                  "range": [
                    6512,
                    6530
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 239
                    },
                    "start": {
                      "column": 6,
                      "line": 239
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unk",
                  "optional": false,
                  "range": [
                    6533,
                    6536
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 239
                    },
                    "start": {
                      "column": 27,
                      "line": 239
                    }
                  }
                },
                "range": [
                  6512,
                  6536
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 239
                  },
                  "start": {
                    "column": 6,
                    "line": 239
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              6508,
              6537
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 239
              },
              "start": {
                "column": 2,
                "line": 239
              }
            }
          }
        ],
        "range": [
          6504,
          6553
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 240
          },
          "start": {
            "column": 21,
            "line": 238
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "unk",
            "optional": false,
            "range": [
              6498,
              6501
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 238
              },
              "start": {
                "column": 15,
                "line": 238
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNumOrStr",
          "optional": false,
          "range": [
            6487,
            6497
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 238
            },
            "start": {
              "column": 4,
              "line": 238
            }
          }
        },
        "optional": false,
        "range": [
          6487,
          6502
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 238
          },
          "start": {
            "column": 4,
            "line": 238
          }
        }
      },
      "range": [
        6483,
        6553
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 240
        },
        "start": {
          "column": 0,
          "line": 238
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
                        6710,
                        6715
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 245
                        },
                        "start": {
                          "column": 14,
                          "line": 245
                        }
                      }
                    },
                    "range": [
                      6706,
                      6717
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 245
                      },
                      "start": {
                        "column": 10,
                        "line": 245
                      }
                    }
                  },
                  "range": [
                    6700,
                    6718
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 245
                    },
                    "start": {
                      "column": 4,
                      "line": 245
                    }
                  }
                }
              ],
              "range": [
                6694,
                6722
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 246
                },
                "start": {
                  "column": 25,
                  "line": 244
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  6675,
                  6676
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 244
                  },
                  "start": {
                    "column": 6,
                    "line": 244
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  6688,
                  6692
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 244
                  },
                  "start": {
                    "column": 19,
                    "line": 244
                  }
                }
              },
              "range": [
                6675,
                6692
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 244
                },
                "start": {
                  "column": 6,
                  "line": 244
                }
              }
            },
            "range": [
              6671,
              6722
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 246
              },
              "start": {
                "column": 2,
                "line": 244
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
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
                    6739,
                    6740
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 247
                    },
                    "start": {
                      "column": 16,
                      "line": 247
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  6732,
                  6740
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 247
                  },
                  "start": {
                    "column": 9,
                    "line": 247
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  6745,
                  6753
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 247
                  },
                  "start": {
                    "column": 22,
                    "line": 247
                  }
                }
              },
              "range": [
                6732,
                6753
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 247
                },
                "start": {
                  "column": 9,
                  "line": 247
                }
              }
            },
            "range": [
              6725,
              6754
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 247
              },
              "start": {
                "column": 2,
                "line": 247
              }
            }
          }
        ],
        "range": [
          6667,
          6756
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 248
          },
          "start": {
            "column": 55,
            "line": 243
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertAndPredicate",
        "optional": false,
        "range": [
          6621,
          6639
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 243
          },
          "start": {
            "column": 9,
            "line": 243
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 243
              },
              "start": {
                "column": 29,
                "line": 243
              }
            },
            "range": [
              6641,
              6665
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    6643,
                    6649
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 243
                    },
                    "start": {
                      "column": 31,
                      "line": 243
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    6652,
                    6658
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 243
                    },
                    "start": {
                      "column": 40,
                      "line": 243
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "range": [
                      6661,
                      6665
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 243
                      },
                      "start": {
                        "column": 49,
                        "line": 243
                      }
                    }
                  },
                  "range": [
                    6661,
                    6665
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 243
                    },
                    "start": {
                      "column": 49,
                      "line": 243
                    }
                  }
                }
              ],
              "range": [
                6643,
                6665
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 243
                },
                "start": {
                  "column": 31,
                  "line": 243
                }
              }
            }
          },
          "range": [
            6640,
            6665
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 243
            },
            "start": {
              "column": 28,
              "line": 243
            }
          }
        }
      ],
      "range": [
        6612,
        6756
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 248
        },
        "start": {
          "column": 0,
          "line": 243
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
            "name": "snd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 250
                },
                "start": {
                  "column": 15,
                  "line": 250
                }
              },
              "range": [
                6773,
                6797
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      6775,
                      6781
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 250
                      },
                      "start": {
                        "column": 17,
                        "line": 250
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      6784,
                      6790
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 250
                      },
                      "start": {
                        "column": 26,
                        "line": 250
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "range": [
                        6793,
                        6797
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 250
                        },
                        "start": {
                          "column": 35,
                          "line": 250
                        }
                      }
                    },
                    "range": [
                      6793,
                      6797
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 250
                      },
                      "start": {
                        "column": 35,
                        "line": 250
                      }
                    }
                  }
                ],
                "range": [
                  6775,
                  6797
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 250
                  },
                  "start": {
                    "column": 17,
                    "line": 250
                  }
                }
              }
            },
            "range": [
              6770,
              6797
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 250
              },
              "start": {
                "column": 12,
                "line": 250
              }
            }
          },
          "init": null,
          "range": [
            6770,
            6797
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 250
            },
            "start": {
              "column": 12,
              "line": 250
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        6758,
        6798
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 250
        },
        "start": {
          "column": 0,
          "line": 250
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 252
                      },
                      "start": {
                        "column": 7,
                        "line": 252
                      }
                    },
                    "range": [
                      6837,
                      6845
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        6839,
                        6845
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 252
                        },
                        "start": {
                          "column": 9,
                          "line": 252
                        }
                      }
                    }
                  },
                  "range": [
                    6836,
                    6845
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 252
                    },
                    "start": {
                      "column": 6,
                      "line": 252
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "snd",
                  "optional": false,
                  "range": [
                    6848,
                    6851
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 252
                    },
                    "start": {
                      "column": 18,
                      "line": 252
                    }
                  }
                },
                "range": [
                  6836,
                  6851
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 252
                  },
                  "start": {
                    "column": 6,
                    "line": 252
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              6832,
              6852
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 252
              },
              "start": {
                "column": 2,
                "line": 252
              }
            }
          }
        ],
        "range": [
          6828,
          6870
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 253
          },
          "start": {
            "column": 29,
            "line": 251
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "snd",
            "optional": false,
            "range": [
              6822,
              6825
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 251
              },
              "start": {
                "column": 23,
                "line": 251
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertAndPredicate",
          "optional": false,
          "range": [
            6803,
            6821
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 251
            },
            "start": {
              "column": 4,
              "line": 251
            }
          }
        },
        "optional": false,
        "range": [
          6803,
          6826
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 251
          },
          "start": {
            "column": 4,
            "line": 251
          }
        }
      },
      "range": [
        6799,
        6870
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 253
        },
        "start": {
          "column": 0,
          "line": 251
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
                    6948,
                    6949
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 256
                    },
                    "start": {
                      "column": 16,
                      "line": 256
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  6941,
                  6949
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 256
                  },
                  "start": {
                    "column": 9,
                    "line": 256
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'number'",
                "value": "number",
                "range": [
                  6954,
                  6962
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 256
                  },
                  "start": {
                    "column": 22,
                    "line": 256
                  }
                }
              },
              "range": [
                6941,
                6962
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 256
                },
                "start": {
                  "column": 9,
                  "line": 256
                }
              }
            },
            "range": [
              6934,
              6963
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 256
              },
              "start": {
                "column": 2,
                "line": 256
              }
            }
          }
        ],
        "range": [
          6930,
          6965
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 257
          },
          "start": {
            "column": 58,
            "line": 255
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumberWithThis",
        "optional": false,
        "range": [
          6881,
          6897
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 255
          },
          "start": {
            "column": 9,
            "line": 255
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 255
              },
              "start": {
                "column": 30,
                "line": 255
              }
            },
            "range": [
              6902,
              6908
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  6904,
                  6908
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 255
                  },
                  "start": {
                    "column": 32,
                    "line": 255
                  }
                }
              },
              "range": [
                6904,
                6908
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 255
                },
                "start": {
                  "column": 32,
                  "line": 255
                }
              }
            }
          },
          "range": [
            6898,
            6908
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 255
            },
            "start": {
              "column": 26,
              "line": 255
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 255
              },
              "start": {
                "column": 39,
                "line": 255
              }
            },
            "range": [
              6911,
              6928
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    6913,
                    6919
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 255
                    },
                    "start": {
                      "column": 41,
                      "line": 255
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    6922,
                    6928
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 255
                    },
                    "start": {
                      "column": 50,
                      "line": 255
                    }
                  }
                }
              ],
              "range": [
                6913,
                6928
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 255
                },
                "start": {
                  "column": 41,
                  "line": 255
                }
              }
            }
          },
          "range": [
            6910,
            6928
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 255
            },
            "start": {
              "column": 38,
              "line": 255
            }
          }
        }
      ],
      "range": [
        6872,
        6965
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 257
        },
        "start": {
          "column": 0,
          "line": 255
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
                    7016,
                    7017
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 260
                    },
                    "start": {
                      "column": 16,
                      "line": 260
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  7009,
                  7017
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 260
                  },
                  "start": {
                    "column": 9,
                    "line": 260
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'number'",
                "value": "number",
                "range": [
                  7022,
                  7030
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 260
                  },
                  "start": {
                    "column": 22,
                    "line": 260
                  }
                }
              },
              "range": [
                7009,
                7030
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 260
                },
                "start": {
                  "column": 9,
                  "line": 260
                }
              }
            },
            "range": [
              7002,
              7031
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 260
              },
              "start": {
                "column": 2,
                "line": 260
              }
            }
          }
        ],
        "range": [
          6998,
          7033
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 261
          },
          "start": {
            "column": 31,
            "line": 259
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrowFromAny",
        "optional": false,
        "range": [
          6976,
          6989
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 259
          },
          "start": {
            "column": 9,
            "line": 259
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 259
              },
              "start": {
                "column": 24,
                "line": 259
              }
            },
            "range": [
              6991,
              6996
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                6993,
                6996
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 259
                },
                "start": {
                  "column": 26,
                  "line": 259
                }
              }
            }
          },
          "range": [
            6990,
            6996
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 259
            },
            "start": {
              "column": 23,
              "line": 259
            }
          }
        }
      ],
      "range": [
        6967,
        7033
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 261
        },
        "start": {
          "column": 0,
          "line": 259
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
            "name": "noInferenceFromRest",
            "optional": false,
            "range": [
              7041,
              7060
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 263
              },
              "start": {
                "column": 6,
                "line": 263
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    7086,
                    7087
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 263
                    },
                    "start": {
                      "column": 51,
                      "line": 263
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    7088,
                    7089
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 263
                    },
                    "start": {
                      "column": 53,
                      "line": 263
                    }
                  }
                },
                "range": [
                  7086,
                  7090
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 263
                  },
                  "start": {
                    "column": 51,
                    "line": 263
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  7095,
                  7098
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 263
                  },
                  "start": {
                    "column": 60,
                    "line": 263
                  }
                }
              },
              "range": [
                7086,
                7098
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 263
                },
                "start": {
                  "column": 51,
                  "line": 263
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    7067,
                    7068
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 263
                    },
                    "start": {
                      "column": 32,
                      "line": 263
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 263
                    },
                    "start": {
                      "column": 33,
                      "line": 263
                    }
                  },
                  "range": [
                    7068,
                    7081
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"a\"",
                              "value": "a",
                              "range": [
                                7071,
                                7074
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 263
                                },
                                "start": {
                                  "column": 36,
                                  "line": 263
                                }
                              }
                            },
                            "range": [
                              7071,
                              7074
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 263
                              },
                              "start": {
                                "column": 36,
                                "line": 263
                              }
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"b\"",
                              "value": "b",
                              "range": [
                                7077,
                                7080
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 263
                                },
                                "start": {
                                  "column": 42,
                                  "line": 263
                                }
                              }
                            },
                            "range": [
                              7077,
                              7080
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 263
                              },
                              "start": {
                                "column": 42,
                                "line": 263
                              }
                            }
                          }
                        ],
                        "range": [
                          7071,
                          7080
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 263
                          },
                          "start": {
                            "column": 36,
                            "line": 263
                          }
                        }
                      }
                    ],
                    "range": [
                      7070,
                      7081
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 263
                      },
                      "start": {
                        "column": 35,
                        "line": 263
                      }
                    }
                  }
                },
                "range": [
                  7064,
                  7081
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 263
                  },
                  "start": {
                    "column": 29,
                    "line": 263
                  }
                }
              }
            ],
            "range": [
              7063,
              7098
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 263
              },
              "start": {
                "column": 28,
                "line": 263
              }
            }
          },
          "range": [
            7041,
            7098
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 263
            },
            "start": {
              "column": 6,
              "line": 263
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        7035,
        7099
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 263
        },
        "start": {
          "column": 0,
          "line": 263
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
            "name": "noInferenceFromImpossibleRest",
            "optional": false,
            "range": [
              7106,
              7135
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 264
              },
              "start": {
                "column": 6,
                "line": 264
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    7159,
                    7160
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 264
                    },
                    "start": {
                      "column": 59,
                      "line": 264
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  7152,
                  7160
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 264
                  },
                  "start": {
                    "column": 52,
                    "line": 264
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"undefined\"",
                "value": "undefined",
                "range": [
                  7165,
                  7176
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 264
                  },
                  "start": {
                    "column": 65,
                    "line": 264
                  }
                }
              },
              "range": [
                7152,
                7176
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 264
                },
                "start": {
                  "column": 52,
                  "line": 264
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    7142,
                    7143
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 264
                    },
                    "start": {
                      "column": 42,
                      "line": 264
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 264
                    },
                    "start": {
                      "column": 43,
                      "line": 264
                    }
                  },
                  "range": [
                    7143,
                    7147
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      7145,
                      7147
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 264
                      },
                      "start": {
                        "column": 45,
                        "line": 264
                      }
                    }
                  }
                },
                "range": [
                  7139,
                  7147
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 264
                  },
                  "start": {
                    "column": 39,
                    "line": 264
                  }
                }
              }
            ],
            "range": [
              7138,
              7176
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 264
              },
              "start": {
                "column": 38,
                "line": 264
              }
            }
          },
          "range": [
            7106,
            7176
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 264
            },
            "start": {
              "column": 6,
              "line": 264
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        7100,
        7177
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 264
        },
        "start": {
          "column": 0,
          "line": 264
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
                    7256,
                    7257
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 267
                    },
                    "start": {
                      "column": 16,
                      "line": 267
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  7249,
                  7257
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 267
                  },
                  "start": {
                    "column": 9,
                    "line": 267
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  7262,
                  7270
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 267
                  },
                  "start": {
                    "column": 22,
                    "line": 267
                  }
                }
              },
              "range": [
                7249,
                7270
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 267
                },
                "start": {
                  "column": 9,
                  "line": 267
                }
              }
            },
            "range": [
              7242,
              7271
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 267
              },
              "start": {
                "column": 2,
                "line": 267
              }
            }
          }
        ],
        "range": [
          7238,
          7273
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 268
          },
          "start": {
            "column": 59,
            "line": 266
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferWithRest",
        "optional": false,
        "range": [
          7188,
          7201
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 266
          },
          "start": {
            "column": 9,
            "line": 266
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 266
              },
              "start": {
                "column": 24,
                "line": 266
              }
            },
            "range": [
              7203,
              7218
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    7205,
                    7211
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 266
                    },
                    "start": {
                      "column": 26,
                      "line": 266
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    7214,
                    7218
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 266
                    },
                    "start": {
                      "column": 35,
                      "line": 266
                    }
                  }
                }
              ],
              "range": [
                7205,
                7218
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 266
                },
                "start": {
                  "column": 26,
                  "line": 266
                }
              }
            }
          },
          "range": [
            7202,
            7218
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 266
            },
            "start": {
              "column": 23,
              "line": 266
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              7223,
              7224
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 266
              },
              "start": {
                "column": 44,
                "line": 266
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 266
              },
              "start": {
                "column": 45,
                "line": 266
              }
            },
            "range": [
              7224,
              7236
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      7227,
                      7230
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 266
                      },
                      "start": {
                        "column": 48,
                        "line": 266
                      }
                    }
                  },
                  "range": [
                    7227,
                    7230
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 266
                    },
                    "start": {
                      "column": 48,
                      "line": 266
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      7232,
                      7235
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 266
                      },
                      "start": {
                        "column": 53,
                        "line": 266
                      }
                    }
                  },
                  "range": [
                    7232,
                    7235
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 266
                    },
                    "start": {
                      "column": 53,
                      "line": 266
                    }
                  }
                }
              ],
              "range": [
                7226,
                7236
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 266
                },
                "start": {
                  "column": 47,
                  "line": 266
                }
              }
            }
          },
          "range": [
            7220,
            7236
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 266
            },
            "start": {
              "column": 41,
              "line": 266
            }
          }
        }
      ],
      "range": [
        7179,
        7273
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 268
        },
        "start": {
          "column": 0,
          "line": 266
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
            "name": "foobar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 273
                },
                "start": {
                  "column": 20,
                  "line": 271
                }
              },
              "range": [
                7351,
                7418
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "range": [
                            7359,
                            7363
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 272
                            },
                            "start": {
                              "column": 6,
                              "line": 272
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 272
                            },
                            "start": {
                              "column": 10,
                              "line": 272
                            }
                          },
                          "range": [
                            7363,
                            7370
                          ],
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"foo\"",
                              "value": "foo",
                              "range": [
                                7365,
                                7370
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 272
                                },
                                "start": {
                                  "column": 12,
                                  "line": 272
                                }
                              }
                            },
                            "range": [
                              7365,
                              7370
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 272
                              },
                              "start": {
                                "column": 12,
                                "line": 272
                              }
                            }
                          }
                        },
                        "range": [
                          7359,
                          7371
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 272
                          },
                          "start": {
                            "column": 6,
                            "line": 272
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            7372,
                            7375
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 272
                            },
                            "start": {
                              "column": 19,
                              "line": 272
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 272
                            },
                            "start": {
                              "column": 22,
                              "line": 272
                            }
                          },
                          "range": [
                            7375,
                            7383
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              7377,
                              7383
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 272
                              },
                              "start": {
                                "column": 24,
                                "line": 272
                              }
                            }
                          }
                        },
                        "range": [
                          7372,
                          7383
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 272
                          },
                          "start": {
                            "column": 19,
                            "line": 272
                          }
                        }
                      }
                    ],
                    "range": [
                      7357,
                      7385
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 272
                      },
                      "start": {
                        "column": 4,
                        "line": 272
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "range": [
                            7392,
                            7396
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 273
                            },
                            "start": {
                              "column": 6,
                              "line": 273
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 273
                            },
                            "start": {
                              "column": 10,
                              "line": 273
                            }
                          },
                          "range": [
                            7396,
                            7403
                          ],
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"bar\"",
                              "value": "bar",
                              "range": [
                                7398,
                                7403
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 273
                                },
                                "start": {
                                  "column": 12,
                                  "line": 273
                                }
                              }
                            },
                            "range": [
                              7398,
                              7403
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 273
                              },
                              "start": {
                                "column": 12,
                                "line": 273
                              }
                            }
                          }
                        },
                        "range": [
                          7392,
                          7404
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 273
                          },
                          "start": {
                            "column": 6,
                            "line": 273
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            7405,
                            7408
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 273
                            },
                            "start": {
                              "column": 19,
                              "line": 273
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 273
                            },
                            "start": {
                              "column": 22,
                              "line": 273
                            }
                          },
                          "range": [
                            7408,
                            7416
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              7410,
                              7416
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 273
                              },
                              "start": {
                                "column": 24,
                                "line": 273
                              }
                            }
                          }
                        },
                        "range": [
                          7405,
                          7416
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 273
                          },
                          "start": {
                            "column": 19,
                            "line": 273
                          }
                        }
                      }
                    ],
                    "range": [
                      7390,
                      7418
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 273
                      },
                      "start": {
                        "column": 4,
                        "line": 273
                      }
                    }
                  }
                ],
                "range": [
                  7355,
                  7418
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 273
                  },
                  "start": {
                    "column": 2,
                    "line": 272
                  }
                }
              }
            },
            "range": [
              7345,
              7418
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 273
              },
              "start": {
                "column": 14,
                "line": 271
              }
            }
          },
          "init": null,
          "range": [
            7345,
            7418
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 273
            },
            "start": {
              "column": 14,
              "line": 271
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        7331,
        7419
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 273
        },
        "start": {
          "column": 0,
          "line": 271
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
            "name": "foobarPred",
            "optional": false,
            "range": [
              7427,
              7437
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 275
              },
              "start": {
                "column": 6,
                "line": 275
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fb",
                  "optional": false,
                  "range": [
                    7463,
                    7465
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 275
                    },
                    "start": {
                      "column": 42,
                      "line": 275
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    7466,
                    7470
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 275
                    },
                    "start": {
                      "column": 45,
                      "line": 275
                    }
                  }
                },
                "range": [
                  7463,
                  7470
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 275
                  },
                  "start": {
                    "column": 42,
                    "line": 275
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  7475,
                  7480
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 275
                  },
                  "start": {
                    "column": 54,
                    "line": 275
                  }
                }
              },
              "range": [
                7463,
                7480
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 275
                },
                "start": {
                  "column": 42,
                  "line": 275
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 275
                    },
                    "start": {
                      "column": 22,
                      "line": 275
                    }
                  },
                  "range": [
                    7443,
                    7458
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foobar",
                      "optional": false,
                      "range": [
                        7452,
                        7458
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 275
                        },
                        "start": {
                          "column": 31,
                          "line": 275
                        }
                      }
                    },
                    "range": [
                      7445,
                      7458
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 275
                      },
                      "start": {
                        "column": 24,
                        "line": 275
                      }
                    }
                  }
                },
                "range": [
                  7441,
                  7458
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 275
                  },
                  "start": {
                    "column": 20,
                    "line": 275
                  }
                }
              }
            ],
            "range": [
              7440,
              7480
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 275
              },
              "start": {
                "column": 19,
                "line": 275
              }
            }
          },
          "range": [
            7427,
            7480
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 275
            },
            "start": {
              "column": 6,
              "line": 275
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        7421,
        7481
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 275
        },
        "start": {
          "column": 0,
          "line": 275
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foobar",
                "optional": false,
                "range": [
                  7510,
                  7516
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 277
                  },
                  "start": {
                    "column": 2,
                    "line": 277
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
                  7517,
                  7520
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 277
                  },
                  "start": {
                    "column": 9,
                    "line": 277
                  }
                }
              },
              "range": [
                7510,
                7520
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 277
                },
                "start": {
                  "column": 2,
                  "line": 277
                }
              }
            },
            "range": [
              7510,
              7521
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 277
              },
              "start": {
                "column": 2,
                "line": 277
              }
            }
          }
        ],
        "range": [
          7506,
          7523
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 278
          },
          "start": {
            "column": 24,
            "line": 276
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foobar",
            "optional": false,
            "range": [
              7497,
              7503
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 276
              },
              "start": {
                "column": 15,
                "line": 276
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foobarPred",
          "optional": false,
          "range": [
            7486,
            7496
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 276
            },
            "start": {
              "column": 4,
              "line": 276
            }
          }
        },
        "optional": false,
        "range": [
          7486,
          7504
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 276
          },
          "start": {
            "column": 4,
            "line": 276
          }
        }
      },
      "range": [
        7482,
        7523
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 278
        },
        "start": {
          "column": 0,
          "line": 276
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
            "name": "arrTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 281
                },
                "start": {
                  "column": 13,
                  "line": 281
                }
              },
              "range": [
                7594,
                7609
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    7601,
                    7609
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        7602,
                        7608
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 281
                        },
                        "start": {
                          "column": 21,
                          "line": 281
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 281
                    },
                    "start": {
                      "column": 20,
                      "line": 281
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    7596,
                    7601
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 281
                    },
                    "start": {
                      "column": 15,
                      "line": 281
                    }
                  }
                },
                "range": [
                  7596,
                  7609
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 281
                  },
                  "start": {
                    "column": 15,
                    "line": 281
                  }
                }
              }
            },
            "range": [
              7587,
              7609
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 281
              },
              "start": {
                "column": 6,
                "line": 281
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        7646,
                        7647
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 282
                        },
                        "start": {
                          "column": 10,
                          "line": 282
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        7651,
                        7655
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 282
                        },
                        "start": {
                          "column": 15,
                          "line": 282
                        }
                      }
                    },
                    "range": [
                      7646,
                      7655
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 282
                      },
                      "start": {
                        "column": 10,
                        "line": 282
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      7667,
                      7674
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 282
                      },
                      "start": {
                        "column": 31,
                        "line": 282
                      }
                    }
                  },
                  "range": [
                    7645,
                    7674
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 282
                    },
                    "start": {
                      "column": 9,
                      "line": 282
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      7639,
                      7640
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 282
                      },
                      "start": {
                        "column": 3,
                        "line": 282
                      }
                    }
                  }
                ],
                "range": [
                  7638,
                  7674
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 282
                  },
                  "start": {
                    "column": 2,
                    "line": 282
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      7613,
                      7614
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 281
                      },
                      "start": {
                        "column": 32,
                        "line": 281
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      7616,
                      7617
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 281
                      },
                      "start": {
                        "column": 35,
                        "line": 281
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      7619,
                      7623
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 281
                      },
                      "start": {
                        "column": 38,
                        "line": 281
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      7625,
                      7626
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 281
                      },
                      "start": {
                        "column": 44,
                        "line": 281
                      }
                    }
                  }
                ],
                "range": [
                  7612,
                  7627
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 281
                  },
                  "start": {
                    "column": 31,
                    "line": 281
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  7628,
                  7634
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 281
                  },
                  "start": {
                    "column": 47,
                    "line": 281
                  }
                }
              },
              "range": [
                7612,
                7634
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 281
                },
                "start": {
                  "column": 31,
                  "line": 281
                }
              }
            },
            "optional": false,
            "range": [
              7612,
              7677
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 283
              },
              "start": {
                "column": 31,
                "line": 281
              }
            }
          },
          "range": [
            7587,
            7677
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 283
            },
            "start": {
              "column": 6,
              "line": 281
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        7581,
        7678
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 283
        },
        "start": {
          "column": 0,
          "line": 281
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
                  "name": "rv",
                  "optional": false,
                  "range": [
                    7725,
                    7727
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 286
                    },
                    "start": {
                      "column": 8,
                      "line": 286
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      7730,
                      7731
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 286
                      },
                      "start": {
                        "column": 13,
                        "line": 286
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      7736,
                      7738
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 286
                      },
                      "start": {
                        "column": 19,
                        "line": 286
                      }
                    }
                  },
                  "range": [
                    7730,
                    7738
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 286
                    },
                    "start": {
                      "column": 13,
                      "line": 286
                    }
                  }
                },
                "range": [
                  7725,
                  7738
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 286
                  },
                  "start": {
                    "column": 8,
                    "line": 286
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              7719,
              7739
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 286
              },
              "start": {
                "column": 2,
                "line": 286
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "rv",
                "optional": false,
                "range": [
                  7749,
                  7751
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 287
                  },
                  "start": {
                    "column": 9,
                    "line": 287
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  7762,
                  7769
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 287
                  },
                  "start": {
                    "column": 22,
                    "line": 287
                  }
                }
              },
              "range": [
                7749,
                7769
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 287
                },
                "start": {
                  "column": 9,
                  "line": 287
                }
              }
            },
            "range": [
              7742,
              7770
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 287
              },
              "start": {
                "column": 2,
                "line": 287
              }
            }
          }
        ],
        "range": [
          7715,
          7772
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 288
          },
          "start": {
            "column": 35,
            "line": 285
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "range": [
          7689,
          7702
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 285
          },
          "start": {
            "column": 9,
            "line": 285
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 285
              },
              "start": {
                "column": 24,
                "line": 285
              }
            },
            "range": [
              7704,
              7713
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                7706,
                7713
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 285
                },
                "start": {
                  "column": 26,
                  "line": 285
                }
              }
            }
          },
          "range": [
            7703,
            7713
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 285
            },
            "start": {
              "column": 23,
              "line": 285
            }
          }
        }
      ],
      "range": [
        7680,
        7772
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 288
        },
        "start": {
          "column": 0,
          "line": 285
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "range": [
          7835,
          7841
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 291
          },
          "start": {
            "column": 5,
            "line": 291
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "breath",
              "optional": false,
              "range": [
                7848,
                7854
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 292
                },
                "start": {
                  "column": 2,
                  "line": 292
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 292
                },
                "start": {
                  "column": 8,
                  "line": 292
                }
              },
              "range": [
                7854,
                7860
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    7856,
                    7860
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 292
                    },
                    "start": {
                      "column": 10,
                      "line": 292
                    }
                  }
                },
                "range": [
                  7856,
                  7860
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 292
                  },
                  "start": {
                    "column": 10,
                    "line": 292
                  }
                }
              }
            },
            "range": [
              7848,
              7861
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 292
              },
              "start": {
                "column": 2,
                "line": 292
              }
            }
          }
        ],
        "range": [
          7844,
          7863
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 293
          },
          "start": {
            "column": 14,
            "line": 291
          }
        }
      },
      "range": [
        7830,
        7864
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 293
        },
        "start": {
          "column": 0,
          "line": 291
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rock",
        "optional": false,
        "range": [
          7871,
          7875
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 295
          },
          "start": {
            "column": 5,
            "line": 295
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "breath",
              "optional": false,
              "range": [
                7882,
                7888
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 296
                },
                "start": {
                  "column": 2,
                  "line": 296
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 296
                },
                "start": {
                  "column": 8,
                  "line": 296
                }
              },
              "range": [
                7888,
                7895
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    7890,
                    7895
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 296
                    },
                    "start": {
                      "column": 10,
                      "line": 296
                    }
                  }
                },
                "range": [
                  7890,
                  7895
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 296
                  },
                  "start": {
                    "column": 10,
                    "line": 296
                  }
                }
              }
            },
            "range": [
              7882,
              7896
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 296
              },
              "start": {
                "column": 2,
                "line": 296
              }
            }
          }
        ],
        "range": [
          7878,
          7898
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 297
          },
          "start": {
            "column": 12,
            "line": 295
          }
        }
      },
      "range": [
        7866,
        7899
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 297
        },
        "start": {
          "column": 0,
          "line": 295
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "range": [
          7906,
          7915
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 299
          },
          "start": {
            "column": 5,
            "line": 299
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "range": [
                7918,
                7924
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 299
                },
                "start": {
                  "column": 17,
                  "line": 299
                }
              }
            },
            "range": [
              7918,
              7924
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 299
              },
              "start": {
                "column": 17,
                "line": 299
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rock",
              "optional": false,
              "range": [
                7927,
                7931
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 299
                },
                "start": {
                  "column": 26,
                  "line": 299
                }
              }
            },
            "range": [
              7927,
              7931
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 299
              },
              "start": {
                "column": 26,
                "line": 299
              }
            }
          }
        ],
        "range": [
          7918,
          7931
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 299
          },
          "start": {
            "column": 17,
            "line": 299
          }
        }
      },
      "range": [
        7901,
        7932
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 299
        },
        "start": {
          "column": 0,
          "line": 299
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "range": [
                  8006,
                  8015
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 302
                  },
                  "start": {
                    "column": 9,
                    "line": 302
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "breath",
                "optional": false,
                "range": [
                  8016,
                  8022
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 302
                  },
                  "start": {
                    "column": 19,
                    "line": 302
                  }
                }
              },
              "range": [
                8006,
                8022
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 302
                },
                "start": {
                  "column": 9,
                  "line": 302
                }
              }
            },
            "range": [
              7999,
              8022
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 302
              },
              "start": {
                "column": 2,
                "line": 302
              }
            }
          }
        ],
        "range": [
          7995,
          8024
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 303
          },
          "start": {
            "column": 61,
            "line": 301
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAnimal",
        "optional": false,
        "range": [
          7943,
          7951
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 301
          },
          "start": {
            "column": 9,
            "line": 301
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "something",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 301
              },
              "start": {
                "column": 27,
                "line": 301
              }
            },
            "range": [
              7961,
              7972
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "range": [
                  7963,
                  7972
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 301
                  },
                  "start": {
                    "column": 29,
                    "line": 301
                  }
                }
              },
              "range": [
                7963,
                7972
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 301
                },
                "start": {
                  "column": 29,
                  "line": 301
                }
              }
            }
          },
          "range": [
            7952,
            7972
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 301
            },
            "start": {
              "column": 18,
              "line": 301
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 301
          },
          "start": {
            "column": 39,
            "line": 301
          }
        },
        "range": [
          7973,
          7994
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "range": [
              7975,
              7984
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 301
              },
              "start": {
                "column": 41,
                "line": 301
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 301
              },
              "start": {
                "column": 54,
                "line": 301
              }
            },
            "range": [
              7988,
              7994
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "range": [
                  7988,
                  7994
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 301
                  },
                  "start": {
                    "column": 54,
                    "line": 301
                  }
                }
              },
              "range": [
                7988,
                7994
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 301
                },
                "start": {
                  "column": 54,
                  "line": 301
                }
              }
            }
          },
          "range": [
            7975,
            7994
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 301
            },
            "start": {
              "column": 41,
              "line": 301
            }
          }
        }
      },
      "range": [
        7934,
        8024
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 303
        },
        "start": {
          "column": 0,
          "line": 301
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    8078,
                    8079
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 306
                    },
                    "start": {
                      "column": 18,
                      "line": 306
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isAnimal",
                "optional": false,
                "range": [
                  8069,
                  8077
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 306
                  },
                  "start": {
                    "column": 9,
                    "line": 306
                  }
                }
              },
              "optional": false,
              "range": [
                8069,
                8080
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 306
                },
                "start": {
                  "column": 9,
                  "line": 306
                }
              }
            },
            "range": [
              8062,
              8080
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 306
              },
              "start": {
                "column": 2,
                "line": 306
              }
            }
          }
        ],
        "range": [
          8058,
          8082
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 307
          },
          "start": {
            "column": 32,
            "line": 305
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positive",
        "optional": false,
        "range": [
          8035,
          8043
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 305
          },
          "start": {
            "column": 9,
            "line": 305
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 305
              },
              "start": {
                "column": 19,
                "line": 305
              }
            },
            "range": [
              8045,
              8056
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "range": [
                  8047,
                  8056
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 305
                  },
                  "start": {
                    "column": 21,
                    "line": 305
                  }
                }
              },
              "range": [
                8047,
                8056
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 305
                },
                "start": {
                  "column": 21,
                  "line": 305
                }
              }
            }
          },
          "range": [
            8044,
            8056
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 305
            },
            "start": {
              "column": 18,
              "line": 305
            }
          }
        }
      ],
      "range": [
        8026,
        8082
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 307
        },
        "start": {
          "column": 0,
          "line": 305
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
              "type": "UnaryExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      8138,
                      8139
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 310
                      },
                      "start": {
                        "column": 19,
                        "line": 310
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isAnimal",
                  "optional": false,
                  "range": [
                    8129,
                    8137
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 310
                    },
                    "start": {
                      "column": 10,
                      "line": 310
                    }
                  }
                },
                "optional": false,
                "range": [
                  8129,
                  8140
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 310
                  },
                  "start": {
                    "column": 10,
                    "line": 310
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                8128,
                8140
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 310
                },
                "start": {
                  "column": 9,
                  "line": 310
                }
              }
            },
            "range": [
              8121,
              8140
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 310
              },
              "start": {
                "column": 2,
                "line": 310
              }
            }
          }
        ],
        "range": [
          8116,
          8142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 311
          },
          "start": {
            "column": 32,
            "line": 309
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negative",
        "optional": false,
        "range": [
          8093,
          8101
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 309
          },
          "start": {
            "column": 9,
            "line": 309
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 309
              },
              "start": {
                "column": 19,
                "line": 309
              }
            },
            "range": [
              8103,
              8114
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "range": [
                  8105,
                  8114
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 309
                  },
                  "start": {
                    "column": 21,
                    "line": 309
                  }
                }
              },
              "range": [
                8105,
                8114
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 309
                },
                "start": {
                  "column": 21,
                  "line": 309
                }
              }
            }
          },
          "range": [
            8102,
            8114
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 309
            },
            "start": {
              "column": 18,
              "line": 309
            }
          }
        }
      ],
      "range": [
        8084,
        8142
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 311
        },
        "start": {
          "column": 0,
          "line": 309
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 312
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
