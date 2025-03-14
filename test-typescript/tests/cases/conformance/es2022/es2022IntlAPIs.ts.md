__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    138,
    612
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
            "name": "timezoneNames",
            "optional": false,
            "range": [
              144,
              157
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "'short'",
                  "value": "short",
                  "range": [
                    161,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'long'",
                  "value": "long",
                  "range": [
                    170,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 32,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'shortOffset'",
                  "value": "shortOffset",
                  "range": [
                    178,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 2
                    },
                    "start": {
                      "column": 40,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'longOffset'",
                  "value": "longOffset",
                  "range": [
                    193,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 2
                    },
                    "start": {
                      "column": 55,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'shortGeneric'",
                  "value": "shortGeneric",
                  "range": [
                    207,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 2
                    },
                    "start": {
                      "column": 69,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'longGeneric'",
                  "value": "longGeneric",
                  "range": [
                    223,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 2
                    },
                    "start": {
                      "column": 85,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                160,
                237
              ],
              "loc": {
                "end": {
                  "column": 99,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  241,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 108,
                    "line": 2
                  },
                  "start": {
                    "column": 103,
                    "line": 2
                  }
                }
              },
              "range": [
                241,
                246
              ],
              "loc": {
                "end": {
                  "column": 108,
                  "line": 2
                },
                "start": {
                  "column": 103,
                  "line": 2
                }
              }
            },
            "range": [
              160,
              246
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          "range": [
            144,
            246
          ],
          "loc": {
            "end": {
              "column": 108,
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
        138,
        247
      ],
      "loc": {
        "end": {
          "column": 109,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "formatter",
                  "optional": false,
                  "range": [
                    294,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'en-US'",
                      "value": "en-US",
                      "range": [
                        330,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "timeZone",
                            "optional": false,
                            "range": [
                              345,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 5
                              },
                              "start": {
                                "column": 4,
                                "line": 5
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'America/Los_Angeles'",
                            "value": "America/Los_Angeles",
                            "range": [
                              355,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 5
                              },
                              "start": {
                                "column": 14,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            345,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 4,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "timeZoneName",
                            "optional": false,
                            "range": [
                              382,
                              394
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 6
                              },
                              "start": {
                                "column": 4,
                                "line": 6
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
                            "name": "zoneName",
                            "optional": false,
                            "range": [
                              396,
                              404
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            382,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
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
                        339,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 7
                        },
                        "start": {
                          "column": 51,
                          "line": 4
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
                      "name": "Intl",
                      "optional": false,
                      "range": [
                        310,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DateTimeFormat",
                      "optional": false,
                      "range": [
                        315,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 4
                        },
                        "start": {
                          "column": 27,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      310,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    306,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 4
                    }
                  }
                },
                "range": [
                  294,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 7
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              290,
              411
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          286,
          413
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 38,
            "line": 3
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
              "name": "zoneName",
              "optional": false,
              "range": [
                259,
                267
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              259,
              267
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          253,
          267
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "timezoneNames",
        "optional": false,
        "range": [
          271,
          284
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "range": [
        248,
        413
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "enumerationKeys",
            "optional": false,
            "range": [
              421,
              436
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "'calendar'",
                  "value": "calendar",
                  "range": [
                    440,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'collation'",
                  "value": "collation",
                  "range": [
                    452,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 10
                    },
                    "start": {
                      "column": 37,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'currency'",
                  "value": "currency",
                  "range": [
                    465,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 10
                    },
                    "start": {
                      "column": 50,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'numberingSystem'",
                  "value": "numberingSystem",
                  "range": [
                    477,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 10
                    },
                    "start": {
                      "column": 62,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'timeZone'",
                  "value": "timeZone",
                  "range": [
                    496,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 10
                    },
                    "start": {
                      "column": 81,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'unit'",
                  "value": "unit",
                  "range": [
                    508,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 10
                    },
                    "start": {
                      "column": 93,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                439,
                515
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  519,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 10
                  },
                  "start": {
                    "column": 104,
                    "line": 10
                  }
                }
              },
              "range": [
                519,
                524
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 10
                },
                "start": {
                  "column": 104,
                  "line": 10
                }
              }
            },
            "range": [
              439,
              524
            ],
            "loc": {
              "end": {
                "column": 109,
                "line": 10
              },
              "start": {
                "column": 24,
                "line": 10
              }
            }
          },
          "range": [
            421,
            524
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        415,
        525
      ],
      "loc": {
        "end": {
          "column": 110,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "supported",
                  "optional": false,
                  "range": [
                    569,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        604,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
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
                      "name": "Intl",
                      "optional": false,
                      "range": [
                        581,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "supportedValuesOf",
                      "optional": false,
                      "range": [
                        586,
                        603
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      581,
                      603
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    581,
                    608
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                },
                "range": [
                  569,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              565,
              609
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "range": [
          561,
          611
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 35,
            "line": 11
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
              "name": "key",
              "optional": false,
              "range": [
                537,
                540
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "init": null,
            "range": [
              537,
              540
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          531,
          540
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumerationKeys",
        "optional": false,
        "range": [
          544,
          559
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 11
          }
        }
      },
      "range": [
        526,
        611
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
