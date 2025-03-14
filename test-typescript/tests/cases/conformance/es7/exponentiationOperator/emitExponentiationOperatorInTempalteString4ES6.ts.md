__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    829
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  83,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                82,
                85
              ],
              "loc": {
                "end": {
                  "column": 12,
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
              85
            ],
            "loc": {
              "end": {
                "column": 12,
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
              85,
              93
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          }
        ],
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
      "range": [
        73,
        94
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    100,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 9
                    },
                    "start": {
                      "column": 5,
                      "line": 9
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  99,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  107,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              },
              "range": [
                98,
                109
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 3,
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
                112,
                114
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            },
            "range": [
              98,
              114
            ],
            "loc": {
              "end": {
                "column": 19,
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
              95,
              98
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
              114,
              122
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          }
        ],
        "range": [
          95,
          122
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
        95,
        123
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
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      131,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 7,
                        "line": 10
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    129,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  128,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  138,
                  140
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
                127,
                140
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
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                143,
                145
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "range": [
              127,
              145
            ],
            "loc": {
              "end": {
                "column": 21,
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
              124,
              127
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
              145,
              153
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          }
        ],
        "range": [
          124,
          153
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        124,
        154
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      160,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 11
                      },
                      "start": {
                        "column": 5,
                        "line": 11
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    160,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  159,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
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
                  169,
                  171
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
                158,
                171
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
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                174,
                176
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              158,
              176
            ],
            "loc": {
              "end": {
                "column": 21,
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
              155,
              158
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
              176,
              184
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
              }
            }
          }
        ],
        "range": [
          155,
          184
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        155,
        185
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  191,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                190,
                193
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 4,
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
                  198,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    206,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                "operator": "--",
                "prefix": true,
                "range": [
                  204,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              "range": [
                198,
                208
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "range": [
              189,
              208
            ],
            "loc": {
              "end": {
                "column": 22,
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
              186,
              189
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
              209,
              217
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          }
        ],
        "range": [
          186,
          217
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
      "range": [
        186,
        218
      ],
      "loc": {
        "end": {
          "column": 32,
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
                  230,
                  232
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
                    236,
                    238
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
                    242,
                    244
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
                  236,
                  244
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
                230,
                244
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
              222,
              245
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
              219,
              222
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
              246,
              254
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
          219,
          254
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
        219,
        255
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
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                299,
                301
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  306,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                305,
                308
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
            "range": [
              299,
              308
            ],
            "loc": {
              "end": {
                "column": 12,
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
                324,
                326
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 28,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  331,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 16
                  },
                  "start": {
                    "column": 35,
                    "line": 16
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                330,
                333
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 16
                },
                "start": {
                  "column": 34,
                  "line": 16
                }
              }
            },
            "range": [
              324,
              333
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 16
              },
              "start": {
                "column": 28,
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
              296,
              299
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
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              308,
              324
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
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
              333,
              335
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 16
              },
              "start": {
                "column": 37,
                "line": 16
              }
            }
          }
        ],
        "range": [
          296,
          335
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        296,
        336
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    342,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 17
                    },
                    "start": {
                      "column": 5,
                      "line": 17
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  341,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  349,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              },
              "range": [
                340,
                351
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 3,
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
                354,
                356
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 17,
                  "line": 17
                }
              }
            },
            "range": [
              340,
              356
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
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
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 37,
                      "line": 17
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  373,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 17
                  },
                  "start": {
                    "column": 36,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  381,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 17
                  },
                  "start": {
                    "column": 44,
                    "line": 17
                  }
                }
              },
              "range": [
                372,
                383
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 17
                },
                "start": {
                  "column": 35,
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
                386,
                388
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 17
                },
                "start": {
                  "column": 49,
                  "line": 17
                }
              }
            },
            "range": [
              372,
              388
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 17
              },
              "start": {
                "column": 35,
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
              337,
              340
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
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              356,
              372
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 17
              },
              "start": {
                "column": 19,
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
              388,
              390
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 17
              },
              "start": {
                "column": 51,
                "line": 17
              }
            }
          }
        ],
        "range": [
          337,
          390
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        337,
        391
      ],
      "loc": {
        "end": {
          "column": 54,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      399,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 7,
                        "line": 18
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    397,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  396,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  406,
                  408
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
                395,
                408
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                411,
                413
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
            "range": [
              395,
              413
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                429,
                431
              ],
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
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      439,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 47,
                        "line": 18
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    437,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 18
                    },
                    "start": {
                      "column": 45,
                      "line": 18
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  436,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 18
                  },
                  "start": {
                    "column": 44,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "UnaryExpression",
                "argument": {
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
                      "column": 57,
                      "line": 18
                    },
                    "start": {
                      "column": 55,
                      "line": 18
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  445,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 18
                  },
                  "start": {
                    "column": 53,
                    "line": 18
                  }
                }
              },
              "range": [
                435,
                449
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 18
                },
                "start": {
                  "column": 43,
                  "line": 18
                }
              }
            },
            "range": [
              429,
              449
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 18
              },
              "start": {
                "column": 37,
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
              392,
              395
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
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              413,
              429
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 18
              },
              "start": {
                "column": 21,
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
              449,
              451
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 18
              },
              "start": {
                "column": 57,
                "line": 18
              }
            }
          }
        ],
        "range": [
          392,
          451
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        392,
        452
      ],
      "loc": {
        "end": {
          "column": 60,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      458,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 19
                      },
                      "start": {
                        "column": 5,
                        "line": 19
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    458,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 5,
                      "line": 19
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  457,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
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
                  467,
                  469
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
                456,
                469
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                472,
                474
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
            "range": [
              456,
              474
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                490,
                492
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 19
                },
                "start": {
                  "column": 37,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      498,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 19
                      },
                      "start": {
                        "column": 45,
                        "line": 19
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    498,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 19
                    },
                    "start": {
                      "column": 45,
                      "line": 19
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  497,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 19
                  },
                  "start": {
                    "column": 44,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    510,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 19
                    },
                    "start": {
                      "column": 57,
                      "line": 19
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  508,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 19
                  },
                  "start": {
                    "column": 55,
                    "line": 19
                  }
                }
              },
              "range": [
                496,
                512
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 19
                },
                "start": {
                  "column": 43,
                  "line": 19
                }
              }
            },
            "range": [
              490,
              512
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 19
              },
              "start": {
                "column": 37,
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
              453,
              456
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
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              474,
              490
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 21,
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
              512,
              514
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 19
              },
              "start": {
                "column": 59,
                "line": 19
              }
            }
          }
        ],
        "range": [
          453,
          514
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        453,
        515
      ],
      "loc": {
        "end": {
          "column": 62,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  521,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                520,
                523
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 4,
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
                  528,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    536,
                    538
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "operator": "--",
                "prefix": true,
                "range": [
                  534,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              },
              "range": [
                528,
                538
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "range": [
              519,
              538
            ],
            "loc": {
              "end": {
                "column": 22,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  557,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 20
                  },
                  "start": {
                    "column": 41,
                    "line": 20
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                556,
                559
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 20
                },
                "start": {
                  "column": 40,
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
                  564,
                  566
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
              },
              "right": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    572,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 20
                    },
                    "start": {
                      "column": 56,
                      "line": 20
                    }
                  }
                },
                "operator": "--",
                "prefix": true,
                "range": [
                  570,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 20
                  },
                  "start": {
                    "column": 54,
                    "line": 20
                  }
                }
              },
              "range": [
                564,
                574
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 20
                },
                "start": {
                  "column": 48,
                  "line": 20
                }
              }
            },
            "range": [
              555,
              574
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 20
              },
              "start": {
                "column": 39,
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
              516,
              519
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
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              539,
              555
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 23,
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
              575,
              577
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 20
              },
              "start": {
                "column": 59,
                "line": 20
              }
            }
          }
        ],
        "range": [
          516,
          577
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        516,
        578
      ],
      "loc": {
        "end": {
          "column": 62,
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
                  590,
                  592
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
                    596,
                    598
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
                    602,
                    604
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
                  596,
                  604
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
                590,
                604
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
              582,
              605
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
                  629,
                  631
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
              "right": {
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    635,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 21
                    },
                    "start": {
                      "column": 56,
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
                    641,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 21
                    },
                    "start": {
                      "column": 62,
                      "line": 21
                    }
                  }
                },
                "range": [
                  635,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 21
                  },
                  "start": {
                    "column": 56,
                    "line": 21
                  }
                }
              },
              "range": [
                629,
                643
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 21
                },
                "start": {
                  "column": 50,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              621,
              644
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 21
              },
              "start": {
                "column": 42,
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
              579,
              582
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
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              605,
              621
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 21
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
              644,
              646
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 21
              },
              "start": {
                "column": 65,
                "line": 21
              }
            }
          }
        ],
        "range": [
          579,
          646
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        579,
        647
      ],
      "loc": {
        "end": {
          "column": 68,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    681,
                    683
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  680,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  688,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 24
                  }
                }
              },
              "range": [
                679,
                690
              ],
              "loc": {
                "end": {
                  "column": 20,
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
                693,
                695
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            },
            "range": [
              679,
              695
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 24
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              670,
              679
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              695,
              697
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 24
              },
              "start": {
                "column": 25,
                "line": 24
              }
            }
          }
        ],
        "range": [
          670,
          697
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        670,
        698
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
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
                        "column": 15,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    710,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 25
                    },
                    "start": {
                      "column": 11,
                      "line": 25
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  709,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  719,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 25
                  },
                  "start": {
                    "column": 20,
                    "line": 25
                  }
                }
              },
              "range": [
                708,
                721
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 9,
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
                724,
                726
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            },
            "range": [
              708,
              726
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 25
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              699,
              708
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              726,
              728
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 25
              },
              "start": {
                "column": 27,
                "line": 25
              }
            }
          }
        ],
        "range": [
          699,
          728
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        699,
        729
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "UpdateExpression",
                  "argument": {
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
                        "column": 13,
                        "line": 26
                      },
                      "start": {
                        "column": 11,
                        "line": 26
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    741,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 26
                    },
                    "start": {
                      "column": 11,
                      "line": 26
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  740,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
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
                  750,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                }
              },
              "range": [
                739,
                752
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 9,
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
                755,
                757
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 26
                },
                "start": {
                  "column": 25,
                  "line": 26
                }
              }
            },
            "range": [
              739,
              757
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 26
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              730,
              739
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              757,
              759
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 26
              },
              "start": {
                "column": 27,
                "line": 26
              }
            }
          }
        ],
        "range": [
          730,
          759
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        730,
        760
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  772,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                771,
                774
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 10,
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
                  779,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 27
                  },
                  "start": {
                    "column": 18,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    787,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 26,
                      "line": 27
                    }
                  }
                },
                "operator": "--",
                "prefix": true,
                "range": [
                  785,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 24,
                    "line": 27
                  }
                }
              },
              "range": [
                779,
                789
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 27
                },
                "start": {
                  "column": 18,
                  "line": 27
                }
              }
            },
            "range": [
              770,
              789
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 27
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              761,
              770
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              790,
              792
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 27
              },
              "start": {
                "column": 29,
                "line": 27
              }
            }
          }
        ],
        "range": [
          761,
          792
        ],
        "loc": {
          "end": {
            "column": 31,
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
        793
      ],
      "loc": {
        "end": {
          "column": 32,
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
                  811,
                  813
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
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    817,
                    819
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    823,
                    825
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 28
                    },
                    "start": {
                      "column": 29,
                      "line": 28
                    }
                  }
                },
                "range": [
                  817,
                  825
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "range": [
                811,
                825
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              803,
              826
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              794,
              803
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              826,
              828
            ],
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
          }
        ],
        "range": [
          794,
          828
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        794,
        829
      ],
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 35,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
