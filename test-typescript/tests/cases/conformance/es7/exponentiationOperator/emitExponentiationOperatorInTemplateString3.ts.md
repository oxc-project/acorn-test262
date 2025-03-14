__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    896
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
            "name": "t1",
            "optional": false,
            "range": [
              22,
              24
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              27,
              29
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            22,
            29
          ],
          "loc": {
            "end": {
              "column": 11,
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
      "kind": "var",
      "range": [
        18,
        30
      ],
      "loc": {
        "end": {
          "column": 12,
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
            "name": "t2",
            "optional": false,
            "range": [
              35,
              37
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              40,
              42
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            35,
            42
          ],
          "loc": {
            "end": {
              "column": 11,
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
      "kind": "var",
      "range": [
        31,
        43
      ],
      "loc": {
        "end": {
          "column": 12,
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
            "name": "s",
            "optional": false,
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            48,
            49
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        44,
        50
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                76,
                78
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 3,
                  "line": 8
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                82,
                84
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
            "range": [
              76,
              84
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 3,
                "line": 8
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              73,
              76
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              84,
              92
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
          }
        ],
        "range": [
          73,
          92
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
      "range": [
        73,
        93
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                97,
                99
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 3,
                  "line": 9
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  103,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  109,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              },
              "range": [
                103,
                111
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "range": [
              97,
              111
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              94,
              97
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              111,
              119
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            }
          }
        ],
        "range": [
          94,
          119
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        94,
        120
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                124,
                126
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 3,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  129,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  135,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              "range": [
                129,
                137
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              124,
              137
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              121,
              124
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              137,
              145
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          }
        ],
        "range": [
          121,
          145
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        121,
        146
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  150,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 3,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  156,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "range": [
                150,
                158
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 3,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                161,
                163
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              150,
              163
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              147,
              150
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              163,
              171
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          }
        ],
        "range": [
          147,
          171
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        147,
        172
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  176,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 3,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    181,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    187,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "range": [
                  181,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                176,
                189
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 3,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                192,
                194
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            },
            "range": [
              176,
              194
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 3,
                "line": 12
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              173,
              176
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              195,
              203
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          }
        ],
        "range": [
          173,
          203
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        173,
        204
      ],
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  216,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    222,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    228,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 23,
                      "line": 13
                    }
                  }
                },
                "range": [
                  222,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 17,
                    "line": 13
                  }
                }
              },
              "range": [
                216,
                230
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              208,
              231
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 13
              },
              "start": {
                "column": 3,
                "line": 13
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              205,
              208
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              232,
              240
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 13
              },
              "start": {
                "column": 27,
                "line": 13
              }
            }
          }
        ],
        "range": [
          205,
          240
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        205,
        241
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
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
                245,
                246
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 14
                },
                "start": {
                  "column": 3,
                  "line": 14
                }
              }
            },
            "right": {
              "type": "UnaryExpression",
              "argument": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    257,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "**",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "range": [
                      263,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      269,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    263,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                },
                "range": [
                  257,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                249,
                272
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              }
            },
            "range": [
              245,
              272
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 3,
                "line": 14
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              242,
              245
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              273,
              281
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 31,
                "line": 14
              }
            }
          }
        ],
        "range": [
          242,
          281
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        242,
        282
      ],
      "loc": {
        "end": {
          "column": 40,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                287,
                289
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 3,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                293,
                295
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "range": [
              287,
              295
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 16
              },
              "start": {
                "column": 3,
                "line": 16
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                298,
                300
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 14,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                304,
                306
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "range": [
              298,
              306
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              284,
              287
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 16
              },
              "start": {
                "column": 0,
                "line": 16
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              295,
              298
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              306,
              314
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 22,
                "line": 16
              }
            }
          }
        ],
        "range": [
          284,
          314
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        284,
        315
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                319,
                321
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 3,
                  "line": 17
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  325,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  331,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              },
              "range": [
                325,
                333
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "range": [
              319,
              333
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 17
              },
              "start": {
                "column": 3,
                "line": 17
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                336,
                338
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  342,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  348,
                  350
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
              },
              "range": [
                342,
                350
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 26,
                  "line": 17
                }
              }
            },
            "range": [
              336,
              350
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 20,
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              316,
              319
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              333,
              336
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 17,
                "line": 17
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              350,
              358
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 17
              },
              "start": {
                "column": 34,
                "line": 17
              }
            }
          }
        ],
        "range": [
          316,
          358
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        316,
        359
      ],
      "loc": {
        "end": {
          "column": 43,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                363,
                365
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 3,
                  "line": 18
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  368,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  374,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
                    "line": 18
                  }
                }
              },
              "range": [
                368,
                376
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              363,
              376
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 3,
                "line": 18
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                379,
                381
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  384,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  390,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 18
                  },
                  "start": {
                    "column": 30,
                    "line": 18
                  }
                }
              },
              "range": [
                384,
                392
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 18
                },
                "start": {
                  "column": 24,
                  "line": 18
                }
              }
            },
            "range": [
              379,
              392
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 18
              },
              "start": {
                "column": 19,
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              360,
              363
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              376,
              379
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              392,
              400
            ],
            "loc": {
              "end": {
                "column": 40,
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
          360,
          400
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        360,
        401
      ],
      "loc": {
        "end": {
          "column": 41,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  405,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 3,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  411,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "range": [
                405,
                413
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 3,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                416,
                418
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "range": [
              405,
              418
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 19
              },
              "start": {
                "column": 3,
                "line": 19
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  421,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  427,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              },
              "range": [
                421,
                429
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                432,
                434
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 19
                },
                "start": {
                  "column": 30,
                  "line": 19
                }
              }
            },
            "range": [
              421,
              434
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 19
              },
              "start": {
                "column": 19,
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              402,
              405
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              418,
              421
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 16,
                "line": 19
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              434,
              442
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 19
              },
              "start": {
                "column": 32,
                "line": 19
              }
            }
          }
        ],
        "range": [
          402,
          442
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        402,
        443
      ],
      "loc": {
        "end": {
          "column": 41,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  447,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 3,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    452,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    458,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                },
                "range": [
                  452,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "range": [
                447,
                460
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 3,
                  "line": 20
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                463,
                465
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 20
                }
              }
            },
            "range": [
              447,
              465
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 3,
                "line": 20
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  468,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    473,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 20
                    },
                    "start": {
                      "column": 29,
                      "line": 20
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    479,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 20
                    },
                    "start": {
                      "column": 35,
                      "line": 20
                    }
                  }
                },
                "range": [
                  473,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 20
                  },
                  "start": {
                    "column": 29,
                    "line": 20
                  }
                }
              },
              "range": [
                468,
                481
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                484,
                486
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 40,
                  "line": 20
                }
              }
            },
            "range": [
              468,
              486
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 20
              },
              "start": {
                "column": 24,
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              444,
              447
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              465,
              468
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              486,
              494
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 20
              },
              "start": {
                "column": 42,
                "line": 20
              }
            }
          }
        ],
        "range": [
          444,
          494
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        444,
        495
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  507,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    513,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 17,
                      "line": 21
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    519,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 21
                    },
                    "start": {
                      "column": 23,
                      "line": 21
                    }
                  }
                },
                "range": [
                  513,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              },
              "range": [
                507,
                521
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              499,
              522
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 3,
                "line": 21
              }
            }
          },
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  534,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 21
                  },
                  "start": {
                    "column": 38,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    540,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 21
                    },
                    "start": {
                      "column": 44,
                      "line": 21
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    546,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 21
                    },
                    "start": {
                      "column": 50,
                      "line": 21
                    }
                  }
                },
                "range": [
                  540,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 21
                  },
                  "start": {
                    "column": 44,
                    "line": 21
                  }
                }
              },
              "range": [
                534,
                548
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 21
                },
                "start": {
                  "column": 38,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              526,
              549
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 21
              },
              "start": {
                "column": 30,
                "line": 21
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              496,
              499
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              523,
              526
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 27,
                "line": 21
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "range": [
              550,
              558
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 21
              },
              "start": {
                "column": 54,
                "line": 21
              }
            }
          }
        ],
        "range": [
          496,
          558
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        496,
        559
      ],
      "loc": {
        "end": {
          "column": 63,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                564,
                566
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 3,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                570,
                572
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "range": [
              564,
              572
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 3,
                "line": 23
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                588,
                590
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                594,
                596
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 23
                },
                "start": {
                  "column": 33,
                  "line": 23
                }
              }
            },
            "range": [
              588,
              596
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 23
              },
              "start": {
                "column": 27,
                "line": 23
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              561,
              564
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              572,
              588
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "range": [
              596,
              601
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 23
              },
              "start": {
                "column": 35,
                "line": 23
              }
            }
          }
        ],
        "range": [
          561,
          601
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        561,
        602
      ],
      "loc": {
        "end": {
          "column": 41,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                606,
                608
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 3,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  612,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 24
                  },
                  "start": {
                    "column": 9,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  618,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 15,
                    "line": 24
                  }
                }
              },
              "range": [
                612,
                620
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              606,
              620
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 24
              },
              "start": {
                "column": 3,
                "line": 24
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                636,
                638
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 24
                },
                "start": {
                  "column": 33,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  642,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 24
                  },
                  "start": {
                    "column": 39,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  648,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 24
                  },
                  "start": {
                    "column": 45,
                    "line": 24
                  }
                }
              },
              "range": [
                642,
                650
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 24
                },
                "start": {
                  "column": 39,
                  "line": 24
                }
              }
            },
            "range": [
              636,
              650
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 24
              },
              "start": {
                "column": 33,
                "line": 24
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              603,
              606
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              620,
              636
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 17,
                "line": 24
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "range": [
              650,
              655
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 24
              },
              "start": {
                "column": 47,
                "line": 24
              }
            }
          }
        ],
        "range": [
          603,
          655
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        603,
        656
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                660,
                662
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 3,
                  "line": 25
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  665,
                  667
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  671,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              },
              "range": [
                665,
                673
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "range": [
              660,
              673
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 25
              },
              "start": {
                "column": 3,
                "line": 25
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                689,
                691
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 25
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  694,
                  696
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 25
                  },
                  "start": {
                    "column": 37,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  700,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 25
                  },
                  "start": {
                    "column": 43,
                    "line": 25
                  }
                }
              },
              "range": [
                694,
                702
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 25
                },
                "start": {
                  "column": 37,
                  "line": 25
                }
              }
            },
            "range": [
              689,
              702
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 25
              },
              "start": {
                "column": 32,
                "line": 25
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              657,
              660
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              673,
              689
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "range": [
              702,
              707
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 25
              },
              "start": {
                "column": 45,
                "line": 25
              }
            }
          }
        ],
        "range": [
          657,
          707
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        657,
        708
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  712,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 3,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  718,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 26
                  },
                  "start": {
                    "column": 9,
                    "line": 26
                  }
                }
              },
              "range": [
                712,
                720
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 3,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                723,
                725
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 14,
                  "line": 26
                }
              }
            },
            "range": [
              712,
              725
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 26
              },
              "start": {
                "column": 3,
                "line": 26
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  741,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  747,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 26
                  },
                  "start": {
                    "column": 38,
                    "line": 26
                  }
                }
              },
              "range": [
                741,
                749
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 26
                },
                "start": {
                  "column": 32,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                752,
                754
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 26
                },
                "start": {
                  "column": 43,
                  "line": 26
                }
              }
            },
            "range": [
              741,
              754
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 26
              },
              "start": {
                "column": 32,
                "line": 26
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              709,
              712
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              725,
              741
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 26
              },
              "start": {
                "column": 16,
                "line": 26
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "range": [
              754,
              759
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 26
              },
              "start": {
                "column": 45,
                "line": 26
              }
            }
          }
        ],
        "range": [
          709,
          759
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        709,
        760
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  764,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 3,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    769,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    775,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  }
                },
                "range": [
                  769,
                  777
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              "range": [
                764,
                777
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 27
                },
                "start": {
                  "column": 3,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                780,
                782
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 19,
                  "line": 27
                }
              }
            },
            "range": [
              764,
              782
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 27
              },
              "start": {
                "column": 3,
                "line": 27
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  798,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 27
                  },
                  "start": {
                    "column": 37,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    803,
                    805
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 27
                    },
                    "start": {
                      "column": 42,
                      "line": 27
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    809,
                    811
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 27
                    },
                    "start": {
                      "column": 48,
                      "line": 27
                    }
                  }
                },
                "range": [
                  803,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 27
                  },
                  "start": {
                    "column": 42,
                    "line": 27
                  }
                }
              },
              "range": [
                798,
                811
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 27
                },
                "start": {
                  "column": 37,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                814,
                816
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 27
                },
                "start": {
                  "column": 53,
                  "line": 27
                }
              }
            },
            "range": [
              798,
              816
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 27
              },
              "start": {
                "column": 37,
                "line": 27
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              761,
              764
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              782,
              798
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 27
              },
              "start": {
                "column": 21,
                "line": 27
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "range": [
              816,
              821
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 27
              },
              "start": {
                "column": 55,
                "line": 27
              }
            }
          }
        ],
        "range": [
          761,
          821
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        761,
        822
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  834,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    840,
                    842
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 17,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    846,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 23,
                      "line": 28
                    }
                  }
                },
                "range": [
                  840,
                  848
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 17,
                    "line": 28
                  }
                }
              },
              "range": [
                834,
                848
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              826,
              849
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 3,
                "line": 28
              }
            }
          },
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  874,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 28
                  },
                  "start": {
                    "column": 51,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    880,
                    882
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 28
                    },
                    "start": {
                      "column": 57,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    886,
                    888
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 28
                    },
                    "start": {
                      "column": 63,
                      "line": 28
                    }
                  }
                },
                "range": [
                  880,
                  888
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 28
                  },
                  "start": {
                    "column": 57,
                    "line": 28
                  }
                }
              },
              "range": [
                874,
                888
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 28
                },
                "start": {
                  "column": 51,
                  "line": 28
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              866,
              889
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 28
              },
              "start": {
                "column": 43,
                "line": 28
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              823,
              826
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              850,
              866
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 28
              },
              "start": {
                "column": 27,
                "line": 28
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "range": [
              889,
              894
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 28
              },
              "start": {
                "column": 66,
                "line": 28
              }
            }
          }
        ],
        "range": [
          823,
          894
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        823,
        895
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
