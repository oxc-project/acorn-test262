__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    28,
    321
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          38,
          41
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 13,
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
        41
      ],
      "loc": {
        "end": {
          "column": 13,
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
        41,
        42
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
        },
        "start": {
          "column": 13,
          "line": 3
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          54,
          66
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
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
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
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                62,
                64
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "range": [
              62,
              64
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
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
          48,
          53
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
        43,
        66
      ],
      "loc": {
        "end": {
          "column": 23,
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
        66,
        67
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 4
        },
        "start": {
          "column": 23,
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
            "name": "ResultIsNumber1",
            "optional": false,
            "range": [
              90,
              105
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              108,
              113
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          },
          "range": [
            90,
            113
          ],
          "loc": {
            "end": {
              "column": 27,
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
        86,
        114
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "name": "ResultIsNumber2",
            "optional": false,
            "range": [
              119,
              134
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "range": [
                138,
                143
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              137,
              143
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
              }
            }
          },
          "range": [
            119,
            143
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        115,
        144
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "ResultIsNumber3",
            "optional": false,
            "range": [
              175,
              190
            ],
            "loc": {
              "end": {
                "column": 19,
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
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "range": [
                  194,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 11
                  },
                  "start": {
                    "column": 23,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  200,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "range": [
                194,
                204
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              193,
              204
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "range": [
            175,
            204
          ],
          "loc": {
            "end": {
              "column": 33,
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
        171,
        205
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "ResultIsNumber4",
            "optional": false,
            "range": [
              210,
              225
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "range": [
                    230,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 24,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    235,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 29,
                      "line": 12
                    }
                  }
                },
                "range": [
                  230,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "range": [
                    240,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 12
                    },
                    "start": {
                      "column": 34,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    246,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 40,
                      "line": 12
                    }
                  }
                },
                "range": [
                  240,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 12
                  },
                  "start": {
                    "column": 34,
                    "line": 12
                  }
                }
              },
              "range": [
                230,
                250
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              228,
              251
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "range": [
            210,
            251
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        206,
        252
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "range": [
            284,
            288
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 1,
              "line": 15
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          283,
          288
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        283,
        289
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "name": "ENUM1",
          "optional": false,
          "range": [
            291,
            296
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 16
            },
            "start": {
              "column": 1,
              "line": 16
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          290,
          296
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        290,
        297
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              299,
              304
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 1,
                "line": 17
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
              305,
              306
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 17
              },
              "start": {
                "column": 7,
                "line": 17
              }
            }
          },
          "range": [
            299,
            306
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 17
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          298,
          306
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        298,
        307
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
                309,
                313
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
            "operator": "+",
            "prefix": true,
            "range": [
              308,
              313
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
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              315,
              320
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 18
              },
              "start": {
                "column": 7,
                "line": 18
              }
            }
          }
        ],
        "range": [
          308,
          320
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        308,
        321
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 13,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
