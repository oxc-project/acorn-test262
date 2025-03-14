__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    371
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 6,
                  "line": 1
                }
              },
              "range": [
                6,
                13
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    8,
                    13
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 1
                    },
                    "start": {
                      "column": 8,
                      "line": 1
                    }
                  }
                },
                "range": [
                  8,
                  13
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                20,
                35
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        22,
                        27
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 2
                        },
                        "start": {
                          "column": 7,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      22,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 7,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        30,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      30,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  22,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              19,
              35
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            19,
            35
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        15,
        36
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "range": [
          56,
          64
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 4
          },
          "start": {
            "column": 27,
            "line": 4
          }
        },
        "range": [
          66,
          75
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            68,
            75
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 4
            },
            "start": {
              "column": 29,
              "line": 4
            }
          }
        }
      },
      "range": [
        39,
        76
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "BreakStatement",
              "label": null,
              "range": [
                118,
                124
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  100,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              100,
              108
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            95,
            124
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                152,
                158
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  137,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              134,
              142
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            129,
            158
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                186,
                192
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  168,
                  169
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
              {
                "type": "Literal",
                "raw": "\"baz\"",
                "value": "baz",
                "range": [
                  171,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              168,
              176
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
          "range": [
            163,
            192
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                220,
                226
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "raw": "\"baz\"",
                "value": "baz",
                "range": [
                  202,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  209,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              202,
              210
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            197,
            226
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                260,
                266
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "Literal",
              "raw": "\"baz\"",
              "value": "baz",
              "range": [
                236,
                241
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"bar\"",
              "value": "bar",
              "range": [
                245,
                250
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              }
            },
            "range": [
              236,
              250
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            231,
            266
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                311,
                317
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "Literal",
              "raw": "\"baz\"",
              "value": "baz",
              "range": [
                276,
                281
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "right": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  286,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 17
                  },
                  "start": {
                    "column": 19,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"bar\"",
                "value": "bar",
                "range": [
                  295,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 28,
                    "line": 17
                  }
                }
              },
              "range": [
                286,
                300
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 19,
                  "line": 17
                }
              }
            },
            "range": [
              276,
              301
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            271,
            317
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                362,
                368
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "Literal",
              "raw": "\"bar\"",
              "value": "bar",
              "range": [
                327,
                332
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "Literal",
                "raw": "\"baz\"",
                "value": "baz",
                "range": [
                  337,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"bar\"",
                "value": "bar",
                "range": [
                  346,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 28,
                    "line": 19
                  }
                }
              },
              "range": [
                337,
                351
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            },
            "range": [
              327,
              352
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            322,
            368
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "range": [
          86,
          87
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 6
          }
        }
      },
      "range": [
        78,
        370
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
