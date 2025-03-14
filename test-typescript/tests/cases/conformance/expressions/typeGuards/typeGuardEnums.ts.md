__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    205
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          7,
          9
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
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
          17,
          19
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "V",
        "optional": false,
        "range": [
          15,
          16
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "range": [
        10,
        19
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                26,
                45
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      28,
                      34
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
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      35,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        42,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 21,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      42,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        44,
                        45
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
                    "range": [
                      44,
                      45
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
                  }
                ],
                "range": [
                  28,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 24,
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
              25,
              45
            ],
            "loc": {
              "end": {
                "column": 24,
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
            25,
            45
          ],
          "loc": {
            "end": {
              "column": 24,
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
      "kind": "let",
      "range": [
        21,
        46
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              111,
              113
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          105,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                81,
                82
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
            "range": [
              81,
              83
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          75,
          99
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 27,
            "line": 6
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              59,
              60
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
          "operator": "typeof",
          "prefix": true,
          "range": [
            52,
            60
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"number\"",
          "value": "number",
          "range": [
            65,
            73
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        "range": [
          52,
          73
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "range": [
        48,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                186,
                187
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              186,
              188
            ],
            "loc": {
              "end": {
                "column": 6,
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
          180,
          204
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                160,
                161
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
            "range": [
              160,
              162
            ],
            "loc": {
              "end": {
                "column": 6,
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
          154,
          174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 27,
            "line": 13
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              138,
              139
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
          "operator": "typeof",
          "prefix": true,
          "range": [
            131,
            139
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"number\"",
          "value": "number",
          "range": [
            144,
            152
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
          131,
          152
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        127,
        204
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
