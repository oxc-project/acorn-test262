__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    168
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
            "name": "BAR",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
                "raw": "0",
                "value": 0,
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "2.",
                "value": 2,
                "range": [
                  12,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 1
                  },
                  "start": {
                    "column": 12,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "range": [
                  15,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              },
              "range": [
                12,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              12,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
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
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          37,
          167
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
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "initializer": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "range": [
                    50,
                    53
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
                    47,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
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
                    53,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                47,
                55
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              43,
              55
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 4,
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
                61,
                62
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
            "initializer": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"2\"",
                "value": "2",
                "range": [
                  65,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "range": [
                  71,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "range": [
                65,
                74
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              61,
              74
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "initializer": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "range": [
                    88,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
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
                    85,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 9,
                      "line": 6
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
                    91,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                85,
                93
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "range": [
              80,
              94
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "range": [
                105,
                108
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "range": [
              101,
              108
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "range": [
                114,
                115
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
            "initializer": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  118,
                  119
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "range": [
                  122,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              },
              "range": [
                118,
                125
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "range": [
              114,
              125
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "range": [
                132,
                133
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                136,
                137
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              132,
              137
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
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                143,
                144
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "initializer": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "H",
                "optional": false,
                "range": [
                  147,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
                "name": "BAR",
                "optional": false,
                "range": [
                  151,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
                  }
                }
              },
              "range": [
                147,
                154
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              143,
              154
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "range": [
                160,
                161
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
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "range": [
                164,
                165
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
              160,
              165
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          33,
          36
        ],
        "loc": {
          "end": {
            "column": 8,
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
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
