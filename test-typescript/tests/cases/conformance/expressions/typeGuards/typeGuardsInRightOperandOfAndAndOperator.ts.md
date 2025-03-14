__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    144,
    1826
  ],
  "body": [
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
                      197,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    190,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    203,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 24,
                      "line": 4
                    }
                  }
                },
                "range": [
                  190,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      215,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
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
                      217,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    215,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    228,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 4
                    },
                    "start": {
                      "column": 49,
                      "line": 4
                    }
                  }
                },
                "range": [
                  215,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 4
                  },
                  "start": {
                    "column": 36,
                    "line": 4
                  }
                }
              },
              "range": [
                190,
                230
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              183,
              231
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          177,
          243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 33,
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
        "name": "foo",
        "optional": false,
        "range": [
          153,
          156
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            },
            "range": [
              158,
              175
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    160,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    169,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                160,
                175
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            }
          },
          "range": [
            157,
            175
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        144,
        243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
                      336,
                      337
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
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    329,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    342,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
                    }
                  }
                },
                "range": [
                  329,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      356,
                      357
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
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      360,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 42,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    356,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    367,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 8
                    },
                    "start": {
                      "column": 49,
                      "line": 8
                    }
                  }
                },
                "range": [
                  355,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 8
                  },
                  "start": {
                    "column": 37,
                    "line": 8
                  }
                }
              },
              "range": [
                329,
                369
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              322,
              370
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          278,
          391
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 34,
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
        "name": "foo2",
        "optional": false,
        "range": [
          253,
          257
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
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            },
            "range": [
              259,
              276
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    261,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    270,
                    276
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
                }
              ],
              "range": [
                261,
                276
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            }
          },
          "range": [
            258,
            276
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
      "range": [
        244,
        391
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
                      508,
                      509
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
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    501,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    514,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 12
                    },
                    "start": {
                      "column": 24,
                      "line": 12
                    }
                  }
                },
                "range": [
                  501,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      528,
                      529
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
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      532,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 12
                      },
                      "start": {
                        "column": 42,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    528,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    544,
                    545
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 12
                    },
                    "start": {
                      "column": 54,
                      "line": 12
                    }
                  }
                },
                "range": [
                  527,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 12
                  },
                  "start": {
                    "column": 37,
                    "line": 12
                  }
                }
              },
              "range": [
                501,
                546
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              494,
              547
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          426,
          568
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 34,
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
        "name": "foo3",
        "optional": false,
        "range": [
          401,
          405
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
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
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            },
            "range": [
              407,
              424
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    409,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    418,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                409,
                424
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            }
          },
          "range": [
            406,
            424
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        }
      ],
      "range": [
        392,
        568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
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
                        633,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 18,
                          "line": 15
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      626,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      639,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    626,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "right": {
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
                        695,
                        696
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
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      688,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    "raw": "\"number\"",
                    "value": "number",
                    "range": [
                      701,
                      709
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    688,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "range": [
                  626,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  742,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "range": [
                626,
                743
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              619,
              744
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
          }
        ],
        "range": [
          613,
          759
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 44,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          578,
          582
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
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
                "column": 42,
                "line": 14
              },
              "start": {
                "column": 15,
                "line": 14
              }
            },
            "range": [
              584,
              611
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    586,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    595,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    604,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 14
                    },
                    "start": {
                      "column": 35,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                586,
                611
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              }
            }
          },
          "range": [
            583,
            611
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "range": [
        569,
        759
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    },
                    "range": [
                      910,
                      928
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            912,
                            918
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 21
                            },
                            "start": {
                              "column": 11,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            921,
                            928
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        912,
                        928
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    909,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": null,
                "range": [
                  909,
                  928
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              905,
              929
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
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
                      948,
                      949
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    941,
                    949
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    954,
                    962
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
                    }
                  }
                },
                "range": [
                  941,
                  962
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1005,
                      1006
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1009,
                      1010
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 23
                      },
                      "start": {
                        "column": 17,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    1005,
                    1010
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "right": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
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
                          1023,
                          1024
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 23
                          },
                          "start": {
                            "column": 31,
                            "line": 23
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1016,
                        1024
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 23
                        },
                        "start": {
                          "column": 24,
                          "line": 23
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        1029,
                        1037
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 23
                        },
                        "start": {
                          "column": 37,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      1016,
                      1037
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1070,
                      1071
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    1016,
                    1071
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                },
                "range": [
                  1004,
                  1072
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 12,
                    "line": 23
                  }
                }
              },
              "range": [
                941,
                1073
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              934,
              1074
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          804,
          1089
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 44,
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
        "name": "foo5",
        "optional": false,
        "range": [
          769,
          773
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
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
                "column": 42,
                "line": 19
              },
              "start": {
                "column": 15,
                "line": 19
              }
            },
            "range": [
              775,
              802
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    777,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    786,
                    792
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
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    795,
                    802
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 19
                    },
                    "start": {
                      "column": 35,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                777,
                802
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            }
          },
          "range": [
            774,
            802
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "range": [
        760,
        1089
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
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
                      1242,
                      1243
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1235,
                    1243
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 11,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1248,
                    1256
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                },
                "range": [
                  1235,
                  1256
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1373,
                      1374
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 31
                      },
                      "start": {
                        "column": 10,
                        "line": 31
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      1379,
                      1381
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 16,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1373,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 31
                    },
                    "start": {
                      "column": 10,
                      "line": 31
                    }
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1350,
                    1351
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
                        1305,
                        1306
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 29
                        },
                        "start": {
                          "column": 19,
                          "line": 29
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1298,
                      1306
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 29
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"number\"",
                    "value": "number",
                    "range": [
                      1311,
                      1319
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 29
                      },
                      "start": {
                        "column": 25,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    1298,
                    1319
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 29
                    },
                    "start": {
                      "column": 12,
                      "line": 29
                    }
                  }
                },
                "range": [
                  1298,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 12,
                    "line": 29
                  }
                }
              },
              "range": [
                1235,
                1382
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "range": [
              1228,
              1382
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          1134,
          1395
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 44,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          1099,
          1103
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
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
                "column": 42,
                "line": 26
              },
              "start": {
                "column": 15,
                "line": 26
              }
            },
            "range": [
              1105,
              1132
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1107,
                    1113
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 26
                    },
                    "start": {
                      "column": 17,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1116,
                    1122
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 26
                    },
                    "start": {
                      "column": 26,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1125,
                    1132
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 26
                    },
                    "start": {
                      "column": 35,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                1107,
                1132
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            }
          },
          "range": [
            1104,
            1132
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 26
            },
            "start": {
              "column": 14,
              "line": 26
            }
          }
        }
      ],
      "range": [
        1090,
        1395
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 26
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 9,
                        "line": 34
                      }
                    },
                    "range": [
                      1451,
                      1477
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1453,
                            1459
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 34
                            },
                            "start": {
                              "column": 11,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1461,
                            1468
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 34
                            },
                            "start": {
                              "column": 19,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1471,
                            1477
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 34
                            },
                            "start": {
                              "column": 29,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        1453,
                        1477
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    1450,
                    1477
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "init": null,
                "range": [
                  1450,
                  1477
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1446,
              1478
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 34
              },
              "start": {
                "column": 4,
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 35
                      },
                      "start": {
                        "column": 9,
                        "line": 35
                      }
                    },
                    "range": [
                      1488,
                      1514
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1490,
                            1496
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 35
                            },
                            "start": {
                              "column": 11,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1498,
                            1505
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 35
                            },
                            "start": {
                              "column": 19,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1508,
                            1514
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 35
                            },
                            "start": {
                              "column": 29,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1490,
                        1514
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    1487,
                    1514
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": null,
                "range": [
                  1487,
                  1514
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1483,
              1515
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
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
                      1568,
                      1569
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 37
                      },
                      "start": {
                        "column": 18,
                        "line": 37
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1561,
                    1569
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 37
                    },
                    "start": {
                      "column": 11,
                      "line": 37
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1574,
                    1582
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 37
                    },
                    "start": {
                      "column": 24,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1561,
                  1582
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 37
                  },
                  "start": {
                    "column": 11,
                    "line": 37
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      1596,
                      1597
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1600,
                      1601
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1596,
                    1601
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 38
                    },
                    "start": {
                      "column": 13,
                      "line": 38
                    }
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1781,
                          1782
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 43
                          },
                          "start": {
                            "column": 12,
                            "line": 43
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1785,
                          1786
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 43
                          },
                          "start": {
                            "column": 16,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        1781,
                        1786
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 43
                        },
                        "start": {
                          "column": 12,
                          "line": 43
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1791,
                            1792
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 43
                            },
                            "start": {
                              "column": 22,
                              "line": 43
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "range": [
                            1793,
                            1801
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 43
                            },
                            "start": {
                              "column": 24,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1791,
                          1801
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 43
                          },
                          "start": {
                            "column": 22,
                            "line": 43
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1791,
                        1803
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 43
                        },
                        "start": {
                          "column": 22,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      1780,
                      1803
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 43
                      },
                      "start": {
                        "column": 11,
                        "line": 43
                      }
                    }
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1698,
                          1699
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 41
                          },
                          "start": {
                            "column": 12,
                            "line": 41
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1702,
                          1704
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 41
                          },
                          "start": {
                            "column": 16,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        1698,
                        1704
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 41
                        },
                        "start": {
                          "column": 12,
                          "line": 41
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1709,
                            1710
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 41
                            },
                            "start": {
                              "column": 23,
                              "line": 41
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "range": [
                            1711,
                            1719
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 41
                            },
                            "start": {
                              "column": 25,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1709,
                          1719
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 41
                          },
                          "start": {
                            "column": 23,
                            "line": 41
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1709,
                        1721
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 41
                        },
                        "start": {
                          "column": 23,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1697,
                      1721
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 41
                      },
                      "start": {
                        "column": 11,
                        "line": 41
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
                          1642,
                          1643
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 39
                          },
                          "start": {
                            "column": 19,
                            "line": 39
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1635,
                        1643
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 39
                        },
                        "start": {
                          "column": 12,
                          "line": 39
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        1648,
                        1656
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 39
                        },
                        "start": {
                          "column": 25,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1635,
                      1656
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 39
                      },
                      "start": {
                        "column": 12,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1635,
                    1804
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 43
                    },
                    "start": {
                      "column": 12,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1595,
                  1805
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 43
                  },
                  "start": {
                    "column": 12,
                    "line": 38
                  }
                }
              },
              "range": [
                1561,
                1806
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 43
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "range": [
              1554,
              1807
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          1440,
          1825
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 44,
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
        "name": "foo7",
        "optional": false,
        "range": [
          1405,
          1409
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
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
                "column": 42,
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 33
              }
            },
            "range": [
              1411,
              1438
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1413,
                    1419
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 17,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1422,
                    1428
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1431,
                    1438
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 33
                    },
                    "start": {
                      "column": 35,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                1413,
                1438
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          },
          "range": [
            1410,
            1438
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "range": [
        1396,
        1825
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
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
      "column": 0,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
