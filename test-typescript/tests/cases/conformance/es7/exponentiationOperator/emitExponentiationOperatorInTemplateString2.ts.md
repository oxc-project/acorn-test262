__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    914
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                88,
                90
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              82,
              90
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              73,
              82
            ],
            "loc": {
              "end": {
                "column": 9,
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              90,
              92
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 17,
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
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  115,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              },
              "range": [
                109,
                117
              ],
              "loc": {
                "end": {
                  "column": 23,
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
              117
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              94,
              103
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
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              117,
              119
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 23,
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
                130,
                132
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 9,
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  141,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "range": [
                135,
                143
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "range": [
              130,
              143
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              121,
              130
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
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              143,
              145
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 22,
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  162,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "range": [
                156,
                164
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 9,
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
                167,
                169
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "range": [
              156,
              169
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              147,
              156
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
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              169,
              171
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 22,
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
                  182,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    193,
                    195
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
                "range": [
                  187,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              },
              "range": [
                182,
                195
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 9,
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
                198,
                200
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              }
            },
            "range": [
              182,
              200
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 12
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              173,
              182
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
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              201,
              203
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 28,
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
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    234,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 13
                    },
                    "start": {
                      "column": 29,
                      "line": 13
                    }
                  }
                },
                "range": [
                  228,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 31,
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
                236
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              214,
              237
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              205,
              214
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
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              238,
              240
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 13
              },
              "start": {
                "column": 33,
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
                251,
                252
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 14
                },
                "start": {
                  "column": 9,
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
                  "type": "BinaryExpression",
                  "operator": "**",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "range": [
                      275,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 14
                      },
                      "start": {
                        "column": 33,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    269,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
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
                  277
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 14
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                255,
                278
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "range": [
              251,
              278
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 9,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              242,
              251
            ],
            "loc": {
              "end": {
                "column": 9,
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              279,
              281
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 37,
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                299,
                301
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              293,
              301
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 16
              },
              "start": {
                "column": 9,
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                310,
                312
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 26,
                  "line": 16
                }
              }
            },
            "range": [
              304,
              312
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 20,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              284,
              293
            ],
            "loc": {
              "end": {
                "column": 9,
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
              301,
              304
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 17,
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
              312,
              314
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
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
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
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 15,
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
                  337,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 17
                  },
                  "start": {
                    "column": 21,
                    "line": 17
                  }
                }
              },
              "range": [
                331,
                339
              ],
              "loc": {
                "end": {
                  "column": 23,
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
              339
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 9,
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
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
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
                    "column": 40,
                    "line": 17
                  },
                  "start": {
                    "column": 38,
                    "line": 17
                  }
                }
              },
              "range": [
                348,
                356
              ],
              "loc": {
                "end": {
                  "column": 40,
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
              356
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 17
              },
              "start": {
                "column": 26,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              316,
              325
            ],
            "loc": {
              "end": {
                "column": 9,
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
              339,
              342
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 17
              },
              "start": {
                "column": 23,
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
              356,
              358
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 17
              },
              "start": {
                "column": 40,
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
                369,
                371
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 9,
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  380,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                }
              },
              "range": [
                374,
                382
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "range": [
              369,
              382
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 9,
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
                385,
                387
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 25,
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  396,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 18
                  },
                  "start": {
                    "column": 36,
                    "line": 18
                  }
                }
              },
              "range": [
                390,
                398
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 18
                },
                "start": {
                  "column": 30,
                  "line": 18
                }
              }
            },
            "range": [
              385,
              398
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 18
              },
              "start": {
                "column": 25,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              360,
              369
            ],
            "loc": {
              "end": {
                "column": 9,
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
              382,
              385
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 22,
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
              398,
              400
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 18
              },
              "start": {
                "column": 38,
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  417,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
                  }
                }
              },
              "range": [
                411,
                419
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 9,
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
                422,
                424
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
                }
              }
            },
            "range": [
              411,
              424
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 9,
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  433,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 31,
                    "line": 19
                  }
                }
              },
              "range": [
                427,
                435
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 19
                },
                "start": {
                  "column": 25,
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
                438,
                440
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 36,
                  "line": 19
                }
              }
            },
            "range": [
              427,
              440
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 19
              },
              "start": {
                "column": 25,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              402,
              411
            ],
            "loc": {
              "end": {
                "column": 9,
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
              424,
              427
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 22,
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
              440,
              442
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 19
              },
              "start": {
                "column": 38,
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
                  453,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    464,
                    466
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
                "range": [
                  458,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              },
              "range": [
                453,
                466
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 9,
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
                469,
                471
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 25,
                  "line": 20
                }
              }
            },
            "range": [
              453,
              471
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 9,
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
                  474,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 20
                  },
                  "start": {
                    "column": 30,
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    485,
                    487
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
                "range": [
                  479,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 20
                  },
                  "start": {
                    "column": 35,
                    "line": 20
                  }
                }
              },
              "range": [
                474,
                487
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 20
                },
                "start": {
                  "column": 30,
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
                490,
                492
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 20
                },
                "start": {
                  "column": 46,
                  "line": 20
                }
              }
            },
            "range": [
              474,
              492
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 20
              },
              "start": {
                "column": 30,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              444,
              453
            ],
            "loc": {
              "end": {
                "column": 9,
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
              471,
              474
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 27,
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
              492,
              494
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
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    525,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 21
                    },
                    "start": {
                      "column": 29,
                      "line": 21
                    }
                  }
                },
                "range": [
                  519,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 31,
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
                527
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              505,
              528
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 9,
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
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    552,
                    554
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
                "range": [
                  546,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 58,
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
                554
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 21
                },
                "start": {
                  "column": 44,
                  "line": 21
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              532,
              555
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 21
              },
              "start": {
                "column": 36,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              496,
              505
            ],
            "loc": {
              "end": {
                "column": 9,
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
              529,
              532
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 21
              },
              "start": {
                "column": 33,
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
              556,
              558
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 21
              },
              "start": {
                "column": 60,
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                576,
                578
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            },
            "range": [
              570,
              578
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 9,
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                600,
                602
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 23
                },
                "start": {
                  "column": 39,
                  "line": 23
                }
              }
            },
            "range": [
              594,
              602
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 23
              },
              "start": {
                "column": 33,
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
              "cooked": "hello ",
              "raw": "hello "
            },
            "range": [
              561,
              570
            ],
            "loc": {
              "end": {
                "column": 9,
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
              578,
              594
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 17,
                "line": 23
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
              602,
              604
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 23
              },
              "start": {
                "column": 41,
                "line": 23
              }
            }
          }
        ],
        "range": [
          561,
          604
        ],
        "loc": {
          "end": {
            "column": 43,
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
        605
      ],
      "loc": {
        "end": {
          "column": 44,
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
                615,
                617
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
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  621,
                  623
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  627,
                  629
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
                621,
                629
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              }
            },
            "range": [
              615,
              629
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 24
              },
              "start": {
                "column": 9,
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
                645,
                647
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
              "type": "BinaryExpression",
              "operator": "**",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  651,
                  653
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  657,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 24
                  },
                  "start": {
                    "column": 51,
                    "line": 24
                  }
                }
              },
              "range": [
                651,
                659
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 24
                },
                "start": {
                  "column": 45,
                  "line": 24
                }
              }
            },
            "range": [
              645,
              659
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 24
              },
              "start": {
                "column": 39,
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
              606,
              615
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
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              629,
              645
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 24
              },
              "start": {
                "column": 23,
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
              659,
              661
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 24
              },
              "start": {
                "column": 53,
                "line": 24
              }
            }
          }
        ],
        "range": [
          606,
          661
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
      "range": [
        606,
        662
      ],
      "loc": {
        "end": {
          "column": 56,
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
                672,
                674
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 25
                },
                "start": {
                  "column": 9,
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
                  677,
                  679
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  683,
                  685
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
                677,
                685
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "range": [
              672,
              685
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
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "range": [
                701,
                703
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 25
                },
                "start": {
                  "column": 38,
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
                  706,
                  708
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
              "right": {
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
                    "column": 51,
                    "line": 25
                  },
                  "start": {
                    "column": 49,
                    "line": 25
                  }
                }
              },
              "range": [
                706,
                714
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 25
                },
                "start": {
                  "column": 43,
                  "line": 25
                }
              }
            },
            "range": [
              701,
              714
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 25
              },
              "start": {
                "column": 38,
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
              663,
              672
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
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              685,
              701
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 25
              },
              "start": {
                "column": 22,
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
              714,
              716
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 25
              },
              "start": {
                "column": 51,
                "line": 25
              }
            }
          }
        ],
        "range": [
          663,
          716
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        663,
        717
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
                  727,
                  729
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  733,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              },
              "range": [
                727,
                735
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                738,
                740
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
              727,
              740
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
                  756,
                  758
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  762,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 26
                  },
                  "start": {
                    "column": 44,
                    "line": 26
                  }
                }
              },
              "range": [
                756,
                764
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 26
                },
                "start": {
                  "column": 38,
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
                767,
                769
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 26
                },
                "start": {
                  "column": 49,
                  "line": 26
                }
              }
            },
            "range": [
              756,
              769
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 26
              },
              "start": {
                "column": 38,
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
              718,
              727
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
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              740,
              756
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 26
              },
              "start": {
                "column": 22,
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
              769,
              771
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 26
              },
              "start": {
                "column": 51,
                "line": 26
              }
            }
          }
        ],
        "range": [
          718,
          771
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        718,
        772
      ],
      "loc": {
        "end": {
          "column": 54,
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
                  782,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
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
                    787,
                    789
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    793,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 27
                    },
                    "start": {
                      "column": 20,
                      "line": 27
                    }
                  }
                },
                "range": [
                  787,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              },
              "range": [
                782,
                795
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 9,
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
                798,
                800
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 27
                },
                "start": {
                  "column": 25,
                  "line": 27
                }
              }
            },
            "range": [
              782,
              800
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 27
              },
              "start": {
                "column": 9,
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
                  816,
                  818
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 27
                  },
                  "start": {
                    "column": 43,
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
                    821,
                    823
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    827,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 27
                    },
                    "start": {
                      "column": 54,
                      "line": 27
                    }
                  }
                },
                "range": [
                  821,
                  829
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 27
                  },
                  "start": {
                    "column": 48,
                    "line": 27
                  }
                }
              },
              "range": [
                816,
                829
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 27
                },
                "start": {
                  "column": 43,
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
                832,
                834
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 27
                },
                "start": {
                  "column": 59,
                  "line": 27
                }
              }
            },
            "range": [
              816,
              834
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 27
              },
              "start": {
                "column": 43,
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
              773,
              782
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
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              800,
              816
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 27
              },
              "start": {
                "column": 27,
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
              834,
              836
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 27
              },
              "start": {
                "column": 61,
                "line": 27
              }
            }
          }
        ],
        "range": [
          773,
          836
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        773,
        837
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
                  855,
                  857
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
                    861,
                    863
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
                    867,
                    869
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
                  861,
                  869
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
                855,
                869
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
              847,
              870
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
                  895,
                  897
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
                "type": "BinaryExpression",
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "range": [
                    901,
                    903
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "range": [
                    907,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 28
                    },
                    "start": {
                      "column": 69,
                      "line": 28
                    }
                  }
                },
                "range": [
                  901,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 28
                  },
                  "start": {
                    "column": 63,
                    "line": 28
                  }
                }
              },
              "range": [
                895,
                909
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 28
                },
                "start": {
                  "column": 57,
                  "line": 28
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              887,
              910
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 28
              },
              "start": {
                "column": 49,
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
              838,
              847
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
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "range": [
              871,
              887
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 28
              },
              "start": {
                "column": 33,
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
              911,
              913
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 28
              },
              "start": {
                "column": 73,
                "line": 28
              }
            }
          }
        ],
        "range": [
          838,
          913
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        838,
        914
      ],
      "loc": {
        "end": {
          "column": 76,
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
      "column": 76,
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
