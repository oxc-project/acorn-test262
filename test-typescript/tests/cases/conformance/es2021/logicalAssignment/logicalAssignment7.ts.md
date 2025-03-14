__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    380
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    118,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "range": [
                      84,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 5,
                        "line": 2
                      }
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "||=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "range": [
                        96,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        109,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      96,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    84,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 5,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    113,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 34,
                      "line": 2
                    }
                  }
                },
                "range": [
                  83,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                83,
                122
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              83,
              123
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          77,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 77,
            "line": 1
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
          9,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            },
            "range": [
              21,
              43
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      23,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 23,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    23,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    34,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 1
                    },
                    "start": {
                      "column": 34,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                23,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            }
          },
          "range": [
            14,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 1
              },
              "start": {
                "column": 53,
                "line": 1
              }
            },
            "range": [
              53,
              75
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      55,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 1
                      },
                      "start": {
                        "column": 55,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    55,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 1
                    },
                    "start": {
                      "column": 55,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    66,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 1
                    },
                    "start": {
                      "column": 66,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                55,
                75
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 1
                },
                "start": {
                  "column": 55,
                  "line": 1
                }
              }
            }
          },
          "range": [
            45,
            75
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    245,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 39,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "range": [
                      211,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 5,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "??=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "range": [
                        223,
                        231
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
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        236,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 30,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      223,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    211,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    240,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 34,
                      "line": 6
                    }
                  }
                },
                "range": [
                  210,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                210,
                249
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              210,
              250
            ],
            "loc": {
              "end": {
                "column": 44,
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
          204,
          252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 77,
            "line": 5
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
          136,
          140
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            },
            "range": [
              148,
              170
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      150,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    150,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 23,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    161,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 5
                    },
                    "start": {
                      "column": 34,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                150,
                170
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            }
          },
          "range": [
            141,
            170
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 5
              },
              "start": {
                "column": 53,
                "line": 5
              }
            },
            "range": [
              180,
              202
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      182,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    182,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 5
                    },
                    "start": {
                      "column": 55,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    193,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 5
                    },
                    "start": {
                      "column": 66,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                182,
                202
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 5
                },
                "start": {
                  "column": 55,
                  "line": 5
                }
              }
            }
          },
          "range": [
            172,
            202
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 5
            },
            "start": {
              "column": 45,
              "line": 5
            }
          }
        }
      ],
      "range": [
        127,
        252
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    372,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 10
                    },
                    "start": {
                      "column": 39,
                      "line": 10
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "range": [
                      338,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 10
                      },
                      "start": {
                        "column": 5,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "range": [
                        350,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 10
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        363,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 10
                        },
                        "start": {
                          "column": 30,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      350,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 17,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    338,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    367,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 34,
                      "line": 10
                    }
                  }
                },
                "range": [
                  337,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                337,
                376
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              337,
              377
            ],
            "loc": {
              "end": {
                "column": 44,
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
          331,
          379
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 77,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          263,
          267
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            },
            "range": [
              275,
              297
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      277,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 23,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    277,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 23,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    288,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 9
                    },
                    "start": {
                      "column": 34,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                277,
                297
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 23,
                  "line": 9
                }
              }
            }
          },
          "range": [
            268,
            297
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 9
              },
              "start": {
                "column": 53,
                "line": 9
              }
            },
            "range": [
              307,
              329
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      309,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 9
                      },
                      "start": {
                        "column": 55,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    309,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 9
                    },
                    "start": {
                      "column": 55,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    320,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 9
                    },
                    "start": {
                      "column": 66,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                309,
                329
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 9
                },
                "start": {
                  "column": 55,
                  "line": 9
                }
              }
            }
          },
          "range": [
            299,
            329
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 9
            },
            "start": {
              "column": 45,
              "line": 9
            }
          }
        }
      ],
      "range": [
        254,
        379
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
