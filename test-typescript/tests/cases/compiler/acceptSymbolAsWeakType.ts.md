__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    313
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                15
              ],
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "range": [
                  9,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
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
                "type": "Literal",
                "raw": "'s'",
                "value": "s",
                "range": [
                  25,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
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
            "optional": false,
            "range": [
              18,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            6,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ws",
            "optional": false,
            "range": [
              38,
              40
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      56,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  55,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakSet",
              "optional": false,
              "range": [
                47,
                54
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              43,
              59
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "range": [
            38,
            59
          ],
          "loc": {
            "end": {
              "column": 27,
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
        32,
        60
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 7,
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
            "name": "ws",
            "optional": false,
            "range": [
              61,
              63
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "add",
            "optional": false,
            "range": [
              64,
              67
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 3,
                "line": 4
              }
            }
          },
          "range": [
            61,
            67
          ],
          "loc": {
            "end": {
              "column": 6,
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
          61,
          70
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        61,
        71
      ],
      "loc": {
        "end": {
          "column": 10,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              79,
              80
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 7,
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
            "name": "ws",
            "optional": false,
            "range": [
              72,
              74
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "has",
            "optional": false,
            "range": [
              75,
              78
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 3,
                "line": 5
              }
            }
          },
          "range": [
            72,
            78
          ],
          "loc": {
            "end": {
              "column": 6,
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
          72,
          81
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
      "range": [
        72,
        82
      ],
      "loc": {
        "end": {
          "column": 10,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              93,
              94
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 6
              },
              "start": {
                "column": 10,
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
            "name": "ws",
            "optional": false,
            "range": [
              83,
              85
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "delete",
            "optional": false,
            "range": [
              86,
              92
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 3,
                "line": 6
              }
            }
          },
          "range": [
            83,
            92
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
        "optional": false,
        "range": [
          83,
          95
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        83,
        96
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "wm",
            "optional": false,
            "range": [
              104,
              106
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          123,
                          124
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
                      {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          126,
                          131
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
                      }
                    ],
                    "range": [
                      122,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  121,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "range": [
                113,
                120
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              109,
              134
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          },
          "range": [
            104,
            134
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        98,
        135
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              143,
              144
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 7,
                "line": 9
              }
            }
          },
          {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              146,
              150
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 10,
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
            "name": "wm",
            "optional": false,
            "range": [
              136,
              138
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "set",
            "optional": false,
            "range": [
              139,
              142
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            136,
            142
          ],
          "loc": {
            "end": {
              "column": 6,
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
          136,
          151
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        136,
        152
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              160,
              161
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 7,
                "line": 10
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
            "name": "wm",
            "optional": false,
            "range": [
              153,
              155
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "has",
            "optional": false,
            "range": [
              156,
              159
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          },
          "range": [
            153,
            159
          ],
          "loc": {
            "end": {
              "column": 6,
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
          153,
          162
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
      "range": [
        153,
        163
      ],
      "loc": {
        "end": {
          "column": 10,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              171,
              172
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 7,
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
            "name": "wm",
            "optional": false,
            "range": [
              164,
              166
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "get",
            "optional": false,
            "range": [
              167,
              170
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          },
          "range": [
            164,
            170
          ],
          "loc": {
            "end": {
              "column": 6,
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
          164,
          173
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
      "range": [
        164,
        174
      ],
      "loc": {
        "end": {
          "column": 10,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              185,
              186
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 10,
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
            "name": "wm",
            "optional": false,
            "range": [
              175,
              177
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "delete",
            "optional": false,
            "range": [
              178,
              184
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 3,
                "line": 12
              }
            }
          },
          "range": [
            175,
            184
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
        "optional": false,
        "range": [
          175,
          187
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        175,
        188
      ],
      "loc": {
        "end": {
          "column": 13,
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
            "name": "wr",
            "optional": false,
            "range": [
              196,
              198
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  213,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 23,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakRef",
              "optional": false,
              "range": [
                205,
                212
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              201,
              215
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            196,
            215
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 14
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
        190,
        216
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "wr",
            "optional": false,
            "range": [
              217,
              219
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "deref",
            "optional": false,
            "range": [
              220,
              225
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 3,
                "line": 15
              }
            }
          },
          "range": [
            217,
            225
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          217,
          227
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        217,
        228
      ],
      "loc": {
        "end": {
          "column": 11,
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
            "name": "f",
            "optional": false,
            "range": [
              236,
              237
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    271,
                    273
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
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  265,
                  273
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FinalizationRegistry",
              "optional": false,
              "range": [
                244,
                264
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "range": [
              240,
              274
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "range": [
            236,
            274
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        230,
        275
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              287,
              288
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 18
              },
              "start": {
                "column": 11,
                "line": 18
              }
            }
          },
          {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              290,
              294
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
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
            "name": "f",
            "optional": false,
            "range": [
              276,
              277
            ],
            "loc": {
              "end": {
                "column": 1,
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
            "name": "register",
            "optional": false,
            "range": [
              278,
              286
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          },
          "range": [
            276,
            286
          ],
          "loc": {
            "end": {
              "column": 10,
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
          276,
          295
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        276,
        296
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              310,
              311
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
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
            "name": "f",
            "optional": false,
            "range": [
              297,
              298
            ],
            "loc": {
              "end": {
                "column": 1,
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
            "name": "unregister",
            "optional": false,
            "range": [
              299,
              309
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          "range": [
            297,
            309
          ],
          "loc": {
            "end": {
              "column": 12,
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
          297,
          312
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        297,
        313
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 19
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
      "column": 16,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
