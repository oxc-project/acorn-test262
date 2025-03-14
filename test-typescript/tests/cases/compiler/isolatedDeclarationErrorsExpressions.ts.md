__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4334
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
        "name": "time",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          31
        ],
        "typeAnnotation": {
          "type": "TSBigIntKeyword",
          "range": [
            25,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        32,
        61
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConst",
              "optional": false,
              "range": [
                45,
                56
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "range": [
              45,
              60
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          39,
          61
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 29,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        62,
        99
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConstBad1",
              "optional": false,
              "range": [
                75,
                90
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  93,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  97,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                93,
                98
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "range": [
              75,
              98
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          69,
          99
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        100,
        145
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConstBad2",
              "optional": false,
              "range": [
                113,
                128
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
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
                  "name": "Math",
                  "optional": false,
                  "range": [
                    131,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
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
                    136,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                },
                "range": [
                  131,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                131,
                144
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            },
            "range": [
              113,
              144
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          107,
          145
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        146,
        189
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConstBad3",
              "optional": false,
              "range": [
                159,
                174
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConst",
              "optional": false,
              "range": [
                177,
                188
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "range": [
              159,
              188
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          153,
          189
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 43,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        191,
        221
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConst",
              "optional": false,
              "range": [
                204,
                215
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "Literal",
              "range": [
                218,
                220
              ],
              "bigint": "1",
              "raw": "1n",
              "value": null,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            },
            "range": [
              204,
              220
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          198,
          221
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 30,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        222,
        261
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConstBad1",
              "optional": false,
              "range": [
                235,
                250
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "range": [
                  253,
                  255
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "range": [
                  258,
                  260
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 36,
                    "line": 8
                  }
                }
              },
              "range": [
                253,
                260
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 8
                }
              }
            },
            "range": [
              235,
              260
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          229,
          261
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        262,
        300
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConstBad2",
              "optional": false,
              "range": [
                275,
                290
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "time",
                "optional": false,
                "range": [
                  293,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 31,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                293,
                299
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 31,
                  "line": 9
                }
              }
            },
            "range": [
              275,
              299
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          269,
          300
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 38,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        301,
        344
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConstBad3",
              "optional": false,
              "range": [
                314,
                329
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConst",
              "optional": false,
              "range": [
                332,
                343
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 31,
                  "line": 10
                }
              }
            },
            "range": [
              314,
              343
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          308,
          344
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 43,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        346,
        377
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringConst",
              "optional": false,
              "range": [
                359,
                370
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "\"s\"",
              "value": "s",
              "range": [
                373,
                376
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 12
                }
              }
            },
            "range": [
              359,
              376
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 13,
                "line": 12
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          353,
          377
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 31,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        378,
        418
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringConstBad",
              "optional": false,
              "range": [
                391,
                405
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  408,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 30,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  414,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 13
                  },
                  "start": {
                    "column": 36,
                    "line": 13
                  }
                }
              },
              "range": [
                408,
                417
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
            "range": [
              391,
              417
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          385,
          418
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        446,
        482
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstOk1",
              "optional": false,
              "range": [
                459,
                475
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    478,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 16
                    },
                    "start": {
                      "column": 32,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                478,
                481
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            },
            "range": [
              459,
              481
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          453,
          482
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 36,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        483,
        527
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk2",
              "optional": false,
              "range": [
                496,
                515
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "range": [
                    522,
                    524
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 17
                    },
                    "start": {
                      "column": 39,
                      "line": 17
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    518,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 35,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    524,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 17
                    },
                    "start": {
                      "column": 41,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                518,
                526
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 17
                },
                "start": {
                  "column": 35,
                  "line": 17
                }
              }
            },
            "range": [
              496,
              526
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 17
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          490,
          527
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        528,
        580
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk3",
              "optional": false,
              "range": [
                541,
                560
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    567,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 18
                    },
                    "start": {
                      "column": 39,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    574,
                    577
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 18
                    },
                    "start": {
                      "column": 46,
                      "line": 18
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    563,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 35,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    568,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 18
                    },
                    "start": {
                      "column": 40,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    577,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 18
                    },
                    "start": {
                      "column": 49,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                563,
                579
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 18
                },
                "start": {
                  "column": 35,
                  "line": 18
                }
              }
            },
            "range": [
              541,
              579
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          535,
          580
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    {
      "type": "ExportNamedDeclaration",
      "range": [
        581,
        644
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk4",
              "optional": false,
              "range": [
                594,
                613
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    620,
                    621
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
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    627,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 19
                    },
                    "start": {
                      "column": 46,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    636,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 19
                    },
                    "start": {
                      "column": 55,
                      "line": 19
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    616,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 19
                    },
                    "start": {
                      "column": 35,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    621,
                    627
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 40,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    630,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 19
                    },
                    "start": {
                      "column": 49,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    641,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 19
                    },
                    "start": {
                      "column": 60,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                616,
                643
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 19
                },
                "start": {
                  "column": 35,
                  "line": 19
                }
              }
            },
            "range": [
              594,
              643
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          588,
          644
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 63,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        645,
        713
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk5",
              "optional": false,
              "range": [
                658,
                677
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      684,
                      685
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 20
                      },
                      "start": {
                        "column": 39,
                        "line": 20
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      688,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 20
                      },
                      "start": {
                        "column": 43,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    684,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 20
                    },
                    "start": {
                      "column": 39,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    695,
                    698
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 20
                    },
                    "start": {
                      "column": 50,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      705,
                      710
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 20
                      },
                      "start": {
                        "column": 60,
                        "line": 20
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    704,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 20
                    },
                    "start": {
                      "column": 59,
                      "line": 20
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    680,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 20
                    },
                    "start": {
                      "column": 35,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    689,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 20
                    },
                    "start": {
                      "column": 44,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    698,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 20
                    },
                    "start": {
                      "column": 53,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    710,
                    712
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 20
                    },
                    "start": {
                      "column": 65,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                680,
                712
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 20
                },
                "start": {
                  "column": 35,
                  "line": 20
                }
              }
            },
            "range": [
              658,
              712
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 20
              },
              "start": {
                "column": 13,
                "line": 20
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          652,
          713
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 68,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        715,
        740
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLet",
              "optional": false,
              "range": [
                726,
                735
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                738,
                739
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 22
                }
              }
            },
            "range": [
              726,
              739
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 11,
                "line": 22
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          722,
          740
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        741,
        774
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetBad1",
              "optional": false,
              "range": [
                752,
                765
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  768,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  772,
                  773
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
              "range": [
                768,
                773
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 23
                }
              }
            },
            "range": [
              752,
              773
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          748,
          774
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 33,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        775,
        816
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetBad2",
              "optional": false,
              "range": [
                786,
                799
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
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
                  "name": "Math",
                  "optional": false,
                  "range": [
                    802,
                    806
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 24
                    },
                    "start": {
                      "column": 27,
                      "line": 24
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
                    807,
                    813
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 24
                    },
                    "start": {
                      "column": 32,
                      "line": 24
                    }
                  }
                },
                "range": [
                  802,
                  813
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 24
                  },
                  "start": {
                    "column": 27,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "range": [
                802,
                815
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "range": [
              786,
              815
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          782,
          816
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        817,
        854
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetBad3",
              "optional": false,
              "range": [
                828,
                841
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLet",
              "optional": false,
              "range": [
                844,
                853
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 25
                },
                "start": {
                  "column": 27,
                  "line": 25
                }
              }
            },
            "range": [
              828,
              853
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 25
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          824,
          854
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        856,
        882
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLet",
              "optional": false,
              "range": [
                867,
                876
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "init": {
              "type": "Literal",
              "range": [
                879,
                881
              ],
              "bigint": "1",
              "raw": "1n",
              "value": null,
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "range": [
              867,
              881
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          863,
          882
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 26,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        883,
        918
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetBad1",
              "optional": false,
              "range": [
                894,
                907
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "range": [
                  910,
                  912
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 28
                  },
                  "start": {
                    "column": 27,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Literal",
                "range": [
                  915,
                  917
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 28
                  },
                  "start": {
                    "column": 32,
                    "line": 28
                  }
                }
              },
              "range": [
                910,
                917
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 28
                },
                "start": {
                  "column": 27,
                  "line": 28
                }
              }
            },
            "range": [
              894,
              917
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          890,
          918
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        919,
        953
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetBad2",
              "optional": false,
              "range": [
                930,
                943
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "time",
                "optional": false,
                "range": [
                  946,
                  950
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 29
                  },
                  "start": {
                    "column": 27,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                946,
                952
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 29
                },
                "start": {
                  "column": 27,
                  "line": 29
                }
              }
            },
            "range": [
              930,
              952
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          926,
          953
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 34,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        954,
        991
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetBad3",
              "optional": false,
              "range": [
                965,
                978
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLet",
              "optional": false,
              "range": [
                981,
                990
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 30
                },
                "start": {
                  "column": 27,
                  "line": 30
                }
              }
            },
            "range": [
              965,
              990
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 30
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          961,
          991
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        993,
        1020
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringLet",
              "optional": false,
              "range": [
                1004,
                1013
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "\"s\"",
              "value": "s",
              "range": [
                1016,
                1019
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 32
                },
                "start": {
                  "column": 23,
                  "line": 32
                }
              }
            },
            "range": [
              1004,
              1019
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 11,
                "line": 32
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1000,
          1020
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1021,
        1057
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringLetBad",
              "optional": false,
              "range": [
                1032,
                1044
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  1047,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 33
                  },
                  "start": {
                    "column": 26,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  1053,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 33
                  },
                  "start": {
                    "column": 32,
                    "line": 33
                  }
                }
              },
              "range": [
                1047,
                1056
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 33
                },
                "start": {
                  "column": 26,
                  "line": 33
                }
              }
            },
            "range": [
              1032,
              1056
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 33
              },
              "start": {
                "column": 11,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1028,
          1057
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 33
          },
          "start": {
            "column": 7,
            "line": 33
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 36,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1059,
        1091
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk1",
              "optional": false,
              "range": [
                1070,
                1084
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    1087,
                    1090
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 35
                    },
                    "start": {
                      "column": 28,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                1087,
                1090
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 28,
                  "line": 35
                }
              }
            },
            "range": [
              1070,
              1090
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 35
              },
              "start": {
                "column": 11,
                "line": 35
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1066,
          1091
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 35
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 32,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1092,
        1137
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk2",
              "optional": false,
              "range": [
                1103,
                1117
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1124,
                    1125
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 36
                    },
                    "start": {
                      "column": 32,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    1131,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 36
                    },
                    "start": {
                      "column": 39,
                      "line": 36
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    1120,
                    1124
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 36
                    },
                    "start": {
                      "column": 28,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    1125,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 36
                    },
                    "start": {
                      "column": 33,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    1134,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 36
                    },
                    "start": {
                      "column": 42,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                1120,
                1136
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 36
                },
                "start": {
                  "column": 28,
                  "line": 36
                }
              }
            },
            "range": [
              1103,
              1136
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 36
              },
              "start": {
                "column": 11,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1099,
          1137
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1138,
        1194
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk3",
              "optional": false,
              "range": [
                1149,
                1163
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1170,
                    1171
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 37
                    },
                    "start": {
                      "column": 32,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    1177,
                    1180
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 37
                    },
                    "start": {
                      "column": 39,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    1186,
                    1191
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 37
                    },
                    "start": {
                      "column": 48,
                      "line": 37
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    1166,
                    1170
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 37
                    },
                    "start": {
                      "column": 28,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    1171,
                    1177
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 37
                    },
                    "start": {
                      "column": 33,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    1180,
                    1186
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 37
                    },
                    "start": {
                      "column": 42,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    1191,
                    1193
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 37
                    },
                    "start": {
                      "column": 53,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                1166,
                1193
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 37
                },
                "start": {
                  "column": 28,
                  "line": 37
                }
              }
            },
            "range": [
              1149,
              1193
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 37
              },
              "start": {
                "column": 11,
                "line": 37
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1145,
          1194
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 56,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1195,
        1256
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk4",
              "optional": false,
              "range": [
                1206,
                1220
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1227,
                      1228
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 38
                      },
                      "start": {
                        "column": 32,
                        "line": 38
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1231,
                      1232
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 38
                      },
                      "start": {
                        "column": 36,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1227,
                    1232
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 38
                    },
                    "start": {
                      "column": 32,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    1238,
                    1241
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 38
                    },
                    "start": {
                      "column": 43,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      1248,
                      1253
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 38
                      },
                      "start": {
                        "column": 53,
                        "line": 38
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    1247,
                    1253
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 38
                    },
                    "start": {
                      "column": 52,
                      "line": 38
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    1223,
                    1227
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 38
                    },
                    "start": {
                      "column": 28,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    1232,
                    1238
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 38
                    },
                    "start": {
                      "column": 37,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    1241,
                    1247
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 38
                    },
                    "start": {
                      "column": 46,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    1253,
                    1255
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 38
                    },
                    "start": {
                      "column": 58,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                1223,
                1255
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 38
                },
                "start": {
                  "column": 28,
                  "line": 38
                }
              }
            },
            "range": [
              1206,
              1255
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 38
              },
              "start": {
                "column": 11,
                "line": 38
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1202,
          1256
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 38
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 61,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1271,
        1312
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetAsConst",
              "optional": false,
              "range": [
                1282,
                1298
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1301,
                  1302
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 42
                  },
                  "start": {
                    "column": 30,
                    "line": 42
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1306,
                    1311
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 42
                    },
                    "start": {
                      "column": 35,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1306,
                  1311
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 42
                  },
                  "start": {
                    "column": 35,
                    "line": 42
                  }
                }
              },
              "range": [
                1301,
                1311
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 42
                },
                "start": {
                  "column": 30,
                  "line": 42
                }
              }
            },
            "range": [
              1282,
              1311
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 42
              },
              "start": {
                "column": 11,
                "line": 42
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1278,
          1312
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 42
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1314,
        1356
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetAsConst",
              "optional": false,
              "range": [
                1325,
                1341
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "range": [
                  1344,
                  1346
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 30,
                    "line": 44
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1350,
                    1355
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 44
                    },
                    "start": {
                      "column": 36,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1350,
                  1355
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 44
                  },
                  "start": {
                    "column": 36,
                    "line": 44
                  }
                }
              },
              "range": [
                1344,
                1355
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 44
                },
                "start": {
                  "column": 30,
                  "line": 44
                }
              }
            },
            "range": [
              1325,
              1355
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 44
              },
              "start": {
                "column": 11,
                "line": 44
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1321,
          1356
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 42,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1358,
        1401
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringLetAsConst",
              "optional": false,
              "range": [
                1369,
                1385
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 46
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  1388,
                  1391
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 46
                  },
                  "start": {
                    "column": 30,
                    "line": 46
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1395,
                    1400
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 46
                    },
                    "start": {
                      "column": 37,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1395,
                  1400
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 46
                  },
                  "start": {
                    "column": 37,
                    "line": 46
                  }
                }
              },
              "range": [
                1388,
                1400
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 46
                },
                "start": {
                  "column": 30,
                  "line": 46
                }
              }
            },
            "range": [
              1369,
              1400
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 46
              },
              "start": {
                "column": 11,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1365,
          1401
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 46
          },
          "start": {
            "column": 7,
            "line": 46
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 43,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1403,
        1451
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk1AsConst",
              "optional": false,
              "range": [
                1414,
                1435
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 48
                },
                "start": {
                  "column": 11,
                  "line": 48
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      1438,
                      1441
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 48
                      },
                      "start": {
                        "column": 35,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  1438,
                  1441
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 48
                  },
                  "start": {
                    "column": 35,
                    "line": 48
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1445,
                    1450
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 48
                    },
                    "start": {
                      "column": 42,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1445,
                  1450
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 48
                  },
                  "start": {
                    "column": 42,
                    "line": 48
                  }
                }
              },
              "range": [
                1438,
                1450
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 48
                },
                "start": {
                  "column": 35,
                  "line": 48
                }
              }
            },
            "range": [
              1414,
              1450
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 48
              },
              "start": {
                "column": 11,
                "line": 48
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1410,
          1451
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 48
          },
          "start": {
            "column": 7,
            "line": 48
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 48,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1452,
        1513
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk2AsConst",
              "optional": false,
              "range": [
                1463,
                1484
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 11,
                  "line": 49
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1491,
                      1492
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 49
                      },
                      "start": {
                        "column": 39,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      1498,
                      1501
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 49
                      },
                      "start": {
                        "column": 46,
                        "line": 49
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      1487,
                      1491
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 49
                      },
                      "start": {
                        "column": 35,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      1492,
                      1498
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 49
                      },
                      "start": {
                        "column": 40,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      1501,
                      1503
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 49
                      },
                      "start": {
                        "column": 49,
                        "line": 49
                      }
                    }
                  }
                ],
                "range": [
                  1487,
                  1503
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 49
                  },
                  "start": {
                    "column": 35,
                    "line": 49
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1507,
                    1512
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 49
                    },
                    "start": {
                      "column": 55,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1507,
                  1512
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 49
                  },
                  "start": {
                    "column": 55,
                    "line": 49
                  }
                }
              },
              "range": [
                1487,
                1512
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 49
                },
                "start": {
                  "column": 35,
                  "line": 49
                }
              }
            },
            "range": [
              1463,
              1512
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 49
              },
              "start": {
                "column": 11,
                "line": 49
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1459,
          1513
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 49
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 61,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1514,
        1586
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk3AsConst",
              "optional": false,
              "range": [
                1525,
                1546
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 50
                },
                "start": {
                  "column": 11,
                  "line": 50
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1553,
                      1554
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 50
                      },
                      "start": {
                        "column": 39,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      1560,
                      1563
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 50
                      },
                      "start": {
                        "column": 46,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      1569,
                      1574
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 50
                      },
                      "start": {
                        "column": 55,
                        "line": 50
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      1549,
                      1553
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 50
                      },
                      "start": {
                        "column": 35,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      1554,
                      1560
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 50
                      },
                      "start": {
                        "column": 40,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      1563,
                      1569
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 50
                      },
                      "start": {
                        "column": 49,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      1574,
                      1576
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 50
                      },
                      "start": {
                        "column": 60,
                        "line": 50
                      }
                    }
                  }
                ],
                "range": [
                  1549,
                  1576
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 50
                  },
                  "start": {
                    "column": 35,
                    "line": 50
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1580,
                    1585
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 50
                    },
                    "start": {
                      "column": 66,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1580,
                  1585
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 50
                  },
                  "start": {
                    "column": 66,
                    "line": 50
                  }
                }
              },
              "range": [
                1549,
                1585
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 50
                },
                "start": {
                  "column": 35,
                  "line": 50
                }
              }
            },
            "range": [
              1525,
              1585
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 50
              },
              "start": {
                "column": 11,
                "line": 50
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1521,
          1586
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 50
          },
          "start": {
            "column": 7,
            "line": 50
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 72,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1587,
        1664
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk4AsConst",
              "optional": false,
              "range": [
                1598,
                1619
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1626,
                        1627
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 51
                        },
                        "start": {
                          "column": 39,
                          "line": 51
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1630,
                        1631
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 51
                        },
                        "start": {
                          "column": 43,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1626,
                      1631
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 51
                      },
                      "start": {
                        "column": 39,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      1637,
                      1640
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 51
                      },
                      "start": {
                        "column": 50,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        1647,
                        1652
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 51
                        },
                        "start": {
                          "column": 60,
                          "line": 51
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      1646,
                      1652
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 51
                      },
                      "start": {
                        "column": 59,
                        "line": 51
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      1622,
                      1626
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 51
                      },
                      "start": {
                        "column": 35,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      1631,
                      1637
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 51
                      },
                      "start": {
                        "column": 44,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      1640,
                      1646
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 51
                      },
                      "start": {
                        "column": 53,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      1652,
                      1654
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 51
                      },
                      "start": {
                        "column": 65,
                        "line": 51
                      }
                    }
                  }
                ],
                "range": [
                  1622,
                  1654
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 51
                  },
                  "start": {
                    "column": 35,
                    "line": 51
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1658,
                    1663
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 51
                    },
                    "start": {
                      "column": 71,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1658,
                  1663
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 51
                  },
                  "start": {
                    "column": 71,
                    "line": 51
                  }
                }
              },
              "range": [
                1622,
                1663
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 51
                },
                "start": {
                  "column": 35,
                  "line": 51
                }
              }
            },
            "range": [
              1598,
              1663
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 51
              },
              "start": {
                "column": 11,
                "line": 51
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1594,
          1664
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 51
          },
          "start": {
            "column": 7,
            "line": 51
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 77,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1666,
        1693
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "range": [
                1677,
                1680
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 11,
                  "line": 53
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
                    1684,
                    1685
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 53
                    },
                    "start": {
                      "column": 18,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1687,
                    1688
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 53
                    },
                    "start": {
                      "column": 21,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    1690,
                    1691
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 53
                    },
                    "start": {
                      "column": 24,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                1683,
                1692
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 53
                },
                "start": {
                  "column": 17,
                  "line": 53
                }
              }
            },
            "range": [
              1677,
              1692
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 53
              },
              "start": {
                "column": 11,
                "line": 53
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1673,
          1693
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 53
          },
          "start": {
            "column": 7,
            "line": 53
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1694,
        1735
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrConst",
              "optional": false,
              "range": [
                1705,
                1713
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 54
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1717,
                      1718
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 54
                      },
                      "start": {
                        "column": 23,
                        "line": 54
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      1720,
                      1721
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 54
                      },
                      "start": {
                        "column": 26,
                        "line": 54
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      1723,
                      1724
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 54
                      },
                      "start": {
                        "column": 29,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  1716,
                  1725
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 54
                  },
                  "start": {
                    "column": 22,
                    "line": 54
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1729,
                    1734
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 54
                    },
                    "start": {
                      "column": 35,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1729,
                  1734
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 54
                  },
                  "start": {
                    "column": 35,
                    "line": 54
                  }
                }
              },
              "range": [
                1716,
                1734
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 54
                },
                "start": {
                  "column": 22,
                  "line": 54
                }
              }
            },
            "range": [
              1705,
              1734
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 54
              },
              "start": {
                "column": 11,
                "line": 54
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1701,
          1735
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 54
          },
          "start": {
            "column": 7,
            "line": 54
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1736,
        1790
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrWithSpread",
              "optional": false,
              "range": [
                1747,
                1760
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 55
                },
                "start": {
                  "column": 11,
                  "line": 55
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1764,
                      1765
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 55
                      },
                      "start": {
                        "column": 28,
                        "line": 55
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      1767,
                      1768
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 55
                      },
                      "start": {
                        "column": 31,
                        "line": 55
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      1770,
                      1771
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 55
                      },
                      "start": {
                        "column": 34,
                        "line": 55
                      }
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "range": [
                        1776,
                        1779
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 55
                        },
                        "start": {
                          "column": 40,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1773,
                      1779
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 55
                      },
                      "start": {
                        "column": 37,
                        "line": 55
                      }
                    }
                  }
                ],
                "range": [
                  1763,
                  1780
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 55
                  },
                  "start": {
                    "column": 27,
                    "line": 55
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    1784,
                    1789
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 55
                    },
                    "start": {
                      "column": 48,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1784,
                  1789
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 55
                  },
                  "start": {
                    "column": 48,
                    "line": 55
                  }
                }
              },
              "range": [
                1763,
                1789
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 55
                },
                "start": {
                  "column": 27,
                  "line": 55
                }
              }
            },
            "range": [
              1747,
              1789
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 55
              },
              "start": {
                "column": 11,
                "line": 55
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1743,
          1790
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 55
          },
          "start": {
            "column": 7,
            "line": 55
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1792,
        3319
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            1814,
            3319
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLet",
                "optional": false,
                "range": [
                  1827,
                  1836
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 58
                  },
                  "start": {
                    "column": 11,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1839,
                  1840
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 58
                  },
                  "start": {
                    "column": 23,
                    "line": 58
                  }
                }
              },
              "range": [
                1820,
                1841
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetBad1",
                "optional": false,
                "range": [
                  1853,
                  1866
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1869,
                    1870
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 59
                    },
                    "start": {
                      "column": 27,
                      "line": 59
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1873,
                    1874
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 59
                    },
                    "start": {
                      "column": 31,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1869,
                  1874
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 59
                  },
                  "start": {
                    "column": 27,
                    "line": 59
                  }
                }
              },
              "range": [
                1846,
                1875
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetBad2",
                "optional": false,
                "range": [
                  1887,
                  1900
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 60
                  },
                  "start": {
                    "column": 11,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
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
                      1903,
                      1907
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 60
                      },
                      "start": {
                        "column": 27,
                        "line": 60
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
                      1908,
                      1914
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 60
                      },
                      "start": {
                        "column": 32,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1903,
                    1914
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 60
                    },
                    "start": {
                      "column": 27,
                      "line": 60
                    }
                  }
                },
                "optional": false,
                "range": [
                  1903,
                  1916
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 60
                  },
                  "start": {
                    "column": 27,
                    "line": 60
                  }
                }
              },
              "range": [
                1880,
                1917
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetBad3",
                "optional": false,
                "range": [
                  1929,
                  1942
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 61
                  },
                  "start": {
                    "column": 11,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLet",
                "optional": false,
                "range": [
                  1945,
                  1954
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 61
                  },
                  "start": {
                    "column": 27,
                    "line": 61
                  }
                }
              },
              "range": [
                1922,
                1955
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLet",
                "optional": false,
                "range": [
                  1968,
                  1977
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 63
                  },
                  "start": {
                    "column": 11,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "range": [
                  1980,
                  1982
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 63
                  },
                  "start": {
                    "column": 23,
                    "line": 63
                  }
                }
              },
              "range": [
                1961,
                1983
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetBad1",
                "optional": false,
                "range": [
                  1995,
                  2008
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 64
                  },
                  "start": {
                    "column": 11,
                    "line": 64
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "range": [
                    2011,
                    2013
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 64
                    },
                    "start": {
                      "column": 27,
                      "line": 64
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "range": [
                    2016,
                    2018
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 64
                    },
                    "start": {
                      "column": 32,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2011,
                  2018
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 64
                  },
                  "start": {
                    "column": 27,
                    "line": 64
                  }
                }
              },
              "range": [
                1988,
                2019
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetBad2",
                "optional": false,
                "range": [
                  2031,
                  2044
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "range": [
                    2047,
                    2051
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 65
                    },
                    "start": {
                      "column": 27,
                      "line": 65
                    }
                  }
                },
                "optional": false,
                "range": [
                  2047,
                  2053
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 65
                  },
                  "start": {
                    "column": 27,
                    "line": 65
                  }
                }
              },
              "range": [
                2024,
                2054
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetBad3",
                "optional": false,
                "range": [
                  2066,
                  2079
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 66
                  },
                  "start": {
                    "column": 11,
                    "line": 66
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLet",
                "optional": false,
                "range": [
                  2082,
                  2091
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 66
                  },
                  "start": {
                    "column": 27,
                    "line": 66
                  }
                }
              },
              "range": [
                2059,
                2092
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringLet",
                "optional": false,
                "range": [
                  2105,
                  2114
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 68
                  },
                  "start": {
                    "column": 11,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  2117,
                  2120
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 68
                  },
                  "start": {
                    "column": 23,
                    "line": 68
                  }
                }
              },
              "range": [
                2098,
                2121
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringLetBad",
                "optional": false,
                "range": [
                  2133,
                  2145
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 69
                  },
                  "start": {
                    "column": 11,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "\"s\"",
                  "value": "s",
                  "range": [
                    2148,
                    2151
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 69
                    },
                    "start": {
                      "column": 26,
                      "line": 69
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"s\"",
                  "value": "s",
                  "range": [
                    2154,
                    2157
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 69
                    },
                    "start": {
                      "column": 32,
                      "line": 69
                    }
                  }
                },
                "range": [
                  2148,
                  2157
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 69
                  },
                  "start": {
                    "column": 26,
                    "line": 69
                  }
                }
              },
              "range": [
                2126,
                2158
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk1",
                "optional": false,
                "range": [
                  2171,
                  2185
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 71
                  },
                  "start": {
                    "column": 11,
                    "line": 71
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2188,
                      2191
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 71
                      },
                      "start": {
                        "column": 28,
                        "line": 71
                      }
                    }
                  }
                ],
                "range": [
                  2188,
                  2191
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 71
                  },
                  "start": {
                    "column": 28,
                    "line": 71
                  }
                }
              },
              "range": [
                2164,
                2192
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk2",
                "optional": false,
                "range": [
                  2204,
                  2218
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 72
                  },
                  "start": {
                    "column": 11,
                    "line": 72
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2225,
                      2226
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 72
                      },
                      "start": {
                        "column": 32,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      2232,
                      2235
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 72
                      },
                      "start": {
                        "column": 39,
                        "line": 72
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2221,
                      2225
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 72
                      },
                      "start": {
                        "column": 28,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2226,
                      2232
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 72
                      },
                      "start": {
                        "column": 33,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      2235,
                      2237
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 72
                      },
                      "start": {
                        "column": 42,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  2221,
                  2237
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 72
                  },
                  "start": {
                    "column": 28,
                    "line": 72
                  }
                }
              },
              "range": [
                2197,
                2238
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk3",
                "optional": false,
                "range": [
                  2250,
                  2264
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 73
                  },
                  "start": {
                    "column": 11,
                    "line": 73
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2271,
                      2272
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 73
                      },
                      "start": {
                        "column": 32,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      2278,
                      2281
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 73
                      },
                      "start": {
                        "column": 39,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      2287,
                      2292
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 73
                      },
                      "start": {
                        "column": 48,
                        "line": 73
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2267,
                      2271
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 73
                      },
                      "start": {
                        "column": 28,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2272,
                      2278
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 73
                      },
                      "start": {
                        "column": 33,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2281,
                      2287
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 73
                      },
                      "start": {
                        "column": 42,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      2292,
                      2294
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 73
                      },
                      "start": {
                        "column": 53,
                        "line": 73
                      }
                    }
                  }
                ],
                "range": [
                  2267,
                  2294
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 73
                  },
                  "start": {
                    "column": 28,
                    "line": 73
                  }
                }
              },
              "range": [
                2243,
                2295
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk4",
                "optional": false,
                "range": [
                  2307,
                  2321
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 74
                  },
                  "start": {
                    "column": 11,
                    "line": 74
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2328,
                        2329
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 74
                        },
                        "start": {
                          "column": 32,
                          "line": 74
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2332,
                        2333
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 74
                        },
                        "start": {
                          "column": 36,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      2328,
                      2333
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 74
                      },
                      "start": {
                        "column": 32,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      2339,
                      2342
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 74
                      },
                      "start": {
                        "column": 43,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        2349,
                        2354
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 74
                        },
                        "start": {
                          "column": 53,
                          "line": 74
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      2348,
                      2354
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 74
                      },
                      "start": {
                        "column": 52,
                        "line": 74
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2324,
                      2328
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 74
                      },
                      "start": {
                        "column": 28,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2333,
                      2339
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 74
                      },
                      "start": {
                        "column": 37,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2342,
                      2348
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 74
                      },
                      "start": {
                        "column": 46,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      2354,
                      2356
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 74
                      },
                      "start": {
                        "column": 58,
                        "line": 74
                      }
                    }
                  }
                ],
                "range": [
                  2324,
                  2356
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 74
                  },
                  "start": {
                    "column": 28,
                    "line": 74
                  }
                }
              },
              "range": [
                2300,
                2357
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConst",
                "optional": false,
                "range": [
                  2373,
                  2384
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 77
                  },
                  "start": {
                    "column": 13,
                    "line": 77
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2387,
                  2388
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 77
                  },
                  "start": {
                    "column": 27,
                    "line": 77
                  }
                }
              },
              "range": [
                2364,
                2389
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConstBad1",
                "optional": false,
                "range": [
                  2403,
                  2418
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 78
                  },
                  "start": {
                    "column": 13,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2421,
                    2422
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 78
                    },
                    "start": {
                      "column": 31,
                      "line": 78
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2425,
                    2426
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 78
                    },
                    "start": {
                      "column": 35,
                      "line": 78
                    }
                  }
                },
                "range": [
                  2421,
                  2426
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 78
                  },
                  "start": {
                    "column": 31,
                    "line": 78
                  }
                }
              },
              "range": [
                2394,
                2427
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConstBad2",
                "optional": false,
                "range": [
                  2441,
                  2456
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 79
                  },
                  "start": {
                    "column": 13,
                    "line": 79
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
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
                      2459,
                      2463
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 79
                      },
                      "start": {
                        "column": 31,
                        "line": 79
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
                      2464,
                      2470
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 79
                      },
                      "start": {
                        "column": 36,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2459,
                    2470
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 79
                    },
                    "start": {
                      "column": 31,
                      "line": 79
                    }
                  }
                },
                "optional": false,
                "range": [
                  2459,
                  2472
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 79
                  },
                  "start": {
                    "column": 31,
                    "line": 79
                  }
                }
              },
              "range": [
                2432,
                2473
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConstBad3",
                "optional": false,
                "range": [
                  2487,
                  2502
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 80
                  },
                  "start": {
                    "column": 13,
                    "line": 80
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConst",
                "optional": false,
                "range": [
                  2505,
                  2516
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 80
                  },
                  "start": {
                    "column": 31,
                    "line": 80
                  }
                }
              },
              "range": [
                2478,
                2517
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConst",
                "optional": false,
                "range": [
                  2532,
                  2543
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 82
                  },
                  "start": {
                    "column": 13,
                    "line": 82
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Literal",
                "range": [
                  2546,
                  2548
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 82
                  },
                  "start": {
                    "column": 27,
                    "line": 82
                  }
                }
              },
              "range": [
                2523,
                2549
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConstBad1",
                "optional": false,
                "range": [
                  2563,
                  2578
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 83
                  },
                  "start": {
                    "column": 13,
                    "line": 83
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "range": [
                    2581,
                    2583
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 83
                    },
                    "start": {
                      "column": 31,
                      "line": 83
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "range": [
                    2586,
                    2588
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 83
                    },
                    "start": {
                      "column": 36,
                      "line": 83
                    }
                  }
                },
                "range": [
                  2581,
                  2588
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 83
                  },
                  "start": {
                    "column": 31,
                    "line": 83
                  }
                }
              },
              "range": [
                2554,
                2589
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConstBad2",
                "optional": false,
                "range": [
                  2603,
                  2618
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 84
                  },
                  "start": {
                    "column": 13,
                    "line": 84
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "range": [
                    2621,
                    2625
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 84
                    },
                    "start": {
                      "column": 31,
                      "line": 84
                    }
                  }
                },
                "optional": false,
                "range": [
                  2621,
                  2627
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 84
                  },
                  "start": {
                    "column": 31,
                    "line": 84
                  }
                }
              },
              "range": [
                2594,
                2628
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConstBad3",
                "optional": false,
                "range": [
                  2642,
                  2657
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 85
                  },
                  "start": {
                    "column": 13,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConst",
                "optional": false,
                "range": [
                  2660,
                  2671
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 85
                  },
                  "start": {
                    "column": 31,
                    "line": 85
                  }
                }
              },
              "range": [
                2633,
                2672
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringConst",
                "optional": false,
                "range": [
                  2687,
                  2698
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 87
                  },
                  "start": {
                    "column": 13,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  2701,
                  2704
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 87
                  },
                  "start": {
                    "column": 27,
                    "line": 87
                  }
                }
              },
              "range": [
                2678,
                2705
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringConstBad",
                "optional": false,
                "range": [
                  2719,
                  2733
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 88
                  },
                  "start": {
                    "column": 13,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "\"s\"",
                  "value": "s",
                  "range": [
                    2736,
                    2739
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 88
                    },
                    "start": {
                      "column": 30,
                      "line": 88
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"s\"",
                  "value": "s",
                  "range": [
                    2742,
                    2745
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 88
                    },
                    "start": {
                      "column": 36,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2736,
                  2745
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 88
                  },
                  "start": {
                    "column": 30,
                    "line": 88
                  }
                }
              },
              "range": [
                2710,
                2746
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstOk1",
                "optional": false,
                "range": [
                  2761,
                  2777
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 90
                  },
                  "start": {
                    "column": 13,
                    "line": 90
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2780,
                      2783
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 90
                      },
                      "start": {
                        "column": 32,
                        "line": 90
                      }
                    }
                  }
                ],
                "range": [
                  2780,
                  2783
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 90
                  },
                  "start": {
                    "column": 32,
                    "line": 90
                  }
                }
              },
              "range": [
                2752,
                2784
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstNotOk2",
                "optional": false,
                "range": [
                  2798,
                  2817
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 91
                  },
                  "start": {
                    "column": 13,
                    "line": 91
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2824,
                      2825
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 91
                      },
                      "start": {
                        "column": 39,
                        "line": 91
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      2831,
                      2834
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 91
                      },
                      "start": {
                        "column": 46,
                        "line": 91
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2820,
                      2824
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 91
                      },
                      "start": {
                        "column": 35,
                        "line": 91
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2825,
                      2831
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 91
                      },
                      "start": {
                        "column": 40,
                        "line": 91
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      2834,
                      2836
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 91
                      },
                      "start": {
                        "column": 49,
                        "line": 91
                      }
                    }
                  }
                ],
                "range": [
                  2820,
                  2836
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 91
                  },
                  "start": {
                    "column": 35,
                    "line": 91
                  }
                }
              },
              "range": [
                2789,
                2837
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstNotOk3",
                "optional": false,
                "range": [
                  2851,
                  2870
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 92
                  },
                  "start": {
                    "column": 13,
                    "line": 92
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2877,
                      2878
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 92
                      },
                      "start": {
                        "column": 39,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      2884,
                      2887
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 92
                      },
                      "start": {
                        "column": 46,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      2893,
                      2898
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 92
                      },
                      "start": {
                        "column": 55,
                        "line": 92
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2873,
                      2877
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 92
                      },
                      "start": {
                        "column": 35,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2878,
                      2884
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 92
                      },
                      "start": {
                        "column": 40,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2887,
                      2893
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 92
                      },
                      "start": {
                        "column": 49,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      2898,
                      2900
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 92
                      },
                      "start": {
                        "column": 60,
                        "line": 92
                      }
                    }
                  }
                ],
                "range": [
                  2873,
                  2900
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 92
                  },
                  "start": {
                    "column": 35,
                    "line": 92
                  }
                }
              },
              "range": [
                2842,
                2901
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstNotOk4",
                "optional": false,
                "range": [
                  2915,
                  2934
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 93
                  },
                  "start": {
                    "column": 13,
                    "line": 93
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2941,
                        2942
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 93
                        },
                        "start": {
                          "column": 39,
                          "line": 93
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2945,
                        2946
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
                    "range": [
                      2941,
                      2946
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 93
                      },
                      "start": {
                        "column": 39,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"S\"",
                    "value": "S",
                    "range": [
                      2952,
                      2955
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 93
                      },
                      "start": {
                        "column": 50,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        2962,
                        2967
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 93
                        },
                        "start": {
                          "column": 60,
                          "line": 93
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      2961,
                      2967
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 93
                      },
                      "start": {
                        "column": 59,
                        "line": 93
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "s",
                      "raw": "s"
                    },
                    "range": [
                      2937,
                      2941
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 93
                      },
                      "start": {
                        "column": 35,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2946,
                      2952
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 93
                      },
                      "start": {
                        "column": 44,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": " - ",
                      "raw": " - "
                    },
                    "range": [
                      2955,
                      2961
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 93
                      },
                      "start": {
                        "column": 53,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      2967,
                      2969
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 93
                      },
                      "start": {
                        "column": 65,
                        "line": 93
                      }
                    }
                  }
                ],
                "range": [
                  2937,
                  2969
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 93
                  },
                  "start": {
                    "column": 35,
                    "line": 93
                  }
                }
              },
              "range": [
                2906,
                2970
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 93
                },
                "start": {
                  "column": 4,
                  "line": 93
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetAsConst",
                "optional": false,
                "range": [
                  2976,
                  2992
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 95
                  },
                  "start": {
                    "column": 4,
                    "line": 95
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    2995,
                    2996
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 95
                    },
                    "start": {
                      "column": 23,
                      "line": 95
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3000,
                      3005
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 95
                      },
                      "start": {
                        "column": 28,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    3000,
                    3005
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 95
                    },
                    "start": {
                      "column": 28,
                      "line": 95
                    }
                  }
                },
                "range": [
                  2995,
                  3005
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 95
                  },
                  "start": {
                    "column": 23,
                    "line": 95
                  }
                }
              },
              "range": [
                2976,
                3006
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetAsConst",
                "optional": false,
                "range": [
                  3012,
                  3028
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 97
                  },
                  "start": {
                    "column": 4,
                    "line": 97
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "range": [
                    3031,
                    3033
                  ],
                  "bigint": "1",
                  "raw": "1n",
                  "value": null,
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 97
                    },
                    "start": {
                      "column": 23,
                      "line": 97
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3037,
                      3042
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 97
                      },
                      "start": {
                        "column": 29,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    3037,
                    3042
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 97
                    },
                    "start": {
                      "column": 29,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3031,
                  3042
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 97
                  },
                  "start": {
                    "column": 23,
                    "line": 97
                  }
                }
              },
              "range": [
                3012,
                3043
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringLetAsConst",
                "optional": false,
                "range": [
                  3049,
                  3065
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 99
                  },
                  "start": {
                    "column": 4,
                    "line": 99
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "\"s\"",
                  "value": "s",
                  "range": [
                    3068,
                    3071
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 99
                    },
                    "start": {
                      "column": 23,
                      "line": 99
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3075,
                      3080
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 99
                      },
                      "start": {
                        "column": 30,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    3075,
                    3080
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 99
                    },
                    "start": {
                      "column": 30,
                      "line": 99
                    }
                  }
                },
                "range": [
                  3068,
                  3080
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 99
                  },
                  "start": {
                    "column": 23,
                    "line": 99
                  }
                }
              },
              "range": [
                3049,
                3081
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 99
                },
                "start": {
                  "column": 4,
                  "line": 99
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk1AsConst",
                "optional": false,
                "range": [
                  3087,
                  3108
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 101
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "s",
                        "raw": "s"
                      },
                      "range": [
                        3111,
                        3114
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 101
                        },
                        "start": {
                          "column": 28,
                          "line": 101
                        }
                      }
                    }
                  ],
                  "range": [
                    3111,
                    3114
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 101
                    },
                    "start": {
                      "column": 28,
                      "line": 101
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3118,
                      3123
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 101
                      },
                      "start": {
                        "column": 35,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    3118,
                    3123
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 101
                    },
                    "start": {
                      "column": 35,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3111,
                  3123
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 101
                  },
                  "start": {
                    "column": 28,
                    "line": 101
                  }
                }
              },
              "range": [
                3087,
                3124
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk2AsConst",
                "optional": false,
                "range": [
                  3129,
                  3150
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3157,
                        3158
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 102
                        },
                        "start": {
                          "column": 32,
                          "line": 102
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"S\"",
                      "value": "S",
                      "range": [
                        3164,
                        3167
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 102
                        },
                        "start": {
                          "column": 39,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "s",
                        "raw": "s"
                      },
                      "range": [
                        3153,
                        3157
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 102
                        },
                        "start": {
                          "column": 28,
                          "line": 102
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": " - ",
                        "raw": " - "
                      },
                      "range": [
                        3158,
                        3164
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 102
                        },
                        "start": {
                          "column": 33,
                          "line": 102
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        3167,
                        3169
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 102
                        },
                        "start": {
                          "column": 42,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "range": [
                    3153,
                    3169
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 102
                    },
                    "start": {
                      "column": 28,
                      "line": 102
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3173,
                      3178
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 102
                      },
                      "start": {
                        "column": 48,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    3173,
                    3178
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 102
                    },
                    "start": {
                      "column": 48,
                      "line": 102
                    }
                  }
                },
                "range": [
                  3153,
                  3178
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 102
                  },
                  "start": {
                    "column": 28,
                    "line": 102
                  }
                }
              },
              "range": [
                3129,
                3179
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk3AsConst",
                "optional": false,
                "range": [
                  3184,
                  3205
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 103
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3212,
                        3213
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 103
                        },
                        "start": {
                          "column": 32,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"S\"",
                      "value": "S",
                      "range": [
                        3219,
                        3222
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 103
                        },
                        "start": {
                          "column": 39,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        3228,
                        3233
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 103
                        },
                        "start": {
                          "column": 48,
                          "line": 103
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "s",
                        "raw": "s"
                      },
                      "range": [
                        3208,
                        3212
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 103
                        },
                        "start": {
                          "column": 28,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": " - ",
                        "raw": " - "
                      },
                      "range": [
                        3213,
                        3219
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 103
                        },
                        "start": {
                          "column": 33,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": " - ",
                        "raw": " - "
                      },
                      "range": [
                        3222,
                        3228
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 103
                        },
                        "start": {
                          "column": 42,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        3233,
                        3235
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 103
                        },
                        "start": {
                          "column": 53,
                          "line": 103
                        }
                      }
                    }
                  ],
                  "range": [
                    3208,
                    3235
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 103
                    },
                    "start": {
                      "column": 28,
                      "line": 103
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3239,
                      3244
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 103
                      },
                      "start": {
                        "column": 59,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    3239,
                    3244
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 103
                    },
                    "start": {
                      "column": 59,
                      "line": 103
                    }
                  }
                },
                "range": [
                  3208,
                  3244
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 103
                  },
                  "start": {
                    "column": 28,
                    "line": 103
                  }
                }
              },
              "range": [
                3184,
                3245
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk4AsConst",
                "optional": false,
                "range": [
                  3250,
                  3271
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 104
                  },
                  "start": {
                    "column": 4,
                    "line": 104
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3278,
                          3279
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 104
                          },
                          "start": {
                            "column": 32,
                            "line": 104
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3282,
                          3283
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 104
                          },
                          "start": {
                            "column": 36,
                            "line": 104
                          }
                        }
                      },
                      "range": [
                        3278,
                        3283
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 104
                        },
                        "start": {
                          "column": 32,
                          "line": 104
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"S\"",
                      "value": "S",
                      "range": [
                        3289,
                        3292
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 104
                        },
                        "start": {
                          "column": 43,
                          "line": 104
                        }
                      }
                    },
                    {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          3299,
                          3304
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 104
                          },
                          "start": {
                            "column": 53,
                            "line": 104
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        3298,
                        3304
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 104
                        },
                        "start": {
                          "column": 52,
                          "line": 104
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "s",
                        "raw": "s"
                      },
                      "range": [
                        3274,
                        3278
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 104
                        },
                        "start": {
                          "column": 28,
                          "line": 104
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": " - ",
                        "raw": " - "
                      },
                      "range": [
                        3283,
                        3289
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 104
                        },
                        "start": {
                          "column": 37,
                          "line": 104
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": " - ",
                        "raw": " - "
                      },
                      "range": [
                        3292,
                        3298
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 104
                        },
                        "start": {
                          "column": 46,
                          "line": 104
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        3304,
                        3306
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 104
                        },
                        "start": {
                          "column": 58,
                          "line": 104
                        }
                      }
                    }
                  ],
                  "range": [
                    3274,
                    3306
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 104
                    },
                    "start": {
                      "column": 28,
                      "line": 104
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3310,
                      3315
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 104
                      },
                      "start": {
                        "column": 64,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    3310,
                    3315
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 104
                    },
                    "start": {
                      "column": 64,
                      "line": 104
                    }
                  }
                },
                "range": [
                  3274,
                  3315
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 104
                  },
                  "start": {
                    "column": 28,
                    "line": 104
                  }
                }
              },
              "range": [
                3250,
                3316
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 106
            },
            "start": {
              "column": 22,
              "line": 57
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exported",
          "optional": false,
          "range": [
            1805,
            1813
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 57
            },
            "start": {
              "column": 13,
              "line": 57
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          1799,
          3319
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 7,
            "line": 57
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3321,
        3365
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3362,
            3365
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 108
            },
            "start": {
              "column": 41,
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
          "name": "numberParam",
          "optional": false,
          "range": [
            3337,
            3348
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 108
            },
            "start": {
              "column": 16,
              "line": 108
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3349,
                3350
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 108
                },
                "start": {
                  "column": 28,
                  "line": 108
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                3353,
                3354
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 108
                },
                "start": {
                  "column": 32,
                  "line": 108
                }
              }
            },
            "range": [
              3349,
              3354
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 108
              },
              "start": {
                "column": 28,
                "line": 108
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 40,
              "line": 108
            },
            "start": {
              "column": 34,
              "line": 108
            }
          },
          "range": [
            3355,
            3361
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3357,
              3361
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 108
              },
              "start": {
                "column": 36,
                "line": 108
              }
            }
          }
        },
        "range": [
          3328,
          3365
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 108
          },
          "start": {
            "column": 7,
            "line": 108
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3366,
        3418
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3415,
            3418
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 109
            },
            "start": {
              "column": 49,
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
          "name": "numberParamBad1",
          "optional": false,
          "range": [
            3382,
            3397
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 109
            },
            "start": {
              "column": 16,
              "line": 109
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3398,
                3399
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 109
                },
                "start": {
                  "column": 32,
                  "line": 109
                }
              }
            },
            "optional": false,
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3402,
                  3403
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 109
                  },
                  "start": {
                    "column": 36,
                    "line": 109
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3406,
                  3407
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 109
                  },
                  "start": {
                    "column": 40,
                    "line": 109
                  }
                }
              },
              "range": [
                3402,
                3407
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 109
                },
                "start": {
                  "column": 36,
                  "line": 109
                }
              }
            },
            "range": [
              3398,
              3407
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 109
              },
              "start": {
                "column": 32,
                "line": 109
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 48,
              "line": 109
            },
            "start": {
              "column": 42,
              "line": 109
            }
          },
          "range": [
            3408,
            3414
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3410,
              3414
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 109
              },
              "start": {
                "column": 44,
                "line": 109
              }
            }
          }
        },
        "range": [
          3373,
          3418
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 109
          },
          "start": {
            "column": 7,
            "line": 109
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3419,
        3479
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3476,
            3479
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 110
            },
            "start": {
              "column": 57,
              "line": 110
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberParamBad2",
          "optional": false,
          "range": [
            3435,
            3450
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 110
            },
            "start": {
              "column": 16,
              "line": 110
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3451,
                3452
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 110
                },
                "start": {
                  "column": 32,
                  "line": 110
                }
              }
            },
            "optional": false,
            "right": {
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
                    3455,
                    3459
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 110
                    },
                    "start": {
                      "column": 36,
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
                    3460,
                    3466
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 110
                    },
                    "start": {
                      "column": 41,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3455,
                  3466
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 110
                  },
                  "start": {
                    "column": 36,
                    "line": 110
                  }
                }
              },
              "optional": false,
              "range": [
                3455,
                3468
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 110
                },
                "start": {
                  "column": 36,
                  "line": 110
                }
              }
            },
            "range": [
              3451,
              3468
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 110
              },
              "start": {
                "column": 32,
                "line": 110
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 56,
              "line": 110
            },
            "start": {
              "column": 50,
              "line": 110
            }
          },
          "range": [
            3469,
            3475
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3471,
              3475
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 110
              },
              "start": {
                "column": 52,
                "line": 110
              }
            }
          }
        },
        "range": [
          3426,
          3479
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 110
          },
          "start": {
            "column": 7,
            "line": 110
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 60,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3480,
        3538
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3535,
            3538
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 111
            },
            "start": {
              "column": 55,
              "line": 111
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberParamBad3",
          "optional": false,
          "range": [
            3496,
            3511
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 111
            },
            "start": {
              "column": 16,
              "line": 111
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3512,
                3513
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 111
                },
                "start": {
                  "column": 32,
                  "line": 111
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberParam",
              "optional": false,
              "range": [
                3516,
                3527
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 111
                },
                "start": {
                  "column": 36,
                  "line": 111
                }
              }
            },
            "range": [
              3512,
              3527
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 111
              },
              "start": {
                "column": 32,
                "line": 111
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 54,
              "line": 111
            },
            "start": {
              "column": 48,
              "line": 111
            }
          },
          "range": [
            3528,
            3534
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3530,
              3534
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 111
              },
              "start": {
                "column": 50,
                "line": 111
              }
            }
          }
        },
        "range": [
          3487,
          3538
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 111
          },
          "start": {
            "column": 7,
            "line": 111
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 58,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3540,
        3585
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3582,
            3585
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 113
            },
            "start": {
              "column": 42,
              "line": 113
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParam",
          "optional": false,
          "range": [
            3556,
            3567
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 113
            },
            "start": {
              "column": 16,
              "line": 113
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3568,
                3569
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 113
                },
                "start": {
                  "column": 28,
                  "line": 113
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "range": [
                3572,
                3574
              ],
              "bigint": "1",
              "raw": "1n",
              "value": null,
              "loc": {
                "end": {
                  "column": 34,
                  "line": 113
                },
                "start": {
                  "column": 32,
                  "line": 113
                }
              }
            },
            "range": [
              3568,
              3574
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 113
              },
              "start": {
                "column": 28,
                "line": 113
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 41,
              "line": 113
            },
            "start": {
              "column": 35,
              "line": 113
            }
          },
          "range": [
            3575,
            3581
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3577,
              3581
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 113
              },
              "start": {
                "column": 37,
                "line": 113
              }
            }
          }
        },
        "range": [
          3547,
          3585
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 113
          },
          "start": {
            "column": 7,
            "line": 113
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3586,
        3640
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3637,
            3640
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 114
            },
            "start": {
              "column": 51,
              "line": 114
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParamBad1",
          "optional": false,
          "range": [
            3602,
            3617
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 114
            },
            "start": {
              "column": 16,
              "line": 114
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3618,
                3619
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 114
                },
                "start": {
                  "column": 32,
                  "line": 114
                }
              }
            },
            "optional": false,
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "range": [
                  3622,
                  3624
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 114
                  },
                  "start": {
                    "column": 36,
                    "line": 114
                  }
                }
              },
              "right": {
                "type": "Literal",
                "range": [
                  3627,
                  3629
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 114
                  },
                  "start": {
                    "column": 41,
                    "line": 114
                  }
                }
              },
              "range": [
                3622,
                3629
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 114
                },
                "start": {
                  "column": 36,
                  "line": 114
                }
              }
            },
            "range": [
              3618,
              3629
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 114
              },
              "start": {
                "column": 32,
                "line": 114
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 50,
              "line": 114
            },
            "start": {
              "column": 44,
              "line": 114
            }
          },
          "range": [
            3630,
            3636
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3632,
              3636
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 114
              },
              "start": {
                "column": 46,
                "line": 114
              }
            }
          }
        },
        "range": [
          3593,
          3640
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 114
          },
          "start": {
            "column": 7,
            "line": 114
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 114
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3641,
        3694
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3691,
            3694
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 115
            },
            "start": {
              "column": 50,
              "line": 115
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParamBad2",
          "optional": false,
          "range": [
            3657,
            3672
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 115
            },
            "start": {
              "column": 16,
              "line": 115
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3673,
                3674
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 115
                },
                "start": {
                  "column": 32,
                  "line": 115
                }
              }
            },
            "optional": false,
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "time",
                "optional": false,
                "range": [
                  3677,
                  3681
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 115
                  },
                  "start": {
                    "column": 36,
                    "line": 115
                  }
                }
              },
              "optional": false,
              "range": [
                3677,
                3683
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 115
                },
                "start": {
                  "column": 36,
                  "line": 115
                }
              }
            },
            "range": [
              3673,
              3683
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 115
              },
              "start": {
                "column": 32,
                "line": 115
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 49,
              "line": 115
            },
            "start": {
              "column": 43,
              "line": 115
            }
          },
          "range": [
            3684,
            3690
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3686,
              3690
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 115
              },
              "start": {
                "column": 45,
                "line": 115
              }
            }
          }
        },
        "range": [
          3648,
          3694
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 115
          },
          "start": {
            "column": 7,
            "line": 115
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 53,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3695,
        3753
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3750,
            3753
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 116
            },
            "start": {
              "column": 55,
              "line": 116
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParamBad3",
          "optional": false,
          "range": [
            3711,
            3726
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 116
            },
            "start": {
              "column": 16,
              "line": 116
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3727,
                3728
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 116
                },
                "start": {
                  "column": 32,
                  "line": 116
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntParam",
              "optional": false,
              "range": [
                3731,
                3742
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 116
                },
                "start": {
                  "column": 36,
                  "line": 116
                }
              }
            },
            "range": [
              3727,
              3742
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 116
              },
              "start": {
                "column": 32,
                "line": 116
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 54,
              "line": 116
            },
            "start": {
              "column": 48,
              "line": 116
            }
          },
          "range": [
            3743,
            3749
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3745,
              3749
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 116
              },
              "start": {
                "column": 50,
                "line": 116
              }
            }
          }
        },
        "range": [
          3702,
          3753
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 116
          },
          "start": {
            "column": 7,
            "line": 116
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 58,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 116
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3755,
        3801
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3798,
            3801
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 118
            },
            "start": {
              "column": 43,
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
          "name": "stringParam",
          "optional": false,
          "range": [
            3771,
            3782
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 118
            },
            "start": {
              "column": 16,
              "line": 118
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3783,
                3784
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 118
                },
                "start": {
                  "column": 28,
                  "line": 118
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"s\"",
              "value": "s",
              "range": [
                3787,
                3790
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 118
                },
                "start": {
                  "column": 32,
                  "line": 118
                }
              }
            },
            "range": [
              3783,
              3790
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 118
              },
              "start": {
                "column": 28,
                "line": 118
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 42,
              "line": 118
            },
            "start": {
              "column": 36,
              "line": 118
            }
          },
          "range": [
            3791,
            3797
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3793,
              3797
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 118
              },
              "start": {
                "column": 38,
                "line": 118
              }
            }
          }
        },
        "range": [
          3762,
          3801
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 118
          },
          "start": {
            "column": 7,
            "line": 118
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 46,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3802,
        3857
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3854,
            3857
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 119
            },
            "start": {
              "column": 52,
              "line": 119
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringParamBad",
          "optional": false,
          "range": [
            3818,
            3832
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 119
            },
            "start": {
              "column": 16,
              "line": 119
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3833,
                3834
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 119
                },
                "start": {
                  "column": 31,
                  "line": 119
                }
              }
            },
            "optional": false,
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  3837,
                  3840
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 119
                  },
                  "start": {
                    "column": 35,
                    "line": 119
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  3843,
                  3846
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 119
                  },
                  "start": {
                    "column": 41,
                    "line": 119
                  }
                }
              },
              "range": [
                3837,
                3846
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 119
                },
                "start": {
                  "column": 35,
                  "line": 119
                }
              }
            },
            "range": [
              3833,
              3846
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 119
              },
              "start": {
                "column": 31,
                "line": 119
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 51,
              "line": 119
            },
            "start": {
              "column": 45,
              "line": 119
            }
          },
          "range": [
            3847,
            3853
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3849,
              3853
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 119
              },
              "start": {
                "column": 47,
                "line": 119
              }
            }
          }
        },
        "range": [
          3809,
          3857
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 119
          },
          "start": {
            "column": 7,
            "line": 119
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 55,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3859,
        3910
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3907,
            3910
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 121
            },
            "start": {
              "column": 48,
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
          "name": "templateParamOk1",
          "optional": false,
          "range": [
            3875,
            3891
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 121
            },
            "start": {
              "column": 16,
              "line": 121
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3892,
                3893
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 121
                },
                "start": {
                  "column": 33,
                  "line": 121
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    3896,
                    3899
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 121
                    },
                    "start": {
                      "column": 37,
                      "line": 121
                    }
                  }
                }
              ],
              "range": [
                3896,
                3899
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 121
                },
                "start": {
                  "column": 37,
                  "line": 121
                }
              }
            },
            "range": [
              3892,
              3899
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 121
              },
              "start": {
                "column": 33,
                "line": 121
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 47,
              "line": 121
            },
            "start": {
              "column": 41,
              "line": 121
            }
          },
          "range": [
            3900,
            3906
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3902,
              3906
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 121
              },
              "start": {
                "column": 43,
                "line": 121
              }
            }
          }
        },
        "range": [
          3866,
          3910
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 121
          },
          "start": {
            "column": 7,
            "line": 121
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 51,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3911,
        3975
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            3972,
            3975
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 122
            },
            "start": {
              "column": 61,
              "line": 122
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk2",
          "optional": false,
          "range": [
            3927,
            3943
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 122
            },
            "start": {
              "column": 16,
              "line": 122
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                3944,
                3945
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 122
                },
                "start": {
                  "column": 33,
                  "line": 122
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    3952,
                    3953
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 122
                    },
                    "start": {
                      "column": 41,
                      "line": 122
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    3959,
                    3962
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 122
                    },
                    "start": {
                      "column": 48,
                      "line": 122
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    3948,
                    3952
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 122
                    },
                    "start": {
                      "column": 37,
                      "line": 122
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    3953,
                    3959
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 122
                    },
                    "start": {
                      "column": 42,
                      "line": 122
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    3962,
                    3964
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 122
                    },
                    "start": {
                      "column": 51,
                      "line": 122
                    }
                  }
                }
              ],
              "range": [
                3948,
                3964
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 122
                },
                "start": {
                  "column": 37,
                  "line": 122
                }
              }
            },
            "range": [
              3944,
              3964
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 122
              },
              "start": {
                "column": 33,
                "line": 122
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 60,
              "line": 122
            },
            "start": {
              "column": 54,
              "line": 122
            }
          },
          "range": [
            3965,
            3971
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              3967,
              3971
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 122
              },
              "start": {
                "column": 56,
                "line": 122
              }
            }
          }
        },
        "range": [
          3918,
          3975
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 122
          },
          "start": {
            "column": 7,
            "line": 122
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 64,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3976,
        4051
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            4048,
            4051
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 123
            },
            "start": {
              "column": 72,
              "line": 123
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk3",
          "optional": false,
          "range": [
            3992,
            4008
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 123
            },
            "start": {
              "column": 16,
              "line": 123
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                4009,
                4010
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 123
                },
                "start": {
                  "column": 33,
                  "line": 123
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    4017,
                    4018
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 123
                    },
                    "start": {
                      "column": 41,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    4024,
                    4027
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 123
                    },
                    "start": {
                      "column": 48,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    4033,
                    4038
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 123
                    },
                    "start": {
                      "column": 57,
                      "line": 123
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    4013,
                    4017
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 123
                    },
                    "start": {
                      "column": 37,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    4018,
                    4024
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 123
                    },
                    "start": {
                      "column": 42,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    4027,
                    4033
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 123
                    },
                    "start": {
                      "column": 51,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    4038,
                    4040
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 123
                    },
                    "start": {
                      "column": 62,
                      "line": 123
                    }
                  }
                }
              ],
              "range": [
                4013,
                4040
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 123
                },
                "start": {
                  "column": 37,
                  "line": 123
                }
              }
            },
            "range": [
              4009,
              4040
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 123
              },
              "start": {
                "column": 33,
                "line": 123
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 71,
              "line": 123
            },
            "start": {
              "column": 65,
              "line": 123
            }
          },
          "range": [
            4041,
            4047
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              4043,
              4047
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 123
              },
              "start": {
                "column": 67,
                "line": 123
              }
            }
          }
        },
        "range": [
          3983,
          4051
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 123
          },
          "start": {
            "column": 7,
            "line": 123
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 75,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4052,
        4132
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            4129,
            4132
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 124
            },
            "start": {
              "column": 77,
              "line": 124
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk4",
          "optional": false,
          "range": [
            4068,
            4084
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 124
            },
            "start": {
              "column": 16,
              "line": 124
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                4085,
                4086
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 124
                },
                "start": {
                  "column": 33,
                  "line": 124
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      4093,
                      4094
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 124
                      },
                      "start": {
                        "column": 41,
                        "line": 124
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      4097,
                      4098
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 124
                      },
                      "start": {
                        "column": 45,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    4093,
                    4098
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 124
                    },
                    "start": {
                      "column": 41,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"S\"",
                  "value": "S",
                  "range": [
                    4104,
                    4107
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 124
                    },
                    "start": {
                      "column": 52,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      4114,
                      4119
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 124
                      },
                      "start": {
                        "column": 62,
                        "line": 124
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    4113,
                    4119
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 124
                    },
                    "start": {
                      "column": 61,
                      "line": 124
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "range": [
                    4089,
                    4093
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 124
                    },
                    "start": {
                      "column": 37,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    4098,
                    4104
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 124
                    },
                    "start": {
                      "column": 46,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": " - ",
                    "raw": " - "
                  },
                  "range": [
                    4107,
                    4113
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 124
                    },
                    "start": {
                      "column": 55,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    4119,
                    4121
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 124
                    },
                    "start": {
                      "column": 67,
                      "line": 124
                    }
                  }
                }
              ],
              "range": [
                4089,
                4121
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 124
                },
                "start": {
                  "column": 37,
                  "line": 124
                }
              }
            },
            "range": [
              4085,
              4121
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 124
              },
              "start": {
                "column": 33,
                "line": 124
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 76,
              "line": 124
            },
            "start": {
              "column": 70,
              "line": 124
            }
          },
          "range": [
            4122,
            4128
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              4124,
              4128
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 124
              },
              "start": {
                "column": 72,
                "line": 124
              }
            }
          }
        },
        "range": [
          4059,
          4132
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 124
          },
          "start": {
            "column": 7,
            "line": 124
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 80,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4135,
        4165
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      4150,
                      4151
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 127
                      },
                      "start": {
                        "column": 15,
                        "line": 127
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      4150,
                      4151
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 127
                      },
                      "start": {
                        "column": 15,
                        "line": 127
                      }
                    }
                  },
                  "range": [
                    4150,
                    4151
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 127
                    },
                    "start": {
                      "column": 15,
                      "line": 127
                    }
                  }
                }
              ],
              "range": [
                4148,
                4153
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 127
                },
                "start": {
                  "column": 13,
                  "line": 127
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      4158,
                      4159
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 127
                      },
                      "start": {
                        "column": 23,
                        "line": 127
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      4161,
                      4162
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 127
                      },
                      "start": {
                        "column": 26,
                        "line": 127
                      }
                    }
                  },
                  "range": [
                    4158,
                    4162
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 127
                    },
                    "start": {
                      "column": 23,
                      "line": 127
                    }
                  }
                }
              ],
              "range": [
                4156,
                4164
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 127
                },
                "start": {
                  "column": 21,
                  "line": 127
                }
              }
            },
            "range": [
              4148,
              4164
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 127
              },
              "start": {
                "column": 13,
                "line": 127
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          4142,
          4165
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 127
          },
          "start": {
            "column": 7,
            "line": 127
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 30,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 127
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4166,
        4241
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      4184,
                      4185
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 128
                      },
                      "start": {
                        "column": 18,
                        "line": 128
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      4188,
                      4189
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 128
                      },
                      "start": {
                        "column": 22,
                        "line": 128
                      }
                    }
                  },
                  "range": [
                    4184,
                    4189
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 128
                    },
                    "start": {
                      "column": 18,
                      "line": 128
                    }
                  }
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 128
                  },
                  "start": {
                    "column": 24,
                    "line": 128
                  }
                },
                "range": [
                  4190,
                  4228
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        4193,
                        4199
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 128
                        },
                        "start": {
                          "column": 27,
                          "line": 128
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        4201,
                        4207
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 128
                        },
                        "start": {
                          "column": 35,
                          "line": 128
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            4209,
                            4215
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 128
                            },
                            "start": {
                              "column": 43,
                              "line": 128
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            4218,
                            4227
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 128
                            },
                            "start": {
                              "column": 52,
                              "line": 128
                            }
                          }
                        }
                      ],
                      "range": [
                        4209,
                        4227
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 128
                        },
                        "start": {
                          "column": 43,
                          "line": 128
                        }
                      }
                    }
                  ],
                  "range": [
                    4192,
                    4228
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 128
                    },
                    "start": {
                      "column": 26,
                      "line": 128
                    }
                  }
                }
              },
              "range": [
                4179,
                4228
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 128
                },
                "start": {
                  "column": 13,
                  "line": 128
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4232,
                    4233
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 128
                    },
                    "start": {
                      "column": 66,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    4235,
                    4236
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 128
                    },
                    "start": {
                      "column": 69,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    4238,
                    4239
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 128
                    },
                    "start": {
                      "column": 72,
                      "line": 128
                    }
                  }
                }
              ],
              "range": [
                4231,
                4240
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 128
                },
                "start": {
                  "column": 65,
                  "line": 128
                }
              }
            },
            "range": [
              4179,
              4240
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 128
              },
              "start": {
                "column": 13,
                "line": 128
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          4173,
          4241
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 128
          },
          "start": {
            "column": 7,
            "line": 128
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 75,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4243,
        4334
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            4330,
            4334
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 136
            },
            "start": {
              "column": 21,
              "line": 134
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
            4259,
            4262
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 130
            },
            "start": {
              "column": 16,
              "line": 130
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    4268,
                    4269
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 130
                    },
                    "start": {
                      "column": 25,
                      "line": 130
                    }
                  }
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 134
                  },
                  "start": {
                    "column": 27,
                    "line": 130
                  }
                },
                "range": [
                  4270,
                  4310
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        4278,
                        4284
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 131
                        },
                        "start": {
                          "column": 4,
                          "line": 131
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        4290,
                        4296
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 132
                        },
                        "start": {
                          "column": 4,
                          "line": 132
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        4302,
                        4308
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 133
                        },
                        "start": {
                          "column": 4,
                          "line": 133
                        }
                      }
                    }
                  ],
                  "range": [
                    4272,
                    4310
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 134
                    },
                    "start": {
                      "column": 29,
                      "line": 130
                    }
                  }
                }
              },
              "range": [
                4263,
                4310
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 134
                },
                "start": {
                  "column": 20,
                  "line": 130
                }
              }
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    4314,
                    4315
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 134
                    },
                    "start": {
                      "column": 5,
                      "line": 134
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    4317,
                    4318
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
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    4320,
                    4321
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 134
                    },
                    "start": {
                      "column": 11,
                      "line": 134
                    }
                  }
                }
              ],
              "range": [
                4313,
                4322
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 134
                },
                "start": {
                  "column": 4,
                  "line": 134
                }
              }
            },
            "range": [
              4263,
              4322
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 134
              },
              "start": {
                "column": 20,
                "line": 130
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 20,
              "line": 134
            },
            "start": {
              "column": 14,
              "line": 134
            }
          },
          "range": [
            4323,
            4329
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              4325,
              4329
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 134
              },
              "start": {
                "column": 16,
                "line": 134
              }
            }
          }
        },
        "range": [
          4250,
          4334
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 136
          },
          "start": {
            "column": 7,
            "line": 130
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 130
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 136
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
