__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    218
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
            "name": "sinOrCos",
            "optional": false,
            "range": [
              25,
              33
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
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
                    36,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
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
                    41,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                "range": [
                  36,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                36,
                49
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": ".5",
              "value": 0.5,
              "range": [
                52,
                54
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "range": [
              36,
              54
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            25,
            54
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        21,
        55
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "choice",
            "optional": false,
            "range": [
              60,
              66
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
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sinOrCos",
                "optional": false,
                "range": [
                  69,
                  77
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
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "range": [
                    81,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sin",
                  "optional": false,
                  "range": [
                    86,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 30,
                      "line": 4
                    }
                  }
                },
                "range": [
                  81,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "range": [
                69,
                89
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "range": [
                  93,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 41,
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
                "name": "cos",
                "optional": false,
                "range": [
                  98,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "range": [
                93,
                101
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 37,
                  "line": 4
                }
              }
            },
            "range": [
              69,
              101
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          "range": [
            60,
            101
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        56,
        102
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Math",
              "optional": false,
              "range": [
                111,
                115
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PI",
              "optional": false,
              "range": [
                116,
                118
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "range": [
              111,
              118
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            104,
            110
          ],
          "loc": {
            "end": {
              "column": 6,
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
          104,
          119
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        104,
        120
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    164,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          168,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "range": [
                          174,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        168,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          187,
                          188
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
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          189,
                          190
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 9
                          },
                          "start": {
                            "column": 33,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        187,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      168,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      194,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 9
                      },
                      "start": {
                        "column": 38,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    168,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  164,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              158,
              196
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "range": [
                206,
                207
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "range": [
              199,
              208
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          154,
          210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 32,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sq",
        "optional": false,
        "range": [
          131,
          133
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            },
            "range": [
              136,
              144
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                138,
                144
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            }
          },
          "range": [
            134,
            144
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 8
          },
          "start": {
            "column": 23,
            "line": 8
          }
        },
        "range": [
          145,
          153
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            147,
            153
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 25,
              "line": 8
            }
          }
        }
      },
      "range": [
        122,
        210
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              215,
              216
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 13
              },
              "start": {
                "column": 3,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "sq",
          "optional": false,
          "range": [
            212,
            214
          ],
          "loc": {
            "end": {
              "column": 2,
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
          212,
          217
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        212,
        218
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 6,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
