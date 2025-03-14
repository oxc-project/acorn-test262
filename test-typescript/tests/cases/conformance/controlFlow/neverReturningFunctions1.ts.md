__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    5060
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "range": [
                    61,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  55,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "range": [
                51,
                69
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "range": [
              45,
              70
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          39,
          72
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 39,
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
        "name": "fail",
        "optional": false,
        "range": [
          9,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              30
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          },
          "range": [
            14,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 31,
            "line": 1
          }
        },
        "range": [
          31,
          38
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            33,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        72
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"undefined argument\"",
                    "value": "undefined argument",
                    "range": [
                      142,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "range": [
                    137,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "range": [
                  137,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              "range": [
                137,
                164
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  126,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              },
              "range": [
                120,
                135
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              116,
              164
            ],
            "loc": {
              "end": {
                "column": 52,
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  169,
                  170
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
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  171,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 6,
                    "line": 7
                  }
                }
              },
              "range": [
                169,
                177
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              169,
              178
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          110,
          191
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 36,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f01",
        "optional": false,
        "range": [
          83,
          86
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
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
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            },
            "range": [
              88,
              108
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    90,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    99,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                90,
                108
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          },
          "range": [
            87,
            108
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        }
      ],
      "range": [
        74,
        191
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 23,
                    "line": 11
                  }
                }
              },
              "range": [
                243,
                252
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  235,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  240,
                  241
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
              "range": [
                235,
                241
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              231,
              252
            ],
            "loc": {
              "end": {
                "column": 25,
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"negative number\"",
                  "value": "negative number",
                  "range": [
                    262,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  257,
                  261
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
              "optional": false,
              "range": [
                257,
                280
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              257,
              281
            ],
            "loc": {
              "end": {
                "column": 28,
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                286,
                287
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
              286,
              288
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
          }
        ],
        "range": [
          225,
          306
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 32,
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
        "name": "f02",
        "optional": false,
        "range": [
          202,
          205
        ],
        "loc": {
          "end": {
            "column": 12,
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
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            },
            "range": [
              207,
              215
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                209,
                215
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            }
          },
          "range": [
            206,
            215
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 10
          },
          "start": {
            "column": 23,
            "line": 10
          }
        },
        "range": [
          216,
          224
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            218,
            224
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 25,
              "line": 10
            }
          }
        }
      },
      "range": [
        193,
        306
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                338,
                339
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
            "range": [
              338,
              340
            ],
            "loc": {
              "end": {
                "column": 6,
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  356,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                356,
                362
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              356,
              363
            ],
            "loc": {
              "end": {
                "column": 11,
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                368,
                369
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
            "range": [
              368,
              370
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          332,
          388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 24,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f03",
        "optional": false,
        "range": [
          317,
          320
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
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
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            },
            "range": [
              322,
              330
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                324,
                330
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            }
          },
          "range": [
            321,
            330
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        }
      ],
      "range": [
        308,
        388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"undefined argument\"",
                    "value": "undefined argument",
                    "range": [
                      493,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 23
                      },
                      "start": {
                        "column": 30,
                        "line": 23
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "range": [
                    488,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 25,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "range": [
                  488,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 23
                  },
                  "start": {
                    "column": 25,
                    "line": 23
                  }
                }
              },
              "range": [
                488,
                515
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 23
                },
                "start": {
                  "column": 25,
                  "line": 23
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  471,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  477,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
                  }
                }
              },
              "range": [
                471,
                486
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "range": [
              467,
              515
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  520,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
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
                  522,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 24
                  },
                  "start": {
                    "column": 6,
                    "line": 24
                  }
                }
              },
              "range": [
                520,
                528
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              520,
              529
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          461,
          542
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 71,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          399,
          402
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
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
                "column": 34,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            },
            "range": [
              404,
              424
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    406,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    415,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 22
                    },
                    "start": {
                      "column": 25,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                406,
                424
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            }
          },
          "range": [
            403,
            424
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 22
            },
            "start": {
              "column": 13,
              "line": 22
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 22
              },
              "start": {
                "column": 40,
                "line": 22
              }
            },
            "range": [
              430,
              459
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 22
                      },
                      "start": {
                        "column": 51,
                        "line": 22
                      }
                    },
                    "range": [
                      441,
                      449
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        443,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 22
                        },
                        "start": {
                          "column": 53,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    433,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 22
                    },
                    "start": {
                      "column": 43,
                      "line": 22
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 22
                  },
                  "start": {
                    "column": 61,
                    "line": 22
                  }
                },
                "range": [
                  451,
                  459
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    454,
                    459
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 22
                    },
                    "start": {
                      "column": 64,
                      "line": 22
                    }
                  }
                }
              },
              "range": [
                432,
                459
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 22
                },
                "start": {
                  "column": 42,
                  "line": 22
                }
              }
            }
          },
          "range": [
            426,
            459
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 22
            },
            "start": {
              "column": 36,
              "line": 22
            }
          }
        }
      ],
      "range": [
        390,
        542
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 22
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  636,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "range": [
                629,
                638
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  621,
                  622
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  626,
                  627
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 28
                  },
                  "start": {
                    "column": 13,
                    "line": 28
                  }
                }
              },
              "range": [
                621,
                627
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              617,
              638
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
                  "raw": "\"negative number\"",
                  "value": "negative number",
                  "range": [
                    648,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 29
                    },
                    "start": {
                      "column": 9,
                      "line": 29
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  643,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                643,
                666
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              643,
              667
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                672,
                673
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              672,
              674
            ],
            "loc": {
              "end": {
                "column": 6,
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
          611,
          692
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 67,
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
        "name": "f12",
        "optional": false,
        "range": [
          553,
          556
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
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
                "column": 22,
                "line": 27
              },
              "start": {
                "column": 14,
                "line": 27
              }
            },
            "range": [
              558,
              566
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                560,
                566
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 27
                }
              }
            }
          },
          "range": [
            557,
            566
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 27
            },
            "start": {
              "column": 13,
              "line": 27
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 27
              },
              "start": {
                "column": 28,
                "line": 27
              }
            },
            "range": [
              572,
              601
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 27
                      },
                      "start": {
                        "column": 39,
                        "line": 27
                      }
                    },
                    "range": [
                      583,
                      591
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        585,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 27
                        },
                        "start": {
                          "column": 41,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    575,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 27
                    },
                    "start": {
                      "column": 31,
                      "line": 27
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 27
                  },
                  "start": {
                    "column": 49,
                    "line": 27
                  }
                },
                "range": [
                  593,
                  601
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    596,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 27
                    },
                    "start": {
                      "column": 52,
                      "line": 27
                    }
                  }
                }
              },
              "range": [
                574,
                601
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 27
                },
                "start": {
                  "column": 30,
                  "line": 27
                }
              }
            }
          },
          "range": [
            568,
            601
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 27
            },
            "start": {
              "column": 24,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 27
          },
          "start": {
            "column": 58,
            "line": 27
          }
        },
        "range": [
          602,
          610
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            604,
            610
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 27
            },
            "start": {
              "column": 60,
              "line": 27
            }
          }
        }
      },
      "range": [
        544,
        692
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                759,
                760
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              759,
              761
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  777,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "range": [
                777,
                783
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              777,
              784
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                789,
                790
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              789,
              791
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          753,
          809
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 59,
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
        "name": "f13",
        "optional": false,
        "range": [
          703,
          706
        ],
        "loc": {
          "end": {
            "column": 12,
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
                "column": 22,
                "line": 33
              },
              "start": {
                "column": 14,
                "line": 33
              }
            },
            "range": [
              708,
              716
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                710,
                716
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
                }
              }
            }
          },
          "range": [
            707,
            716
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 33
            },
            "start": {
              "column": 13,
              "line": 33
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 33
              },
              "start": {
                "column": 28,
                "line": 33
              }
            },
            "range": [
              722,
              751
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 33
                      },
                      "start": {
                        "column": 39,
                        "line": 33
                      }
                    },
                    "range": [
                      733,
                      741
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        735,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 33
                        },
                        "start": {
                          "column": 41,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    725,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 33
                    },
                    "start": {
                      "column": 31,
                      "line": 33
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 33
                  },
                  "start": {
                    "column": 49,
                    "line": 33
                  }
                },
                "range": [
                  743,
                  751
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    746,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 33
                    },
                    "start": {
                      "column": 52,
                      "line": 33
                    }
                  }
                }
              },
              "range": [
                724,
                751
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 33
                },
                "start": {
                  "column": 30,
                  "line": 33
                }
              }
            }
          },
          "range": [
            718,
            751
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 33
            },
            "start": {
              "column": 24,
              "line": 33
            }
          }
        }
      ],
      "range": [
        694,
        809
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              833,
              887
            ],
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "async": false,
              "declare": true,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  857,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 40
                  },
                  "start": {
                    "column": 28,
                    "line": 40
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 40
                      },
                      "start": {
                        "column": 41,
                        "line": 40
                      }
                    },
                    "range": [
                      870,
                      878
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        872,
                        878
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 40
                        },
                        "start": {
                          "column": 43,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    862,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 40
                    },
                    "start": {
                      "column": 33,
                      "line": 40
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 40
                  },
                  "start": {
                    "column": 50,
                    "line": 40
                  }
                },
                "range": [
                  879,
                  886
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    881,
                    886
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 40
                    },
                    "start": {
                      "column": 52,
                      "line": 40
                    }
                  }
                }
              },
              "range": [
                840,
                887
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 58,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          827,
          889
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 16,
            "line": 39
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          821,
          826
        ],
        "decorators": [],
        "name": "Debug",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "kind": "namespace",
      "range": [
        811,
        889
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 39
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"undefined argument\"",
                    "value": "undefined argument",
                    "range": [
                      965,
                      985
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 44
                      },
                      "start": {
                        "column": 36,
                        "line": 44
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
                    "name": "Debug",
                    "optional": false,
                    "range": [
                      954,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 44
                      },
                      "start": {
                        "column": 25,
                        "line": 44
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fail",
                    "optional": false,
                    "range": [
                      960,
                      964
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 44
                      },
                      "start": {
                        "column": 31,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    954,
                    964
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 44
                    },
                    "start": {
                      "column": 25,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "range": [
                  954,
                  986
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 44
                  },
                  "start": {
                    "column": 25,
                    "line": 44
                  }
                }
              },
              "range": [
                954,
                987
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 44
                },
                "start": {
                  "column": 25,
                  "line": 44
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  937,
                  938
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  943,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 14,
                    "line": 44
                  }
                }
              },
              "range": [
                937,
                952
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 44
                }
              }
            },
            "range": [
              933,
              987
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  992,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
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
                  994,
                  1000
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 45
                  },
                  "start": {
                    "column": 6,
                    "line": 45
                  }
                }
              },
              "range": [
                992,
                1000
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              992,
              1001
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          927,
          1014
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 36,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "range": [
          900,
          903
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
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
                "column": 34,
                "line": 43
              },
              "start": {
                "column": 14,
                "line": 43
              }
            },
            "range": [
              905,
              925
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    907,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 43
                    },
                    "start": {
                      "column": 16,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    916,
                    925
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 43
                    },
                    "start": {
                      "column": 25,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                907,
                925
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              }
            }
          },
          "range": [
            904,
            925
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 43
            },
            "start": {
              "column": 13,
              "line": 43
            }
          }
        }
      ],
      "range": [
        891,
        1014
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 43
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1073,
                  1074
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 49
                  },
                  "start": {
                    "column": 23,
                    "line": 49
                  }
                }
              },
              "range": [
                1066,
                1075
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 16,
                  "line": 49
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1058,
                  1059
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1063,
                  1064
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 49
                  },
                  "start": {
                    "column": 13,
                    "line": 49
                  }
                }
              },
              "range": [
                1058,
                1064
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 49
                },
                "start": {
                  "column": 8,
                  "line": 49
                }
              }
            },
            "range": [
              1054,
              1075
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
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
                  "raw": "\"negative number\"",
                  "value": "negative number",
                  "range": [
                    1091,
                    1108
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
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
                  "name": "Debug",
                  "optional": false,
                  "range": [
                    1080,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 4,
                      "line": 50
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "range": [
                    1086,
                    1090
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 50
                    },
                    "start": {
                      "column": 10,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1080,
                  1090
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                1080,
                1109
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1080,
              1110
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1115,
                1116
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1115,
              1117
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1048,
          1135
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 32,
            "line": 48
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "range": [
          1025,
          1028
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 48
          },
          "start": {
            "column": 9,
            "line": 48
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
                "column": 22,
                "line": 48
              },
              "start": {
                "column": 14,
                "line": 48
              }
            },
            "range": [
              1030,
              1038
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1032,
                1038
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 48
                },
                "start": {
                  "column": 16,
                  "line": 48
                }
              }
            }
          },
          "range": [
            1029,
            1038
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 48
            },
            "start": {
              "column": 13,
              "line": 48
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 48
          },
          "start": {
            "column": 23,
            "line": 48
          }
        },
        "range": [
          1039,
          1047
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1041,
            1047
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 48
            },
            "start": {
              "column": 25,
              "line": 48
            }
          }
        }
      },
      "range": [
        1016,
        1135
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 48
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1167,
                1168
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1167,
              1169
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
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
                  "name": "Debug",
                  "optional": false,
                  "range": [
                    1185,
                    1190
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "range": [
                    1191,
                    1195
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 56
                    },
                    "start": {
                      "column": 10,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1185,
                  1195
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1185,
                1197
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1185,
              1198
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1203,
                1204
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1203,
              1205
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "range": [
          1161,
          1223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 24,
            "line": 54
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "range": [
          1146,
          1149
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
                "column": 22,
                "line": 54
              },
              "start": {
                "column": 14,
                "line": 54
              }
            },
            "range": [
              1151,
              1159
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1153,
                1159
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 54
                },
                "start": {
                  "column": 16,
                  "line": 54
                }
              }
            }
          },
          "range": [
            1150,
            1159
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 54
            },
            "start": {
              "column": 13,
              "line": 54
            }
          }
        }
      ],
      "range": [
        1137,
        1223
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 54
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1255,
                1256
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1255,
              1257
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
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
                  "name": "Debug",
                  "optional": false,
                  "range": [
                    1275,
                    1280
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 62
                    },
                    "start": {
                      "column": 6,
                      "line": 62
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "range": [
                    1282,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 62
                    },
                    "start": {
                      "column": 13,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1274,
                  1286
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 62
                  },
                  "start": {
                    "column": 5,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "range": [
                1273,
                1289
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              1273,
              1290
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1295,
                1296
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1295,
              1297
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1249,
          1315
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 24,
            "line": 60
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "range": [
          1234,
          1237
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 60
          },
          "start": {
            "column": 9,
            "line": 60
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
                "column": 22,
                "line": 60
              },
              "start": {
                "column": 14,
                "line": 60
              }
            },
            "range": [
              1239,
              1247
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1241,
                1247
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 60
                },
                "start": {
                  "column": 16,
                  "line": 60
                }
              }
            }
          },
          "range": [
            1238,
            1247
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 60
            },
            "start": {
              "column": 13,
              "line": 60
            }
          }
        }
      ],
      "range": [
        1225,
        1315
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1328,
          1761
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail",
              "optional": false,
              "range": [
                1334,
                1338
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
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
                1338,
                1405
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "range": [
                            1390,
                            1397
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 68
                            },
                            "start": {
                              "column": 24,
                              "line": 68
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          1384,
                          1389
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 68
                          },
                          "start": {
                            "column": 18,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1380,
                        1398
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 68
                        },
                        "start": {
                          "column": 14,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1374,
                      1399
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1364,
                  1405
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 34,
                    "line": 67
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
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 67
                      },
                      "start": {
                        "column": 17,
                        "line": 67
                      }
                    },
                    "range": [
                      1347,
                      1355
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1349,
                        1355
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 67
                        },
                        "start": {
                          "column": 19,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    1339,
                    1355
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 67
                    },
                    "start": {
                      "column": 9,
                      "line": 67
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 67
                  },
                  "start": {
                    "column": 26,
                    "line": 67
                  }
                },
                "range": [
                  1356,
                  1363
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    1358,
                    1363
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 67
                    },
                    "start": {
                      "column": 28,
                      "line": 67
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 8,
                  "line": 67
                }
              }
            },
            "range": [
              1334,
              1405
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 67
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
              "name": "f1",
              "optional": false,
              "range": [
                1410,
                1412
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
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
                1412,
                1534
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"undefined argument\"",
                            "value": "undefined argument",
                            "range": [
                              1477,
                              1497
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 71
                              },
                              "start": {
                                "column": 39,
                                "line": 71
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1467,
                              1471
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 71
                              },
                              "start": {
                                "column": 29,
                                "line": 71
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "range": [
                              1472,
                              1476
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 71
                              },
                              "start": {
                                "column": 34,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1467,
                            1476
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 71
                            },
                            "start": {
                              "column": 29,
                              "line": 71
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1467,
                          1498
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 71
                          },
                          "start": {
                            "column": 29,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1467,
                        1499
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 71
                        },
                        "start": {
                          "column": 29,
                          "line": 71
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1450,
                          1451
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 71
                          },
                          "start": {
                            "column": 12,
                            "line": 71
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "range": [
                          1456,
                          1465
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 71
                          },
                          "start": {
                            "column": 18,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1450,
                        1465
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 71
                        },
                        "start": {
                          "column": 12,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1446,
                      1499
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1508,
                          1509
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 72
                          },
                          "start": {
                            "column": 8,
                            "line": 72
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
                          1510,
                          1516
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 72
                          },
                          "start": {
                            "column": 10,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        1508,
                        1516
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 72
                        },
                        "start": {
                          "column": 8,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1508,
                      1517
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1436,
                  1534
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 30,
                    "line": 70
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
                        "column": 28,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    },
                    "range": [
                      1414,
                      1434
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1416,
                            1422
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 70
                            },
                            "start": {
                              "column": 10,
                              "line": 70
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1425,
                            1434
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 70
                            },
                            "start": {
                              "column": 19,
                              "line": 70
                            }
                          }
                        }
                      ],
                      "range": [
                        1416,
                        1434
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 70
                        },
                        "start": {
                          "column": 10,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1413,
                    1434
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 70
                    },
                    "start": {
                      "column": 7,
                      "line": 70
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 6,
                  "line": 70
                }
              }
            },
            "range": [
              1410,
              1534
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 70
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
              "name": "f2",
              "optional": false,
              "range": [
                1539,
                1541
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
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
                1541,
                1663
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1590,
                          1591
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 75
                          },
                          "start": {
                            "column": 27,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        1583,
                        1592
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 75
                        },
                        "start": {
                          "column": 20,
                          "line": 75
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1575,
                          1576
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 75
                          },
                          "start": {
                            "column": 12,
                            "line": 75
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1580,
                          1581
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 75
                          },
                          "start": {
                            "column": 17,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        1575,
                        1581
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 75
                        },
                        "start": {
                          "column": 12,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1571,
                      1592
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
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
                          "raw": "\"negative number\"",
                          "value": "negative number",
                          "range": [
                            1611,
                            1628
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 76
                            },
                            "start": {
                              "column": 18,
                              "line": 76
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1601,
                            1605
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 76
                            },
                            "start": {
                              "column": 8,
                              "line": 76
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "range": [
                            1606,
                            1610
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 76
                            },
                            "start": {
                              "column": 13,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          1601,
                          1610
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 76
                          },
                          "start": {
                            "column": 8,
                            "line": 76
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1601,
                        1629
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 76
                        },
                        "start": {
                          "column": 8,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1601,
                      1630
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 76
                      },
                      "start": {
                        "column": 8,
                        "line": 76
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1639,
                        1640
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 77
                        },
                        "start": {
                          "column": 8,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1639,
                      1641
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
                      }
                    }
                  }
                ],
                "range": [
                  1561,
                  1663
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 78
                  },
                  "start": {
                    "column": 26,
                    "line": 74
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
                        "column": 16,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 74
                      }
                    },
                    "range": [
                      1543,
                      1551
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1545,
                        1551
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 74
                        },
                        "start": {
                          "column": 10,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    1542,
                    1551
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 74
                    },
                    "start": {
                      "column": 7,
                      "line": 74
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 74
                  },
                  "start": {
                    "column": 17,
                    "line": 74
                  }
                },
                "range": [
                  1552,
                  1560
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1554,
                    1560
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 74
                    },
                    "start": {
                      "column": 19,
                      "line": 74
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 6,
                  "line": 74
                }
              }
            },
            "range": [
              1539,
              1663
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 74
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
              "name": "f3",
              "optional": false,
              "range": [
                1668,
                1670
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
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
                1670,
                1759
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1692,
                        1693
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 80
                        },
                        "start": {
                          "column": 8,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      1692,
                      1694
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 80
                      },
                      "start": {
                        "column": 8,
                        "line": 80
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1714,
                            1718
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 81
                            },
                            "start": {
                              "column": 8,
                              "line": 81
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "range": [
                            1719,
                            1723
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 81
                            },
                            "start": {
                              "column": 13,
                              "line": 81
                            }
                          }
                        },
                        "range": [
                          1714,
                          1723
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 81
                          },
                          "start": {
                            "column": 8,
                            "line": 81
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1714,
                        1725
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 81
                        },
                        "start": {
                          "column": 8,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1714,
                      1726
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 81
                      },
                      "start": {
                        "column": 8,
                        "line": 81
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1735,
                        1736
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 82
                        },
                        "start": {
                          "column": 8,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      1735,
                      1737
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 82
                      },
                      "start": {
                        "column": 8,
                        "line": 82
                      }
                    }
                  }
                ],
                "range": [
                  1682,
                  1759
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 18,
                    "line": 79
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
                        "column": 16,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 79
                      }
                    },
                    "range": [
                      1672,
                      1680
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1674,
                        1680
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 79
                        },
                        "start": {
                          "column": 10,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    1671,
                    1680
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 79
                    },
                    "start": {
                      "column": 7,
                      "line": 79
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 6,
                  "line": 79
                }
              }
            },
            "range": [
              1668,
              1759
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 11,
            "line": 66
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          1323,
          1327
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 66
          },
          "start": {
            "column": 6,
            "line": 66
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1317,
        1761
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 66
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1911,
                      1912
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 92
                      },
                      "start": {
                        "column": 8,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    1911,
                    1913
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 92
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2082,
                            2083
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 99
                            },
                            "start": {
                              "column": 12,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2082,
                          2084
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 99
                          },
                          "start": {
                            "column": 12,
                            "line": 99
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "range": [
                              2111,
                              2115
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 100
                              },
                              "start": {
                                "column": 12,
                                "line": 100
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2111,
                            2117
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 100
                            },
                            "start": {
                              "column": 12,
                              "line": 100
                            }
                          }
                        },
                        "range": [
                          2111,
                          2118
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 100
                          },
                          "start": {
                            "column": 12,
                            "line": 100
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2131,
                            2132
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 101
                            },
                            "start": {
                              "column": 12,
                              "line": 101
                            }
                          }
                        },
                        "range": [
                          2131,
                          2133
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 101
                          },
                          "start": {
                            "column": 12,
                            "line": 101
                          }
                        }
                      }
                    ],
                    "range": [
                      2068,
                      2159
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 102
                      },
                      "start": {
                        "column": 13,
                        "line": 98
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1980,
                            1981
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 94
                            },
                            "start": {
                              "column": 12,
                              "line": 94
                            }
                          }
                        },
                        "range": [
                          1980,
                          1982
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 94
                          },
                          "start": {
                            "column": 12,
                            "line": 94
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "range": [
                              2006,
                              2010
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 95
                              },
                              "start": {
                                "column": 12,
                                "line": 95
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2006,
                            2012
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 95
                            },
                            "start": {
                              "column": 12,
                              "line": 95
                            }
                          }
                        },
                        "range": [
                          2006,
                          2013
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 95
                          },
                          "start": {
                            "column": 12,
                            "line": 95
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2026,
                            2027
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 96
                            },
                            "start": {
                              "column": 12,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          2026,
                          2028
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 96
                          },
                          "start": {
                            "column": 12,
                            "line": 96
                          }
                        }
                      }
                    ],
                    "range": [
                      1966,
                      2054
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 97
                      },
                      "start": {
                        "column": 29,
                        "line": 93
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!==",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1949,
                        1950
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 93
                        },
                        "start": {
                          "column": 12,
                          "line": 93
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        1955,
                        1964
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 93
                        },
                        "start": {
                          "column": 18,
                          "line": 93
                        }
                      }
                    },
                    "range": [
                      1949,
                      1964
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 93
                      },
                      "start": {
                        "column": 12,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    1945,
                    2159
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2168,
                      2169
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    2168,
                    2170
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                1901,
                2192
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 9,
                  "line": 91
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
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        1851,
                        1855
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1851,
                      1857
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1851,
                    1858
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1867,
                      1868
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1867,
                    1869
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                1841,
                1891
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 31,
                  "line": 87
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
                    1825,
                    1826
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 87
                    },
                    "start": {
                      "column": 15,
                      "line": 87
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1818,
                  1826
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 87
                  },
                  "start": {
                    "column": 8,
                    "line": 87
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1831,
                  1839
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 87
                  },
                  "start": {
                    "column": 21,
                    "line": 87
                  }
                }
              },
              "range": [
                1818,
                1839
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 87
                },
                "start": {
                  "column": 8,
                  "line": 87
                }
              }
            },
            "range": [
              1814,
              2192
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2197,
                2198
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              2197,
              2199
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "range": [
          1808,
          2217
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 45,
            "line": 86
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "range": [
          1772,
          1775
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
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
                "column": 43,
                "line": 86
              },
              "start": {
                "column": 14,
                "line": 86
              }
            },
            "range": [
              1777,
              1806
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1779,
                    1785
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 86
                    },
                    "start": {
                      "column": 16,
                      "line": 86
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1788,
                    1794
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 86
                    },
                    "start": {
                      "column": 25,
                      "line": 86
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1797,
                    1806
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 86
                    },
                    "start": {
                      "column": 34,
                      "line": 86
                    }
                  }
                }
              ],
              "range": [
                1779,
                1806
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 86
                },
                "start": {
                  "column": 16,
                  "line": 86
                }
              }
            }
          },
          "range": [
            1776,
            1806
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 86
            },
            "start": {
              "column": 13,
              "line": 86
            }
          }
        }
      ],
      "range": [
        1763,
        2217
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 86
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        2304,
                        2308
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 110
                        },
                        "start": {
                          "column": 8,
                          "line": 110
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2304,
                      2310
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 110
                      },
                      "start": {
                        "column": 8,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    2304,
                    2311
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2320,
                      2321
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 111
                      },
                      "start": {
                        "column": 8,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    2320,
                    2322
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 111
                    },
                    "start": {
                      "column": 8,
                      "line": 111
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2349,
                        2350
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 112
                        },
                        "start": {
                          "column": 8,
                          "line": 112
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2351,
                        2352
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 112
                        },
                        "start": {
                          "column": 10,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      2349,
                      2352
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 112
                      },
                      "start": {
                        "column": 8,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    2349,
                    2353
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 112
                    },
                    "start": {
                      "column": 8,
                      "line": 112
                    }
                  }
                }
              ],
              "range": [
                2294,
                2375
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 33,
                  "line": 109
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2276,
                      2277
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 109
                      },
                      "start": {
                        "column": 15,
                        "line": 109
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2278,
                      2279
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 109
                      },
                      "start": {
                        "column": 17,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    2276,
                    2279
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 109
                    },
                    "start": {
                      "column": 15,
                      "line": 109
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  2269,
                  2279
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 109
                  },
                  "start": {
                    "column": 8,
                    "line": 109
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  2284,
                  2292
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 109
                  },
                  "start": {
                    "column": 23,
                    "line": 109
                  }
                }
              },
              "range": [
                2269,
                2292
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 109
                },
                "start": {
                  "column": 8,
                  "line": 109
                }
              }
            },
            "range": [
              2265,
              2375
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2380,
                2381
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
                }
              }
            },
            "range": [
              2380,
              2382
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2416,
                  2417
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 115
                  },
                  "start": {
                    "column": 4,
                    "line": 115
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  2418,
                  2419
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 115
                  },
                  "start": {
                    "column": 6,
                    "line": 115
                  }
                }
              },
              "range": [
                2416,
                2419
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 115
                },
                "start": {
                  "column": 4,
                  "line": 115
                }
              }
            },
            "range": [
              2416,
              2420
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 115
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          }
        ],
        "range": [
          2259,
          2433
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 40,
            "line": 108
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "range": [
          2228,
          2231
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 108
          },
          "start": {
            "column": 9,
            "line": 108
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
                "line": 108
              },
              "start": {
                "column": 14,
                "line": 108
              }
            },
            "range": [
              2233,
              2257
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      2237,
                      2238
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 108
                      },
                      "start": {
                        "column": 18,
                        "line": 108
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
                        "column": 36,
                        "line": 108
                      },
                      "start": {
                        "column": 19,
                        "line": 108
                      }
                    },
                    "range": [
                      2238,
                      2255
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2240,
                            2246
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 108
                            },
                            "start": {
                              "column": 21,
                              "line": 108
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2249,
                            2255
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 108
                            },
                            "start": {
                              "column": 30,
                              "line": 108
                            }
                          }
                        }
                      ],
                      "range": [
                        2240,
                        2255
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 108
                        },
                        "start": {
                          "column": 21,
                          "line": 108
                        }
                      }
                    }
                  },
                  "range": [
                    2237,
                    2255
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 108
                    },
                    "start": {
                      "column": 18,
                      "line": 108
                    }
                  }
                }
              ],
              "range": [
                2235,
                2257
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 108
                },
                "start": {
                  "column": 16,
                  "line": 108
                }
              }
            }
          },
          "range": [
            2232,
            2257
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 108
            },
            "start": {
              "column": 13,
              "line": 108
            }
          }
        }
      ],
      "range": [
        2219,
        2433
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 108
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2479,
                      2480
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 120
                      },
                      "start": {
                        "column": 8,
                        "line": 120
                      }
                    }
                  },
                  "range": [
                    2479,
                    2481
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 120
                    },
                    "start": {
                      "column": 8,
                      "line": 120
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        2490,
                        2494
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 121
                        },
                        "start": {
                          "column": 8,
                          "line": 121
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2490,
                      2496
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 121
                      },
                      "start": {
                        "column": 8,
                        "line": 121
                      }
                    }
                  },
                  "range": [
                    2490,
                    2497
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 121
                    },
                    "start": {
                      "column": 8,
                      "line": 121
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2506,
                      2507
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 122
                      },
                      "start": {
                        "column": 8,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    2506,
                    2508
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 122
                    },
                    "start": {
                      "column": 8,
                      "line": 122
                    }
                  }
                }
              ],
              "range": [
                2469,
                2530
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 123
                },
                "start": {
                  "column": 8,
                  "line": 119
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2553,
                      2554
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 125
                      },
                      "start": {
                        "column": 8,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    2553,
                    2555
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 125
                    },
                    "start": {
                      "column": 8,
                      "line": 125
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        2564,
                        2568
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 126
                        },
                        "start": {
                          "column": 8,
                          "line": 126
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2564,
                      2570
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    2564,
                    2571
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 126
                    },
                    "start": {
                      "column": 8,
                      "line": 126
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2580,
                      2581
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 127
                      }
                    }
                  },
                  "range": [
                    2580,
                    2582
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 127
                    },
                    "start": {
                      "column": 8,
                      "line": 127
                    }
                  }
                }
              ],
              "range": [
                2543,
                2604
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 128
                },
                "start": {
                  "column": 12,
                  "line": 124
                }
              }
            },
            "handler": null,
            "range": [
              2465,
              2604
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2609,
                2610
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 129
                },
                "start": {
                  "column": 4,
                  "line": 129
                }
              }
            },
            "range": [
              2609,
              2611
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          }
        ],
        "range": [
          2459,
          2629
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 24,
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
        "name": "f40",
        "optional": false,
        "range": [
          2444,
          2447
        ],
        "loc": {
          "end": {
            "column": 12,
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
                "column": 22,
                "line": 118
              },
              "start": {
                "column": 14,
                "line": 118
              }
            },
            "range": [
              2449,
              2457
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2451,
                2457
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 118
                },
                "start": {
                  "column": 16,
                  "line": 118
                }
              }
            }
          },
          "range": [
            2448,
            2457
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 118
            },
            "start": {
              "column": 13,
              "line": 118
            }
          }
        }
      ],
      "range": [
        2435,
        2629
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2675,
                      2676
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 134
                      },
                      "start": {
                        "column": 8,
                        "line": 134
                      }
                    }
                  },
                  "range": [
                    2675,
                    2677
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 134
                    },
                    "start": {
                      "column": 8,
                      "line": 134
                    }
                  }
                }
              ],
              "range": [
                2665,
                2683
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 135
                },
                "start": {
                  "column": 8,
                  "line": 133
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2706,
                      2707
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 137
                      },
                      "start": {
                        "column": 8,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    2706,
                    2708
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        2717,
                        2721
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 138
                        },
                        "start": {
                          "column": 8,
                          "line": 138
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2717,
                      2723
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 138
                      },
                      "start": {
                        "column": 8,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    2717,
                    2724
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 138
                    },
                    "start": {
                      "column": 8,
                      "line": 138
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2733,
                      2734
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 139
                      },
                      "start": {
                        "column": 8,
                        "line": 139
                      }
                    }
                  },
                  "range": [
                    2733,
                    2735
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 139
                    }
                  }
                }
              ],
              "range": [
                2696,
                2757
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 140
                },
                "start": {
                  "column": 12,
                  "line": 136
                }
              }
            },
            "handler": null,
            "range": [
              2661,
              2757
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 140
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2762,
                2763
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 141
                },
                "start": {
                  "column": 4,
                  "line": 141
                }
              }
            },
            "range": [
              2762,
              2764
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 141
              },
              "start": {
                "column": 4,
                "line": 141
              }
            }
          }
        ],
        "range": [
          2655,
          2782
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 142
          },
          "start": {
            "column": 24,
            "line": 132
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f41",
        "optional": false,
        "range": [
          2640,
          2643
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 132
          },
          "start": {
            "column": 9,
            "line": 132
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
                "column": 22,
                "line": 132
              },
              "start": {
                "column": 14,
                "line": 132
              }
            },
            "range": [
              2645,
              2653
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2647,
                2653
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 132
                },
                "start": {
                  "column": 16,
                  "line": 132
                }
              }
            }
          },
          "range": [
            2644,
            2653
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 132
            },
            "start": {
              "column": 13,
              "line": 132
            }
          }
        }
      ],
      "range": [
        2631,
        2782
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 142
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2828,
                      2829
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 146
                      },
                      "start": {
                        "column": 8,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    2828,
                    2830
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 146
                    },
                    "start": {
                      "column": 8,
                      "line": 146
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        2839,
                        2843
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 147
                        },
                        "start": {
                          "column": 8,
                          "line": 147
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2839,
                      2845
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 147
                      },
                      "start": {
                        "column": 8,
                        "line": 147
                      }
                    }
                  },
                  "range": [
                    2839,
                    2846
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 147
                    },
                    "start": {
                      "column": 8,
                      "line": 147
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2855,
                      2856
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 148
                      },
                      "start": {
                        "column": 8,
                        "line": 148
                      }
                    }
                  },
                  "range": [
                    2855,
                    2857
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 148
                    },
                    "start": {
                      "column": 8,
                      "line": 148
                    }
                  }
                }
              ],
              "range": [
                2818,
                2879
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 149
                },
                "start": {
                  "column": 8,
                  "line": 145
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2902,
                      2903
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 151
                      },
                      "start": {
                        "column": 8,
                        "line": 151
                      }
                    }
                  },
                  "range": [
                    2902,
                    2904
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 151
                    },
                    "start": {
                      "column": 8,
                      "line": 151
                    }
                  }
                }
              ],
              "range": [
                2892,
                2910
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 152
                },
                "start": {
                  "column": 12,
                  "line": 150
                }
              }
            },
            "handler": null,
            "range": [
              2814,
              2910
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 145
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2915,
                2916
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 153
                },
                "start": {
                  "column": 4,
                  "line": 153
                }
              }
            },
            "range": [
              2915,
              2917
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          }
        ],
        "range": [
          2808,
          2935
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 154
          },
          "start": {
            "column": 24,
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
        "name": "f42",
        "optional": false,
        "range": [
          2793,
          2796
        ],
        "loc": {
          "end": {
            "column": 12,
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
                "column": 22,
                "line": 144
              },
              "start": {
                "column": 14,
                "line": 144
              }
            },
            "range": [
              2798,
              2806
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2800,
                2806
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 144
                },
                "start": {
                  "column": 16,
                  "line": 144
                }
              }
            }
          },
          "range": [
            2797,
            2806
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 144
            },
            "start": {
              "column": 13,
              "line": 144
            }
          }
        }
      ],
      "range": [
        2784,
        2935
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 154
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "range": [
                    2964,
                    2968
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 157
                    },
                    "start": {
                      "column": 10,
                      "line": 157
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
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
                              2996,
                              3001
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 157
                              },
                              "start": {
                                "column": 42,
                                "line": 157
                              }
                            }
                          },
                          "range": [
                            2992,
                            3003
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 157
                            },
                            "start": {
                              "column": 38,
                              "line": 157
                            }
                          }
                        },
                        "range": [
                          2986,
                          3004
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 157
                          },
                          "start": {
                            "column": 32,
                            "line": 157
                          }
                        }
                      }
                    ],
                    "range": [
                      2984,
                      3006
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 157
                      },
                      "start": {
                        "column": 30,
                        "line": 157
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 157
                      },
                      "start": {
                        "column": 19,
                        "line": 157
                      }
                    },
                    "range": [
                      2973,
                      2980
                    ],
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "range": [
                        2975,
                        2980
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 157
                        },
                        "start": {
                          "column": 21,
                          "line": 157
                        }
                      }
                    }
                  },
                  "range": [
                    2971,
                    3006
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 157
                    },
                    "start": {
                      "column": 17,
                      "line": 157
                    }
                  }
                },
                "range": [
                  2964,
                  3006
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 157
                  },
                  "start": {
                    "column": 10,
                    "line": 157
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2958,
              3007
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
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
                    3018,
                    3019
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 158
                    },
                    "start": {
                      "column": 10,
                      "line": 158
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "range": [
                        3023,
                        3027
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 158
                        },
                        "start": {
                          "column": 15,
                          "line": 158
                        }
                      }
                    }
                  ],
                  "range": [
                    3022,
                    3028
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 158
                    },
                    "start": {
                      "column": 14,
                      "line": 158
                    }
                  }
                },
                "range": [
                  3018,
                  3028
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 158
                  },
                  "start": {
                    "column": 10,
                    "line": 158
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3012,
              3029
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 158
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  3034,
                  3038
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 159
                  },
                  "start": {
                    "column": 4,
                    "line": 159
                  }
                }
              },
              "optional": false,
              "range": [
                3034,
                3040
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 159
                },
                "start": {
                  "column": 4,
                  "line": 159
                }
              }
            },
            "range": [
              3034,
              3041
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    3086,
                    3087
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 160
                    },
                    "start": {
                      "column": 4,
                      "line": 160
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    3088,
                    3089
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 160
                    },
                    "start": {
                      "column": 6,
                      "line": 160
                    }
                  }
                },
                "range": [
                  3086,
                  3090
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 160
                  },
                  "start": {
                    "column": 4,
                    "line": 160
                  }
                }
              },
              "optional": false,
              "range": [
                3086,
                3092
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 160
                },
                "start": {
                  "column": 4,
                  "line": 160
                }
              }
            },
            "range": [
              3086,
              3093
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 160
              },
              "start": {
                "column": 4,
                "line": 160
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                3132,
                3133
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 161
                },
                "start": {
                  "column": 4,
                  "line": 161
                }
              }
            },
            "range": [
              3132,
              3134
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          }
        ],
        "range": [
          2952,
          3136
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 162
          },
          "start": {
            "column": 15,
            "line": 156
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f43",
        "optional": false,
        "range": [
          2946,
          2949
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 156
          },
          "start": {
            "column": 9,
            "line": 156
          }
        }
      },
      "params": [],
      "range": [
        2937,
        3136
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 156
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3160,
        3591
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            3211,
            3591
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attrName",
                "optional": false,
                "range": [
                  3214,
                  3222
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 167
                  },
                  "start": {
                    "column": 1,
                    "line": 167
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
                    "column": 18,
                    "line": 167
                  },
                  "start": {
                    "column": 10,
                    "line": 167
                  }
                },
                "range": [
                  3223,
                  3231
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    3225,
                    3231
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 167
                    },
                    "start": {
                      "column": 12,
                      "line": 167
                    }
                  }
                }
              },
              "range": [
                3214,
                3232
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 167
                },
                "start": {
                  "column": 1,
                  "line": 167
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  3234,
                  3238
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 168
                  },
                  "start": {
                    "column": 1,
                    "line": 168
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
                    "column": 8,
                    "line": 168
                  },
                  "start": {
                    "column": 5,
                    "line": 168
                  }
                },
                "range": [
                  3238,
                  3241
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      3240,
                      3241
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 168
                      },
                      "start": {
                        "column": 7,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    3240,
                    3241
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 168
                    },
                    "start": {
                      "column": 7,
                      "line": 168
                    }
                  }
                }
              },
              "range": [
                3234,
                3242
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 168
                },
                "start": {
                  "column": 1,
                  "line": 168
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dependencies",
                "optional": false,
                "range": [
                  3244,
                  3256
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 169
                  },
                  "start": {
                    "column": 1,
                    "line": 169
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
                    "column": 24,
                    "line": 169
                  },
                  "start": {
                    "column": 14,
                    "line": 169
                  }
                },
                "range": [
                  3257,
                  3267
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      3259,
                      3265
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 169
                      },
                      "start": {
                        "column": 16,
                        "line": 169
                      }
                    }
                  },
                  "range": [
                    3259,
                    3267
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 169
                    },
                    "start": {
                      "column": 16,
                      "line": 169
                    }
                  }
                }
              },
              "range": [
                3244,
                3268
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 169
                },
                "start": {
                  "column": 1,
                  "line": 169
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "el",
                "optional": false,
                "range": [
                  3270,
                  3272
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 170
                  },
                  "start": {
                    "column": 1,
                    "line": 170
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
                    "column": 8,
                    "line": 170
                  },
                  "start": {
                    "column": 3,
                    "line": 170
                  }
                },
                "range": [
                  3272,
                  3277
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3274,
                    3277
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 170
                    },
                    "start": {
                      "column": 5,
                      "line": 170
                    }
                  }
                }
              },
              "range": [
                3270,
                3278
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 170
                },
                "start": {
                  "column": 1,
                  "line": 170
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  3280,
                  3282
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 171
                  },
                  "start": {
                    "column": 1,
                    "line": 171
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
                    "column": 11,
                    "line": 171
                  },
                  "start": {
                    "column": 3,
                    "line": 171
                  }
                },
                "range": [
                  3282,
                  3290
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    3284,
                    3290
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 171
                    },
                    "start": {
                      "column": 5,
                      "line": 171
                    }
                  }
                }
              },
              "range": [
                3280,
                3291
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 171
                },
                "start": {
                  "column": 1,
                  "line": 171
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiple",
                "optional": false,
                "range": [
                  3293,
                  3301
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 172
                  },
                  "start": {
                    "column": 1,
                    "line": 172
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
                    "column": 19,
                    "line": 172
                  },
                  "start": {
                    "column": 10,
                    "line": 172
                  }
                },
                "range": [
                  3302,
                  3311
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    3304,
                    3311
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 172
                    },
                    "start": {
                      "column": 12,
                      "line": 172
                    }
                  }
                }
              },
              "range": [
                3293,
                3312
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 172
                },
                "start": {
                  "column": 1,
                  "line": 172
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  3314,
                  3318
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 173
                  },
                  "start": {
                    "column": 1,
                    "line": 173
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
                    "line": 173
                  },
                  "start": {
                    "column": 5,
                    "line": 173
                  }
                },
                "range": [
                  3318,
                  3326
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    3320,
                    3326
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 173
                    },
                    "start": {
                      "column": 7,
                      "line": 173
                    }
                  }
                }
              },
              "range": [
                3314,
                3327
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 173
                },
                "start": {
                  "column": 1,
                  "line": 173
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "schema",
                "optional": false,
                "range": [
                  3329,
                  3335
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 174
                  },
                  "start": {
                    "column": 1,
                    "line": 174
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
                    "column": 16,
                    "line": 174
                  },
                  "start": {
                    "column": 7,
                    "line": 174
                  }
                },
                "range": [
                  3335,
                  3344
                ],
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    3337,
                    3344
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 174
                    },
                    "start": {
                      "column": 9,
                      "line": 174
                    }
                  }
                }
              },
              "range": [
                3329,
                3345
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 174
                },
                "start": {
                  "column": 1,
                  "line": 174
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "system",
                "optional": false,
                "range": [
                  3347,
                  3353
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 175
                  },
                  "start": {
                    "column": 1,
                    "line": 175
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
                    "column": 12,
                    "line": 175
                  },
                  "start": {
                    "column": 7,
                    "line": 175
                  }
                },
                "range": [
                  3353,
                  3358
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3355,
                    3358
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 175
                    },
                    "start": {
                      "column": 9,
                      "line": 175
                    }
                  }
                }
              },
              "range": [
                3347,
                3359
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 175
                },
                "start": {
                  "column": 1,
                  "line": 175
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": false,
                "range": [
                  3362,
                  3366
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 177
                  },
                  "start": {
                    "column": 1,
                    "line": 177
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 177
                      },
                      "start": {
                        "column": 11,
                        "line": 177
                      }
                    },
                    "range": [
                      3372,
                      3375
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3374,
                          3375
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 177
                          },
                          "start": {
                            "column": 13,
                            "line": 177
                          }
                        }
                      },
                      "range": [
                        3374,
                        3375
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 177
                        },
                        "start": {
                          "column": 13,
                          "line": 177
                        }
                      }
                    }
                  },
                  "range": [
                    3367,
                    3375
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 177
                    },
                    "start": {
                      "column": 6,
                      "line": 177
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 177
                  },
                  "start": {
                    "column": 15,
                    "line": 177
                  }
                },
                "range": [
                  3376,
                  3382
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3378,
                    3382
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 177
                    },
                    "start": {
                      "column": 17,
                      "line": 177
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3362,
                3383
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 177
                },
                "start": {
                  "column": 1,
                  "line": 177
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pause",
                "optional": false,
                "range": [
                  3385,
                  3390
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 178
                  },
                  "start": {
                    "column": 1,
                    "line": 178
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 178
                  },
                  "start": {
                    "column": 8,
                    "line": 178
                  }
                },
                "range": [
                  3392,
                  3398
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3394,
                    3398
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 178
                    },
                    "start": {
                      "column": 10,
                      "line": 178
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3385,
                3399
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 178
                },
                "start": {
                  "column": 1,
                  "line": 178
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "play",
                "optional": false,
                "range": [
                  3401,
                  3405
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 179
                  },
                  "start": {
                    "column": 1,
                    "line": 179
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 179
                  },
                  "start": {
                    "column": 7,
                    "line": 179
                  }
                },
                "range": [
                  3407,
                  3413
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3409,
                    3413
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 179
                    },
                    "start": {
                      "column": 9,
                      "line": 179
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3401,
                3414
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 179
                },
                "start": {
                  "column": 1,
                  "line": 179
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "remove",
                "optional": false,
                "range": [
                  3416,
                  3422
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 180
                  },
                  "start": {
                    "column": 1,
                    "line": 180
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 180
                  },
                  "start": {
                    "column": 9,
                    "line": 180
                  }
                },
                "range": [
                  3424,
                  3430
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3426,
                    3430
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 180
                    },
                    "start": {
                      "column": 11,
                      "line": 180
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3416,
                3431
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 180
                },
                "start": {
                  "column": 1,
                  "line": 180
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tick",
                "optional": false,
                "range": [
                  3433,
                  3437
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 181
                  },
                  "start": {
                    "column": 1,
                    "line": 181
                  }
                }
              },
              "kind": "method",
              "optional": true,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 181
                      },
                      "start": {
                        "column": 11,
                        "line": 181
                      }
                    },
                    "range": [
                      3443,
                      3451
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3445,
                        3451
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 181
                        },
                        "start": {
                          "column": 13,
                          "line": 181
                        }
                      }
                    }
                  },
                  "range": [
                    3439,
                    3451
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 181
                    },
                    "start": {
                      "column": 7,
                      "line": 181
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timeDelta",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 181
                      },
                      "start": {
                        "column": 30,
                        "line": 181
                      }
                    },
                    "range": [
                      3462,
                      3470
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3464,
                        3470
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 181
                        },
                        "start": {
                          "column": 32,
                          "line": 181
                        }
                      }
                    }
                  },
                  "range": [
                    3453,
                    3470
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 181
                    },
                    "start": {
                      "column": 21,
                      "line": 181
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 181
                  },
                  "start": {
                    "column": 39,
                    "line": 181
                  }
                },
                "range": [
                  3471,
                  3477
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3473,
                    3477
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 181
                    },
                    "start": {
                      "column": 41,
                      "line": 181
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3433,
                3478
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 181
                },
                "start": {
                  "column": 1,
                  "line": 181
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "update",
                "optional": false,
                "range": [
                  3480,
                  3486
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 182
                  },
                  "start": {
                    "column": 1,
                    "line": 182
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oldData",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 182
                      },
                      "start": {
                        "column": 15,
                        "line": 182
                      }
                    },
                    "range": [
                      3494,
                      3497
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3496,
                          3497
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 182
                          },
                          "start": {
                            "column": 17,
                            "line": 182
                          }
                        }
                      },
                      "range": [
                        3496,
                        3497
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 182
                        },
                        "start": {
                          "column": 17,
                          "line": 182
                        }
                      }
                    }
                  },
                  "range": [
                    3487,
                    3497
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 182
                    },
                    "start": {
                      "column": 8,
                      "line": 182
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 182
                  },
                  "start": {
                    "column": 19,
                    "line": 182
                  }
                },
                "range": [
                  3498,
                  3504
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3500,
                    3504
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 182
                    },
                    "start": {
                      "column": 21,
                      "line": 182
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3480,
                3505
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 182
                },
                "start": {
                  "column": 1,
                  "line": 182
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "updateSchema",
                "optional": false,
                "range": [
                  3507,
                  3519
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 183
                  },
                  "start": {
                    "column": 1,
                    "line": 183
                  }
                }
              },
              "kind": "method",
              "optional": true,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 183
                  },
                  "start": {
                    "column": 16,
                    "line": 183
                  }
                },
                "range": [
                  3522,
                  3528
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3524,
                    3528
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 183
                    },
                    "start": {
                      "column": 18,
                      "line": 183
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3507,
                3529
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 183
                },
                "start": {
                  "column": 1,
                  "line": 183
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendSchema",
                "optional": false,
                "range": [
                  3532,
                  3544
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 185
                  },
                  "start": {
                    "column": 1,
                    "line": 185
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "update",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 185
                      },
                      "start": {
                        "column": 20,
                        "line": 185
                      }
                    },
                    "range": [
                      3551,
                      3560
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        3553,
                        3560
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 185
                        },
                        "start": {
                          "column": 22,
                          "line": 185
                        }
                      }
                    }
                  },
                  "range": [
                    3545,
                    3560
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 185
                    },
                    "start": {
                      "column": 14,
                      "line": 185
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 185
                  },
                  "start": {
                    "column": 30,
                    "line": 185
                  }
                },
                "range": [
                  3561,
                  3567
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3563,
                    3567
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 185
                    },
                    "start": {
                      "column": 32,
                      "line": 185
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3532,
                3568
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 185
                },
                "start": {
                  "column": 1,
                  "line": 185
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "flushToDOM",
                "optional": false,
                "range": [
                  3570,
                  3580
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 186
                  },
                  "start": {
                    "column": 1,
                    "line": 186
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 186
                  },
                  "start": {
                    "column": 13,
                    "line": 186
                  }
                },
                "range": [
                  3582,
                  3588
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3584,
                    3588
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 186
                    },
                    "start": {
                      "column": 15,
                      "line": 186
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3570,
                3589
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 186
                },
                "start": {
                  "column": 1,
                  "line": 186
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 187
            },
            "start": {
              "column": 51,
              "line": 166
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            3177,
            3186
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 166
            },
            "start": {
              "column": 17,
              "line": 166
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 50,
              "line": 166
            },
            "start": {
              "column": 26,
              "line": 166
            }
          },
          "range": [
            3186,
            3210
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  3197,
                  3203
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 166
                  },
                  "start": {
                    "column": 37,
                    "line": 166
                  }
                }
              },
              "default": {
                "type": "TSAnyKeyword",
                "range": [
                  3206,
                  3209
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 166
                  },
                  "start": {
                    "column": 46,
                    "line": 166
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3187,
                  3188
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 166
                  },
                  "start": {
                    "column": 27,
                    "line": 166
                  }
                }
              },
              "out": false,
              "range": [
                3187,
                3209
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 166
                },
                "start": {
                  "column": 27,
                  "line": 166
                }
              }
            }
          ]
        },
        "range": [
          3167,
          3591
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 187
          },
          "start": {
            "column": 7,
            "line": 166
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 187
        },
        "start": {
          "column": 0,
          "line": 166
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3593,
        3808
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            3649,
            3808
          ],
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 190
                      },
                      "start": {
                        "column": 8,
                        "line": 190
                      }
                    },
                    "range": [
                      3659,
                      3668
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        3661,
                        3668
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 190
                        },
                        "start": {
                          "column": 10,
                          "line": 190
                        }
                      }
                    }
                  },
                  "range": [
                    3657,
                    3668
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 190
                    },
                    "start": {
                      "column": 6,
                      "line": 190
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attrValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 190
                      },
                      "start": {
                        "column": 28,
                        "line": 190
                      }
                    },
                    "range": [
                      3679,
                      3687
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        3681,
                        3687
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 190
                        },
                        "start": {
                          "column": 30,
                          "line": 190
                        }
                      }
                    }
                  },
                  "range": [
                    3670,
                    3687
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 190
                    },
                    "start": {
                      "column": 19,
                      "line": 190
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 190
                      },
                      "start": {
                        "column": 40,
                        "line": 190
                      }
                    },
                    "range": [
                      3691,
                      3699
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        3693,
                        3699
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 190
                        },
                        "start": {
                          "column": 42,
                          "line": 190
                        }
                      }
                    }
                  },
                  "range": [
                    3689,
                    3699
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 190
                    },
                    "start": {
                      "column": 38,
                      "line": 190
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 190
                  },
                  "start": {
                    "column": 49,
                    "line": 190
                  }
                },
                "range": [
                  3700,
                  3715
                ],
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3702,
                          3703
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 190
                          },
                          "start": {
                            "column": 51,
                            "line": 190
                          }
                        }
                      },
                      "range": [
                        3702,
                        3703
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 190
                        },
                        "start": {
                          "column": 51,
                          "line": 190
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "range": [
                          3706,
                          3715
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 190
                          },
                          "start": {
                            "column": 55,
                            "line": 190
                          }
                        }
                      },
                      "range": [
                        3706,
                        3715
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 190
                        },
                        "start": {
                          "column": 55,
                          "line": 190
                        }
                      }
                    }
                  ],
                  "range": [
                    3702,
                    3715
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 190
                    },
                    "start": {
                      "column": 51,
                      "line": 190
                    }
                  }
                }
              },
              "range": [
                3652,
                3716
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 190
                },
                "start": {
                  "column": 1,
                  "line": 190
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "range": [
                  3718,
                  3727
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 191
                  },
                  "start": {
                    "column": 1,
                    "line": 191
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
                    "column": 2,
                    "line": 196
                  },
                  "start": {
                    "column": 10,
                    "line": 191
                  }
                },
                "range": [
                  3727,
                  3805
                ],
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3729,
                          3730
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 191
                          },
                          "start": {
                            "column": 12,
                            "line": 191
                          }
                        }
                      },
                      "range": [
                        3729,
                        3730
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 191
                        },
                        "start": {
                          "column": 12,
                          "line": 191
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
                            "name": "name",
                            "optional": false,
                            "range": [
                              3737,
                              3741
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 192
                              },
                              "start": {
                                "column": 2,
                                "line": 192
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
                                "line": 192
                              },
                              "start": {
                                "column": 6,
                                "line": 192
                              }
                            },
                            "range": [
                              3741,
                              3749
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                3743,
                                3749
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 192
                                },
                                "start": {
                                  "column": 8,
                                  "line": 192
                                }
                              }
                            }
                          },
                          "range": [
                            3737,
                            3750
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 192
                            },
                            "start": {
                              "column": 2,
                              "line": 192
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "system",
                            "optional": false,
                            "range": [
                              3753,
                              3759
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 193
                              },
                              "start": {
                                "column": 2,
                                "line": 193
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
                                "line": 193
                              },
                              "start": {
                                "column": 8,
                                "line": 193
                              }
                            },
                            "range": [
                              3759,
                              3768
                            ],
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "range": [
                                3761,
                                3768
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 193
                                },
                                "start": {
                                  "column": 10,
                                  "line": 193
                                }
                              }
                            }
                          },
                          "range": [
                            3753,
                            3769
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 193
                            },
                            "start": {
                              "column": 2,
                              "line": 193
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "play",
                            "optional": false,
                            "range": [
                              3772,
                              3776
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 194
                              },
                              "start": {
                                "column": 2,
                                "line": 194
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 194
                              },
                              "start": {
                                "column": 8,
                                "line": 194
                              }
                            },
                            "range": [
                              3778,
                              3784
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                3780,
                                3784
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 194
                                },
                                "start": {
                                  "column": 10,
                                  "line": 194
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            3772,
                            3785
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 194
                            },
                            "start": {
                              "column": 2,
                              "line": 194
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pause",
                            "optional": false,
                            "range": [
                              3788,
                              3793
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 195
                              },
                              "start": {
                                "column": 2,
                                "line": 195
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 195
                              },
                              "start": {
                                "column": 9,
                                "line": 195
                              }
                            },
                            "range": [
                              3795,
                              3801
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                3797,
                                3801
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 195
                                },
                                "start": {
                                  "column": 11,
                                  "line": 195
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            3788,
                            3802
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 195
                            },
                            "start": {
                              "column": 2,
                              "line": 195
                            }
                          }
                        }
                      ],
                      "range": [
                        3733,
                        3805
                      ],
                      "loc": {
                        "end": {
                          "column": 2,
                          "line": 196
                        },
                        "start": {
                          "column": 16,
                          "line": 191
                        }
                      }
                    }
                  ],
                  "range": [
                    3729,
                    3805
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 196
                    },
                    "start": {
                      "column": 12,
                      "line": 191
                    }
                  }
                }
              },
              "range": [
                3718,
                3806
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 196
                },
                "start": {
                  "column": 1,
                  "line": 191
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 197
            },
            "start": {
              "column": 56,
              "line": 189
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentConstructor",
          "optional": false,
          "range": [
            3610,
            3630
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 189
            },
            "start": {
              "column": 17,
              "line": 189
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 189
            },
            "start": {
              "column": 37,
              "line": 189
            }
          },
          "range": [
            3630,
            3648
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  3641,
                  3647
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 189
                  },
                  "start": {
                    "column": 48,
                    "line": 189
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3631,
                  3632
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 189
                  },
                  "start": {
                    "column": 38,
                    "line": 189
                  }
                }
              },
              "out": false,
              "range": [
                3631,
                3647
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 189
                },
                "start": {
                  "column": 38,
                  "line": 189
                }
              }
            }
          ]
        },
        "range": [
          3600,
          3808
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 197
          },
          "start": {
            "column": 7,
            "line": 189
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 197
        },
        "start": {
          "column": 0,
          "line": 189
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "registerComponent",
        "optional": false,
        "range": [
          3827,
          3844
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 199
          },
          "start": {
            "column": 17,
            "line": 199
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 200
              },
              "start": {
                "column": 8,
                "line": 200
              }
            },
            "range": [
              3872,
              3880
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                3874,
                3880
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 200
                },
                "start": {
                  "column": 10,
                  "line": 200
                }
              }
            }
          },
          "range": [
            3868,
            3880
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 200
            },
            "start": {
              "column": 4,
              "line": 200
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 201
              },
              "start": {
                "column": 13,
                "line": 201
              }
            },
            "range": [
              3895,
              3919
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3916,
                  3919
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3917,
                        3918
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 201
                        },
                        "start": {
                          "column": 35,
                          "line": 201
                        }
                      }
                    },
                    "range": [
                      3917,
                      3918
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 201
                      },
                      "start": {
                        "column": 35,
                        "line": 201
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 201
                  },
                  "start": {
                    "column": 34,
                    "line": 201
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentDefinition",
                "optional": false,
                "range": [
                  3897,
                  3916
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 201
                  },
                  "start": {
                    "column": 15,
                    "line": 201
                  }
                }
              },
              "range": [
                3897,
                3919
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 201
                },
                "start": {
                  "column": 15,
                  "line": 201
                }
              }
            }
          },
          "range": [
            3886,
            3919
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 201
            },
            "start": {
              "column": 4,
              "line": 201
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 202
          },
          "start": {
            "column": 1,
            "line": 202
          }
        },
        "range": [
          3921,
          3946
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3943,
              3946
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3944,
                    3945
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 202
                    },
                    "start": {
                      "column": 24,
                      "line": 202
                    }
                  }
                },
                "range": [
                  3944,
                  3945
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 202
                  },
                  "start": {
                    "column": 24,
                    "line": 202
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 202
              },
              "start": {
                "column": 23,
                "line": 202
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentConstructor",
            "optional": false,
            "range": [
              3923,
              3943
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 202
              },
              "start": {
                "column": 3,
                "line": 202
              }
            }
          },
          "range": [
            3923,
            3946
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 202
            },
            "start": {
              "column": 3,
              "line": 202
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 199
          },
          "start": {
            "column": 34,
            "line": 199
          }
        },
        "range": [
          3844,
          3862
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                3855,
                3861
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 199
                },
                "start": {
                  "column": 45,
                  "line": 199
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3845,
                3846
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 199
                },
                "start": {
                  "column": 35,
                  "line": 199
                }
              }
            },
            "out": false,
            "range": [
              3845,
              3861
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 199
              },
              "start": {
                "column": 35,
                "line": 199
              }
            }
          }
        ]
      },
      "range": [
        3810,
        3947
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 202
        },
        "start": {
          "column": 0,
          "line": 199
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3949,
        4059
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentDefinition",
          "optional": false,
          "range": [
            3961,
            3980
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 204
            },
            "start": {
              "column": 12,
              "line": 204
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
                "name": "T",
                "optional": false,
                "range": [
                  4010,
                  4011
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 204
                  },
                  "start": {
                    "column": 61,
                    "line": 204
                  }
                }
              },
              "range": [
                4010,
                4011
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 204
                },
                "start": {
                  "column": 61,
                  "line": 204
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4021,
                  4032
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "range": [
                        4022,
                        4031
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 204
                        },
                        "start": {
                          "column": 73,
                          "line": 204
                        }
                      }
                    },
                    "range": [
                      4022,
                      4031
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 204
                      },
                      "start": {
                        "column": 73,
                        "line": 204
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 204
                  },
                  "start": {
                    "column": 72,
                    "line": 204
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  4014,
                  4021
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 204
                  },
                  "start": {
                    "column": 65,
                    "line": 204
                  }
                }
              },
              "range": [
                4014,
                4032
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 204
                },
                "start": {
                  "column": 65,
                  "line": 204
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4043,
                  4058
                ],
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            4044,
                            4045
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 204
                            },
                            "start": {
                              "column": 95,
                              "line": 204
                            }
                          }
                        },
                        "range": [
                          4044,
                          4045
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 204
                          },
                          "start": {
                            "column": 95,
                            "line": 204
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "range": [
                            4048,
                            4057
                          ],
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 204
                            },
                            "start": {
                              "column": 99,
                              "line": 204
                            }
                          }
                        },
                        "range": [
                          4048,
                          4057
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 204
                          },
                          "start": {
                            "column": 99,
                            "line": 204
                          }
                        }
                      }
                    ],
                    "range": [
                      4044,
                      4057
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 204
                      },
                      "start": {
                        "column": 95,
                        "line": 204
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 204
                  },
                  "start": {
                    "column": 94,
                    "line": 204
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisType",
                "optional": false,
                "range": [
                  4035,
                  4043
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 204
                  },
                  "start": {
                    "column": 86,
                    "line": 204
                  }
                }
              },
              "range": [
                4035,
                4058
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 204
                },
                "start": {
                  "column": 86,
                  "line": 204
                }
              }
            }
          ],
          "range": [
            4010,
            4058
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 204
            },
            "start": {
              "column": 61,
              "line": 204
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 58,
              "line": 204
            },
            "start": {
              "column": 31,
              "line": 204
            }
          },
          "range": [
            3980,
            4007
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  3991,
                  3997
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 204
                  },
                  "start": {
                    "column": 42,
                    "line": 204
                  }
                }
              },
              "default": {
                "type": "TSObjectKeyword",
                "range": [
                  4000,
                  4006
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 204
                  },
                  "start": {
                    "column": 51,
                    "line": 204
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3981,
                  3982
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 204
                  },
                  "start": {
                    "column": 32,
                    "line": 204
                  }
                }
              },
              "out": false,
              "range": [
                3981,
                4006
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 204
                },
                "start": {
                  "column": 32,
                  "line": 204
                }
              }
            }
          ]
        },
        "range": [
          3956,
          4059
        ],
        "loc": {
          "end": {
            "column": 110,
            "line": 204
          },
          "start": {
            "column": 7,
            "line": 204
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 110,
          "line": 204
        },
        "start": {
          "column": 0,
          "line": 204
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
            "name": "Component",
            "optional": false,
            "range": [
              4067,
              4076
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 206
              },
              "start": {
                "column": 6,
                "line": 206
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'test-component'",
                "value": "test-component",
                "range": [
                  4097,
                  4113
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 206
                  },
                  "start": {
                    "column": 36,
                    "line": 206
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "schema",
                      "optional": false,
                      "range": [
                        4118,
                        4124
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 207
                        },
                        "start": {
                          "column": 1,
                          "line": 207
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "range": [
                              4130,
                              4140
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 208
                              },
                              "start": {
                                "column": 2,
                                "line": 208
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "default",
                                  "optional": false,
                                  "range": [
                                    4147,
                                    4154
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 209
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 209
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrayExpression",
                                  "elements": [],
                                  "range": [
                                    4156,
                                    4158
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 209
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 209
                                    }
                                  }
                                },
                                "range": [
                                  4147,
                                  4158
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 209
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 209
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "parse",
                                  "optional": false,
                                  "range": [
                                    4163,
                                    4168
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 210
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 210
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": true,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "FunctionExpression",
                                  "range": [
                                    4168,
                                    4196
                                  ],
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "raw": "true",
                                              "value": true,
                                              "range": [
                                                4185,
                                                4189
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 16,
                                                  "line": 211
                                                },
                                                "start": {
                                                  "column": 12,
                                                  "line": 211
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            4184,
                                            4190
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 17,
                                              "line": 211
                                            },
                                            "start": {
                                              "column": 11,
                                              "line": 211
                                            }
                                          }
                                        },
                                        "range": [
                                          4177,
                                          4191
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 211
                                          },
                                          "start": {
                                            "column": 4,
                                            "line": 211
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      4171,
                                      4196
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 4,
                                        "line": 212
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 210
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
                                      "column": 4,
                                      "line": 212
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 210
                                    }
                                  }
                                },
                                "range": [
                                  4163,
                                  4196
                                ],
                                "loc": {
                                  "end": {
                                    "column": 4,
                                    "line": 212
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 210
                                  }
                                }
                              }
                            ],
                            "range": [
                              4142,
                              4200
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 213
                              },
                              "start": {
                                "column": 14,
                                "line": 208
                              }
                            }
                          },
                          "range": [
                            4130,
                            4200
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 213
                            },
                            "start": {
                              "column": 2,
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
                            "name": "string",
                            "optional": false,
                            "range": [
                              4204,
                              4210
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 214
                              },
                              "start": {
                                "column": 2,
                                "line": 214
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    4214,
                                    4218
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 214
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 214
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "'string'",
                                  "value": "string",
                                  "range": [
                                    4220,
                                    4228
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 214
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 214
                                    }
                                  }
                                },
                                "range": [
                                  4214,
                                  4228
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 214
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 214
                                  }
                                }
                              }
                            ],
                            "range": [
                              4212,
                              4230
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 214
                              },
                              "start": {
                                "column": 10,
                                "line": 214
                              }
                            }
                          },
                          "range": [
                            4204,
                            4230
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 214
                            },
                            "start": {
                              "column": 2,
                              "line": 214
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "range": [
                              4234,
                              4237
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 215
                              },
                              "start": {
                                "column": 2,
                                "line": 215
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              4239,
                              4240
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 215
                              },
                              "start": {
                                "column": 7,
                                "line": 215
                              }
                            }
                          },
                          "range": [
                            4234,
                            4240
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 215
                            },
                            "start": {
                              "column": 2,
                              "line": 215
                            }
                          }
                        }
                      ],
                      "range": [
                        4126,
                        4243
                      ],
                      "loc": {
                        "end": {
                          "column": 2,
                          "line": 216
                        },
                        "start": {
                          "column": 9,
                          "line": 207
                        }
                      }
                    },
                    "range": [
                      4118,
                      4243
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 216
                      },
                      "start": {
                        "column": 1,
                        "line": 207
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "init",
                      "optional": false,
                      "range": [
                        4246,
                        4250
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 217
                        },
                        "start": {
                          "column": 1,
                          "line": 217
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4250,
                        4338
                      ],
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      4257,
                                      4261
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 6,
                                        "line": 218
                                      },
                                      "start": {
                                        "column": 2,
                                        "line": 218
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
                                      4262,
                                      4266
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 11,
                                        "line": 218
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 218
                                      }
                                    }
                                  },
                                  "range": [
                                    4257,
                                    4266
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 11,
                                      "line": 218
                                    },
                                    "start": {
                                      "column": 2,
                                      "line": 218
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "range": [
                                    4267,
                                    4270
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 218
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 218
                                    }
                                  }
                                },
                                "range": [
                                  4257,
                                  4270
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 218
                                  },
                                  "start": {
                                    "column": 2,
                                    "line": 218
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  4273,
                                  4274
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 218
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 218
                                  }
                                }
                              },
                              "range": [
                                4257,
                                4274
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 218
                                },
                                "start": {
                                  "column": 2,
                                  "line": 218
                                }
                              }
                            },
                            "range": [
                              4257,
                              4275
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 218
                              },
                              "start": {
                                "column": 2,
                                "line": 218
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
                                  "raw": "'custom-attribute'",
                                  "value": "custom-attribute",
                                  "range": [
                                    4299,
                                    4317
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 219
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 219
                                    }
                                  }
                                },
                                {
                                  "type": "Literal",
                                  "raw": "'custom-value'",
                                  "value": "custom-value",
                                  "range": [
                                    4319,
                                    4333
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 219
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 219
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      4278,
                                      4282
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 6,
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
                                    "name": "el",
                                    "optional": false,
                                    "range": [
                                      4283,
                                      4285
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 9,
                                        "line": 219
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 219
                                      }
                                    }
                                  },
                                  "range": [
                                    4278,
                                    4285
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
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
                                  "name": "setAttribute",
                                  "optional": false,
                                  "range": [
                                    4286,
                                    4298
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 219
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 219
                                    }
                                  }
                                },
                                "range": [
                                  4278,
                                  4298
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
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
                                4278,
                                4334
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 219
                                },
                                "start": {
                                  "column": 2,
                                  "line": 219
                                }
                              }
                            },
                            "range": [
                              4278,
                              4335
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
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
                          4253,
                          4338
                        ],
                        "loc": {
                          "end": {
                            "column": 2,
                            "line": 220
                          },
                          "start": {
                            "column": 8,
                            "line": 217
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
                          "column": 2,
                          "line": 220
                        },
                        "start": {
                          "column": 5,
                          "line": 217
                        }
                      }
                    },
                    "range": [
                      4246,
                      4338
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 220
                      },
                      "start": {
                        "column": 1,
                        "line": 217
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "update",
                      "optional": false,
                      "range": [
                        4341,
                        4347
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 221
                        },
                        "start": {
                          "column": 1,
                          "line": 221
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4347,
                        4352
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          4350,
                          4352
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 221
                          },
                          "start": {
                            "column": 10,
                            "line": 221
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
                          "column": 12,
                          "line": 221
                        },
                        "start": {
                          "column": 7,
                          "line": 221
                        }
                      }
                    },
                    "range": [
                      4341,
                      4352
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 221
                      },
                      "start": {
                        "column": 1,
                        "line": 221
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "range": [
                        4355,
                        4359
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 222
                        },
                        "start": {
                          "column": 1,
                          "line": 222
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4359,
                        4364
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          4362,
                          4364
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 222
                          },
                          "start": {
                            "column": 8,
                            "line": 222
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
                          "column": 10,
                          "line": 222
                        },
                        "start": {
                          "column": 5,
                          "line": 222
                        }
                      }
                    },
                    "range": [
                      4355,
                      4364
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 222
                      },
                      "start": {
                        "column": 1,
                        "line": 222
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "remove",
                      "optional": false,
                      "range": [
                        4367,
                        4373
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 223
                        },
                        "start": {
                          "column": 1,
                          "line": 223
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4373,
                        4378
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          4376,
                          4378
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 223
                          },
                          "start": {
                            "column": 10,
                            "line": 223
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
                          "column": 12,
                          "line": 223
                        },
                        "start": {
                          "column": 7,
                          "line": 223
                        }
                      }
                    },
                    "range": [
                      4367,
                      4378
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 223
                      },
                      "start": {
                        "column": 1,
                        "line": 223
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pause",
                      "optional": false,
                      "range": [
                        4381,
                        4386
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 224
                        },
                        "start": {
                          "column": 1,
                          "line": 224
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4386,
                        4391
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          4389,
                          4391
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 224
                          },
                          "start": {
                            "column": 9,
                            "line": 224
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
                          "column": 11,
                          "line": 224
                        },
                        "start": {
                          "column": 6,
                          "line": 224
                        }
                      }
                    },
                    "range": [
                      4381,
                      4391
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 224
                      },
                      "start": {
                        "column": 1,
                        "line": 224
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "play",
                      "optional": false,
                      "range": [
                        4394,
                        4398
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 225
                        },
                        "start": {
                          "column": 1,
                          "line": 225
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4398,
                        4403
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          4401,
                          4403
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 225
                          },
                          "start": {
                            "column": 8,
                            "line": 225
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
                          "column": 10,
                          "line": 225
                        },
                        "start": {
                          "column": 5,
                          "line": 225
                        }
                      }
                    },
                    "range": [
                      4394,
                      4403
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 225
                      },
                      "start": {
                        "column": 1,
                        "line": 225
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "multiply",
                      "optional": false,
                      "range": [
                        4407,
                        4415
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 227
                        },
                        "start": {
                          "column": 1,
                          "line": 227
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        4415,
                        4561
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    4512,
                                    4513
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 229
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 229
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        4516,
                                        4520
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 229
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 229
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
                                        4521,
                                        4525
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 229
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 229
                                        }
                                      }
                                    },
                                    "range": [
                                      4516,
                                      4525
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 229
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 229
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "num",
                                    "optional": false,
                                    "range": [
                                      4526,
                                      4529
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 229
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 229
                                      }
                                    }
                                  },
                                  "range": [
                                    4516,
                                    4529
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 229
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 229
                                    }
                                  }
                                },
                                "range": [
                                  4512,
                                  4529
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 229
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 229
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "TSNonNullExpression",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          4532,
                                          4536
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 229
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 229
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "system",
                                        "optional": false,
                                        "range": [
                                          4537,
                                          4543
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 229
                                          },
                                          "start": {
                                            "column": 34,
                                            "line": 229
                                          }
                                        }
                                      },
                                      "range": [
                                        4532,
                                        4543
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 229
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 229
                                        }
                                      }
                                    },
                                    "range": [
                                      4532,
                                      4544
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 229
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 229
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
                                      4545,
                                      4549
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 229
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 229
                                      }
                                    }
                                  },
                                  "range": [
                                    4532,
                                    4549
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 229
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 229
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "counter",
                                  "optional": false,
                                  "range": [
                                    4550,
                                    4557
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 229
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 229
                                    }
                                  }
                                },
                                "range": [
                                  4532,
                                  4557
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 229
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 229
                                  }
                                }
                              },
                              "range": [
                                4512,
                                4557
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 229
                                },
                                "start": {
                                  "column": 9,
                                  "line": 229
                                }
                              }
                            },
                            "range": [
                              4505,
                              4558
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 229
                              },
                              "start": {
                                "column": 2,
                                "line": 229
                              }
                            }
                          }
                        ],
                        "range": [
                          4427,
                          4561
                        ],
                        "loc": {
                          "end": {
                            "column": 2,
                            "line": 230
                          },
                          "start": {
                            "column": 21,
                            "line": 227
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 227
                              },
                              "start": {
                                "column": 11,
                                "line": 227
                              }
                            },
                            "range": [
                              4417,
                              4425
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                4419,
                                4425
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 227
                                },
                                "start": {
                                  "column": 13,
                                  "line": 227
                                }
                              }
                            }
                          },
                          "range": [
                            4416,
                            4425
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 227
                            },
                            "start": {
                              "column": 10,
                              "line": 227
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 2,
                          "line": 230
                        },
                        "start": {
                          "column": 9,
                          "line": 227
                        }
                      }
                    },
                    "range": [
                      4407,
                      4561
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 230
                      },
                      "start": {
                        "column": 1,
                        "line": 227
                      }
                    }
                  }
                ],
                "range": [
                  4115,
                  4563
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 231
                  },
                  "start": {
                    "column": 54,
                    "line": 206
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "registerComponent",
              "optional": false,
              "range": [
                4079,
                4096
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 206
                },
                "start": {
                  "column": 18,
                  "line": 206
                }
              }
            },
            "optional": false,
            "range": [
              4079,
              4564
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 231
              },
              "start": {
                "column": 18,
                "line": 206
              }
            }
          },
          "range": [
            4067,
            4564
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 231
            },
            "start": {
              "column": 6,
              "line": 206
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4061,
        4565
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 231
        },
        "start": {
          "column": 0,
          "line": 206
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4607,
          4664
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "throw",
              "optional": false,
              "range": [
                4613,
                4618
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 236
                },
                "start": {
                  "column": 4,
                  "line": 236
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
                4618,
                4662
              ],
              "async": false,
              "body": {
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
                          4648,
                          4653
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 237
                          },
                          "start": {
                            "column": 18,
                            "line": 237
                          }
                        }
                      },
                      "range": [
                        4644,
                        4655
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 237
                        },
                        "start": {
                          "column": 14,
                          "line": 237
                        }
                      }
                    },
                    "range": [
                      4638,
                      4656
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 237
                      },
                      "start": {
                        "column": 8,
                        "line": 237
                      }
                    }
                  }
                ],
                "range": [
                  4628,
                  4662
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 238
                  },
                  "start": {
                    "column": 19,
                    "line": 236
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 236
                  },
                  "start": {
                    "column": 11,
                    "line": 236
                  }
                },
                "range": [
                  4620,
                  4627
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    4622,
                    4627
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 236
                    },
                    "start": {
                      "column": 13,
                      "line": 236
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 238
                },
                "start": {
                  "column": 9,
                  "line": 236
                }
              }
            },
            "range": [
              4613,
              4662
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 238
              },
              "start": {
                "column": 4,
                "line": 236
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 239
          },
          "start": {
            "column": 18,
            "line": 235
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "range": [
          4595,
          4606
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 235
          },
          "start": {
            "column": 6,
            "line": 235
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        4589,
        4664
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 239
        },
        "start": {
          "column": 0,
          "line": 235
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4707,
          4813
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "err",
              "optional": false,
              "range": [
                4713,
                4716
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 242
                },
                "start": {
                  "column": 4,
                  "line": 242
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
                4716,
                4766
              ],
              "async": false,
              "body": {
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
                          "type": "Super",
                          "range": [
                            4747,
                            4752
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 243
                            },
                            "start": {
                              "column": 8,
                              "line": 243
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "range": [
                            4753,
                            4758
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 243
                            },
                            "start": {
                              "column": 14,
                              "line": 243
                            }
                          }
                        },
                        "range": [
                          4747,
                          4758
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 243
                          },
                          "start": {
                            "column": 8,
                            "line": 243
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        4747,
                        4760
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 243
                        },
                        "start": {
                          "column": 8,
                          "line": 243
                        }
                      }
                    },
                    "range": [
                      4747,
                      4760
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 243
                      },
                      "start": {
                        "column": 8,
                        "line": 243
                      }
                    }
                  }
                ],
                "range": [
                  4737,
                  4766
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 244
                  },
                  "start": {
                    "column": 28,
                    "line": 242
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
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 242
                      },
                      "start": {
                        "column": 11,
                        "line": 242
                      }
                    },
                    "range": [
                      4720,
                      4728
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        4722,
                        4728
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 242
                        },
                        "start": {
                          "column": 13,
                          "line": 242
                        }
                      }
                    }
                  },
                  "range": [
                    4717,
                    4728
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 242
                    },
                    "start": {
                      "column": 8,
                      "line": 242
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 242
                  },
                  "start": {
                    "column": 20,
                    "line": 242
                  }
                },
                "range": [
                  4729,
                  4736
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    4731,
                    4736
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 242
                    },
                    "start": {
                      "column": 22,
                      "line": 242
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 244
                },
                "start": {
                  "column": 7,
                  "line": 242
                }
              }
            },
            "range": [
              4713,
              4766
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 244
              },
              "start": {
                "column": 4,
                "line": 242
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
              "name": "ok",
              "optional": false,
              "range": [
                4771,
                4773
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 245
                },
                "start": {
                  "column": 4,
                  "line": 245
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
                4773,
                4811
              ],
              "async": false,
              "body": {
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
                          "type": "ThisExpression",
                          "range": [
                            4793,
                            4797
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 246
                            },
                            "start": {
                              "column": 8,
                              "line": 246
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "range": [
                            4798,
                            4803
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 246
                            },
                            "start": {
                              "column": 13,
                              "line": 246
                            }
                          }
                        },
                        "range": [
                          4793,
                          4803
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 246
                          },
                          "start": {
                            "column": 8,
                            "line": 246
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        4793,
                        4805
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 246
                        },
                        "start": {
                          "column": 8,
                          "line": 246
                        }
                      }
                    },
                    "range": [
                      4793,
                      4805
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 246
                      },
                      "start": {
                        "column": 8,
                        "line": 246
                      }
                    }
                  }
                ],
                "range": [
                  4783,
                  4811
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 247
                  },
                  "start": {
                    "column": 16,
                    "line": 245
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 245
                  },
                  "start": {
                    "column": 8,
                    "line": 245
                  }
                },
                "range": [
                  4775,
                  4782
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    4777,
                    4782
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 245
                    },
                    "start": {
                      "column": 10,
                      "line": 245
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 247
                },
                "start": {
                  "column": 6,
                  "line": 245
                }
              }
            },
            "range": [
              4771,
              4811
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 247
              },
              "start": {
                "column": 4,
                "line": 245
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 248
          },
          "start": {
            "column": 41,
            "line": 241
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperThrowable",
        "optional": false,
        "range": [
          4672,
          4686
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 241
          },
          "start": {
            "column": 6,
            "line": 241
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "range": [
          4695,
          4706
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 241
          },
          "start": {
            "column": 29,
            "line": 241
          }
        }
      },
      "range": [
        4666,
        4813
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 248
        },
        "start": {
          "column": 0,
          "line": 241
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          4856,
          4894
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "panic",
              "optional": false,
              "range": [
                4862,
                4867
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 253
                },
                "start": {
                  "column": 4,
                  "line": 253
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 253
                    },
                    "start": {
                      "column": 17,
                      "line": 253
                    }
                  },
                  "range": [
                    4875,
                    4883
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      4877,
                      4883
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 253
                      },
                      "start": {
                        "column": 19,
                        "line": 253
                      }
                    }
                  }
                },
                "range": [
                  4868,
                  4883
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 253
                  },
                  "start": {
                    "column": 10,
                    "line": 253
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 253
                },
                "start": {
                  "column": 26,
                  "line": 253
                }
              },
              "range": [
                4884,
                4891
              ],
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "range": [
                  4886,
                  4891
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 253
                  },
                  "start": {
                    "column": 28,
                    "line": 253
                  }
                }
              }
            },
            "static": false,
            "range": [
              4862,
              4892
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 253
              },
              "start": {
                "column": 4,
                "line": 253
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 254
          },
          "start": {
            "column": 19,
            "line": 252
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "range": [
          4847,
          4855
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 252
          },
          "start": {
            "column": 10,
            "line": 252
          }
        }
      },
      "range": [
        4837,
        4894
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 254
        },
        "start": {
          "column": 0,
          "line": 252
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      5049,
                      5050
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 260
                      },
                      "start": {
                        "column": 15,
                        "line": 260
                      }
                    }
                  },
                  "range": [
                    5042,
                    5051
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 260
                    },
                    "start": {
                      "column": 8,
                      "line": 260
                    }
                  }
                }
              ],
              "range": [
                5032,
                5057
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 261
                },
                "start": {
                  "column": 11,
                  "line": 259
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
                        "raw": "\"ouch\"",
                        "value": "ouch",
                        "range": [
                          5012,
                          5018
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 258
                          },
                          "start": {
                            "column": 23,
                            "line": 258
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
                        "name": "services",
                        "optional": false,
                        "range": [
                          4997,
                          5005
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 258
                          },
                          "start": {
                            "column": 8,
                            "line": 258
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "panic",
                        "optional": false,
                        "range": [
                          5006,
                          5011
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 258
                          },
                          "start": {
                            "column": 17,
                            "line": 258
                          }
                        }
                      },
                      "range": [
                        4997,
                        5011
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 258
                        },
                        "start": {
                          "column": 8,
                          "line": 258
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      4997,
                      5019
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 258
                      },
                      "start": {
                        "column": 8,
                        "line": 258
                      }
                    }
                  },
                  "range": [
                    4997,
                    5020
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 258
                    },
                    "start": {
                      "column": 8,
                      "line": 258
                    }
                  }
                }
              ],
              "range": [
                4987,
                5026
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 259
                },
                "start": {
                  "column": 20,
                  "line": 257
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  4975,
                  4976
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 257
                  },
                  "start": {
                    "column": 8,
                    "line": 257
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  4981,
                  4985
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 257
                  },
                  "start": {
                    "column": 14,
                    "line": 257
                  }
                }
              },
              "range": [
                4975,
                4985
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 257
                },
                "start": {
                  "column": 8,
                  "line": 257
                }
              }
            },
            "range": [
              4971,
              5057
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 261
              },
              "start": {
                "column": 4,
                "line": 257
              }
            }
          }
        ],
        "range": [
          4965,
          5059
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 262
          },
          "start": {
            "column": 69,
            "line": 256
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
          4905,
          4908
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 256
          },
          "start": {
            "column": 9,
            "line": 256
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "services",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 256
              },
              "start": {
                "column": 21,
                "line": 256
              }
            },
            "range": [
              4917,
              4937
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4927,
                  4937
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "range": [
                        4928,
                        4936
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 256
                        },
                        "start": {
                          "column": 32,
                          "line": 256
                        }
                      }
                    },
                    "range": [
                      4928,
                      4936
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 256
                      },
                      "start": {
                        "column": 32,
                        "line": 256
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 256
                  },
                  "start": {
                    "column": 31,
                    "line": 256
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "range": [
                  4919,
                  4927
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 256
                  },
                  "start": {
                    "column": 23,
                    "line": 256
                  }
                }
              },
              "range": [
                4919,
                4937
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 256
                },
                "start": {
                  "column": 23,
                  "line": 256
                }
              }
            }
          },
          "range": [
            4909,
            4937
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 256
            },
            "start": {
              "column": 13,
              "line": 256
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 256
              },
              "start": {
                "column": 44,
                "line": 256
              }
            },
            "range": [
              4940,
              4955
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4942,
                    4948
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 256
                    },
                    "start": {
                      "column": 46,
                      "line": 256
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    4951,
                    4955
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 256
                    },
                    "start": {
                      "column": 55,
                      "line": 256
                    }
                  }
                }
              ],
              "range": [
                4942,
                4955
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 256
                },
                "start": {
                  "column": 46,
                  "line": 256
                }
              }
            }
          },
          "range": [
            4939,
            4955
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 256
            },
            "start": {
              "column": 43,
              "line": 256
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 256
          },
          "start": {
            "column": 60,
            "line": 256
          }
        },
        "range": [
          4956,
          4964
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            4958,
            4964
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 256
            },
            "start": {
              "column": 62,
              "line": 256
            }
          }
        }
      },
      "range": [
        4896,
        5059
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 262
        },
        "start": {
          "column": 0,
          "line": 256
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 263
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
