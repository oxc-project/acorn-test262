__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    789
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              39,
              48
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          33,
          50
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "range": [
          9,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
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
              "type": "TSNumberKeyword",
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
            22,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              51,
              63
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "range": [
              64,
              66
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          "range": [
            51,
            66
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
        "right": {
          "type": "Literal",
          "raw": "111",
          "value": 111,
          "range": [
            69,
            72
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "range": [
          51,
          72
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        51,
        72
      ],
      "loc": {
        "end": {
          "column": 21,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              73,
              85
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "m",
            "optional": false,
            "range": [
              86,
              87
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          },
          "range": [
            73,
            87
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "range": [
                      123,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      127,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    123,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  116,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              110,
              131
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 37,
                "line": 5
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                },
                "range": [
                  100,
                  108
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    102,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                99,
                108
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            90,
            131
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        },
        "range": [
          73,
          131
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        73,
        131
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              161,
              181
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
                    "name": "p2",
                    "optional": false,
                    "range": [
                      172,
                      174
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
                  "init": {
                    "type": "Literal",
                    "raw": "222",
                    "value": 222,
                    "range": [
                      177,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    172,
                    180
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
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                168,
                181
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
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
          155,
          183
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 23,
            "line": 8
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          142,
          154
        ],
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "kind": "namespace",
      "range": [
        132,
        183
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              184,
              196
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "p4",
            "optional": false,
            "range": [
              197,
              199
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          },
          "range": [
            184,
            199
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "44444",
          "value": 44444,
          "range": [
            202,
            207
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "range": [
          184,
          207
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        184,
        208
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
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              215,
              227
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p6",
            "optional": false,
            "range": [
              228,
              230
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 13,
                "line": 12
              }
            }
          },
          "range": [
            215,
            230
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "66666",
          "value": 66666,
          "range": [
            233,
            238
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 12
            },
            "start": {
              "column": 18,
              "line": 12
            }
          }
        },
        "range": [
          215,
          238
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        215,
        239
      ],
      "loc": {
        "end": {
          "column": 24,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              246,
              258
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p8",
            "optional": false,
            "range": [
              259,
              261
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          "range": [
            246,
            261
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "false",
          "value": false,
          "range": [
            264,
            269
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 18,
              "line": 13
            }
          }
        },
        "range": [
          246,
          269
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        246,
        270
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              314,
              334
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
                    "name": "p3",
                    "optional": false,
                    "range": [
                      325,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "333",
                    "value": 333,
                    "range": [
                      330,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 20,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    325,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                321,
                334
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              339,
              357
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
                    "name": "p4",
                    "optional": false,
                    "range": [
                      350,
                      352
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
                  "init": {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      355,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    350,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 16
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                346,
                357
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              362,
              380
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
                    "name": "p5",
                    "optional": false,
                    "range": [
                      373,
                      375
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
                  "init": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      378,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    373,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 15,
                      "line": 17
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                369,
                380
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              385,
              403
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
                    "name": "p6",
                    "optional": false,
                    "range": [
                      396,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 18
                      },
                      "start": {
                        "column": 15,
                        "line": 18
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "6",
                    "value": 6,
                    "range": [
                      401,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    396,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                392,
                403
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              408,
              426
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
                    "name": "p7",
                    "optional": false,
                    "range": [
                      419,
                      421
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
                  "init": {
                    "type": "Literal",
                    "raw": "7",
                    "value": 7,
                    "range": [
                      424,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 20,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    419,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                415,
                426
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              431,
              449
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
                    "name": "p8",
                    "optional": false,
                    "range": [
                      442,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "6",
                    "value": 6,
                    "range": [
                      447,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 20
                      },
                      "start": {
                        "column": 20,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    442,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                438,
                449
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              454,
              472
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
                    "name": "p9",
                    "optional": false,
                    "range": [
                      465,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "7",
                    "value": 7,
                    "range": [
                      470,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    465,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                461,
                472
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          308,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 23,
            "line": 14
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          295,
          307
        ],
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "loc": {
          "end": {
            "column": 22,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "kind": "namespace",
      "range": [
        285,
        474
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              475,
              487
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p5",
            "optional": false,
            "range": [
              488,
              490
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            }
          },
          "range": [
            475,
            490
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "555555",
          "value": 555555,
          "range": [
            493,
            499
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 23
            }
          }
        },
        "range": [
          475,
          499
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        475,
        500
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              507,
              519
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "p7",
            "optional": false,
            "range": [
              520,
              522
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 24
              },
              "start": {
                "column": 13,
                "line": 24
              }
            }
          },
          "range": [
            507,
            522
          ],
          "loc": {
            "end": {
              "column": 15,
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
          "raw": "777777",
          "value": 777777,
          "range": [
            525,
            531
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 24
            },
            "start": {
              "column": 18,
              "line": 24
            }
          }
        },
        "range": [
          507,
          531
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
      "range": [
        507,
        532
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "range": [
              539,
              551
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p9",
            "optional": false,
            "range": [
              552,
              554
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
          "range": [
            539,
            554
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "false",
          "value": false,
          "range": [
            557,
            562
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 25
            },
            "start": {
              "column": 18,
              "line": 25
            }
          }
        },
        "range": [
          539,
          562
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        539,
        563
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "n",
            "optional": false,
            "range": [
              582,
              583
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "range": [
                                    586,
                                    598
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p1",
                                  "optional": false,
                                  "range": [
                                    599,
                                    601
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  586,
                                  601
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 26
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "range": [
                                    604,
                                    616
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p2",
                                  "optional": false,
                                  "range": [
                                    617,
                                    619
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  604,
                                  619
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                586,
                                619
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 26
                                },
                                "start": {
                                  "column": 8,
                                  "line": 26
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandoMerge",
                                "optional": false,
                                "range": [
                                  622,
                                  634
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 26
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "range": [
                                  635,
                                  637
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                622,
                                637
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 26
                                },
                                "start": {
                                  "column": 44,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              586,
                              637
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 26
                              },
                              "start": {
                                "column": 8,
                                "line": 26
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ExpandoMerge",
                              "optional": false,
                              "range": [
                                640,
                                652
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 26
                                },
                                "start": {
                                  "column": 62,
                                  "line": 26
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p4",
                              "optional": false,
                              "range": [
                                653,
                                655
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 26
                                },
                                "start": {
                                  "column": 75,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              640,
                              655
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 26
                              },
                              "start": {
                                "column": 62,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            586,
                            655
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 26
                            },
                            "start": {
                              "column": 8,
                              "line": 26
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExpandoMerge",
                            "optional": false,
                            "range": [
                              658,
                              670
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 26
                              },
                              "start": {
                                "column": 80,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p5",
                            "optional": false,
                            "range": [
                              671,
                              673
                            ],
                            "loc": {
                              "end": {
                                "column": 95,
                                "line": 26
                              },
                              "start": {
                                "column": 93,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            658,
                            673
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 26
                            },
                            "start": {
                              "column": 80,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          586,
                          673
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExpandoMerge",
                          "optional": false,
                          "range": [
                            676,
                            688
                          ],
                          "loc": {
                            "end": {
                              "column": 110,
                              "line": 26
                            },
                            "start": {
                              "column": 98,
                              "line": 26
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p6",
                          "optional": false,
                          "range": [
                            689,
                            691
                          ],
                          "loc": {
                            "end": {
                              "column": 113,
                              "line": 26
                            },
                            "start": {
                              "column": 111,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          676,
                          691
                        ],
                        "loc": {
                          "end": {
                            "column": 113,
                            "line": 26
                          },
                          "start": {
                            "column": 98,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        586,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 113,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpandoMerge",
                        "optional": false,
                        "range": [
                          694,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 128,
                            "line": 26
                          },
                          "start": {
                            "column": 116,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p7",
                        "optional": false,
                        "range": [
                          707,
                          709
                        ],
                        "loc": {
                          "end": {
                            "column": 131,
                            "line": 26
                          },
                          "start": {
                            "column": 129,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        694,
                        709
                      ],
                      "loc": {
                        "end": {
                          "column": 131,
                          "line": 26
                        },
                        "start": {
                          "column": 116,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      586,
                      709
                    ],
                    "loc": {
                      "end": {
                        "column": 131,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoMerge",
                      "optional": false,
                      "range": [
                        712,
                        724
                      ],
                      "loc": {
                        "end": {
                          "column": 146,
                          "line": 26
                        },
                        "start": {
                          "column": 134,
                          "line": 26
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p8",
                      "optional": false,
                      "range": [
                        725,
                        727
                      ],
                      "loc": {
                        "end": {
                          "column": 149,
                          "line": 26
                        },
                        "start": {
                          "column": 147,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      712,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 149,
                        "line": 26
                      },
                      "start": {
                        "column": 134,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    586,
                    727
                  ],
                  "loc": {
                    "end": {
                      "column": 149,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "range": [
                      730,
                      742
                    ],
                    "loc": {
                      "end": {
                        "column": 164,
                        "line": 26
                      },
                      "start": {
                        "column": 152,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "range": [
                      743,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 167,
                        "line": 26
                      },
                      "start": {
                        "column": 165,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    730,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 167,
                      "line": 26
                    },
                    "start": {
                      "column": 152,
                      "line": 26
                    }
                  }
                },
                "range": [
                  586,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 167,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "12",
                    "value": 12,
                    "range": [
                      763,
                      765
                    ],
                    "loc": {
                      "end": {
                        "column": 187,
                        "line": 26
                      },
                      "start": {
                        "column": 185,
                        "line": 26
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
                    "name": "ExpandoMerge",
                    "optional": false,
                    "range": [
                      748,
                      760
                    ],
                    "loc": {
                      "end": {
                        "column": 182,
                        "line": 26
                      },
                      "start": {
                        "column": 170,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      761,
                      762
                    ],
                    "loc": {
                      "end": {
                        "column": 184,
                        "line": 26
                      },
                      "start": {
                        "column": 183,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    748,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 184,
                      "line": 26
                    },
                    "start": {
                      "column": 170,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "range": [
                  748,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 188,
                    "line": 26
                  },
                  "start": {
                    "column": 170,
                    "line": 26
                  }
                }
              },
              "range": [
                586,
                766
              ],
              "loc": {
                "end": {
                  "column": 188,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "1001",
                  "value": 1001,
                  "range": [
                    782,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 208,
                      "line": 26
                    },
                    "start": {
                      "column": 204,
                      "line": 26
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "range": [
                  769,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 203,
                    "line": 26
                  },
                  "start": {
                    "column": 191,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                769,
                787
              ],
              "loc": {
                "end": {
                  "column": 209,
                  "line": 26
                },
                "start": {
                  "column": 191,
                  "line": 26
                }
              }
            },
            "range": [
              586,
              787
            ],
            "loc": {
              "end": {
                "column": 209,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            582,
            787
          ],
          "loc": {
            "end": {
              "column": 209,
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
        578,
        788
      ],
      "loc": {
        "end": {
          "column": 210,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
