__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2113
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
            "name": "opt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                35
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      17,
                      23
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      26,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 26,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  17,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
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
            35
          ],
          "loc": {
            "end": {
              "column": 35,
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
        36
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "test1",
            "optional": false,
            "range": [
              92,
              97
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "32",
                "value": 32,
                "range": [
                  119,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  107,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  101,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                101,
                121
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"possibly reached\"",
              "value": "possibly reached",
              "range": [
                126,
                144
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 4
                },
                "start": {
                  "column": 40,
                  "line": 4
                }
              }
            },
            "range": [
              100,
              144
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "range": [
            92,
            144
          ],
          "loc": {
            "end": {
              "column": 58,
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
        86,
        145
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "test2",
            "optional": false,
            "range": [
              186,
              191
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  213,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  201,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  195,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                195,
                217
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"always reached\"",
              "value": "always reached",
              "range": [
                222,
                238
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 7
                },
                "start": {
                  "column": 42,
                  "line": 7
                }
              }
            },
            "range": [
              194,
              238
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "range": [
            186,
            238
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 7
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
        180,
        239
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "test3",
            "optional": false,
            "range": [
              284,
              289
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "17",
                "value": 17,
                "range": [
                  305,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "132",
                "value": 132,
                "range": [
                  299,
                  302
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
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  293,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "range": [
                293,
                307
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"unreachable\"",
              "value": "unreachable",
              "range": [
                312,
                325
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
                }
              }
            },
            "range": [
              292,
              325
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            }
          },
          "range": [
            284,
            325
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        278,
        326
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 10
        },
        "start": {
          "column": 0,
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
            "name": "test4",
            "optional": false,
            "range": [
              344,
              349
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "17",
                "value": 17,
                "range": [
                  374,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 13
                  },
                  "start": {
                    "column": 36,
                    "line": 13
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  360,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 13
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  353,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "range": [
                353,
                377
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                382,
                384
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 13
                },
                "start": {
                  "column": 44,
                  "line": 13
                }
              }
            },
            "range": [
              352,
              384
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "range": [
            344,
            384
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        338,
        385
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          430,
          434
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 12,
            "line": 16
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              424,
              428
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            423,
            428
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 16
            },
            "start": {
              "column": 5,
              "line": 16
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          422,
          428
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        418,
        434
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          478,
          481
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "0",
        "value": 0,
        "range": [
          475,
          476
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "range": [
        468,
        481
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          492,
          495
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 10,
            "line": 22
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "1",
        "value": 1,
        "range": [
          489,
          490
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "range": [
        482,
        495
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          509,
          512
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 23
          },
          "start": {
            "column": 13,
            "line": 23
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          503,
          507
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "range": [
        496,
        512
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          527,
          530
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 24
          },
          "start": {
            "column": 14,
            "line": 24
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "false",
        "value": false,
        "range": [
          520,
          525
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "range": [
        513,
        530
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "p01",
            "optional": false,
            "range": [
              538,
              541
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                544,
                546
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                550,
                554
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 18,
                  "line": 26
                }
              }
            },
            "range": [
              544,
              554
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          },
          "range": [
            538,
            554
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        532,
        555
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "p02",
            "optional": false,
            "range": [
              562,
              565
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  568,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  572,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 16,
                    "line": 27
                  }
                }
              },
              "range": [
                568,
                573
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                577,
                581
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 21,
                  "line": 27
                }
              }
            },
            "range": [
              568,
              581
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          },
          "range": [
            562,
            581
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        556,
        582
      ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p03",
            "optional": false,
            "range": [
              589,
              592
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                595,
                599
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 28
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "range": [
              595,
              604
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 28
              },
              "start": {
                "column": 12,
                "line": 28
              }
            }
          },
          "range": [
            589,
            604
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        583,
        605
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "p04",
            "optional": false,
            "range": [
              612,
              615
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                618,
                622
              ],
              "loc": {
                "end": {
                  "column": 16,
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
              "raw": "null",
              "value": null,
              "range": [
                626,
                630
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 20,
                  "line": 29
                }
              }
            },
            "range": [
              618,
              630
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          },
          "range": [
            612,
            630
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        606,
        631
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "p05",
            "optional": false,
            "range": [
              638,
              641
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  655,
                  658
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 23,
                    "line": 30
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  651,
                  654
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 30
                  },
                  "start": {
                    "column": 19,
                    "line": 30
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                645,
                658
              ],
              "loc": {
                "end": {
                  "column": 26,
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
                663,
                667
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 30
                },
                "start": {
                  "column": 31,
                  "line": 30
                }
              }
            },
            "range": [
              644,
              667
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 30
              },
              "start": {
                "column": 12,
                "line": 30
              }
            }
          },
          "range": [
            638,
            667
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        632,
        668
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "p06",
            "optional": false,
            "range": [
              675,
              678
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  692,
                  695
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 31
                  },
                  "start": {
                    "column": 23,
                    "line": 31
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  688,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 31
                  },
                  "start": {
                    "column": 19,
                    "line": 31
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                682,
                695
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                700,
                704
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 31
                },
                "start": {
                  "column": 31,
                  "line": 31
                }
              }
            },
            "range": [
              681,
              704
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 31
              },
              "start": {
                "column": 12,
                "line": 31
              }
            }
          },
          "range": [
            675,
            704
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        669,
        705
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "p07",
            "optional": false,
            "range": [
              712,
              715
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  718,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 32
                  },
                  "start": {
                    "column": 12,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  726,
                  730
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 32
                  },
                  "start": {
                    "column": 20,
                    "line": 32
                  }
                }
              },
              "range": [
                718,
                730
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 32
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                734,
                738
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 32
                },
                "start": {
                  "column": 28,
                  "line": 32
                }
              }
            },
            "range": [
              718,
              738
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 32
              },
              "start": {
                "column": 12,
                "line": 32
              }
            }
          },
          "range": [
            712,
            738
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        706,
        739
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "p08",
            "optional": false,
            "range": [
              746,
              749
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  752,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 33
                  },
                  "start": {
                    "column": 12,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  760,
                  763
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                }
              },
              "range": [
                752,
                763
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                767,
                771
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 33
                },
                "start": {
                  "column": 27,
                  "line": 33
                }
              }
            },
            "range": [
              752,
              771
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 33
              },
              "start": {
                "column": 12,
                "line": 33
              }
            }
          },
          "range": [
            746,
            771
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        740,
        772
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "p09",
            "optional": false,
            "range": [
              779,
              782
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  785,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    807,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 34
                    },
                    "start": {
                      "column": 34,
                      "line": 34
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    800,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 34
                    },
                    "start": {
                      "column": 27,
                      "line": 34
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "range": [
                    794,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 34
                    },
                    "start": {
                      "column": 21,
                      "line": 34
                    }
                  }
                },
                "range": [
                  794,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                }
              },
              "range": [
                785,
                817
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                821,
                825
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 34
                },
                "start": {
                  "column": 48,
                  "line": 34
                }
              }
            },
            "range": [
              785,
              825
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 34
              },
              "start": {
                "column": 12,
                "line": 34
              }
            }
          },
          "range": [
            779,
            825
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        773,
        826
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 34
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
            "name": "p10",
            "optional": false,
            "range": [
              834,
              837
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  840,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 36
                  },
                  "start": {
                    "column": 12,
                    "line": 36
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  847,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 36
                  },
                  "start": {
                    "column": 19,
                    "line": 36
                  }
                }
              },
              "range": [
                840,
                851
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 36
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                855,
                856
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 27,
                  "line": 36
                }
              }
            },
            "range": [
              840,
              856
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 36
              },
              "start": {
                "column": 12,
                "line": 36
              }
            }
          },
          "range": [
            834,
            856
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        828,
        857
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "p11",
            "optional": false,
            "range": [
              864,
              867
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  870,
                  873
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 37
                  },
                  "start": {
                    "column": 12,
                    "line": 37
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  877,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 37
                  },
                  "start": {
                    "column": 19,
                    "line": 37
                  }
                }
              },
              "range": [
                870,
                881
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 12,
                  "line": 37
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                885,
                889
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 37
                },
                "start": {
                  "column": 27,
                  "line": 37
                }
              }
            },
            "range": [
              870,
              889
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 37
              },
              "start": {
                "column": 12,
                "line": 37
              }
            }
          },
          "range": [
            864,
            889
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        858,
        890
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "p12",
            "optional": false,
            "range": [
              897,
              900
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "range": [
                903,
                906
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 12,
                  "line": 38
                }
              }
            },
            "right": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  911,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 38
                  },
                  "start": {
                    "column": 20,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  919,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 38
                  },
                  "start": {
                    "column": 28,
                    "line": 38
                  }
                }
              },
              "range": [
                911,
                920
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 38
                },
                "start": {
                  "column": 20,
                  "line": 38
                }
              }
            },
            "range": [
              903,
              921
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 38
              },
              "start": {
                "column": 12,
                "line": 38
              }
            }
          },
          "range": [
            897,
            921
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        891,
        922
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "p13",
            "optional": false,
            "range": [
              929,
              932
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "range": [
                935,
                938
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 39
                },
                "start": {
                  "column": 12,
                  "line": 39
                }
              }
            },
            "right": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  943,
                  947
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 39
                  },
                  "start": {
                    "column": 20,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  951,
                  955
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 39
                  },
                  "start": {
                    "column": 28,
                    "line": 39
                  }
                }
              },
              "range": [
                943,
                955
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 39
                },
                "start": {
                  "column": 20,
                  "line": 39
                }
              }
            },
            "range": [
              935,
              956
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
            929,
            956
          ],
          "loc": {
            "end": {
              "column": 33,
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
        923,
        957
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "p14",
            "optional": false,
            "range": [
              964,
              967
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "range": [
                970,
                973
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              }
            },
            "right": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "LogicalExpression",
                "operator": "??",
                "left": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    978,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 40
                    },
                    "start": {
                      "column": 20,
                      "line": 40
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    986,
                    990
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
                "range": [
                  978,
                  990
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 40
                  },
                  "start": {
                    "column": 20,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  994,
                  998
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 40
                  },
                  "start": {
                    "column": 36,
                    "line": 40
                  }
                }
              },
              "range": [
                978,
                998
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 40
                },
                "start": {
                  "column": 20,
                  "line": 40
                }
              }
            },
            "range": [
              970,
              999
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 40
              },
              "start": {
                "column": 12,
                "line": 40
              }
            }
          },
          "range": [
            964,
            999
          ],
          "loc": {
            "end": {
              "column": 41,
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
        958,
        1000
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "p15",
            "optional": false,
            "range": [
              1007,
              1010
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  1013,
                  1016
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 41
                  },
                  "start": {
                    "column": 12,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1034,
                    1043
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 41
                    },
                    "start": {
                      "column": 33,
                      "line": 41
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1027,
                    1031
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 41
                    },
                    "start": {
                      "column": 26,
                      "line": 41
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "range": [
                    1021,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 41
                    },
                    "start": {
                      "column": 20,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1021,
                  1043
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 41
                  },
                  "start": {
                    "column": 20,
                    "line": 41
                  }
                }
              },
              "range": [
                1013,
                1044
              ],
              "loc": {
                "end": {
                  "column": 43,
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
              "raw": "null",
              "value": null,
              "range": [
                1048,
                1052
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 41
                },
                "start": {
                  "column": 47,
                  "line": 41
                }
              }
            },
            "range": [
              1013,
              1052
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 41
              },
              "start": {
                "column": 12,
                "line": 41
              }
            }
          },
          "range": [
            1007,
            1052
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1001,
        1053
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "p16",
            "optional": false,
            "range": [
              1060,
              1063
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  1066,
                  1069
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 42
                  },
                  "start": {
                    "column": 12,
                    "line": 42
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1073,
                  1074
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 42
                  },
                  "start": {
                    "column": 19,
                    "line": 42
                  }
                }
              },
              "range": [
                1066,
                1074
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 42
                },
                "start": {
                  "column": 12,
                  "line": 42
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1078,
                1079
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 42
                },
                "start": {
                  "column": 24,
                  "line": 42
                }
              }
            },
            "range": [
              1066,
              1079
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 42
              },
              "start": {
                "column": 12,
                "line": 42
              }
            }
          },
          "range": [
            1060,
            1079
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1054,
        1080
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "p17",
            "optional": false,
            "range": [
              1087,
              1090
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "range": [
                  1093,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 43
                  },
                  "start": {
                    "column": 12,
                    "line": 43
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1111,
                    1112
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 43
                    },
                    "start": {
                      "column": 30,
                      "line": 43
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1107,
                    1108
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 43
                    },
                    "start": {
                      "column": 26,
                      "line": 43
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "range": [
                    1101,
                    1104
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 43
                    },
                    "start": {
                      "column": 20,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1101,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 43
                  },
                  "start": {
                    "column": 20,
                    "line": 43
                  }
                }
              },
              "range": [
                1093,
                1113
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 43
                },
                "start": {
                  "column": 12,
                  "line": 43
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                1117,
                1118
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 43
                },
                "start": {
                  "column": 36,
                  "line": 43
                }
              }
            },
            "range": [
              1093,
              1118
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 43
              },
              "start": {
                "column": 12,
                "line": 43
              }
            }
          },
          "range": [
            1087,
            1118
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1081,
        1119
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "p21",
            "optional": false,
            "range": [
              1127,
              1130
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "LogicalExpression",
                "operator": "??",
                "left": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1133,
                    1137
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1141,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 45
                    },
                    "start": {
                      "column": 20,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1133,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 45
                  },
                  "start": {
                    "column": 12,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  1149,
                  1153
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 45
                  },
                  "start": {
                    "column": 28,
                    "line": 45
                  }
                }
              },
              "range": [
                1133,
                1153
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 45
                },
                "start": {
                  "column": 12,
                  "line": 45
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1157,
                1161
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 45
                },
                "start": {
                  "column": 36,
                  "line": 45
                }
              }
            },
            "range": [
              1133,
              1161
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 45
              },
              "start": {
                "column": 12,
                "line": 45
              }
            }
          },
          "range": [
            1127,
            1161
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1121,
        1162
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "p22",
            "optional": false,
            "range": [
              1169,
              1172
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  1175,
                  1179
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 46
                  },
                  "start": {
                    "column": 12,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1183,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 46
                  },
                  "start": {
                    "column": 20,
                    "line": 46
                  }
                }
              },
              "range": [
                1175,
                1184
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 46
                },
                "start": {
                  "column": 12,
                  "line": 46
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1188,
                1189
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 46
                },
                "start": {
                  "column": 25,
                  "line": 46
                }
              }
            },
            "range": [
              1175,
              1189
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 46
              },
              "start": {
                "column": 12,
                "line": 46
              }
            }
          },
          "range": [
            1169,
            1189
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1163,
        1190
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "p23",
            "optional": false,
            "range": [
              1197,
              1200
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "??",
              "left": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  1203,
                  1207
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 47
                  },
                  "start": {
                    "column": 12,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1222,
                    1223
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 47
                    },
                    "start": {
                      "column": 31,
                      "line": 47
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1218,
                    1219
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 47
                    },
                    "start": {
                      "column": 27,
                      "line": 47
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "range": [
                    1212,
                    1215
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 47
                    },
                    "start": {
                      "column": 21,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1212,
                  1223
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
                1203,
                1224
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1228,
                1229
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 47
                },
                "start": {
                  "column": 37,
                  "line": 47
                }
              }
            },
            "range": [
              1203,
              1229
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 47
              },
              "start": {
                "column": 12,
                "line": 47
              }
            }
          },
          "range": [
            1197,
            1229
          ],
          "loc": {
            "end": {
              "column": 38,
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
        1191,
        1230
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1276,
          1279
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 50
          },
          "start": {
            "column": 18,
            "line": 50
          }
        }
      },
      "test": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            1265,
            1267
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 50
            },
            "start": {
              "column": 7,
              "line": 50
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1271,
            1274
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 50
            },
            "start": {
              "column": 13,
              "line": 50
            }
          }
        },
        "range": [
          1265,
          1274
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 50
          },
          "start": {
            "column": 7,
            "line": 50
          }
        }
      },
      "range": [
        1258,
        1279
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1309,
          1312
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 51
          },
          "start": {
            "column": 29,
            "line": 51
          }
        }
      },
      "test": {
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            1287,
            1289
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 51
            },
            "start": {
              "column": 7,
              "line": 51
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "range": [
            1300,
            1307
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 51
            },
            "start": {
              "column": 20,
              "line": 51
            }
          }
        },
        "range": [
          1287,
          1307
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 51
          },
          "start": {
            "column": 7,
            "line": 51
          }
        }
      },
      "range": [
        1280,
        1312
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1333,
          1336
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 52
          },
          "start": {
            "column": 20,
            "line": 52
          }
        }
      },
      "test": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            1327,
            1329
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 52
            },
            "start": {
              "column": 14,
              "line": 52
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1322,
            1325
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 52
            },
            "start": {
              "column": 9,
              "line": 52
            }
          }
        },
        "range": [
          1321,
          1330
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 52
          },
          "start": {
            "column": 8,
            "line": 52
          }
        }
      },
      "range": [
        1313,
        1336
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1352,
          1355
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 53
          },
          "start": {
            "column": 15,
            "line": 53
          }
        }
      },
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          1346,
          1348
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 53
          }
        }
      },
      "range": [
        1337,
        1355
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 55
                },
                "start": {
                  "column": 16,
                  "line": 55
                }
              },
              "range": [
                1373,
                1378
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1375,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 18,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1369,
              1378
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 55
              },
              "start": {
                "column": 12,
                "line": 55
              }
            }
          },
          "init": null,
          "range": [
            1369,
            1378
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 55
            },
            "start": {
              "column": 12,
              "line": 55
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1357,
        1379
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1410,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 58
                  },
                  "start": {
                    "column": 13,
                    "line": 58
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  1418,
                  1427
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 58
                  },
                  "start": {
                    "column": 21,
                    "line": 58
                  }
                }
              },
              "range": [
                1410,
                1427
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 58
                },
                "start": {
                  "column": 13,
                  "line": 58
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1432,
                  1433
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 58
                  },
                  "start": {
                    "column": 35,
                    "line": 58
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1436,
                  1440
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 58
                  },
                  "start": {
                    "column": 39,
                    "line": 58
                  }
                }
              },
              "range": [
                1432,
                1440
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 58
                },
                "start": {
                  "column": 35,
                  "line": 58
                }
              }
            },
            "range": [
              1409,
              1440
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 58
              },
              "start": {
                "column": 12,
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
            "name": "console",
            "optional": false,
            "range": [
              1397,
              1404
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 58
              },
              "start": {
                "column": 0,
                "line": 58
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              1405,
              1408
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
          },
          "range": [
            1397,
            1408
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 58
            },
            "start": {
              "column": 0,
              "line": 58
            }
          }
        },
        "optional": false,
        "range": [
          1397,
          1441
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 58
          },
          "start": {
            "column": 0,
            "line": 58
          }
        }
      },
      "range": [
        1397,
        1442
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
              "operator": "??",
              "left": {
                "type": "ThisExpression",
                "range": [
                  1516,
                  1520
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 62
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1524,
                  1525
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 62
                  },
                  "start": {
                    "column": 19,
                    "line": 62
                  }
                }
              },
              "range": [
                1516,
                1525
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 62
                },
                "start": {
                  "column": 11,
                  "line": 62
                }
              }
            },
            "range": [
              1509,
              1526
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
          }
        ],
        "range": [
          1483,
          1528
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 39,
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
        "name": "foo",
        "optional": false,
        "range": [
          1453,
          1456
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
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 60
              },
              "start": {
                "column": 17,
                "line": 60
              }
            },
            "range": [
              1461,
              1481
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "range": [
                      1463,
                      1469
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 60
                      },
                      "start": {
                        "column": 19,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1463,
                    1469
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 60
                    },
                    "start": {
                      "column": 19,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1472,
                    1481
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 60
                    },
                    "start": {
                      "column": 28,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                1463,
                1481
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 60
                },
                "start": {
                  "column": 19,
                  "line": 60
                }
              }
            }
          },
          "range": [
            1457,
            1481
          ],
          "loc": {
            "end": {
              "column": 37,
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
        1444,
        1528
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
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
                "name": "maybe",
                "optional": false,
                "range": [
                  1596,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 67
                  },
                  "start": {
                    "column": 8,
                    "line": 67
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1604,
                    1608
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 67
                    },
                    "start": {
                      "column": 16,
                      "line": 67
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1612,
                          1616
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 67
                          },
                          "start": {
                            "column": 24,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1612,
                        1616
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 67
                        },
                        "start": {
                          "column": 24,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        1619,
                        1623
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 67
                        },
                        "start": {
                          "column": 31,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "range": [
                    1612,
                    1623
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 67
                    },
                    "start": {
                      "column": 24,
                      "line": 67
                    }
                  }
                },
                "range": [
                  1604,
                  1623
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 67
                  },
                  "start": {
                    "column": 16,
                    "line": 67
                  }
                }
              },
              "range": [
                1596,
                1623
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 67
                },
                "start": {
                  "column": 8,
                  "line": 67
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            1590,
            1624
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 67
            },
            "start": {
              "column": 2,
              "line": 67
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
                "name": "i",
                "optional": false,
                "range": [
                  1631,
                  1632
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 68
                  },
                  "start": {
                    "column": 6,
                    "line": 68
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1635,
                  1636
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 68
                  },
                  "start": {
                    "column": 10,
                    "line": 68
                  }
                }
              },
              "range": [
                1631,
                1636
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 68
                },
                "start": {
                  "column": 6,
                  "line": 68
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1627,
            1637
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 68
            },
            "start": {
              "column": 2,
              "line": 68
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
                "name": "d",
                "optional": false,
                "range": [
                  1646,
                  1647
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              },
              "init": {
                "type": "LogicalExpression",
                "operator": "??",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          1651,
                          1652
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 69
                          },
                          "start": {
                            "column": 13,
                            "line": 69
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1651,
                        1654
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 69
                        },
                        "start": {
                          "column": 13,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "range": [
                        1656,
                        1661
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 69
                        },
                        "start": {
                          "column": 18,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "range": [
                    1651,
                    1661
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 69
                    },
                    "start": {
                      "column": 13,
                      "line": 69
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1666,
                    1670
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 69
                    },
                    "start": {
                      "column": 28,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1650,
                  1670
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 69
                  },
                  "start": {
                    "column": 12,
                    "line": 69
                  }
                }
              },
              "range": [
                1646,
                1670
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 69
                },
                "start": {
                  "column": 8,
                  "line": 69
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            1640,
            1671
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 69
            },
            "start": {
              "column": 2,
              "line": 69
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
                "name": "e",
                "optional": false,
                "range": [
                  1686,
                  1687
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              "init": {
                "type": "LogicalExpression",
                "operator": "??",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          1691,
                          1692
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 70
                          },
                          "start": {
                            "column": 13,
                            "line": 70
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1691,
                        1694
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 70
                        },
                        "start": {
                          "column": 13,
                          "line": 70
                        }
                      }
                    },
                    {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          1696,
                          1697
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 18,
                            "line": 70
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1696,
                        1699
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 70
                        },
                        "start": {
                          "column": 18,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1691,
                    1699
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 70
                    },
                    "start": {
                      "column": 13,
                      "line": 70
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1704,
                    1708
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 70
                    },
                    "start": {
                      "column": 26,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1690,
                  1708
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 70
                  },
                  "start": {
                    "column": 12,
                    "line": 70
                  }
                }
              },
              "range": [
                1686,
                1708
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 70
                },
                "start": {
                  "column": 8,
                  "line": 70
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            1680,
            1709
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 70
            },
            "start": {
              "column": 2,
              "line": 70
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
                  1727,
                  1728
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "init": {
                "type": "LogicalExpression",
                "operator": "??",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "range": [
                        1732,
                        1737
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 71
                        },
                        "start": {
                          "column": 13,
                          "line": 71
                        }
                      }
                    },
                    {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          1739,
                          1740
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 71
                          },
                          "start": {
                            "column": 20,
                            "line": 71
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1739,
                        1742
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 71
                        },
                        "start": {
                          "column": 20,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "range": [
                    1732,
                    1742
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 71
                    },
                    "start": {
                      "column": 13,
                      "line": 71
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1747,
                    1751
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 71
                    },
                    "start": {
                      "column": 28,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1731,
                  1751
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 71
                  },
                  "start": {
                    "column": 12,
                    "line": 71
                  }
                }
              },
              "range": [
                1727,
                1751
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 71
                },
                "start": {
                  "column": 8,
                  "line": 71
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            1721,
            1752
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 71
            },
            "start": {
              "column": 2,
              "line": 71
            }
          }
        }
      ],
      "range": [
        1586,
        1763
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1829,
          1886
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1833,
                1844
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 76
                },
                "start": {
                  "column": 2,
                  "line": 76
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1844,
                1884
              ],
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1859,
                            1860
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 77
                            },
                            "start": {
                              "column": 10,
                              "line": 77
                            }
                          }
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "operator": "??",
                          "left": {
                            "type": "MetaProperty",
                            "meta": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "range": [
                                1863,
                                1866
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 77
                                },
                                "start": {
                                  "column": 14,
                                  "line": 77
                                }
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "range": [
                                1867,
                                1873
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 77
                                },
                                "start": {
                                  "column": 18,
                                  "line": 77
                                }
                              }
                            },
                            "range": [
                              1863,
                              1873
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 77
                              },
                              "start": {
                                "column": 14,
                                "line": 77
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "32",
                            "value": 32,
                            "range": [
                              1877,
                              1879
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 77
                              },
                              "start": {
                                "column": 28,
                                "line": 77
                              }
                            }
                          },
                          "range": [
                            1863,
                            1879
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 77
                            },
                            "start": {
                              "column": 14,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          1859,
                          1879
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 77
                          },
                          "start": {
                            "column": 10,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1853,
                      1880
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 77
                      },
                      "start": {
                        "column": 4,
                        "line": 77
                      }
                    }
                  }
                ],
                "range": [
                  1847,
                  1884
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 78
                  },
                  "start": {
                    "column": 16,
                    "line": 76
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
                  "line": 78
                },
                "start": {
                  "column": 13,
                  "line": 76
                }
              }
            },
            "range": [
              1833,
              1884
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 78
              },
              "start": {
                "column": 2,
                "line": 76
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 8,
            "line": 75
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          1827,
          1828
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 75
          },
          "start": {
            "column": 6,
            "line": 75
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1821,
        1886
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 75
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
        "name": "tag",
        "optional": false,
        "range": [
          1961,
          1964
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 82
          },
          "start": {
            "column": 17,
            "line": 82
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 83
              },
              "start": {
                "column": 9,
                "line": 83
              }
            },
            "range": [
              1978,
              2000
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "range": [
                  1980,
                  2000
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 83
                  },
                  "start": {
                    "column": 11,
                    "line": 83
                  }
                }
              },
              "range": [
                1980,
                2000
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 83
                },
                "start": {
                  "column": 11,
                  "line": 83
                }
              }
            }
          },
          "range": [
            1971,
            2000
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 83
            },
            "start": {
              "column": 2,
              "line": 83
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "range": [
              2007,
              2013
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 84
              },
              "start": {
                "column": 5,
                "line": 84
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 84
              },
              "start": {
                "column": 11,
                "line": 84
              }
            },
            "range": [
              2013,
              2023
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  2015,
                  2021
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 84
                  },
                  "start": {
                    "column": 13,
                    "line": 84
                  }
                }
              },
              "range": [
                2015,
                2023
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 84
                },
                "start": {
                  "column": 13,
                  "line": 84
                }
              }
            }
          },
          "range": [
            2004,
            2023
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 84
            },
            "start": {
              "column": 2,
              "line": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 11,
            "line": 85
          },
          "start": {
            "column": 1,
            "line": 85
          }
        },
        "range": [
          2025,
          2035
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2027,
                  2028
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 85
                  },
                  "start": {
                    "column": 3,
                    "line": 85
                  }
                }
              },
              "range": [
                2027,
                2028
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 85
                },
                "start": {
                  "column": 3,
                  "line": 85
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                2031,
                2035
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 85
                },
                "start": {
                  "column": 7,
                  "line": 85
                }
              }
            }
          ],
          "range": [
            2027,
            2035
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 85
            },
            "start": {
              "column": 3,
              "line": 85
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 82
          },
          "start": {
            "column": 20,
            "line": 82
          }
        },
        "range": [
          1964,
          1967
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
                1965,
                1966
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 82
                },
                "start": {
                  "column": 21,
                  "line": 82
                }
              }
            },
            "out": false,
            "range": [
              1965,
              1966
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 82
              },
              "start": {
                "column": 21,
                "line": 82
              }
            }
          }
        ]
      },
      "range": [
        1944,
        2036
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "??",
        "left": {
          "type": "TaggedTemplateExpression",
          "quasi": {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2047,
                  2048
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 87
                  },
                  "start": {
                    "column": 9,
                    "line": 87
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "foo",
                  "raw": "foo"
                },
                "range": [
                  2041,
                  2047
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 87
                  },
                  "start": {
                    "column": 3,
                    "line": 87
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
                  2048,
                  2050
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 87
                  },
                  "start": {
                    "column": 10,
                    "line": 87
                  }
                }
              }
            ],
            "range": [
              2041,
              2050
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 87
              },
              "start": {
                "column": 3,
                "line": 87
              }
            }
          },
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "range": [
              2038,
              2041
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 87
              },
              "start": {
                "column": 0,
                "line": 87
              }
            }
          },
          "range": [
            2038,
            2050
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 87
            },
            "start": {
              "column": 0,
              "line": 87
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "32",
          "value": 32,
          "range": [
            2054,
            2056
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 87
            },
            "start": {
              "column": 16,
              "line": 87
            }
          }
        },
        "range": [
          2038,
          2056
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 87
          },
          "start": {
            "column": 0,
            "line": 87
          }
        }
      },
      "range": [
        2038,
        2057
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "??",
        "left": {
          "type": "TemplateLiteral",
          "expressions": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                2071,
                2072
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
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "foo",
                "raw": "foo"
              },
              "range": [
                2065,
                2071
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 89
                },
                "start": {
                  "column": 0,
                  "line": 89
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
                2072,
                2074
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 89
                },
                "start": {
                  "column": 7,
                  "line": 89
                }
              }
            }
          ],
          "range": [
            2065,
            2074
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 89
            },
            "start": {
              "column": 0,
              "line": 89
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "32",
          "value": 32,
          "range": [
            2078,
            2080
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 89
            },
            "start": {
              "column": 13,
              "line": 89
            }
          }
        },
        "range": [
          2065,
          2080
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 89
          },
          "start": {
            "column": 0,
            "line": 89
          }
        }
      },
      "range": [
        2065,
        2081
      ],
      "loc": {
        "end": {
          "column": 16,
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
        "type": "LogicalExpression",
        "operator": "??",
        "left": {
          "type": "TemplateLiteral",
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "foo",
                "raw": "foo"
              },
              "range": [
                2091,
                2096
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 0,
                  "line": 90
                }
              }
            }
          ],
          "range": [
            2091,
            2096
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 90
            },
            "start": {
              "column": 0,
              "line": 90
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "32",
          "value": 32,
          "range": [
            2100,
            2102
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 90
            },
            "start": {
              "column": 9,
              "line": 90
            }
          }
        },
        "range": [
          2091,
          2102
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
      "range": [
        2091,
        2103
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 91
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
