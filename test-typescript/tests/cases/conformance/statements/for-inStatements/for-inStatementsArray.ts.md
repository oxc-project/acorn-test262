__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    555
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                13
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "range": [
                      7,
                      11
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 1
                      },
                      "start": {
                        "column": 7,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    7,
                    11
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 1
                    },
                    "start": {
                      "column": 7,
                      "line": 1
                    }
                  }
                },
                "range": [
                  7,
                  13
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
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
      "kind": "let",
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 0,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                20,
                31
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    22,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                  31
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              31
            ],
            "loc": {
              "end": {
                "column": 16,
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
            31
          ],
          "loc": {
            "end": {
              "column": 16,
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
        32
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "a1",
                  "optional": false,
                  "range": [
                    61,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      66,
                      67
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      68,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    66,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  61,
                  70
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              57,
              71
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                  "name": "a2",
                  "optional": false,
                  "range": [
                    80,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      85,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      88,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    85,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                },
                "range": [
                  80,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              76,
              92
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "a3",
                  "optional": false,
                  "range": [
                    101,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      106,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        109,
                        110
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
                    },
                    "operator": "+",
                    "prefix": true,
                    "range": [
                      108,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    106,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                },
                "range": [
                  101,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              97,
              112
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "range": [
                    121,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      126,
                      127
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      128,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    126,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "range": [
                  121,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              117,
              131
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 4,
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
                  "name": "b2",
                  "optional": false,
                  "range": [
                    140,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      145,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      148,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    145,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  140,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              136,
              152
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "b3",
                  "optional": false,
                  "range": [
                    161,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      166,
                      167
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
                  "optional": false,
                  "property": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        169,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    },
                    "operator": "+",
                    "prefix": true,
                    "range": [
                      168,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    166,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  161,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              157,
              172
            ],
            "loc": {
              "end": {
                "column": 19,
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
          51,
          174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 4
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
              "name": "x",
              "optional": false,
              "range": [
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "init": null,
            "range": [
              43,
              44
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          39,
          44
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
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          48,
          49
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
      "range": [
        34,
        174
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForInStatement",
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
                              "name": "a1",
                              "optional": false,
                              "range": [
                                261,
                                263
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 16
                                },
                                "start": {
                                  "column": 16,
                                  "line": 16
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  266,
                                  267
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 16
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  268,
                                  269
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                266,
                                270
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 16
                                },
                                "start": {
                                  "column": 21,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              261,
                              270
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 16
                              },
                              "start": {
                                "column": 16,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          257,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
                            "line": 16
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
                              "name": "a2",
                              "optional": false,
                              "range": [
                                288,
                                290
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 17
                                },
                                "start": {
                                  "column": 16,
                                  "line": 17
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  293,
                                  294
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 17
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  295,
                                  296
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                293,
                                297
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
                              288,
                              297
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 17
                              },
                              "start": {
                                "column": 16,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          284,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
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
                              "name": "a3",
                              "optional": false,
                              "range": [
                                315,
                                317
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 18
                                },
                                "start": {
                                  "column": 16,
                                  "line": 18
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  320,
                                  321
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "range": [
                                  322,
                                  323
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                320,
                                324
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 18
                                },
                                "start": {
                                  "column": 21,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              315,
                              324
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 16,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          311,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      243,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 25,
                        "line": 15
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
                          "name": "z",
                          "optional": false,
                          "range": [
                            235,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 15
                            },
                            "start": {
                              "column": 17,
                              "line": 15
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          235,
                          236
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
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
                    "kind": "let",
                    "range": [
                      231,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      240,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    226,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                216,
                341
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 14
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      208,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    208,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                204,
                209
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                213,
                214
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "range": [
              199,
              341
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          193,
          343
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 13
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
              "name": "x",
              "optional": false,
              "range": [
                185,
                186
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "init": null,
            "range": [
              185,
              186
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          181,
          186
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "right": {
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
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        }
      },
      "range": [
        176,
        343
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 23
                }
              },
              "range": [
                350,
                358
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  352,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              349,
              358
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            349,
            358
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        345,
        359
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              },
              "range": [
                365,
                373
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  367,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              364,
              373
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            364,
            373
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        360,
        374
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
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
                        "name": "a1",
                        "optional": false,
                        "range": [
                          421,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            426,
                            427
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 27
                            },
                            "start": {
                              "column": 17,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            428,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 27
                            },
                            "start": {
                              "column": 19,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          426,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 27
                          },
                          "start": {
                            "column": 17,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        421,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    417,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
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
                        "name": "a2",
                        "optional": false,
                        "range": [
                          444,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            449,
                            450
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 28
                            },
                            "start": {
                              "column": 17,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            451,
                            452
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 28
                            },
                            "start": {
                              "column": 19,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          449,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 28
                          },
                          "start": {
                            "column": 17,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        444,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 28
                        },
                        "start": {
                          "column": 12,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    440,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                407,
                460
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            },
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "range": [
                399,
                400
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                404,
                405
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 26
                },
                "start": {
                  "column": 14,
                  "line": 26
                }
              }
            },
            "range": [
              394,
              460
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          388,
          462
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 13,
            "line": 25
          }
        }
      },
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "range": [
          380,
          381
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          385,
          386
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "range": [
        375,
        462
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              },
              "range": [
                469,
                477
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  471,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 32
                  },
                  "start": {
                    "column": 7,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              468,
              477
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": null,
          "range": [
            468,
            477
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        464,
        478
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "a1",
                  "optional": false,
                  "range": [
                    506,
                    508
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      511,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      513,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 34
                      },
                      "start": {
                        "column": 15,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    511,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 34
                    },
                    "start": {
                      "column": 13,
                      "line": 34
                    }
                  }
                },
                "range": [
                  506,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              502,
              516
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          496,
          518
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 33
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
              "name": "s",
              "optional": false,
              "range": [
                488,
                489
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "init": null,
            "range": [
              488,
              489
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          484,
          489
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          493,
          494
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 33
          },
          "start": {
            "column": 14,
            "line": 33
          }
        }
      },
      "range": [
        479,
        518
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "a1",
                  "optional": false,
                  "range": [
                    542,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      547,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      549,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 37
                      },
                      "start": {
                        "column": 15,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    547,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 37
                    },
                    "start": {
                      "column": 13,
                      "line": 37
                    }
                  }
                },
                "range": [
                  542,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              538,
              552
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          532,
          554
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 13,
            "line": 36
          }
        }
      },
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "range": [
          524,
          525
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          529,
          530
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 36
          },
          "start": {
            "column": 10,
            "line": 36
          }
        }
      },
      "range": [
        519,
        554
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 39
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
