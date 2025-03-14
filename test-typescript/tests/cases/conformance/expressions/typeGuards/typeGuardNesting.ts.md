__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    822
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                29
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      15,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      22,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 22,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  15,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
                  "name": "label",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    },
                    "range": [
                      128,
                      136
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        130,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    123,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 5,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      185,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 3
                      },
                      "start": {
                        "column": 67,
                        "line": 3
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      173,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 3
                      },
                      "start": {
                        "column": 55,
                        "line": 3
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          147,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        140,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        161,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 3
                        },
                        "start": {
                          "column": 43,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      140,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    139,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  123,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              119,
              194
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 3
              },
              "start": {
                "column": 1,
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
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    },
                    "range": [
                      204,
                      213
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        206,
                        213
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
                    }
                  },
                  "range": [
                    200,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      263,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 4
                      },
                      "start": {
                        "column": 68,
                        "line": 4
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      251,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 4
                      },
                      "start": {
                        "column": 56,
                        "line": 4
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          224,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 4
                          },
                          "start": {
                            "column": 29,
                            "line": 4
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        217,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'boolean'",
                      "value": "boolean",
                      "range": [
                        238,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      217,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    216,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "range": [
                  200,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              196,
              269
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 4
              },
              "start": {
                "column": 1,
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
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    },
                    "range": [
                      281,
                      289
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        283,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    275,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      339,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 5
                      },
                      "start": {
                        "column": 69,
                        "line": 5
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      327,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 5
                      },
                      "start": {
                        "column": 57,
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          300,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 5
                          },
                          "start": {
                            "column": 30,
                            "line": 5
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        293,
                        309
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'boolean'",
                      "value": "boolean",
                      "range": [
                        314,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 5
                        },
                        "start": {
                          "column": 44,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      293,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    292,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                "range": [
                  275,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              271,
              348
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 5
              },
              "start": {
                "column": 1,
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
                  "name": "bool2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    },
                    "range": [
                      359,
                      368
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        361,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    354,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      417,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 6
                      },
                      "start": {
                        "column": 68,
                        "line": 6
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      405,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 6
                      },
                      "start": {
                        "column": 56,
                        "line": 6
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          379,
                          388
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 6
                          },
                          "start": {
                            "column": 30,
                            "line": 6
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        372,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        393,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      372,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    371,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "range": [
                  354,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              350,
              423
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 6
              }
            }
          }
        ],
        "range": [
          116,
          425
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 85,
            "line": 2
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
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
                "name": "strOrBool",
                "optional": false,
                "range": [
                  43,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                36,
                52
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'boolean'",
              "value": "boolean",
              "range": [
                57,
                66
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "range": [
              36,
              66
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 2
              },
              "start": {
                "column": 5,
                "line": 2
              }
            }
          },
          "right": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrBool",
              "optional": false,
              "range": [
                71,
                80
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 2
                },
                "start": {
                  "column": 40,
                  "line": 2
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              70,
              80
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 2
              },
              "start": {
                "column": 39,
                "line": 2
              }
            }
          },
          "range": [
            36,
            80
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 2
            },
            "start": {
              "column": 5,
              "line": 2
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
              "name": "strOrBool",
              "optional": false,
              "range": [
                92,
                101
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 2
                },
                "start": {
                  "column": 61,
                  "line": 2
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              85,
              101
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 2
              },
              "start": {
                "column": 54,
                "line": 2
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "'string'",
            "value": "string",
            "range": [
              106,
              114
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 2
              },
              "start": {
                "column": 75,
                "line": 2
              }
            }
          },
          "range": [
            85,
            114
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 2
            },
            "start": {
              "column": 54,
              "line": 2
            }
          }
        },
        "range": [
          35,
          114
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 2
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "range": [
        31,
        425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "label",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    },
                    "range": [
                      524,
                      532
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        526,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    519,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      581,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 10
                      },
                      "start": {
                        "column": 67,
                        "line": 10
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      569,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 10
                      },
                      "start": {
                        "column": 55,
                        "line": 10
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          543,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 10
                          },
                          "start": {
                            "column": 29,
                            "line": 10
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        536,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 10
                        },
                        "start": {
                          "column": 22,
                          "line": 10
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        557,
                        565
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 10
                        },
                        "start": {
                          "column": 43,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      536,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    535,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  }
                },
                "range": [
                  519,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              515,
              590
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 10
              },
              "start": {
                "column": 1,
                "line": 10
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
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    },
                    "range": [
                      600,
                      609
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        602,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 11
                        },
                        "start": {
                          "column": 11,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    596,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      659,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 11
                      },
                      "start": {
                        "column": 68,
                        "line": 11
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      647,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 11
                      },
                      "start": {
                        "column": 56,
                        "line": 11
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          620,
                          629
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 11
                          },
                          "start": {
                            "column": 29,
                            "line": 11
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        613,
                        629
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'boolean'",
                      "value": "boolean",
                      "range": [
                        634,
                        643
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 11
                        },
                        "start": {
                          "column": 43,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      613,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    612,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  }
                },
                "range": [
                  596,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              592,
              665
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 11
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
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    },
                    "range": [
                      677,
                      685
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        679,
                        685
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    671,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      735,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 12
                      },
                      "start": {
                        "column": 69,
                        "line": 12
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      723,
                      732
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 12
                      },
                      "start": {
                        "column": 57,
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          696,
                          705
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 12
                          },
                          "start": {
                            "column": 30,
                            "line": 12
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        689,
                        705
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'boolean'",
                      "value": "boolean",
                      "range": [
                        710,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 12
                        },
                        "start": {
                          "column": 44,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      689,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    688,
                    743
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 12
                    },
                    "start": {
                      "column": 22,
                      "line": 12
                    }
                  }
                },
                "range": [
                  671,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              667,
              744
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 12
              },
              "start": {
                "column": 1,
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
                  "name": "bool2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 10,
                        "line": 13
                      }
                    },
                    "range": [
                      755,
                      764
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        757,
                        764
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    750,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      813,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 13
                      },
                      "start": {
                        "column": 68,
                        "line": 13
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false,
                    "range": [
                      801,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 13
                      },
                      "start": {
                        "column": 56,
                        "line": 13
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
                        "name": "strOrBool",
                        "optional": false,
                        "range": [
                          775,
                          784
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 30,
                            "line": 13
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        768,
                        784
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 23,
                          "line": 13
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        789,
                        797
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 13
                        },
                        "start": {
                          "column": 44,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      768,
                      797
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    767,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 13
                    },
                    "start": {
                      "column": 22,
                      "line": 13
                    }
                  }
                },
                "range": [
                  750,
                  818
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 13
                  },
                  "start": {
                    "column": 5,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              746,
              819
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          }
        ],
        "range": [
          512,
          821
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 85,
            "line": 9
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
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
                "name": "strOrBool",
                "optional": false,
                "range": [
                  439,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                432,
                448
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'string'",
              "value": "string",
              "range": [
                453,
                461
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 26,
                  "line": 9
                }
              }
            },
            "range": [
              432,
              461
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 5,
                "line": 9
              }
            }
          },
          "right": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrBool",
              "optional": false,
              "range": [
                466,
                475
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 9
                },
                "start": {
                  "column": 39,
                  "line": 9
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              465,
              475
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 9
              },
              "start": {
                "column": 38,
                "line": 9
              }
            }
          },
          "range": [
            432,
            475
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 9
            },
            "start": {
              "column": 5,
              "line": 9
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
              "name": "strOrBool",
              "optional": false,
              "range": [
                487,
                496
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 9
                },
                "start": {
                  "column": 60,
                  "line": 9
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              480,
              496
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 9
              },
              "start": {
                "column": 53,
                "line": 9
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "'boolean'",
            "value": "boolean",
            "range": [
              501,
              510
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 9
              },
              "start": {
                "column": 74,
                "line": 9
              }
            }
          },
          "range": [
            480,
            510
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 9
            },
            "start": {
              "column": 53,
              "line": 9
            }
          }
        },
        "range": [
          431,
          510
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        427,
        821
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
