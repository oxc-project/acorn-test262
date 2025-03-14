__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    156
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
            "name": "i",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              8,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          43,
          46
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  31,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                31,
                34
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              31,
              35
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          25,
          37
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 2
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            16,
            17
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            21,
            23
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        },
        "range": [
          16,
          23
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "range": [
        12,
        46
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "IfStatement",
        "alternate": {
          "type": "IfStatement",
          "alternate": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      150,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": false,
                  "range": [
                    150,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "range": [
                  150,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              144,
              156
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 7,
                "line": 15
              }
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      128,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "70",
                    "value": 70,
                    "range": [
                      133,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    128,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              122,
              138
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 13
              }
            }
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "==",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                113,
                114
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "30",
              "value": 30,
              "range": [
                118,
                120
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            },
            "range": [
              113,
              120
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          },
          "range": [
            109,
            156
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 7,
              "line": 13
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    97,
                    98
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
                "operator": "--",
                "prefix": false,
                "range": [
                  97,
                  100
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
              "range": [
                97,
                101
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            91,
            103
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "test": {
          "type": "BinaryExpression",
          "operator": "==",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              82,
              83
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "20",
            "value": 20,
            "range": [
              87,
              89
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
            82,
            89
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 11
            },
            "start": {
              "column": 9,
              "line": 11
            }
          }
        },
        "range": [
          78,
          156
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  66,
                  67
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
              "operator": "++",
              "prefix": false,
              "range": [
                66,
                69
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
            "range": [
              66,
              70
            ],
            "loc": {
              "end": {
                "column": 8,
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
          60,
          72
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
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            51,
            52
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            56,
            58
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 7
            },
            "start": {
              "column": 9,
              "line": 7
            }
          }
        },
        "range": [
          51,
          58
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        47,
        156
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
