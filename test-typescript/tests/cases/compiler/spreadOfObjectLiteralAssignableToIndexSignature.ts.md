__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    729
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              },
              "range": [
                9,
                31
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    17,
                    31
                  ],
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "range": [
                        18,
                        23
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 1
                        },
                        "start": {
                          "column": 18,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSNeverKeyword",
                      "range": [
                        25,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    11,
                    17
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 1
                    },
                    "start": {
                      "column": 11,
                      "line": 1
                    }
                  }
                },
                "range": [
                  11,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 11,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              34,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          },
          "range": [
            6,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
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
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          113,
          115
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 71,
            "line": 3
          },
          "start": {
            "column": 69,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              78,
              84
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 34,
                "line": 3
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              84,
              112
            ],
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    91,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 47,
                      "line": 3
                    }
                  }
                },
                "range": [
                  85,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 41,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordOfRecords",
                  "optional": false,
                  "range": [
                    96,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 3
                    },
                    "start": {
                      "column": 52,
                      "line": 3
                    }
                  }
                },
                "range": [
                  96,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          },
          "range": [
            78,
            112
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordOfRecords",
        "optional": false,
        "range": [
          54,
          69
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        44,
        115
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 3
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
            "name": "recordOfRecords",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                137,
                154
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordOfRecords",
                  "optional": false,
                  "range": [
                    139,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  139,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              122,
              154
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              157,
              159
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 41,
                "line": 4
              }
            }
          },
          "range": [
            122,
            159
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        116,
        159
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "recordOfRecords",
            "optional": false,
            "range": [
              160,
              175
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propA",
            "optional": false,
            "range": [
              176,
              181
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            160,
            181
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    217,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 57,
                      "line": 5
                    }
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          210,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 5
                          },
                          "start": {
                            "column": 50,
                            "line": 5
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          210,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 5
                          },
                          "start": {
                            "column": 50,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        210,
                        213
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 5
                        },
                        "start": {
                          "column": 50,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    209,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      189,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 29,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      197,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 5
                      },
                      "start": {
                        "column": 37,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    189,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                },
                "range": [
                  189,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              },
              "range": [
                185,
                220
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            184,
            221
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "range": [
          160,
          221
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        160,
        221
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "recordOfRecords",
            "optional": false,
            "range": [
              228,
              243
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB",
            "optional": false,
            "range": [
              244,
              249
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            228,
            249
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    257,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 29,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          265,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 37,
                            "line": 6
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          265,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 37,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        265,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 37,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    264,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 6
                    },
                    "start": {
                      "column": 36,
                      "line": 6
                    }
                  }
                },
                "range": [
                  257,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              },
              "range": [
                253,
                270
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            252,
            271
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        },
        "range": [
          228,
          271
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        228,
        271
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "recordOfRecords",
            "optional": false,
            "range": [
              278,
              293
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propC",
            "optional": false,
            "range": [
              294,
              299
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            278,
            299
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      307,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      315,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 7
                      },
                      "start": {
                        "column": 37,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    307,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 7
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          329,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 7
                          },
                          "start": {
                            "column": 51,
                            "line": 7
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          329,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 7
                          },
                          "start": {
                            "column": 51,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        329,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 7
                        },
                        "start": {
                          "column": 51,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    328,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 7
                    },
                    "start": {
                      "column": 50,
                      "line": 7
                    }
                  }
                },
                "range": [
                  307,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                }
              },
              "range": [
                303,
                334
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            302,
            335
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "range": [
          278,
          335
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        278,
        335
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          462,
          464
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 90,
            "line": 9
          },
          "start": {
            "column": 88,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              415,
              421
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 41,
                "line": 9
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              421,
              461
            ],
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    428,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 9
                    },
                    "start": {
                      "column": 54,
                      "line": 9
                    }
                  }
                },
                "range": [
                  422,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 9
                  },
                  "start": {
                    "column": 48,
                    "line": 9
                  }
                }
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecordOfRecordsOrEmpty",
                      "optional": false,
                      "range": [
                        433,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 9
                        },
                        "start": {
                          "column": 59,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      433,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 9
                      },
                      "start": {
                        "column": 59,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      458,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 9
                      },
                      "start": {
                        "column": 84,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  433,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 9
                  },
                  "start": {
                    "column": 59,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 9
              },
              "start": {
                "column": 47,
                "line": 9
              }
            }
          },
          "range": [
            415,
            461
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 9
            },
            "start": {
              "column": 41,
              "line": 9
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordOfRecordsOrEmpty",
        "optional": false,
        "range": [
          384,
          406
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        374,
        464
      ],
      "loc": {
        "end": {
          "column": 90,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              },
              "range": [
                494,
                518
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordOfRecordsOrEmpty",
                  "optional": false,
                  "range": [
                    496,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                },
                "range": [
                  496,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              471,
              518
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              521,
              523
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 10
              },
              "start": {
                "column": 56,
                "line": 10
              }
            }
          },
          "range": [
            471,
            523
          ],
          "loc": {
            "end": {
              "column": 58,
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
        465,
        523
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "range": [
              524,
              547
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propA",
            "optional": false,
            "range": [
              548,
              553
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          },
          "range": [
            524,
            553
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    589,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 11
                    },
                    "start": {
                      "column": 65,
                      "line": 11
                    }
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          582,
                          585
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 11
                          },
                          "start": {
                            "column": 58,
                            "line": 11
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          582,
                          585
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 11
                          },
                          "start": {
                            "column": 58,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        582,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 11
                        },
                        "start": {
                          "column": 58,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    581,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 11
                    },
                    "start": {
                      "column": 57,
                      "line": 11
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      561,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 37,
                        "line": 11
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      569,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 11
                      },
                      "start": {
                        "column": 45,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    561,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 11
                    },
                    "start": {
                      "column": 37,
                      "line": 11
                    }
                  }
                },
                "range": [
                  561,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 11
                  },
                  "start": {
                    "column": 37,
                    "line": 11
                  }
                }
              },
              "range": [
                557,
                592
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 11
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            }
          ],
          "range": [
            556,
            593
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 11
            },
            "start": {
              "column": 32,
              "line": 11
            }
          }
        },
        "range": [
          524,
          593
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        524,
        593
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "range": [
              600,
              623
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB",
            "optional": false,
            "range": [
              624,
              629
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 24,
                "line": 12
              }
            }
          },
          "range": [
            600,
            629
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    637,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 12
                    },
                    "start": {
                      "column": 37,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          645,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 12
                          },
                          "start": {
                            "column": 45,
                            "line": 12
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          645,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 12
                          },
                          "start": {
                            "column": 45,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        645,
                        648
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 12
                        },
                        "start": {
                          "column": 45,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    644,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 12
                    },
                    "start": {
                      "column": 44,
                      "line": 12
                    }
                  }
                },
                "range": [
                  637,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 12
                  },
                  "start": {
                    "column": 37,
                    "line": 12
                  }
                }
              },
              "range": [
                633,
                650
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 12
                },
                "start": {
                  "column": 33,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            632,
            651
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 12
            },
            "start": {
              "column": 32,
              "line": 12
            }
          }
        },
        "range": [
          600,
          651
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        600,
        651
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "recordsOfRecordsOrEmpty",
            "optional": false,
            "range": [
              658,
              681
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propC",
            "optional": false,
            "range": [
              682,
              687
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 24,
                "line": 13
              }
            }
          },
          "range": [
            658,
            687
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      695,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 13
                      },
                      "start": {
                        "column": 37,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      703,
                      712
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 13
                      },
                      "start": {
                        "column": 45,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    695,
                    712
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 13
                    },
                    "start": {
                      "column": 37,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          717,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 13
                          },
                          "start": {
                            "column": 59,
                            "line": 13
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          717,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 13
                          },
                          "start": {
                            "column": 59,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        717,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 13
                        },
                        "start": {
                          "column": 59,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    716,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 13
                    },
                    "start": {
                      "column": 58,
                      "line": 13
                    }
                  }
                },
                "range": [
                  695,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 13
                  },
                  "start": {
                    "column": 37,
                    "line": 13
                  }
                }
              },
              "range": [
                691,
                722
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            690,
            723
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 13
            },
            "start": {
              "column": 32,
              "line": 13
            }
          }
        },
        "range": [
          658,
          723
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        658,
        723
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 13
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
      "column": 71,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
