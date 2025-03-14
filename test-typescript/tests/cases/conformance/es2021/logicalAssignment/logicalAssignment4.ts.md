__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1058
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
                    73,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
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
                      52,
                      59
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
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      64,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    52,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                    68,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "range": [
                  51,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
                51,
                77
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              51,
              78
            ],
            "loc": {
              "end": {
                "column": 31,
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
          45,
          80
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 45,
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
        }
      ],
      "range": [
        0,
        80
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
                    155,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
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
                      134,
                      141
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
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      146,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    134,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                    150,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                },
                "range": [
                  133,
                  154
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
              "optional": false,
              "range": [
                133,
                159
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              133,
              160
            ],
            "loc": {
              "end": {
                "column": 31,
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
          127,
          162
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 45,
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
          91,
          95
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
              103,
              125
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      105,
                      111
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
                    105,
                    113
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
                    116,
                    125
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
                105,
                125
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
            96,
            125
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
        }
      ],
      "range": [
        82,
        162
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
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "range": [
                  215,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  227,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 16,
                    "line": 10
                  }
                }
              },
              "range": [
                215,
                229
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              215,
              230
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
          },
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
                    248,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 11
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
                  "name": "results",
                  "optional": false,
                  "range": [
                    235,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
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
                    243,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "range": [
                  235,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                235,
                252
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              235,
              253
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          209,
          255
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 45,
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
          173,
          177
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
              185,
              207
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      187,
                      193
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
                    187,
                    195
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
                    198,
                    207
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
                187,
                207
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
            178,
            207
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
        }
      ],
      "range": [
        164,
        255
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "range": [
                  308,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  320,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              },
              "range": [
                308,
                322
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              308,
              323
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
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
                    341,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
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
                  "name": "results",
                  "optional": false,
                  "range": [
                    328,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
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
                    336,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  328,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                328,
                345
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              328,
              346
            ],
            "loc": {
              "end": {
                "column": 22,
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
          302,
          348
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 45,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          266,
          270
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
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
                "line": 14
              },
              "start": {
                "column": 21,
                "line": 14
              }
            },
            "range": [
              278,
              300
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      280,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    280,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 23,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    291,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                280,
                300
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 14
                },
                "start": {
                  "column": 23,
                  "line": 14
                }
              }
            }
          },
          "range": [
            271,
            300
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "range": [
        257,
        348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          378,
          432
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                384,
                388
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              },
              "range": [
                388,
                396
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  390,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              384,
              397
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "original",
              "optional": false,
              "range": [
                402,
                410
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              },
              "range": [
                411,
                430
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThingWithOriginal",
                  "optional": false,
                  "range": [
                    413,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                },
                "range": [
                  413,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              402,
              430
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 28,
            "line": 19
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThingWithOriginal",
        "optional": false,
        "range": [
          360,
          377
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 19
          }
        }
      },
      "range": [
        350,
        432
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              },
              "range": [
                448,
                456
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  450,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              447,
              456
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 23
              },
              "start": {
                "column": 14,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            447,
            456
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        433,
        456
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": {
                "type": "IfStatement",
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "range": [
                                  997,
                                  1002
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 44
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "range": [
                                  1003,
                                  1007
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 44
                                  }
                                }
                              },
                              "range": [
                                997,
                                1007
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 44
                                },
                                "start": {
                                  "column": 12,
                                  "line": 44
                                }
                              }
                            },
                            "range": [
                              997,
                              1008
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 44
                              },
                              "start": {
                                "column": 12,
                                "line": 44
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "defaultValue",
                                "optional": false,
                                "range": [
                                  1021,
                                  1033
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 45
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "range": [
                                  1034,
                                  1038
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 45
                                  }
                                }
                              },
                              "range": [
                                1021,
                                1038
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 45
                                },
                                "start": {
                                  "column": 12,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              1021,
                              1039
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 45
                              },
                              "start": {
                                "column": 12,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "range": [
                          983,
                          1049
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 46
                          },
                          "start": {
                            "column": 36,
                            "line": 43
                          }
                        }
                      },
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "??=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "range": [
                            959,
                            964
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 43
                            },
                            "start": {
                              "column": 12,
                              "line": 43
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "defaultValue",
                          "optional": false,
                          "range": [
                            969,
                            981
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 43
                            },
                            "start": {
                              "column": 22,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          959,
                          981
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 43
                          },
                          "start": {
                            "column": 12,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        955,
                        1049
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "range": [
                    945,
                    1055
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 47
                    },
                    "start": {
                      "column": 9,
                      "line": 42
                    }
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "range": [
                                  877,
                                  882
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 38
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "range": [
                                  883,
                                  887
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                877,
                                887
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 38
                                },
                                "start": {
                                  "column": 12,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              877,
                              888
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 38
                              },
                              "start": {
                                "column": 12,
                                "line": 38
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "defaultValue",
                                "optional": false,
                                "range": [
                                  901,
                                  913
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 39
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "range": [
                                  914,
                                  918
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                901,
                                918
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 39
                                },
                                "start": {
                                  "column": 12,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              901,
                              919
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 39
                              },
                              "start": {
                                "column": 12,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "range": [
                          863,
                          929
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 40
                          },
                          "start": {
                            "column": 36,
                            "line": 37
                          }
                        }
                      },
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "||=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "range": [
                            839,
                            844
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "defaultValue",
                          "optional": false,
                          "range": [
                            849,
                            861
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 37
                            },
                            "start": {
                              "column": 22,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          839,
                          861
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        835,
                        929
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    825,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 41
                    },
                    "start": {
                      "column": 22,
                      "line": 36
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      816,
                      817
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      822,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 36
                      },
                      "start": {
                        "column": 19,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    816,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 36
                    },
                    "start": {
                      "column": 13,
                      "line": 36
                    }
                  }
                },
                "range": [
                  812,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 47
                  },
                  "start": {
                    "column": 9,
                    "line": 36
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "range": [
                                745,
                                750
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 32
                                },
                                "start": {
                                  "column": 12,
                                  "line": 32
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                751,
                                755
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 32
                                },
                                "start": {
                                  "column": 18,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              745,
                              755
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 32
                              },
                              "start": {
                                "column": 12,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            745,
                            756
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 32
                            },
                            "start": {
                              "column": 12,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defaultValue",
                              "optional": false,
                              "range": [
                                769,
                                781
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 33
                                },
                                "start": {
                                  "column": 12,
                                  "line": 33
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                782,
                                786
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 33
                                },
                                "start": {
                                  "column": 25,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              769,
                              786
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            769,
                            786
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        731,
                        796
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 36,
                          "line": 31
                        }
                      }
                    },
                    "test": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "range": [
                          707,
                          712
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultValue",
                        "optional": false,
                        "range": [
                          717,
                          729
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 31
                          },
                          "start": {
                            "column": 22,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        707,
                        729
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 31
                        },
                        "start": {
                          "column": 12,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      703,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  693,
                  802
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 22,
                    "line": 30
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    684,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 30
                    },
                    "start": {
                      "column": 13,
                      "line": 30
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    690,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                },
                "range": [
                  684,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 30
                  },
                  "start": {
                    "column": 13,
                    "line": 30
                  }
                }
              },
              "range": [
                680,
                1055
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "range": [
                              643,
                              648
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 27
                              },
                              "start": {
                                "column": 12,
                                "line": 27
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "range": [
                              649,
                              653
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 27
                              },
                              "start": {
                                "column": 18,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            643,
                            653
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 27
                            },
                            "start": {
                              "column": 12,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          643,
                          654
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      629,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 28
                      },
                      "start": {
                        "column": 38,
                        "line": 26
                      }
                    }
                  },
                  "test": {
                    "type": "AssignmentExpression",
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "range": [
                        603,
                        608
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "range": [
                          613,
                          618
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 26
                          },
                          "start": {
                            "column": 22,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "original",
                        "optional": false,
                        "range": [
                          619,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 26
                          },
                          "start": {
                            "column": 28,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        613,
                        627
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 26
                        },
                        "start": {
                          "column": 22,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      603,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 26
                      },
                      "start": {
                        "column": 12,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    599,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                589,
                670
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  580,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  586,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              },
              "range": [
                580,
                587
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "range": [
              576,
              1055
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          570,
          1057
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 113,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomethingWithAlias",
        "optional": false,
        "range": [
          466,
          486
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 24
              },
              "start": {
                "column": 35,
                "line": 24
              }
            },
            "range": [
              492,
              523
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingWithOriginal",
                    "optional": false,
                    "range": [
                      494,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 24
                      },
                      "start": {
                        "column": 37,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    494,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 24
                    },
                    "start": {
                      "column": 37,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    514,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 24
                    },
                    "start": {
                      "column": 57,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                494,
                523
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 24
                },
                "start": {
                  "column": 37,
                  "line": 24
                }
              }
            }
          },
          "range": [
            487,
            523
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 24
            },
            "start": {
              "column": 30,
              "line": 24
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultValue",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 111,
                "line": 24
              },
              "start": {
                "column": 80,
                "line": 24
              }
            },
            "range": [
              537,
              568
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingWithOriginal",
                    "optional": false,
                    "range": [
                      539,
                      556
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 24
                      },
                      "start": {
                        "column": 82,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    539,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 24
                    },
                    "start": {
                      "column": 82,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    559,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 111,
                      "line": 24
                    },
                    "start": {
                      "column": 102,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                539,
                568
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 24
                },
                "start": {
                  "column": 82,
                  "line": 24
                }
              }
            }
          },
          "range": [
            525,
            568
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 24
            },
            "start": {
              "column": 68,
              "line": 24
            }
          }
        }
      ],
      "range": [
        457,
        1057
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 49
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
