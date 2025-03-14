__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    406
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              30
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"1\"",
                          "value": "1",
                          "range": [
                            110,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "range": [
                          106,
                          109
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
                      },
                      "optional": false,
                      "range": [
                        106,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      106,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      128,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    91,
                    92
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
                  86,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"2\"",
                          "value": "2",
                          "range": [
                            167,
                            170
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "range": [
                          163,
                          166
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
                      "optional": false,
                      "range": [
                        163,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      163,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    148,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "range": [
                  143,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"3\"",
                          "value": "3",
                          "range": [
                            205,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "range": [
                          201,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        201,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      201,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    186,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  181,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                73,
                74
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "range": [
              65,
              216
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          59,
          218
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 25,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          43,
          47
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            },
            "range": [
              49,
              57
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                51,
                57
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            }
          },
          "range": [
            48,
            57
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "range": [
        34,
        218
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"1\"",
                          "value": "1",
                          "range": [
                            297,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 19
                            },
                            "start": {
                              "column": 16,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "range": [
                          293,
                          296
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        293,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      293,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      315,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    278,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  273,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"2\"",
                          "value": "2",
                          "range": [
                            355,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 22
                            },
                            "start": {
                              "column": 16,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "range": [
                          351,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        351,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      351,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  330,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"3\"",
                          "value": "3",
                          "range": [
                            393,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 24
                            },
                            "start": {
                              "column": 16,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "range": [
                          389,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        389,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 24
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      389,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    374,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  369,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                260,
                261
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "range": [
              252,
              404
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          246,
          406
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 25,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          230,
          234
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 16
              },
              "start": {
                "column": 15,
                "line": 16
              }
            },
            "range": [
              236,
              244
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                238,
                244
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            }
          },
          "range": [
            235,
            244
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 16
            },
            "start": {
              "column": 14,
              "line": 16
            }
          }
        }
      ],
      "range": [
        221,
        406
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
