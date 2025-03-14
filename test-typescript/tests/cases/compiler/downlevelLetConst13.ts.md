__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    445
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "'use strict'",
        "value": "use strict",
        "range": [
          0,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        12
      ],
      "loc": {
        "end": {
          "column": 12,
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
        67,
        87
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
              "name": "foo",
              "optional": false,
              "range": [
                78,
                81
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                84,
                86
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "range": [
              78,
              86
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          74,
          87
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "column": 20,
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
        88,
        112
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
              "name": "bar",
              "optional": false,
              "range": [
                101,
                104
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "\"123\"",
              "value": "123",
              "range": [
                107,
                112
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "range": [
              101,
              112
            ],
            "loc": {
              "end": {
                "column": 24,
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
          95,
          112
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "column": 24,
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
        113,
        137
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
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar1",
                  "optional": false,
                  "range": [
                    125,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                124,
                130
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
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
                    134,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                133,
                136
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "range": [
              124,
              136
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          120,
          137
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        138,
        164
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
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar2",
                  "optional": false,
                  "range": [
                    152,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                151,
                157
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    161,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                160,
                163
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "range": [
              151,
              163
            ],
            "loc": {
              "end": {
                "column": 25,
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
          145,
          164
        ],
        "loc": {
          "end": {
            "column": 26,
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
          "column": 26,
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
        165,
        197
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
                      177,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "range": [
                      180,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    177,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                176,
                185
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
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
                      190,
                      191
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      193,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    190,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                188,
                196
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
                }
              }
            },
            "range": [
              176,
              196
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          172,
          197
        ],
        "loc": {
          "end": {
            "column": 32,
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
          "column": 32,
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
        198,
        232
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
                      212,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 9
                      },
                      "start": {
                        "column": 14,
                        "line": 9
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "range": [
                      215,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 17,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    212,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                211,
                220
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
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
                      225,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 27,
                        "line": 9
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
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 9
                      },
                      "start": {
                        "column": 30,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    225,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                223,
                231
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            },
            "range": [
              211,
              231
            ],
            "loc": {
              "end": {
                "column": 33,
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
          205,
          232
        ],
        "loc": {
          "end": {
            "column": 34,
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
          "column": 34,
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
        234,
        445
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                256,
                277
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
                      "name": "baz",
                      "optional": false,
                      "range": [
                        267,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "100",
                      "value": 100,
                      "range": [
                        273,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      267,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  263,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                282,
                307
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
                      "name": "baz2",
                      "optional": false,
                      "range": [
                        295,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        302,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      295,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 13
                      },
                      "start": {
                        "column": 17,
                        "line": 13
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  289,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                312,
                336
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
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar5",
                          "optional": false,
                          "range": [
                            324,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 14
                            },
                            "start": {
                              "column": 16,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        323,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
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
                            333,
                            334
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 25,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        332,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 14
                        },
                        "start": {
                          "column": 24,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      323,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  319,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                341,
                367
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
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar6",
                          "optional": false,
                          "range": [
                            355,
                            359
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 15
                            },
                            "start": {
                              "column": 18,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        354,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 17,
                          "line": 15
                        }
                      }
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            364,
                            365
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 15
                            },
                            "start": {
                              "column": 27,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        363,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 15
                        },
                        "start": {
                          "column": 26,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      354,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 17,
                        "line": 15
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  348,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
                  "column": 30,
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
                372,
                404
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
                              384,
                              385
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 16
                              },
                              "start": {
                                "column": 16,
                                "line": 16
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar7",
                            "optional": false,
                            "range": [
                              387,
                              391
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 16
                              },
                              "start": {
                                "column": 19,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            384,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 16
                            },
                            "start": {
                              "column": 16,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        383,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
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
                              397,
                              398
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 16
                              },
                              "start": {
                                "column": 29,
                                "line": 16
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
                              400,
                              401
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 16
                              },
                              "start": {
                                "column": 32,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            397,
                            401
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 16
                            },
                            "start": {
                              "column": 29,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        395,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 16
                        },
                        "start": {
                          "column": 27,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      383,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
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
                "kind": "let",
                "range": [
                  379,
                  404
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
                  "column": 36,
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
                409,
                443
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
                              423,
                              424
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 17
                              },
                              "start": {
                                "column": 18,
                                "line": 17
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar8",
                            "optional": false,
                            "range": [
                              426,
                              430
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 17
                              },
                              "start": {
                                "column": 21,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            423,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 17
                            },
                            "start": {
                              "column": 18,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        422,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
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
                              436,
                              437
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 17
                              },
                              "start": {
                                "column": 31,
                                "line": 17
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
                              439,
                              440
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 17
                              },
                              "start": {
                                "column": 34,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            436,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 17
                            },
                            "start": {
                              "column": 31,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        434,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 17
                        },
                        "start": {
                          "column": 29,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      422,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  416,
                  443
                ],
                "loc": {
                  "end": {
                    "column": 38,
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
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            250,
            445
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            248,
            249
          ],
          "decorators": [],
          "name": "M",
          "optional": false,
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        },
        "kind": "module",
        "range": [
          241,
          445
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
