__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    25,
    2433
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
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                38,
                46
              ],
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "range": [
                  40,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              29,
              46
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "123",
                "value": 123,
                "range": [
                  56,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
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
                49,
                55
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              49,
              60
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          },
          "range": [
            29,
            60
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        25,
        61
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "range": [
            62,
            71
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"456\"",
              "value": "456",
              "range": [
                81,
                86
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
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
              74,
              80
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
          },
          "optional": false,
          "range": [
            74,
            87
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "range": [
          62,
          87
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        62,
        88
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "123",
            "value": 123,
            "range": [
              100,
              103
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
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
            93,
            99
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          89,
          104
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        89,
        105
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "range": [
            122,
            131
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "8",
              "value": 8,
              "range": [
                148,
                149
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            {
              "type": "Literal",
              "range": [
                151,
                158
              ],
              "bigint": "65535",
              "raw": "0xFFFFn",
              "value": null,
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 29,
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
              "name": "BigInt",
              "optional": false,
              "range": [
                134,
                140
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "range": [
                141,
                147
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "range": [
              134,
              147
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "optional": false,
          "range": [
            134,
            159
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "range": [
          122,
          159
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        122,
        160
      ],
      "loc": {
        "end": {
          "column": 38,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "range": [
            161,
            170
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "8",
              "value": 8,
              "range": [
                188,
                189
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            {
              "type": "Literal",
              "range": [
                191,
                198
              ],
              "bigint": "65535",
              "raw": "0xFFFFn",
              "value": null,
              "loc": {
                "end": {
                  "column": 37,
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "range": [
                173,
                179
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "range": [
                180,
                187
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              173,
              187
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "optional": false,
          "range": [
            173,
            199
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "range": [
          161,
          199
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        161,
        200
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "range": [
            201,
            210
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
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
              "name": "bigintVal",
              "optional": false,
              "range": [
                213,
                222
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "range": [
                223,
                230
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "range": [
              213,
              230
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
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
              "column": 31,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        },
        "range": [
          201,
          232
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        201,
        233
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 7
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
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              },
              "range": [
                247,
                255
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  249,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              238,
              255
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "range": [
                  258,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
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
                  268,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 34,
                    "line": 8
                  }
                }
              },
              "range": [
                258,
                276
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              258,
              278
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
              }
            }
          },
          "range": [
            238,
            278
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        234,
        279
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "range": [
            280,
            289
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                311,
                312
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 9
                },
                "start": {
                  "column": 31,
                  "line": 9
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
              "name": "bigintVal",
              "optional": false,
              "range": [
                292,
                301
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "range": [
                302,
                310
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            },
            "range": [
              292,
              310
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "optional": false,
          "range": [
            292,
            313
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        },
        "range": [
          280,
          313
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        280,
        314
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "range": [
            315,
            324
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
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
              "name": "bigintVal",
              "optional": false,
              "range": [
                327,
                336
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                337,
                351
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "range": [
              327,
              351
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "optional": false,
          "range": [
            327,
            353
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        },
        "range": [
          315,
          353
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        315,
        354
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "range": [
            355,
            364
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'de-DE'",
              "value": "de-DE",
              "range": [
                392,
                399
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
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
              "name": "bigintVal",
              "optional": false,
              "range": [
                367,
                376
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                377,
                391
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            },
            "range": [
              367,
              391
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "optional": false,
          "range": [
            367,
            400
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        },
        "range": [
          355,
          400
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        355,
        401
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "range": [
            402,
            411
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'de-DE'",
              "value": "de-DE",
              "range": [
                439,
                446
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 37,
                  "line": 12
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
                    "name": "style",
                    "optional": false,
                    "range": [
                      450,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 12
                      },
                      "start": {
                        "column": 48,
                        "line": 12
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      457,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 12
                      },
                      "start": {
                        "column": 55,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    450,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 12
                    },
                    "start": {
                      "column": 48,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                448,
                469
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 12
                },
                "start": {
                  "column": 46,
                  "line": 12
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
              "name": "bigintVal",
              "optional": false,
              "range": [
                414,
                423
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                424,
                438
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            },
            "range": [
              414,
              438
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          },
          "optional": false,
          "range": [
            414,
            470
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 12
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        },
        "range": [
          402,
          470
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        402,
        471
      ],
      "loc": {
        "end": {
          "column": 69,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "range": [
            472,
            481
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'de-DE'",
              "value": "de-DE",
              "range": [
                509,
                516
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 13
                },
                "start": {
                  "column": 37,
                  "line": 13
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
                    "name": "style",
                    "optional": false,
                    "range": [
                      520,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 13
                      },
                      "start": {
                        "column": 48,
                        "line": 13
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      527,
                      537
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 13
                      },
                      "start": {
                        "column": 55,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    520,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 13
                    },
                    "start": {
                      "column": 48,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      539,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 13
                      },
                      "start": {
                        "column": 67,
                        "line": 13
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      549,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 13
                      },
                      "start": {
                        "column": 77,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    539,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 13
                    },
                    "start": {
                      "column": 67,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                518,
                556
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 13
                },
                "start": {
                  "column": 46,
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
              "name": "bigintVal",
              "optional": false,
              "range": [
                484,
                493
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                494,
                508
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            },
            "range": [
              484,
              508
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          "optional": false,
          "range": [
            484,
            557
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        "range": [
          472,
          557
        ],
        "loc": {
          "end": {
            "column": 85,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        472,
        557
      ],
      "loc": {
        "end": {
          "column": 85,
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
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              },
              "range": [
                596,
                611
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "range": [
                    598,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "range": [
                  598,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              585,
              611
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "range": [
                618,
                631
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 16
                },
                "start": {
                  "column": 37,
                  "line": 16
                }
              }
            },
            "range": [
              614,
              633
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 16
              },
              "start": {
                "column": 33,
                "line": 16
              }
            }
          },
          "range": [
            585,
            633
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        581,
        634
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            635,
            646
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                667,
                669
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 32,
                  "line": 17
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "range": [
              653,
              666
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 18,
                "line": 17
              }
            }
          },
          "range": [
            649,
            670
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        },
        "range": [
          635,
          670
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        635,
        671
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            672,
            683
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "range": [
                    705,
                    707
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 18
                    },
                    "start": {
                      "column": 33,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "Literal",
                  "range": [
                    709,
                    711
                  ],
                  "bigint": "2",
                  "raw": "2n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 37,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "Literal",
                  "range": [
                    713,
                    715
                  ],
                  "bigint": "3",
                  "raw": "3n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 18
                    },
                    "start": {
                      "column": 41,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                704,
                716
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 18
                },
                "start": {
                  "column": 32,
                  "line": 18
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "range": [
              690,
              703
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          "range": [
            686,
            717
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        },
        "range": [
          672,
          717
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        672,
        718
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            719,
            730
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    752,
                    753
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 33,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    755,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 19
                    },
                    "start": {
                      "column": 36,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    758,
                    759
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                751,
                760
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 32,
                  "line": 19
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "range": [
              737,
              750
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 19
              },
              "start": {
                "column": 18,
                "line": 19
              }
            }
          },
          "range": [
            733,
            761
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
        },
        "range": [
          719,
          761
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        719,
        762
      ],
      "loc": {
        "end": {
          "column": 43,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            779,
            790
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "80",
                  "value": 80,
                  "range": [
                    827,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 20
                    },
                    "start": {
                      "column": 48,
                      "line": 20
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "range": [
                  815,
                  826
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 20
                  },
                  "start": {
                    "column": 36,
                    "line": 20
                  }
                }
              },
              "range": [
                811,
                830
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 20
                },
                "start": {
                  "column": 32,
                  "line": 20
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "range": [
              797,
              810
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 20
              },
              "start": {
                "column": 18,
                "line": 20
              }
            }
          },
          "range": [
            793,
            831
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 20
            },
            "start": {
              "column": 14,
              "line": 20
            }
          }
        },
        "range": [
          779,
          831
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
        779,
        832
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            833,
            844
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "80",
                  "value": 80,
                  "range": [
                    881,
                    883
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 21
                    },
                    "start": {
                      "column": 48,
                      "line": 21
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "range": [
                  869,
                  880
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              },
              "range": [
                865,
                884
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 21
                },
                "start": {
                  "column": 32,
                  "line": 21
                }
              }
            },
            {
              "type": "Literal",
              "raw": "8",
              "value": 8,
              "range": [
                886,
                887
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 21
                },
                "start": {
                  "column": 53,
                  "line": 21
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "range": [
              851,
              864
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
            847,
            888
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 21
            },
            "start": {
              "column": 14,
              "line": 21
            }
          }
        },
        "range": [
          833,
          888
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        833,
        889
      ],
      "loc": {
        "end": {
          "column": 56,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            890,
            901
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "80",
                  "value": 80,
                  "range": [
                    938,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 22
                    },
                    "start": {
                      "column": 48,
                      "line": 22
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "range": [
                  926,
                  937
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 22
                  },
                  "start": {
                    "column": 36,
                    "line": 22
                  }
                }
              },
              "range": [
                922,
                941
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 22
                },
                "start": {
                  "column": 32,
                  "line": 22
                }
              }
            },
            {
              "type": "Literal",
              "raw": "8",
              "value": 8,
              "range": [
                943,
                944
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 22
                },
                "start": {
                  "column": 53,
                  "line": 22
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                946,
                947
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 22
                },
                "start": {
                  "column": 56,
                  "line": 22
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "range": [
              908,
              921
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            904,
            948
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        },
        "range": [
          890,
          948
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        890,
        949
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              },
              "range": [
                957,
                965
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  959,
                  965
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              954,
              965
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
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "range": [
                968,
                979
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 18,
                  "line": 23
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
                980,
                986
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 30,
                  "line": 23
                }
              }
            },
            "range": [
              968,
              986
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          "range": [
            954,
            986
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        950,
        987
      ],
      "loc": {
        "end": {
          "column": 37,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "range": [
              988,
              999
            ],
            "loc": {
              "end": {
                "column": 11,
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
            "name": "length",
            "optional": false,
            "range": [
              1000,
              1006
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 12,
                "line": 24
              }
            }
          },
          "range": [
            988,
            1006
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
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            1009,
            1011
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 24
            },
            "start": {
              "column": 21,
              "line": 24
            }
          }
        },
        "range": [
          988,
          1011
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        988,
        1012
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 25
                },
                "start": {
                  "column": 19,
                  "line": 25
                }
              },
              "range": [
                1048,
                1065
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "range": [
                    1050,
                    1065
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 25
                    },
                    "start": {
                      "column": 21,
                      "line": 25
                    }
                  }
                },
                "range": [
                  1050,
                  1065
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 25
                  },
                  "start": {
                    "column": 21,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              1033,
              1065
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "range": [
              1068,
              1079
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 25
              },
              "start": {
                "column": 39,
                "line": 25
              }
            }
          },
          "range": [
            1033,
            1079
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1029,
        1080
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              },
              "range": [
                1121,
                1137
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "range": [
                    1123,
                    1137
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 28
                    },
                    "start": {
                      "column": 18,
                      "line": 28
                    }
                  }
                },
                "range": [
                  1123,
                  1137
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              1109,
              1137
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "range": [
                1144,
                1158
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 28
                },
                "start": {
                  "column": 39,
                  "line": 28
                }
              }
            },
            "range": [
              1140,
              1160
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 28
              },
              "start": {
                "column": 35,
                "line": 28
              }
            }
          },
          "range": [
            1109,
            1160
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1105,
        1161
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
          "name": "bigUintArray",
          "optional": false,
          "range": [
            1162,
            1174
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                1196,
                1198
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 29
                },
                "start": {
                  "column": 34,
                  "line": 29
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "range": [
              1181,
              1195
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 19,
                "line": 29
              }
            }
          },
          "range": [
            1177,
            1199
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 29
            },
            "start": {
              "column": 15,
              "line": 29
            }
          }
        },
        "range": [
          1162,
          1199
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        1162,
        1200
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
          "name": "bigUintArray",
          "optional": false,
          "range": [
            1201,
            1213
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "range": [
                    1236,
                    1238
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 30
                    },
                    "start": {
                      "column": 35,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "range": [
                    1240,
                    1242
                  ],
                  "bigint": "2",
                  "raw": "2n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 30
                    },
                    "start": {
                      "column": 39,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "range": [
                    1244,
                    1246
                  ],
                  "bigint": "3",
                  "raw": "3n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 30
                    },
                    "start": {
                      "column": 43,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                1235,
                1247
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 30
                },
                "start": {
                  "column": 34,
                  "line": 30
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "range": [
              1220,
              1234
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 30
              },
              "start": {
                "column": 19,
                "line": 30
              }
            }
          },
          "range": [
            1216,
            1248
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 30
            },
            "start": {
              "column": 15,
              "line": 30
            }
          }
        },
        "range": [
          1201,
          1248
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        1201,
        1249
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
          "name": "bigUintArray",
          "optional": false,
          "range": [
            1250,
            1262
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1285,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 31
                    },
                    "start": {
                      "column": 35,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1288,
                    1289
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 31
                    },
                    "start": {
                      "column": 38,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    1291,
                    1292
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 31
                    },
                    "start": {
                      "column": 41,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                1284,
                1293
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 31
                },
                "start": {
                  "column": 34,
                  "line": 31
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "range": [
              1269,
              1283
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 31
              },
              "start": {
                "column": 19,
                "line": 31
              }
            }
          },
          "range": [
            1265,
            1294
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 31
            },
            "start": {
              "column": 15,
              "line": 31
            }
          }
        },
        "range": [
          1250,
          1294
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        1250,
        1295
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
          "name": "bigUintArray",
          "optional": false,
          "range": [
            1312,
            1324
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "80",
                  "value": 80,
                  "range": [
                    1362,
                    1364
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 32
                    },
                    "start": {
                      "column": 50,
                      "line": 32
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "range": [
                  1350,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 32
                  },
                  "start": {
                    "column": 38,
                    "line": 32
                  }
                }
              },
              "range": [
                1346,
                1365
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 32
                },
                "start": {
                  "column": 34,
                  "line": 32
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "range": [
              1331,
              1345
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 32
              },
              "start": {
                "column": 19,
                "line": 32
              }
            }
          },
          "range": [
            1327,
            1366
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 32
            },
            "start": {
              "column": 15,
              "line": 32
            }
          }
        },
        "range": [
          1312,
          1366
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        1312,
        1367
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
          "name": "bigUintArray",
          "optional": false,
          "range": [
            1368,
            1380
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "80",
                  "value": 80,
                  "range": [
                    1418,
                    1420
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 33
                    },
                    "start": {
                      "column": 50,
                      "line": 33
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "range": [
                  1406,
                  1417
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 33
                  },
                  "start": {
                    "column": 38,
                    "line": 33
                  }
                }
              },
              "range": [
                1402,
                1421
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 33
                },
                "start": {
                  "column": 34,
                  "line": 33
                }
              }
            },
            {
              "type": "Literal",
              "raw": "8",
              "value": 8,
              "range": [
                1423,
                1424
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 33
                },
                "start": {
                  "column": 55,
                  "line": 33
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "range": [
              1387,
              1401
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 33
              },
              "start": {
                "column": 19,
                "line": 33
              }
            }
          },
          "range": [
            1383,
            1425
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 33
            },
            "start": {
              "column": 15,
              "line": 33
            }
          }
        },
        "range": [
          1368,
          1425
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        1368,
        1426
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
          "name": "bigUintArray",
          "optional": false,
          "range": [
            1427,
            1439
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "80",
                  "value": 80,
                  "range": [
                    1477,
                    1479
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 34
                    },
                    "start": {
                      "column": 50,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "range": [
                  1465,
                  1476
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 34
                  },
                  "start": {
                    "column": 38,
                    "line": 34
                  }
                }
              },
              "range": [
                1461,
                1480
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 34
                },
                "start": {
                  "column": 34,
                  "line": 34
                }
              }
            },
            {
              "type": "Literal",
              "raw": "8",
              "value": 8,
              "range": [
                1482,
                1483
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 34
                },
                "start": {
                  "column": 55,
                  "line": 34
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                1485,
                1486
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 34
                },
                "start": {
                  "column": 58,
                  "line": 34
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "range": [
              1446,
              1460
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 34
              },
              "start": {
                "column": 19,
                "line": 34
              }
            }
          },
          "range": [
            1442,
            1487
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 34
            },
            "start": {
              "column": 15,
              "line": 34
            }
          }
        },
        "range": [
          1427,
          1487
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1427,
        1488
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
          "name": "len",
          "optional": false,
          "range": [
            1489,
            1492
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "range": [
              1495,
              1506
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
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
              1507,
              1513
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 35
              },
              "start": {
                "column": 18,
                "line": 35
              }
            }
          },
          "range": [
            1495,
            1513
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          1489,
          1513
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1489,
        1514
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "range": [
              1515,
              1526
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 36
              },
              "start": {
                "column": 0,
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
              1527,
              1533
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 12,
                "line": 36
              }
            }
          },
          "range": [
            1515,
            1533
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            1536,
            1538
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 36
            },
            "start": {
              "column": 21,
              "line": 36
            }
          }
        },
        "range": [
          1515,
          1538
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        1515,
        1539
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
          "name": "arrayBufferLike",
          "optional": false,
          "range": [
            1556,
            1571
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "range": [
            1574,
            1585
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 37
            },
            "start": {
              "column": 18,
              "line": 37
            }
          }
        },
        "range": [
          1556,
          1585
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        1556,
        1586
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "dataView",
            "optional": false,
            "range": [
              1625,
              1633
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "80",
                    "value": 80,
                    "range": [
                      1665,
                      1667
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 40
                      },
                      "start": {
                        "column": 46,
                        "line": 40
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "range": [
                    1653,
                    1664
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 40
                    },
                    "start": {
                      "column": 34,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1649,
                  1668
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 40
                  },
                  "start": {
                    "column": 30,
                    "line": 40
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "range": [
                1640,
                1648
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 40
                },
                "start": {
                  "column": 21,
                  "line": 40
                }
              }
            },
            "range": [
              1636,
              1669
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 40
              },
              "start": {
                "column": 17,
                "line": 40
              }
            }
          },
          "range": [
            1625,
            1669
          ],
          "loc": {
            "end": {
              "column": 50,
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
        1619,
        1670
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "raw": "1",
            "value": 1,
            "range": [
              1692,
              1693
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 41
              },
              "start": {
                "column": 21,
                "line": 41
              }
            }
          },
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "range": [
                1696,
                1698
              ],
              "bigint": "1",
              "raw": "1n",
              "value": null,
              "loc": {
                "end": {
                  "column": 27,
                  "line": 41
                },
                "start": {
                  "column": 25,
                  "line": 41
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              1695,
              1698
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 41
              },
              "start": {
                "column": 24,
                "line": 41
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
            "name": "dataView",
            "optional": false,
            "range": [
              1671,
              1679
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 41
              },
              "start": {
                "column": 0,
                "line": 41
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "range": [
              1680,
              1691
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 41
              },
              "start": {
                "column": 9,
                "line": 41
              }
            }
          },
          "range": [
            1671,
            1691
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "optional": false,
        "range": [
          1671,
          1699
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1671,
        1700
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "raw": "1",
            "value": 1,
            "range": [
              1722,
              1723
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 42
              },
              "start": {
                "column": 21,
                "line": 42
              }
            }
          },
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "range": [
                1726,
                1728
              ],
              "bigint": "1",
              "raw": "1n",
              "value": null,
              "loc": {
                "end": {
                  "column": 27,
                  "line": 42
                },
                "start": {
                  "column": 25,
                  "line": 42
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              1725,
              1728
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 42
              },
              "start": {
                "column": 24,
                "line": 42
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              1730,
              1734
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 42
              },
              "start": {
                "column": 29,
                "line": 42
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
            "name": "dataView",
            "optional": false,
            "range": [
              1701,
              1709
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 42
              },
              "start": {
                "column": 0,
                "line": 42
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "range": [
              1710,
              1721
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          },
          "range": [
            1701,
            1721
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "optional": false,
        "range": [
          1701,
          1735
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        1701,
        1736
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "raw": "1",
            "value": 1,
            "range": [
              1758,
              1759
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 43
              },
              "start": {
                "column": 21,
                "line": 43
              }
            }
          },
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1762,
                1763
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 43
                },
                "start": {
                  "column": 25,
                  "line": 43
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              1761,
              1763
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 43
              },
              "start": {
                "column": 24,
                "line": 43
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
            "name": "dataView",
            "optional": false,
            "range": [
              1737,
              1745
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 43
              },
              "start": {
                "column": 0,
                "line": 43
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "range": [
              1746,
              1757
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          },
          "range": [
            1737,
            1757
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          1737,
          1764
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1737,
        1765
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "raw": "2",
            "value": 2,
            "range": [
              1804,
              1805
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 22,
                "line": 44
              }
            }
          },
          {
            "type": "Literal",
            "range": [
              1807,
              1811
            ],
            "bigint": "123",
            "raw": "123n",
            "value": null,
            "loc": {
              "end": {
                "column": 29,
                "line": 44
              },
              "start": {
                "column": 25,
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
            "name": "dataView",
            "optional": false,
            "range": [
              1782,
              1790
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 44
              },
              "start": {
                "column": 0,
                "line": 44
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "range": [
              1791,
              1803
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 44
              },
              "start": {
                "column": 9,
                "line": 44
              }
            }
          },
          "range": [
            1782,
            1803
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "optional": false,
        "range": [
          1782,
          1812
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1782,
        1813
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "raw": "2",
            "value": 2,
            "range": [
              1836,
              1837
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 45
              },
              "start": {
                "column": 22,
                "line": 45
              }
            }
          },
          {
            "type": "Literal",
            "range": [
              1839,
              1843
            ],
            "bigint": "123",
            "raw": "123n",
            "value": null,
            "loc": {
              "end": {
                "column": 29,
                "line": 45
              },
              "start": {
                "column": 25,
                "line": 45
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              1845,
              1849
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 45
              },
              "start": {
                "column": 31,
                "line": 45
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
            "name": "dataView",
            "optional": false,
            "range": [
              1814,
              1822
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 45
              },
              "start": {
                "column": 0,
                "line": 45
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "range": [
              1823,
              1835
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 45
              },
              "start": {
                "column": 9,
                "line": 45
              }
            }
          },
          "range": [
            1814,
            1835
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "optional": false,
        "range": [
          1814,
          1850
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1814,
        1851
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "raw": "2",
            "value": 2,
            "range": [
              1874,
              1875
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 46
              },
              "start": {
                "column": 22,
                "line": 46
              }
            }
          },
          {
            "type": "Literal",
            "raw": "123",
            "value": 123,
            "range": [
              1877,
              1880
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 46
              },
              "start": {
                "column": 25,
                "line": 46
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
            "name": "dataView",
            "optional": false,
            "range": [
              1852,
              1860
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 46
              },
              "start": {
                "column": 0,
                "line": 46
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "range": [
              1861,
              1873
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 46
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          },
          "range": [
            1852,
            1873
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "optional": false,
        "range": [
          1852,
          1881
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1852,
        1882
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
          "name": "bigintVal",
          "optional": false,
          "range": [
            1899,
            1908
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1932,
                1933
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 47
                },
                "start": {
                  "column": 33,
                  "line": 47
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
              "name": "dataView",
              "optional": false,
              "range": [
                1911,
                1919
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "range": [
                1920,
                1931
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 47
                },
                "start": {
                  "column": 21,
                  "line": 47
                }
              }
            },
            "range": [
              1911,
              1931
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 47
              },
              "start": {
                "column": 12,
                "line": 47
              }
            }
          },
          "optional": false,
          "range": [
            1911,
            1934
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 47
            },
            "start": {
              "column": 12,
              "line": 47
            }
          }
        },
        "range": [
          1899,
          1934
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        1899,
        1935
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
          "name": "bigintVal",
          "optional": false,
          "range": [
            1936,
            1945
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1969,
                1970
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 48
                },
                "start": {
                  "column": 33,
                  "line": 48
                }
              }
            },
            {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1972,
                1976
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 48
                },
                "start": {
                  "column": 36,
                  "line": 48
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
              "name": "dataView",
              "optional": false,
              "range": [
                1948,
                1956
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "range": [
                1957,
                1968
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 48
                },
                "start": {
                  "column": 21,
                  "line": 48
                }
              }
            },
            "range": [
              1948,
              1968
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 48
              },
              "start": {
                "column": 12,
                "line": 48
              }
            }
          },
          "optional": false,
          "range": [
            1948,
            1977
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 48
            },
            "start": {
              "column": 12,
              "line": 48
            }
          }
        },
        "range": [
          1936,
          1977
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        1936,
        1978
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
          "name": "bigintVal",
          "optional": false,
          "range": [
            1979,
            1988
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                2013,
                2014
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 49
                },
                "start": {
                  "column": 34,
                  "line": 49
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
              "name": "dataView",
              "optional": false,
              "range": [
                1991,
                1999
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 49
                },
                "start": {
                  "column": 12,
                  "line": 49
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "range": [
                2000,
                2012
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 49
                },
                "start": {
                  "column": 21,
                  "line": 49
                }
              }
            },
            "range": [
              1991,
              2012
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 49
              },
              "start": {
                "column": 12,
                "line": 49
              }
            }
          },
          "optional": false,
          "range": [
            1991,
            2015
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 49
            },
            "start": {
              "column": 12,
              "line": 49
            }
          }
        },
        "range": [
          1979,
          2015
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        1979,
        2016
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
          "name": "bigintVal",
          "optional": false,
          "range": [
            2017,
            2026
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                2051,
                2052
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 50
                },
                "start": {
                  "column": 34,
                  "line": 50
                }
              }
            },
            {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                2054,
                2058
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 50
                },
                "start": {
                  "column": 37,
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
              "name": "dataView",
              "optional": false,
              "range": [
                2029,
                2037
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 50
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "range": [
                2038,
                2050
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 50
                },
                "start": {
                  "column": 21,
                  "line": 50
                }
              }
            },
            "range": [
              2029,
              2050
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 50
              },
              "start": {
                "column": 12,
                "line": 50
              }
            }
          },
          "optional": false,
          "range": [
            2029,
            2059
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 50
            },
            "start": {
              "column": 12,
              "line": 50
            }
          }
        },
        "range": [
          2017,
          2059
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        2017,
        2060
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
            "name": "w",
            "optional": false,
            "range": [
              2103,
              2104
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "init": {
            "type": "Literal",
            "range": [
              2107,
              2110
            ],
            "bigint": "12",
            "raw": "12n",
            "value": null,
            "loc": {
              "end": {
                "column": 13,
                "line": 53
              },
              "start": {
                "column": 10,
                "line": 53
              }
            }
          },
          "range": [
            2103,
            2110
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2097,
        2111
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "x",
            "optional": false,
            "range": [
              2150,
              2151
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "range": [
                2155,
                2158
              ],
              "bigint": "12",
              "raw": "12n",
              "value": null,
              "loc": {
                "end": {
                  "column": 14,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 54
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              2154,
              2158
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 54
              },
              "start": {
                "column": 10,
                "line": 54
              }
            }
          },
          "range": [
            2150,
            2158
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2144,
        2159
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 55
                },
                "start": {
                  "column": 7,
                  "line": 55
                }
              },
              "range": [
                2200,
                2205
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "range": [
                    2202,
                    2205
                  ],
                  "bigint": "12",
                  "raw": "12n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 55
                    },
                    "start": {
                      "column": 9,
                      "line": 55
                    }
                  }
                },
                "range": [
                  2202,
                  2205
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 55
                  },
                  "start": {
                    "column": 9,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              2199,
              2205
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
              }
            }
          },
          "init": {
            "type": "Literal",
            "range": [
              2208,
              2211
            ],
            "bigint": "12",
            "raw": "12n",
            "value": null,
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 55
              }
            }
          },
          "range": [
            2199,
            2211
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2193,
        2212
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "range": [
              2241,
              2242
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          "init": {
            "type": "Literal",
            "range": [
              2245,
              2248
            ],
            "bigint": "12",
            "raw": "12n",
            "value": null,
            "loc": {
              "end": {
                "column": 11,
                "line": 56
              },
              "start": {
                "column": 8,
                "line": 56
              }
            }
          },
          "range": [
            2241,
            2248
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 56
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2237,
        2249
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "range": [
              2378,
              2383
            ],
            "bigint": "3000",
            "raw": "3000n",
            "value": null,
            "loc": {
              "end": {
                "column": 40,
                "line": 59
              },
              "start": {
                "column": 35,
                "line": 59
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"fr\"",
                "value": "fr",
                "range": [
                  2365,
                  2369
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 59
                  },
                  "start": {
                    "column": 22,
                    "line": 59
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
                "name": "Intl",
                "optional": false,
                "range": [
                  2347,
                  2351
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "range": [
                  2352,
                  2364
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 59
                  },
                  "start": {
                    "column": 9,
                    "line": 59
                  }
                }
              },
              "range": [
                2347,
                2364
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              2343,
              2370
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 59
              },
              "start": {
                "column": 0,
                "line": 59
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "range": [
              2371,
              2377
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 59
              },
              "start": {
                "column": 28,
                "line": 59
              }
            }
          },
          "range": [
            2343,
            2377
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "optional": false,
        "range": [
          2343,
          2384
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        2343,
        2385
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "range": [
              2421,
              2430
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 60
              },
              "start": {
                "column": 35,
                "line": 60
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"fr\"",
                "value": "fr",
                "range": [
                  2408,
                  2412
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 60
                  },
                  "start": {
                    "column": 22,
                    "line": 60
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
                "name": "Intl",
                "optional": false,
                "range": [
                  2390,
                  2394
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "range": [
                  2395,
                  2407
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 60
                  },
                  "start": {
                    "column": 9,
                    "line": 60
                  }
                }
              },
              "range": [
                2390,
                2407
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              2386,
              2413
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 60
              },
              "start": {
                "column": 0,
                "line": 60
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "range": [
              2414,
              2420
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 60
              },
              "start": {
                "column": 28,
                "line": 60
              }
            }
          },
          "range": [
            2386,
            2420
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "optional": false,
        "range": [
          2386,
          2431
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        2386,
        2432
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 61
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
