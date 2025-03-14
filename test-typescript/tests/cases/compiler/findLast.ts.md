__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1520
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
            "name": "itemNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                36
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      18,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      27,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  18,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "range": [
                      62,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 1
                      },
                      "start": {
                        "column": 62,
                        "line": 1
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      71,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 1
                      },
                      "start": {
                        "column": 71,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    62,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 1
                    },
                    "start": {
                      "column": 62,
                      "line": 1
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
                    "name": "item",
                    "optional": false,
                    "range": [
                      53,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 1
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  52,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 1
                  },
                  "start": {
                    "column": 52,
                    "line": 1
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
                    "raw": "0",
                    "value": 0,
                    "range": [
                      40,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 1
                      },
                      "start": {
                        "column": 40,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  39,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "range": [
                  43,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              },
              "range": [
                39,
                51
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              39,
              73
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          },
          "range": [
            6,
            73
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 1
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
        74
      ],
      "loc": {
        "end": {
          "column": 74,
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
            "name": "itemString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                91,
                111
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      93,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      102,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  93,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              81,
              111
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "range": [
                      144,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 2
                      },
                      "start": {
                        "column": 69,
                        "line": 2
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      153,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 2
                      },
                      "start": {
                        "column": 78,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    144,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 2
                    },
                    "start": {
                      "column": 69,
                      "line": 2
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
                    "name": "item",
                    "optional": false,
                    "range": [
                      135,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 2
                      },
                      "start": {
                        "column": 60,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  134,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 2
                  },
                  "start": {
                    "column": 59,
                    "line": 2
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
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      115,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 2
                      },
                      "start": {
                        "column": 40,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  114,
                  124
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "range": [
                  125,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 50,
                    "line": 2
                  }
                }
              },
              "range": [
                114,
                133
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 39,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              114,
              162
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 2
              },
              "start": {
                "column": 39,
                "line": 2
              }
            }
          },
          "range": [
            81,
            162
          ],
          "loc": {
            "end": {
              "column": 87,
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
        75,
        163
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  199,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              },
              "range": [
                199,
                209
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
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
                "name": "item",
                "optional": false,
                "range": [
                  190,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              189,
              209
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "range": [
                168,
                177
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              164,
              179
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              180,
              188
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            164,
            188
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          164,
          210
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        164,
        211
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  248,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 40,
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
                "raw": "0",
                "value": 0,
                "range": [
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 4
                  },
                  "start": {
                    "column": 45,
                    "line": 4
                  }
                }
              },
              "range": [
                248,
                258
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 4
                },
                "start": {
                  "column": 36,
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
                "name": "item",
                "optional": false,
                "range": [
                  239,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              238,
              258
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "range": [
                216,
                226
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              212,
              228
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              229,
              237
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "range": [
            212,
            237
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          212,
          259
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        212,
        260
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 4
        },
        "start": {
          "column": 0,
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  304,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  313,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
                    "line": 5
                  }
                }
              },
              "range": [
                304,
                314
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 5
                },
                "start": {
                  "column": 43,
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
                "name": "item",
                "optional": false,
                "range": [
                  295,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              294,
              314
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 5
              },
              "start": {
                "column": 33,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "range": [
                265,
                282
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              261,
              284
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              285,
              293
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 24,
                "line": 5
              }
            }
          },
          "range": [
            261,
            293
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          261,
          315
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        261,
        316
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  353,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 36,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  362,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 6
                  }
                }
              },
              "range": [
                353,
                363
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 36,
                  "line": 6
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
                "name": "item",
                "optional": false,
                "range": [
                  344,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              343,
              363
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "range": [
                321,
                331
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              317,
              333
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              334,
              342
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          },
          "range": [
            317,
            342
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          317,
          364
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        317,
        365
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  403,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 37,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  412,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 46,
                    "line": 7
                  }
                }
              },
              "range": [
                403,
                413
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 7
                },
                "start": {
                  "column": 37,
                  "line": 7
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
                "name": "item",
                "optional": false,
                "range": [
                  394,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              393,
              413
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 7
              },
              "start": {
                "column": 27,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "range": [
                370,
                381
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              366,
              383
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              384,
              392
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            366,
            392
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          366,
          414
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        366,
        415
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  452,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 36,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  461,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 8
                  },
                  "start": {
                    "column": 45,
                    "line": 8
                  }
                }
              },
              "range": [
                452,
                462
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 8
                },
                "start": {
                  "column": 36,
                  "line": 8
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
                "name": "item",
                "optional": false,
                "range": [
                  443,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 8
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              442,
              462
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 26,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "range": [
                420,
                430
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              416,
              432
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              433,
              441
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          },
          "range": [
            416,
            441
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          416,
          463
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        416,
        464
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  502,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 37,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  511,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 9
                  },
                  "start": {
                    "column": 46,
                    "line": 9
                  }
                }
              },
              "range": [
                502,
                512
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 9
                },
                "start": {
                  "column": 37,
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
                "name": "item",
                "optional": false,
                "range": [
                  493,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              492,
              512
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 27,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "range": [
                469,
                480
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              465,
              482
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              483,
              491
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 9
              }
            }
          },
          "range": [
            465,
            491
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          465,
          513
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        465,
        514
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  553,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  562,
                  563
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 10
                  },
                  "start": {
                    "column": 47,
                    "line": 10
                  }
                }
              },
              "range": [
                553,
                563
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 10
                },
                "start": {
                  "column": 38,
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
                "name": "item",
                "optional": false,
                "range": [
                  544,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              543,
              563
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 10
              },
              "start": {
                "column": 28,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "range": [
                519,
                531
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
            "range": [
              515,
              533
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              534,
              542
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 10
              }
            }
          },
          "range": [
            515,
            542
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          515,
          564
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        515,
        565
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  604,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 11
                  },
                  "start": {
                    "column": 38,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  613,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 11
                  },
                  "start": {
                    "column": 47,
                    "line": 11
                  }
                }
              },
              "range": [
                604,
                614
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
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
                "name": "item",
                "optional": false,
                "range": [
                  595,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              594,
              614
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 11
              },
              "start": {
                "column": 28,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "range": [
                570,
                582
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              566,
              584
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              585,
              593
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          "range": [
            566,
            593
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          566,
          615
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        566,
        616
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  656,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 12
                  },
                  "start": {
                    "column": 39,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      672,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 12
                      },
                      "start": {
                        "column": 55,
                        "line": 12
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    665,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 12
                    },
                    "start": {
                      "column": 48,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  665,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 12
                  },
                  "start": {
                    "column": 48,
                    "line": 12
                  }
                }
              },
              "range": [
                656,
                674
              ],
              "loc": {
                "end": {
                  "column": 57,
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
                "name": "item",
                "optional": false,
                "range": [
                  647,
                  651
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
              646,
              674
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 12
              },
              "start": {
                "column": 29,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "range": [
                621,
                634
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              617,
              636
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "range": [
              637,
              645
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
            617,
            645
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          617,
          675
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        617,
        676
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 12
        },
        "start": {
          "column": 0,
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  717,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 13
                  },
                  "start": {
                    "column": 40,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      733,
                      734
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 13
                      },
                      "start": {
                        "column": 56,
                        "line": 13
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    726,
                    732
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 13
                    },
                    "start": {
                      "column": 49,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "range": [
                  726,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 13
                  },
                  "start": {
                    "column": 49,
                    "line": 13
                  }
                }
              },
              "range": [
                717,
                735
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 13
                },
                "start": {
                  "column": 40,
                  "line": 13
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
                "name": "item",
                "optional": false,
                "range": [
                  708,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 31,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              707,
              735
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 13
              },
              "start": {
                "column": 30,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "range": [
                681,
                695
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              677,
              697
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "name": "findLast",
            "optional": false,
            "range": [
              698,
              706
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 21,
                "line": 13
              }
            }
          },
          "range": [
            677,
            706
          ],
          "loc": {
            "end": {
              "column": 29,
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
          677,
          736
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        677,
        737
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "indexNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              },
              "range": [
                756,
                764
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  758,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              745,
              764
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "range": [
                      795,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 15
                      },
                      "start": {
                        "column": 56,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      804,
                      805
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 15
                      },
                      "start": {
                        "column": 65,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    795,
                    805
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 15
                    },
                    "start": {
                      "column": 56,
                      "line": 15
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
                    "name": "item",
                    "optional": false,
                    "range": [
                      786,
                      790
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 15
                      },
                      "start": {
                        "column": 47,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  785,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 15
                  },
                  "start": {
                    "column": 46,
                    "line": 15
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
                    "raw": "0",
                    "value": 0,
                    "range": [
                      768,
                      769
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 15
                      },
                      "start": {
                        "column": 29,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  767,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "range": [
                  771,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 15
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              },
              "range": [
                767,
                784
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              767,
              806
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 15
              },
              "start": {
                "column": 28,
                "line": 15
              }
            }
          },
          "range": [
            745,
            806
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        739,
        807
      ],
      "loc": {
        "end": {
          "column": 68,
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
            "name": "indexString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              },
              "range": [
                825,
                833
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  827,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              814,
              833
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "range": [
                      871,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 16
                      },
                      "start": {
                        "column": 63,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      880,
                      888
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 16
                      },
                      "start": {
                        "column": 72,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    871,
                    888
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 16
                    },
                    "start": {
                      "column": 63,
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
                    "name": "item",
                    "optional": false,
                    "range": [
                      862,
                      866
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 16
                      },
                      "start": {
                        "column": 54,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  861,
                  888
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 16
                  },
                  "start": {
                    "column": 53,
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
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      837,
                      845
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  836,
                  846
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 28,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "range": [
                  847,
                  860
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 16
                  },
                  "start": {
                    "column": 39,
                    "line": 16
                  }
                }
              },
              "range": [
                836,
                860
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 16
                },
                "start": {
                  "column": 28,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              836,
              889
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 16
              },
              "start": {
                "column": 28,
                "line": 16
              }
            }
          },
          "range": [
            814,
            889
          ],
          "loc": {
            "end": {
              "column": 81,
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
        808,
        890
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  931,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 17
                  },
                  "start": {
                    "column": 40,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  940,
                  941
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 17
                  },
                  "start": {
                    "column": 49,
                    "line": 17
                  }
                }
              },
              "range": [
                931,
                941
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 17
                },
                "start": {
                  "column": 40,
                  "line": 17
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
                "name": "item",
                "optional": false,
                "range": [
                  922,
                  926
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 17
                  },
                  "start": {
                    "column": 31,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              921,
              941
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 17
              },
              "start": {
                "column": 30,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "range": [
                895,
                904
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              891,
              906
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              907,
              920
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          },
          "range": [
            891,
            920
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          891,
          942
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        891,
        943
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  985,
                  989
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 41,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  994,
                  995
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 18
                  },
                  "start": {
                    "column": 50,
                    "line": 18
                  }
                }
              },
              "range": [
                985,
                995
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 18
                },
                "start": {
                  "column": 41,
                  "line": 18
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
                "name": "item",
                "optional": false,
                "range": [
                  976,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 32,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              975,
              995
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 18
              },
              "start": {
                "column": 31,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "range": [
                948,
                958
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              944,
              960
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              961,
              974
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 17,
                "line": 18
              }
            }
          },
          "range": [
            944,
            974
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          944,
          996
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        944,
        997
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1046,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 19
                  },
                  "start": {
                    "column": 48,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1055,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 19
                  },
                  "start": {
                    "column": 57,
                    "line": 19
                  }
                }
              },
              "range": [
                1046,
                1056
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 19
                },
                "start": {
                  "column": 48,
                  "line": 19
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
                "name": "item",
                "optional": false,
                "range": [
                  1037,
                  1041
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 19
                  },
                  "start": {
                    "column": 39,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              1036,
              1056
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 19
              },
              "start": {
                "column": 38,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "range": [
                1002,
                1019
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              998,
              1021
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1022,
              1035
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 24,
                "line": 19
              }
            }
          },
          "range": [
            998,
            1035
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          998,
          1057
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        998,
        1058
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1100,
                  1104
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 20
                  },
                  "start": {
                    "column": 41,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1109,
                  1110
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 20
                  },
                  "start": {
                    "column": 50,
                    "line": 20
                  }
                }
              },
              "range": [
                1100,
                1110
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 20
                },
                "start": {
                  "column": 41,
                  "line": 20
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
                "name": "item",
                "optional": false,
                "range": [
                  1091,
                  1095
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              1090,
              1110
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 20
              },
              "start": {
                "column": 31,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "range": [
                1063,
                1073
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              1059,
              1075
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1076,
              1089
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 17,
                "line": 20
              }
            }
          },
          "range": [
            1059,
            1089
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          1059,
          1111
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        1059,
        1112
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1155,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 21
                  },
                  "start": {
                    "column": 42,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1164,
                  1165
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 21
                  },
                  "start": {
                    "column": 51,
                    "line": 21
                  }
                }
              },
              "range": [
                1155,
                1165
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 21
                },
                "start": {
                  "column": 42,
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
                "name": "item",
                "optional": false,
                "range": [
                  1146,
                  1150
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 21
                  },
                  "start": {
                    "column": 33,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              1145,
              1165
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 21
              },
              "start": {
                "column": 32,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "range": [
                1117,
                1128
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              1113,
              1130
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1131,
              1144
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 18,
                "line": 21
              }
            }
          },
          "range": [
            1113,
            1144
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          1113,
          1166
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        1113,
        1167
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 21
        },
        "start": {
          "column": 0,
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1209,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 41,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1218,
                  1219
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 22
                  },
                  "start": {
                    "column": 50,
                    "line": 22
                  }
                }
              },
              "range": [
                1209,
                1219
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 22
                },
                "start": {
                  "column": 41,
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
                "name": "item",
                "optional": false,
                "range": [
                  1200,
                  1204
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 22
                  },
                  "start": {
                    "column": 32,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              1199,
              1219
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 22
              },
              "start": {
                "column": 31,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "range": [
                1172,
                1182
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              1168,
              1184
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1185,
              1198
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 17,
                "line": 22
              }
            }
          },
          "range": [
            1168,
            1198
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          1168,
          1220
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        1168,
        1221
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1264,
                  1268
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 23
                  },
                  "start": {
                    "column": 42,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1273,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 23
                  },
                  "start": {
                    "column": 51,
                    "line": 23
                  }
                }
              },
              "range": [
                1264,
                1274
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 23
                },
                "start": {
                  "column": 42,
                  "line": 23
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
                "name": "item",
                "optional": false,
                "range": [
                  1255,
                  1259
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 33,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              1254,
              1274
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 23
              },
              "start": {
                "column": 32,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "range": [
                1226,
                1237
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              1222,
              1239
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1240,
              1253
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          "range": [
            1222,
            1253
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          1222,
          1275
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        1222,
        1276
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1320,
                  1324
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 24
                  },
                  "start": {
                    "column": 43,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1329,
                  1330
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 24
                  },
                  "start": {
                    "column": 52,
                    "line": 24
                  }
                }
              },
              "range": [
                1320,
                1330
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 24
                },
                "start": {
                  "column": 43,
                  "line": 24
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
                "name": "item",
                "optional": false,
                "range": [
                  1311,
                  1315
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 24
                  },
                  "start": {
                    "column": 34,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              1310,
              1330
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 24
              },
              "start": {
                "column": 33,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "range": [
                1281,
                1293
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              1277,
              1295
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1296,
              1309
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 24
              },
              "start": {
                "column": 19,
                "line": 24
              }
            }
          },
          "range": [
            1277,
            1309
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          1277,
          1331
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        1277,
        1332
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1376,
                  1380
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 25
                  },
                  "start": {
                    "column": 43,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1385,
                  1386
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 25
                  },
                  "start": {
                    "column": 52,
                    "line": 25
                  }
                }
              },
              "range": [
                1376,
                1386
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 25
                },
                "start": {
                  "column": 43,
                  "line": 25
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
                "name": "item",
                "optional": false,
                "range": [
                  1367,
                  1371
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 25
                  },
                  "start": {
                    "column": 34,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              1366,
              1386
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 25
              },
              "start": {
                "column": 33,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "range": [
                1337,
                1349
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              1333,
              1351
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1352,
              1365
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 25
              },
              "start": {
                "column": 19,
                "line": 25
              }
            }
          },
          "range": [
            1333,
            1365
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          1333,
          1387
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        1333,
        1388
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1433,
                  1437
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 26
                  },
                  "start": {
                    "column": 44,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1449,
                      1450
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 26
                      },
                      "start": {
                        "column": 60,
                        "line": 26
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    1442,
                    1448
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 26
                    },
                    "start": {
                      "column": 53,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "range": [
                  1442,
                  1451
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 26
                  },
                  "start": {
                    "column": 53,
                    "line": 26
                  }
                }
              },
              "range": [
                1433,
                1451
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 26
                },
                "start": {
                  "column": 44,
                  "line": 26
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
                "name": "item",
                "optional": false,
                "range": [
                  1424,
                  1428
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
              1423,
              1451
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 26
              },
              "start": {
                "column": 34,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "range": [
                1393,
                1406
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              1389,
              1408
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1409,
              1422
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 26
              },
              "start": {
                "column": 20,
                "line": 26
              }
            }
          },
          "range": [
            1389,
            1422
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          1389,
          1452
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        1389,
        1453
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "range": [
                  1499,
                  1503
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 27
                  },
                  "start": {
                    "column": 45,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1515,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 27
                      },
                      "start": {
                        "column": 61,
                        "line": 27
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    1508,
                    1514
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 27
                    },
                    "start": {
                      "column": 54,
                      "line": 27
                    }
                  }
                },
                "optional": false,
                "range": [
                  1508,
                  1517
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 27
                  },
                  "start": {
                    "column": 54,
                    "line": 27
                  }
                }
              },
              "range": [
                1499,
                1517
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 27
                },
                "start": {
                  "column": 45,
                  "line": 27
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
                "name": "item",
                "optional": false,
                "range": [
                  1490,
                  1494
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 27
                  },
                  "start": {
                    "column": 36,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              1489,
              1517
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 27
              },
              "start": {
                "column": 35,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "range": [
                1458,
                1472
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              1454,
              1474
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "range": [
              1475,
              1488
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 27
              },
              "start": {
                "column": 21,
                "line": 27
              }
            }
          },
          "range": [
            1454,
            1488
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          1454,
          1518
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        1454,
        1519
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 27
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
