__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    28,
    393
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          38,
          49
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 16,
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
              44
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "range": [
          33,
          37
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "range": [
        28,
        49
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        49,
        50
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
        },
        "start": {
          "column": 21,
          "line": 3
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          62,
          65
        ],
        "members": [],
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
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "range": [
          56,
          61
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "range": [
        51,
        65
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
      "type": "EmptyStatement",
      "range": [
        65,
        66
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 4
        },
        "start": {
          "column": 14,
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "range": [
              89,
              105
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "range": [
                109,
                113
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              108,
              113
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
              }
            }
          },
          "range": [
            89,
            113
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        85,
        114
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "range": [
              145,
              161
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "range": [
                  165,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "\"B\"",
                "value": "B",
                "range": [
                  170,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              },
              "range": [
                165,
                174
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              164,
              174
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            }
          },
          "range": [
            145,
            174
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        141,
        175
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "range": [
              180,
              196
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "range": [
                    201,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 25,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    206,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 30,
                      "line": 11
                    }
                  }
                },
                "range": [
                  201,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "range": [
                    210,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "\"C\"",
                  "value": "C",
                  "range": [
                    215,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 11
                    },
                    "start": {
                      "column": 39,
                      "line": 11
                    }
                  }
                },
                "range": [
                  210,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 11
                  },
                  "start": {
                    "column": 34,
                    "line": 11
                  }
                }
              },
              "range": [
                201,
                219
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              199,
              220
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            }
          },
          "range": [
            180,
            220
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        176,
        221
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              251,
              267
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "range": [
                  272,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                271,
                276
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              270,
              276
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            }
          },
          "range": [
            251,
            276
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        247,
        277
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "range": [
              282,
              298
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "range": [
                        305,
                        309
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"B\"",
                      "value": "B",
                      "range": [
                        310,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 15
                        },
                        "start": {
                          "column": 32,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      305,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "range": [
                        317,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 15
                        },
                        "start": {
                          "column": 39,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        322,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 15
                        },
                        "start": {
                          "column": 44,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      317,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 39,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    305,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 15
                    },
                    "start": {
                      "column": 27,
                      "line": 15
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  303,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 15
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                302,
                324
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              301,
              324
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          },
          "range": [
            282,
            324
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        278,
        325
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "range": [
            357,
            361
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 18
            },
            "start": {
              "column": 1,
              "line": 18
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          356,
          361
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        356,
        362
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "range": [
            364,
            369
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 19
            },
            "start": {
              "column": 1,
              "line": 19
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          363,
          369
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        363,
        370
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "range": [
              372,
              376
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 1,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              377,
              378
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "range": [
            372,
            378
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 20
            },
            "start": {
              "column": 1,
              "line": 20
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          371,
          378
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        371,
        379
      ],
      "loc": {
        "end": {
          "column": 8,
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
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "range": [
                381,
                385
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 1,
                  "line": 21
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              380,
              385
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              387,
              392
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
              }
            }
          }
        ],
        "range": [
          380,
          392
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        380,
        393
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 13,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
