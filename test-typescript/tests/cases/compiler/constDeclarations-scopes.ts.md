__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    1594
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
            "name": "c",
            "optional": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"string\"",
            "value": "string",
            "range": [
              20,
              28
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            16,
            28
          ],
          "loc": {
            "end": {
              "column": 18,
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
        10,
        29
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                36,
                44
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  38,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              35,
              44
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            35,
            44
          ],
          "loc": {
            "end": {
              "column": 13,
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
        45
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    147,
                    148
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
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    151,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "range": [
                  147,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              141,
              153
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 4,
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
                "name": "n",
                "optional": false,
                "range": [
                  158,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  162,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "range": [
                158,
                163
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              158,
              164
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          134,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "consequent": {
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    113,
                    114
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
                "range": [
                  109,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              103,
              115
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 4,
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
                "name": "n",
                "optional": false,
                "range": [
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                "name": "c",
                "optional": false,
                "range": [
                  124,
                  125
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
              "range": [
                120,
                125
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              120,
              126
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          96,
          128
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          90,
          94
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        86,
        166
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "WhileStatement",
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    194,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    198,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "range": [
                  194,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              188,
              200
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 4,
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
                "name": "n",
                "optional": false,
                "range": [
                  205,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                "name": "c",
                "optional": false,
                "range": [
                  209,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                205,
                210
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
            "range": [
              205,
              211
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          181,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 16
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          175,
          179
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "range": [
        168,
        213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "DoWhileStatement",
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    230,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    234,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  230,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              224,
              236
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
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
                "name": "n",
                "optional": false,
                "range": [
                  241,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  245,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "range": [
                241,
                246
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              241,
              247
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          218,
          249
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 3,
            "line": 21
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          257,
          261
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "range": [
        215,
        263
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "obj",
            "optional": false,
            "range": [
              269,
              272
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": null,
          "range": [
            269,
            272
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        265,
        273
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "WithStatement",
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    297,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    301,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 14,
                      "line": 28
                    }
                  }
                },
                "range": [
                  297,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              291,
              303
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 4,
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
                "name": "n",
                "optional": false,
                "range": [
                  308,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  312,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              },
              "range": [
                308,
                313
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              308,
              314
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          285,
          316
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 11,
            "line": 27
          }
        }
      },
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "range": [
          280,
          283
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
      "range": [
        274,
        316
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ForStatement",
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    359,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 33
                    },
                    "start": {
                      "column": 10,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    363,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 33
                    },
                    "start": {
                      "column": 14,
                      "line": 33
                    }
                  }
                },
                "range": [
                  359,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              353,
              365
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 33
              },
              "start": {
                "column": 4,
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
                "name": "n",
                "optional": false,
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  374,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              },
              "range": [
                370,
                375
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              370,
              376
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          347,
          378
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 29,
            "line": 32
          }
        }
      },
      "init": {
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
                327,
                328
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                331,
                332
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "range": [
              327,
              332
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          323,
          332
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            334,
            335
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 32
            },
            "start": {
              "column": 16,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            338,
            340
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 32
            },
            "start": {
              "column": 20,
              "line": 32
            }
          }
        },
        "range": [
          334,
          340
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 32
          },
          "start": {
            "column": 16,
            "line": 32
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            342,
            343
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 32
            },
            "start": {
              "column": 24,
              "line": 32
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          342,
          345
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 32
          },
          "start": {
            "column": 24,
            "line": 32
          }
        }
      },
      "range": [
        318,
        378
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    411,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 38
                    },
                    "start": {
                      "column": 10,
                      "line": 38
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    415,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 38
                    },
                    "start": {
                      "column": 14,
                      "line": 38
                    }
                  }
                },
                "range": [
                  411,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              405,
              417
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
                "name": "n",
                "optional": false,
                "range": [
                  422,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  426,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              "range": [
                422,
                427
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              422,
              428
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          399,
          430
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 19,
            "line": 37
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "range": [
                389,
                391
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            },
            "init": null,
            "range": [
              389,
              391
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 37
              },
              "start": {
                "column": 9,
                "line": 37
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          385,
          391
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          395,
          397
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 37
          },
          "start": {
            "column": 15,
            "line": 37
          }
        }
      },
      "range": [
        380,
        430
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "body": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      461,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 43
                      },
                      "start": {
                        "column": 17,
                        "line": 43
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      465,
                      466
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
                  "range": [
                    461,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 43
                    },
                    "start": {
                      "column": 17,
                      "line": 43
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                455,
                467
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 43
                },
                "start": {
                  "column": 11,
                  "line": 43
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "range": [
                448,
                453
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              448,
              467
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
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
                "name": "n",
                "optional": false,
                "range": [
                  472,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  476,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              },
              "range": [
                472,
                477
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              472,
              478
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          442,
          480
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 42
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          436,
          440
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 42
          },
          "start": {
            "column": 4,
            "line": 42
          }
        }
      },
      "range": [
        432,
        480
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "body": {
              "type": "LabeledStatement",
              "body": {
                "type": "LabeledStatement",
                "body": {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          532,
                          533
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 48
                          },
                          "start": {
                            "column": 34,
                            "line": 48
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          536,
                          537
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 48
                          },
                          "start": {
                            "column": 38,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        532,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 48
                        },
                        "start": {
                          "column": 34,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    526,
                    538
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 48
                    },
                    "start": {
                      "column": 28,
                      "line": 48
                    }
                  }
                },
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "range": [
                    518,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 48
                    },
                    "start": {
                      "column": 20,
                      "line": 48
                    }
                  }
                },
                "range": [
                  518,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 48
                  },
                  "start": {
                    "column": 20,
                    "line": 48
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "range": [
                  510,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 48
                  },
                  "start": {
                    "column": 12,
                    "line": 48
                  }
                }
              },
              "range": [
                510,
                538
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label2",
              "optional": false,
              "range": [
                502,
                508
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              502,
              538
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 48
              },
              "start": {
                "column": 4,
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
                "name": "n",
                "optional": false,
                "range": [
                  543,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  547,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              },
              "range": [
                543,
                548
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              543,
              549
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          496,
          551
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 14,
            "line": 47
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "false",
        "value": false,
        "range": [
          489,
          494
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 47
          }
        }
      },
      "range": [
        482,
        551
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    590,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    594,
                    595
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 54
                    },
                    "start": {
                      "column": 14,
                      "line": 54
                    }
                  }
                },
                "range": [
                  590,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              584,
              596
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
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
                "name": "n",
                "optional": false,
                "range": [
                  601,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  605,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              },
              "range": [
                601,
                606
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              601,
              607
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          578,
          609
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 4,
            "line": 53
          }
        }
      },
      "finalizer": {
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    672,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    676,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 62
                    },
                    "start": {
                      "column": 14,
                      "line": 62
                    }
                  }
                },
                "range": [
                  672,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 62
                  },
                  "start": {
                    "column": 10,
                    "line": 62
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              666,
              678
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
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
                "name": "n",
                "optional": false,
                "range": [
                  683,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  687,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              },
              "range": [
                683,
                688
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              683,
              689
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          660,
          691
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 8,
            "line": 61
          }
        }
      },
      "handler": {
        "type": "CatchClause",
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      632,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 58
                      },
                      "start": {
                        "column": 10,
                        "line": 58
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      636,
                      637
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 58
                      },
                      "start": {
                        "column": 14,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    632,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 58
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                626,
                638
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    643,
                    644
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 59
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    647,
                    648
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "range": [
                  643,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "range": [
                643,
                649
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            }
          ],
          "range": [
            620,
            651
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 60
            },
            "start": {
              "column": 10,
              "line": 57
            }
          }
        },
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            617,
            618
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 57
            },
            "start": {
              "column": 7,
              "line": 57
            }
          }
        },
        "range": [
          610,
          651
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        574,
        691
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      742,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 69
                      },
                      "start": {
                        "column": 14,
                        "line": 69
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      746,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 69
                      },
                      "start": {
                        "column": 18,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    742,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 69
                    },
                    "start": {
                      "column": 14,
                      "line": 69
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                736,
                748
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 69
                },
                "start": {
                  "column": 8,
                  "line": 69
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    757,
                    758
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    761,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 70
                    },
                    "start": {
                      "column": 12,
                      "line": 70
                    }
                  }
                },
                "range": [
                  757,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              "range": [
                757,
                763
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 70
                },
                "start": {
                  "column": 8,
                  "line": 70
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                772,
                778
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 71
                },
                "start": {
                  "column": 8,
                  "line": 71
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              725,
              726
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 68
              },
              "start": {
                "column": 9,
                "line": 68
              }
            }
          },
          "range": [
            720,
            778
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 71
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "raw": "0",
        "value": 0,
        "range": [
          711,
          712
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 67
          },
          "start": {
            "column": 8,
            "line": 67
          }
        }
      },
      "range": [
        703,
        780
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 67
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
                "name": "c",
                "optional": false,
                "range": [
                  804,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 76
                  },
                  "start": {
                    "column": 10,
                    "line": 76
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  808,
                  809
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 76
                  },
                  "start": {
                    "column": 14,
                    "line": 76
                  }
                }
              },
              "range": [
                804,
                809
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 76
                },
                "start": {
                  "column": 10,
                  "line": 76
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            798,
            810
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 76
            },
            "start": {
              "column": 4,
              "line": 76
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
              "name": "n",
              "optional": false,
              "range": [
                815,
                816
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                819,
                820
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 77
                },
                "start": {
                  "column": 8,
                  "line": 77
                }
              }
            },
            "range": [
              815,
              820
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          "range": [
            815,
            821
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 77
            },
            "start": {
              "column": 4,
              "line": 77
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      842,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 79
                      },
                      "start": {
                        "column": 14,
                        "line": 79
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      846,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 79
                      },
                      "start": {
                        "column": 18,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    842,
                    851
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 79
                    },
                    "start": {
                      "column": 14,
                      "line": 79
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                836,
                852
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 80
                        },
                        "start": {
                          "column": 13,
                          "line": 80
                        }
                      },
                      "range": [
                        866,
                        875
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          868,
                          875
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 80
                          },
                          "start": {
                            "column": 15,
                            "line": 80
                          }
                        }
                      }
                    },
                    "range": [
                      865,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 80
                      },
                      "start": {
                        "column": 12,
                        "line": 80
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      878,
                      879
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 80
                      },
                      "start": {
                        "column": 25,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    865,
                    879
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 80
                    },
                    "start": {
                      "column": 12,
                      "line": 80
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                861,
                880
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            }
          ],
          "range": [
            826,
            886
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 81
            },
            "start": {
              "column": 4,
              "line": 78
            }
          }
        }
      ],
      "range": [
        792,
        888
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 75
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    929,
                    930
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 87
                    },
                    "start": {
                      "column": 10,
                      "line": 87
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    933,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 87
                    },
                    "start": {
                      "column": 14,
                      "line": 87
                    }
                  }
                },
                "range": [
                  929,
                  934
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 87
                  },
                  "start": {
                    "column": 10,
                    "line": 87
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              923,
              935
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
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
                "name": "n",
                "optional": false,
                "range": [
                  940,
                  941
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  944,
                  945
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              },
              "range": [
                940,
                945
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              940,
              946
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "range": [
          917,
          948
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 13,
            "line": 86
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          913,
          914
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
          }
        }
      },
      "params": [],
      "range": [
        904,
        948
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 86
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
            "name": "F2",
            "optional": false,
            "range": [
              954,
              956
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                        "name": "c",
                        "optional": false,
                        "range": [
                          977,
                          978
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 92
                          },
                          "start": {
                            "column": 10,
                            "line": 92
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          981,
                          982
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 92
                          },
                          "start": {
                            "column": 14,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        977,
                        982
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 92
                        },
                        "start": {
                          "column": 10,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    971,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 92
                    },
                    "start": {
                      "column": 4,
                      "line": 92
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        988,
                        989
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 93
                        },
                        "start": {
                          "column": 4,
                          "line": 93
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        992,
                        993
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 93
                        },
                        "start": {
                          "column": 8,
                          "line": 93
                        }
                      }
                    },
                    "range": [
                      988,
                      993
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 93
                      },
                      "start": {
                        "column": 4,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    988,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 93
                    },
                    "start": {
                      "column": 4,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                965,
                996
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 94
                },
                "start": {
                  "column": 15,
                  "line": 91
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              959,
              996
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 94
              },
              "start": {
                "column": 9,
                "line": 91
              }
            }
          },
          "range": [
            954,
            996
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 94
            },
            "start": {
              "column": 4,
              "line": 91
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        950,
        997
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 91
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
            "name": "F3",
            "optional": false,
            "range": [
              1003,
              1005
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                        "name": "c",
                        "optional": false,
                        "range": [
                          1032,
                          1033
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 97
                          },
                          "start": {
                            "column": 10,
                            "line": 97
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1036,
                          1037
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 97
                          },
                          "start": {
                            "column": 14,
                            "line": 97
                          }
                        }
                      },
                      "range": [
                        1032,
                        1037
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 97
                        },
                        "start": {
                          "column": 10,
                          "line": 97
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    1026,
                    1038
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 97
                    },
                    "start": {
                      "column": 4,
                      "line": 97
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        1043,
                        1044
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 98
                        },
                        "start": {
                          "column": 4,
                          "line": 98
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        1047,
                        1048
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 98
                        },
                        "start": {
                          "column": 8,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      1043,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 98
                      },
                      "start": {
                        "column": 4,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    1043,
                    1049
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 98
                    },
                    "start": {
                      "column": 4,
                      "line": 98
                    }
                  }
                }
              ],
              "range": [
                1020,
                1051
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 99
                },
                "start": {
                  "column": 21,
                  "line": 96
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1008,
              1051
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 99
              },
              "start": {
                "column": 9,
                "line": 96
              }
            }
          },
          "range": [
            1003,
            1051
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 99
            },
            "start": {
              "column": 4,
              "line": 96
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        999,
        1052
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    1086,
                    1087
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 103
                    },
                    "start": {
                      "column": 10,
                      "line": 103
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1090,
                    1091
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 103
                    },
                    "start": {
                      "column": 14,
                      "line": 103
                    }
                  }
                },
                "range": [
                  1086,
                  1091
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 103
                  },
                  "start": {
                    "column": 10,
                    "line": 103
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1080,
              1092
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
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
                "name": "n",
                "optional": false,
                "range": [
                  1097,
                  1098
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 104
                  },
                  "start": {
                    "column": 4,
                    "line": 104
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1101,
                  1102
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 104
                  },
                  "start": {
                    "column": 8,
                    "line": 104
                  }
                }
              },
              "range": [
                1097,
                1102
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "range": [
              1097,
              1103
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        1124,
                        1125
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 107
                        },
                        "start": {
                          "column": 13,
                          "line": 107
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        1128,
                        1133
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 107
                        },
                        "start": {
                          "column": 17,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      1124,
                      1133
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 107
                      },
                      "start": {
                        "column": 13,
                        "line": 107
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1118,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 107
                  },
                  "start": {
                    "column": 7,
                    "line": 107
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
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 108
                          },
                          "start": {
                            "column": 13,
                            "line": 108
                          }
                        },
                        "range": [
                          1148,
                          1157
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1150,
                            1157
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 108
                            },
                            "start": {
                              "column": 15,
                              "line": 108
                            }
                          }
                        }
                      },
                      "range": [
                        1146,
                        1157
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 108
                        },
                        "start": {
                          "column": 11,
                          "line": 108
                        }
                      }
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        1160,
                        1161
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 108
                        },
                        "start": {
                          "column": 25,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      1146,
                      1161
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 108
                      },
                      "start": {
                        "column": 11,
                        "line": 108
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  1142,
                  1162
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 108
                  },
                  "start": {
                    "column": 7,
                    "line": 108
                  }
                }
              }
            ],
            "range": [
              1109,
              1168
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 106
              }
            }
          }
        ],
        "range": [
          1074,
          1170
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 110
          },
          "start": {
            "column": 9,
            "line": 102
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1072,
          1073
        ],
        "decorators": [],
        "name": "m",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 102
          },
          "start": {
            "column": 7,
            "line": 102
          }
        }
      },
      "kind": "module",
      "range": [
        1065,
        1170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1191,
          1451
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1197,
                1208
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
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
                1208,
                1254
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            1227,
                            1228
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 115
                            },
                            "start": {
                              "column": 14,
                              "line": 115
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1231,
                            1232
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 115
                            },
                            "start": {
                              "column": 18,
                              "line": 115
                            }
                          }
                        },
                        "range": [
                          1227,
                          1232
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 115
                          },
                          "start": {
                            "column": 14,
                            "line": 115
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1221,
                      1233
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 115
                      },
                      "start": {
                        "column": 8,
                        "line": 115
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1242,
                          1243
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 116
                          },
                          "start": {
                            "column": 8,
                            "line": 116
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          1246,
                          1247
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 116
                          },
                          "start": {
                            "column": 12,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        1242,
                        1247
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 116
                        },
                        "start": {
                          "column": 8,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      1242,
                      1248
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 116
                      },
                      "start": {
                        "column": 8,
                        "line": 116
                      }
                    }
                  }
                ],
                "range": [
                  1211,
                  1254
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 117
                  },
                  "start": {
                    "column": 18,
                    "line": 114
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
                  "column": 5,
                  "line": 117
                },
                "start": {
                  "column": 15,
                  "line": 114
                }
              }
            },
            "range": [
              1197,
              1254
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                1260,
                1266
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1266,
                1312
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            1285,
                            1286
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 120
                            },
                            "start": {
                              "column": 14,
                              "line": 120
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1289,
                            1290
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 120
                            },
                            "start": {
                              "column": 18,
                              "line": 120
                            }
                          }
                        },
                        "range": [
                          1285,
                          1290
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 120
                          },
                          "start": {
                            "column": 14,
                            "line": 120
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1279,
                      1291
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 120
                      },
                      "start": {
                        "column": 8,
                        "line": 120
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1300,
                          1301
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 121
                          },
                          "start": {
                            "column": 8,
                            "line": 121
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          1304,
                          1305
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 121
                          },
                          "start": {
                            "column": 12,
                            "line": 121
                          }
                        }
                      },
                      "range": [
                        1300,
                        1305
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 121
                        },
                        "start": {
                          "column": 8,
                          "line": 121
                        }
                      }
                    },
                    "range": [
                      1300,
                      1306
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 121
                      },
                      "start": {
                        "column": 8,
                        "line": 121
                      }
                    }
                  }
                ],
                "range": [
                  1269,
                  1312
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 122
                  },
                  "start": {
                    "column": 13,
                    "line": 119
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
                  "column": 5,
                  "line": 122
                },
                "start": {
                  "column": 10,
                  "line": 119
                }
              }
            },
            "range": [
              1260,
              1312
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                1322,
                1323
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 124
                },
                "start": {
                  "column": 8,
                  "line": 124
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1323,
                1387
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            1342,
                            1343
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 125
                            },
                            "start": {
                              "column": 14,
                              "line": 125
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1346,
                            1347
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 125
                            },
                            "start": {
                              "column": 18,
                              "line": 125
                            }
                          }
                        },
                        "range": [
                          1342,
                          1347
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 125
                          },
                          "start": {
                            "column": 14,
                            "line": 125
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1336,
                      1348
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 125
                      },
                      "start": {
                        "column": 8,
                        "line": 125
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1357,
                          1358
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 126
                          },
                          "start": {
                            "column": 8,
                            "line": 126
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          1361,
                          1362
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 126
                          },
                          "start": {
                            "column": 12,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        1357,
                        1362
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 126
                        },
                        "start": {
                          "column": 8,
                          "line": 126
                        }
                      }
                    },
                    "range": [
                      1357,
                      1363
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        1379,
                        1380
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
                      1372,
                      1381
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 127
                      }
                    }
                  }
                ],
                "range": [
                  1326,
                  1387
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 128
                  },
                  "start": {
                    "column": 12,
                    "line": 124
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
                  "column": 5,
                  "line": 128
                },
                "start": {
                  "column": 9,
                  "line": 124
                }
              }
            },
            "range": [
              1318,
              1387
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                1397,
                1398
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 130
                },
                "start": {
                  "column": 8,
                  "line": 130
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1398,
                1449
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            1422,
                            1423
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 131
                            },
                            "start": {
                              "column": 14,
                              "line": 131
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1426,
                            1427
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 131
                            },
                            "start": {
                              "column": 18,
                              "line": 131
                            }
                          }
                        },
                        "range": [
                          1422,
                          1427
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 131
                          },
                          "start": {
                            "column": 14,
                            "line": 131
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1416,
                      1428
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 131
                      },
                      "start": {
                        "column": 8,
                        "line": 131
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1437,
                          1438
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 132
                          },
                          "start": {
                            "column": 8,
                            "line": 132
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          1441,
                          1442
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 132
                          },
                          "start": {
                            "column": 12,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        1437,
                        1442
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 132
                        },
                        "start": {
                          "column": 8,
                          "line": 132
                        }
                      }
                    },
                    "range": [
                      1437,
                      1443
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 132
                      },
                      "start": {
                        "column": 8,
                        "line": 132
                      }
                    }
                  }
                ],
                "range": [
                  1406,
                  1449
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 133
                  },
                  "start": {
                    "column": 17,
                    "line": 130
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    1399,
                    1404
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 130
                    },
                    "start": {
                      "column": 10,
                      "line": 130
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 133
                },
                "start": {
                  "column": 9,
                  "line": 130
                }
              }
            },
            "range": [
              1393,
              1449
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 130
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 134
          },
          "start": {
            "column": 8,
            "line": 113
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          1189,
          1190
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 113
          },
          "start": {
            "column": 6,
            "line": 113
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1183,
        1451
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 134
        },
        "start": {
          "column": 0,
          "line": 113
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
            "name": "o",
            "optional": false,
            "range": [
              1476,
              1477
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 137
              },
              "start": {
                "column": 4,
                "line": 137
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    1486,
                    1487
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 138
                    },
                    "start": {
                      "column": 4,
                      "line": 138
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1487,
                    1533
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
                              "name": "c",
                              "optional": false,
                              "range": [
                                1506,
                                1507
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 139
                                },
                                "start": {
                                  "column": 14,
                                  "line": 139
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                1510,
                                1511
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 139
                                },
                                "start": {
                                  "column": 18,
                                  "line": 139
                                }
                              }
                            },
                            "range": [
                              1506,
                              1511
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 139
                              },
                              "start": {
                                "column": 14,
                                "line": 139
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1500,
                          1512
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 139
                          },
                          "start": {
                            "column": 8,
                            "line": 139
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
                            "name": "n",
                            "optional": false,
                            "range": [
                              1521,
                              1522
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 140
                              },
                              "start": {
                                "column": 8,
                                "line": 140
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              1525,
                              1526
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 140
                              },
                              "start": {
                                "column": 12,
                                "line": 140
                              }
                            }
                          },
                          "range": [
                            1521,
                            1526
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 140
                            },
                            "start": {
                              "column": 8,
                              "line": 140
                            }
                          }
                        },
                        "range": [
                          1521,
                          1527
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 140
                          },
                          "start": {
                            "column": 8,
                            "line": 140
                          }
                        }
                      }
                    ],
                    "range": [
                      1490,
                      1533
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 141
                      },
                      "start": {
                        "column": 8,
                        "line": 138
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
                      "column": 5,
                      "line": 141
                    },
                    "start": {
                      "column": 5,
                      "line": 138
                    }
                  }
                },
                "range": [
                  1486,
                  1533
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 141
                  },
                  "start": {
                    "column": 4,
                    "line": 138
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "range": [
                    1539,
                    1541
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 142
                    },
                    "start": {
                      "column": 4,
                      "line": 142
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "c",
                              "optional": false,
                              "range": [
                                1565,
                                1566
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 143
                                },
                                "start": {
                                  "column": 14,
                                  "line": 143
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                1569,
                                1570
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 143
                                },
                                "start": {
                                  "column": 18,
                                  "line": 143
                                }
                              }
                            },
                            "range": [
                              1565,
                              1570
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 143
                              },
                              "start": {
                                "column": 14,
                                "line": 143
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1559,
                          1571
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 143
                          },
                          "start": {
                            "column": 8,
                            "line": 143
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
                            "name": "n",
                            "optional": false,
                            "range": [
                              1580,
                              1581
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 144
                              },
                              "start": {
                                "column": 8,
                                "line": 144
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              1584,
                              1585
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 144
                              },
                              "start": {
                                "column": 12,
                                "line": 144
                              }
                            }
                          },
                          "range": [
                            1580,
                            1585
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 144
                            },
                            "start": {
                              "column": 8,
                              "line": 144
                            }
                          }
                        },
                        "range": [
                          1580,
                          1586
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 144
                          },
                          "start": {
                            "column": 8,
                            "line": 144
                          }
                        }
                      }
                    ],
                    "range": [
                      1549,
                      1592
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 145
                      },
                      "start": {
                        "column": 14,
                        "line": 142
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1543,
                    1592
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 142
                    }
                  }
                },
                "range": [
                  1539,
                  1592
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 145
                  },
                  "start": {
                    "column": 4,
                    "line": 142
                  }
                }
              }
            ],
            "range": [
              1480,
              1594
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 146
              },
              "start": {
                "column": 8,
                "line": 137
              }
            }
          },
          "range": [
            1476,
            1594
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 146
            },
            "start": {
              "column": 4,
              "line": 137
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1472,
        1594
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 137
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 146
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
