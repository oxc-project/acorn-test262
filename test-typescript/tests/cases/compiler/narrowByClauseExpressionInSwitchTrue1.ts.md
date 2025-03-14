__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    936
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          62,
          63
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                68,
                72
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
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
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                72,
                77
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    74,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              68,
              77
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "range": [
          66,
          79
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        57,
        80
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          86,
          87
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                92,
                96
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
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
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                96,
                101
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    98,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "range": [
                  98,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              92,
              101
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "range": [
          90,
          103
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "range": [
        81,
        104
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AorB",
        "optional": false,
        "range": [
          110,
          114
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              121,
              122
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          }
        ],
        "range": [
          117,
          122
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "range": [
        105,
        123
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 5
        },
        "start": {
          "column": 0,
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
            "name": "isA",
            "optional": false,
            "range": [
              131,
              134
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 7
                    },
                    "start": {
                      "column": 33,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    160,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                "range": [
                  158,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  169,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
                    "line": 7
                  }
                }
              },
              "range": [
                158,
                172
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  },
                  "range": [
                    139,
                    145
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AorB",
                      "optional": false,
                      "range": [
                        141,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      141,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  138,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              },
              "range": [
                146,
                154
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
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
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  },
                  "range": [
                    153,
                    154
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        153,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 7
                        },
                        "start": {
                          "column": 28,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      153,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  148,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              137,
              172
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          },
          "range": [
            131,
            172
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        125,
        173
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 7
        },
        "start": {
          "column": 0,
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
            "name": "isB",
            "optional": false,
            "range": [
              180,
              183
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    207,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 33,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    209,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 8
                    },
                    "start": {
                      "column": 35,
                      "line": 8
                    }
                  }
                },
                "range": [
                  207,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 33,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"B\"",
                "value": "B",
                "range": [
                  218,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              },
              "range": [
                207,
                221
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 8
                },
                "start": {
                  "column": 33,
                  "line": 8
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  },
                  "range": [
                    188,
                    194
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AorB",
                      "optional": false,
                      "range": [
                        190,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      190,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  187,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              },
              "range": [
                195,
                203
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    197,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  },
                  "range": [
                    202,
                    203
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        202,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 28,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      202,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  197,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              186,
              221
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "range": [
            180,
            221
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        174,
        222
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        291,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 13
                        },
                        "start": {
                          "column": 6,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      291,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 13
                      },
                      "start": {
                        "column": 6,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      300,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 14
                      },
                      "start": {
                        "column": 6,
                        "line": 14
                      }
                    }
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        281,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "range": [
                      277,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    277,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  272,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        330,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 16
                        },
                        "start": {
                          "column": 6,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      330,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 16
                      },
                      "start": {
                        "column": 6,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      339,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 17
                      },
                      "start": {
                        "column": 6,
                        "line": 17
                      }
                    }
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        320,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "range": [
                      316,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    316,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "range": [
                  311,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                260,
                264
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "range": [
              252,
              349
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "range": [
          248,
          351
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 24,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          233,
          238
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            },
            "range": [
              240,
              246
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AorB",
                "optional": false,
                "range": [
                  242,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "range": [
                242,
                246
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            }
          },
          "range": [
            239,
            246
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        }
      ],
      "range": [
        224,
        351
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 10
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        420,
                        421
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 24
                        },
                        "start": {
                          "column": 6,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      420,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 24
                      },
                      "start": {
                        "column": 6,
                        "line": 24
                      }
                    }
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        410,
                        411
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
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "range": [
                      406,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    406,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  401,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        465,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 27
                        },
                        "start": {
                          "column": 6,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      465,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 27
                      },
                      "start": {
                        "column": 6,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      474,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 28
                      },
                      "start": {
                        "column": 6,
                        "line": 28
                      }
                    }
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        455,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "range": [
                      451,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    451,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "range": [
                  446,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                389,
                393
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "range": [
              381,
              484
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "range": [
          377,
          486
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 24,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          362,
          367
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 21
              }
            },
            "range": [
              369,
              375
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AorB",
                "optional": false,
                "range": [
                  371,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
                  }
                }
              },
              "range": [
                371,
                375
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              }
            }
          },
          "range": [
            368,
            375
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 21
            },
            "start": {
              "column": 15,
              "line": 21
            }
          }
        }
      ],
      "range": [
        353,
        486
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 21
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
                  "column": 25,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              },
              "range": [
                493,
                513
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      495,
                      501
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
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      504,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 32
                      },
                      "start": {
                        "column": 16,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  495,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
              492,
              513
            ],
            "loc": {
              "end": {
                "column": 25,
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
            492,
            513
          ],
          "loc": {
            "end": {
              "column": 25,
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
      "kind": "let",
      "range": [
        488,
        514
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      569,
                      570
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "trim",
                    "optional": false,
                    "range": [
                      571,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 36
                      },
                      "start": {
                        "column": 6,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    569,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "range": [
                  569,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "range": [
                569,
                578
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            }
          ],
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
                  546,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 35
                  },
                  "start": {
                    "column": 14,
                    "line": 35
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                539,
                547
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 35
                },
                "start": {
                  "column": 7,
                  "line": 35
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"undefined\"",
              "value": "undefined",
              "range": [
                552,
                563
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 35
                }
              }
            },
            "range": [
              539,
              563
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 35
              },
              "start": {
                "column": 7,
                "line": 35
              }
            }
          },
          "range": [
            534,
            578
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 36
            },
            "start": {
              "column": 2,
              "line": 35
            }
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          524,
          528
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 34
          },
          "start": {
            "column": 8,
            "line": 34
          }
        }
      },
      "range": [
        516,
        580
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "range": [
          587,
          595
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                600,
                604
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
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
                  "column": 34,
                  "line": 39
                },
                "start": {
                  "column": 22,
                  "line": 39
                }
              },
              "range": [
                604,
                616
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"SomeType\"",
                  "value": "SomeType",
                  "range": [
                    606,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 39
                    },
                    "start": {
                      "column": 24,
                      "line": 39
                    }
                  }
                },
                "range": [
                  606,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 39
                  },
                  "start": {
                    "column": 24,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              600,
              616
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 39
              },
              "start": {
                "column": 18,
                "line": 39
              }
            }
          }
        ],
        "range": [
          598,
          618
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 39
          },
          "start": {
            "column": 16,
            "line": 39
          }
        }
      },
      "range": [
        582,
        619
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
        "name": "isSomeType",
        "optional": false,
        "range": [
          637,
          647
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 40
          },
          "start": {
            "column": 17,
            "line": 40
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 40
              },
              "start": {
                "column": 29,
                "line": 40
              }
            },
            "range": [
              649,
              658
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                651,
                658
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 40
                },
                "start": {
                  "column": 31,
                  "line": 40
                }
              }
            }
          },
          "range": [
            648,
            658
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 40
            },
            "start": {
              "column": 28,
              "line": 40
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 40
          },
          "start": {
            "column": 39,
            "line": 40
          }
        },
        "range": [
          659,
          674
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              661,
              662
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 40
              },
              "start": {
                "column": 41,
                "line": 40
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 40
              },
              "start": {
                "column": 46,
                "line": 40
              }
            },
            "range": [
              666,
              674
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeType",
                "optional": false,
                "range": [
                  666,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 40
                  },
                  "start": {
                    "column": 46,
                    "line": 40
                  }
                }
              },
              "range": [
                666,
                674
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 40
                },
                "start": {
                  "column": 46,
                  "line": 40
                }
              }
            }
          },
          "range": [
            661,
            674
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 40
            },
            "start": {
              "column": 41,
              "line": 40
            }
          }
        }
      },
      "range": [
        620,
        675
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "range": [
                        796,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 45
                        },
                        "start": {
                          "column": 6,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      796,
                      802
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 45
                      },
                      "start": {
                        "column": 6,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      809,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 46
                      },
                      "start": {
                        "column": 6,
                        "line": 46
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "range": [
                        770,
                        775
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 44
                        },
                        "start": {
                          "column": 16,
                          "line": 44
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      763,
                      775
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 44
                      },
                      "start": {
                        "column": 9,
                        "line": 44
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      780,
                      788
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 44
                      },
                      "start": {
                        "column": 26,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    763,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 44
                    },
                    "start": {
                      "column": 9,
                      "line": 44
                    }
                  }
                },
                "range": [
                  758,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "range": [
                        856,
                        861
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 48
                        },
                        "start": {
                          "column": 6,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      856,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 48
                      },
                      "start": {
                        "column": 6,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      869,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 49
                      },
                      "start": {
                        "column": 6,
                        "line": 49
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "instanceof",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "range": [
                      825,
                      830
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      842,
                      848
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 47
                      },
                      "start": {
                        "column": 26,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    825,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 47
                    },
                    "start": {
                      "column": 9,
                      "line": 47
                    }
                  }
                },
                "range": [
                  820,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "range": [
                        910,
                        915
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 51
                        },
                        "start": {
                          "column": 6,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      910,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 51
                      },
                      "start": {
                        "column": 6,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      923,
                      929
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 52
                      },
                      "start": {
                        "column": 6,
                        "line": 52
                      }
                    }
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "range": [
                        896,
                        901
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 50
                        },
                        "start": {
                          "column": 20,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSomeType",
                    "optional": false,
                    "range": [
                      885,
                      895
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 50
                      },
                      "start": {
                        "column": 9,
                        "line": 50
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    885,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 50
                    },
                    "start": {
                      "column": 9,
                      "line": 50
                    }
                  }
                },
                "range": [
                  880,
                  929
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                746,
                750
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 43
                },
                "start": {
                  "column": 10,
                  "line": 43
                }
              }
            },
            "range": [
              738,
              933
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 53
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          }
        ],
        "range": [
          734,
          935
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 57,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processInput",
        "optional": false,
        "range": [
          686,
          698
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 42
              },
              "start": {
                "column": 27,
                "line": 42
              }
            },
            "range": [
              704,
              732
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    706,
                    712
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 42
                    },
                    "start": {
                      "column": 29,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      715,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 42
                      },
                      "start": {
                        "column": 38,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    715,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 42
                    },
                    "start": {
                      "column": 38,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomeType",
                    "optional": false,
                    "range": [
                      724,
                      732
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 42
                      },
                      "start": {
                        "column": 47,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    724,
                    732
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 42
                    },
                    "start": {
                      "column": 47,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                706,
                732
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 42
                },
                "start": {
                  "column": 29,
                  "line": 42
                }
              }
            }
          },
          "range": [
            699,
            732
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 42
            },
            "start": {
              "column": 22,
              "line": 42
            }
          }
        }
      ],
      "range": [
        677,
        935
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
