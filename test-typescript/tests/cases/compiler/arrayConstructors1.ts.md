__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    184
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                15
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    7,
                    13
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 1
                    },
                    "start": {
                      "column": 7,
                      "line": 1
                    }
                  }
                },
                "range": [
                  7,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
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
            15
          ],
          "loc": {
            "end": {
              "column": 15,
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
      "kind": "var",
      "range": [
        0,
        16
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
          "name": "x",
          "optional": false,
          "range": [
            17,
            18
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              25,
              30
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            21,
            33
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          17,
          33
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        17,
        34
      ],
      "loc": {
        "end": {
          "column": 17,
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
          "name": "x",
          "optional": false,
          "range": [
            35,
            36
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hi'",
              "value": "hi",
              "range": [
                49,
                53
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            {
              "type": "Literal",
              "raw": "'bye'",
              "value": "bye",
              "range": [
                55,
                60
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              43,
              48
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            39,
            61
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "range": [
          35,
          61
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
      "range": [
        35,
        62
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            64,
            65
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hi'",
              "value": "hi",
              "range": [
                86,
                90
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            {
              "type": "Literal",
              "raw": "'bye'",
              "value": "bye",
              "range": [
                92,
                97
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              72,
              77
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              77,
              85
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  78,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          "range": [
            68,
            98
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
        "range": [
          64,
          98
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        64,
        99
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                106,
                116
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    108,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  }
                },
                "range": [
                  108,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              105,
              116
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            105,
            116
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        101,
        117
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            118,
            119
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                132,
                133
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              126,
              131
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            122,
            134
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "range": [
          118,
          134
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        118,
        135
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            136,
            137
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                150,
                151
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
            },
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              144,
              149
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            140,
            154
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "range": [
          136,
          154
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        136,
        155
      ],
      "loc": {
        "end": {
          "column": 19,
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
          "name": "y",
          "optional": false,
          "range": [
            156,
            157
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                178,
                179
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
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              164,
              169
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              169,
              177
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  170,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          },
          "range": [
            160,
            183
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "range": [
          156,
          183
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        156,
        184
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 9
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
      "column": 28,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
