__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    422
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        57,
        421
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
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
                    "name": "z",
                    "optional": false,
                    "range": [
                      113,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              131,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 4
                              },
                              "start": {
                                "column": 26,
                                "line": 4
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "\"there\"",
                                "value": "there",
                                "range": [
                                  135,
                                  142
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "range": [
                              134,
                              143
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            131,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        129,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              123,
                              124
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              123,
                              124
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            123,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 18,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        121,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        117,
                        118
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
                      117,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    113,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                107,
                146
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          184,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 8
                          },
                          "start": {
                            "column": 6,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          186,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        184,
                        187
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
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        188,
                        196
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      184,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 6,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    184,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          163,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 7
                          },
                          "start": {
                            "column": 6,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          165,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        163,
                        166
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
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        167,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      163,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 6,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    163,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
                    }
                  }
                },
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      150,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 6
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      152,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    150,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
                    }
                  }
                },
                "range": [
                  150,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              "range": [
                150,
                199
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 2,
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
                    "name": "zWorkAround",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 12
                        },
                        "start": {
                          "column": 19,
                          "line": 10
                        }
                      },
                      "range": [
                        220,
                        295
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    230,
                                    231
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 11
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
                                      "column": 19,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 11
                                    }
                                  },
                                  "range": [
                                    231,
                                    241
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        233,
                                        239
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      233,
                                      241
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 11
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  230,
                                  242
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 11
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "range": [
                                    243,
                                    244
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 11
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
                                      "column": 34,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 11
                                    }
                                  },
                                  "range": [
                                    245,
                                    256
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSUndefinedKeyword",
                                    "range": [
                                      247,
                                      256
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 11
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  243,
                                  256
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "range": [
                              228,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 11
                              },
                              "start": {
                                "column": 6,
                                "line": 11
                              }
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "range": [
                                    267,
                                    268
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 12
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
                                      "column": 19,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 12
                                    }
                                  },
                                  "range": [
                                    268,
                                    278
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        270,
                                        276
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      270,
                                      278
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 12
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  267,
                                  279
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 12
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    280,
                                    281
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 12
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
                                      "column": 34,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 12
                                    }
                                  },
                                  "range": [
                                    282,
                                    293
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSUndefinedKeyword",
                                    "range": [
                                      284,
                                      293
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 12
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  280,
                                  293
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 12
                                  }
                                }
                              }
                            ],
                            "range": [
                              265,
                              295
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 6,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          226,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 12
                          },
                          "start": {
                            "column": 4,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      209,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      298,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 12
                      },
                      "start": {
                        "column": 39,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    209,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                203,
                300
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zWorkAround",
                        "optional": false,
                        "range": [
                          347,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 14
                          },
                          "start": {
                            "column": 45,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          359,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 14
                          },
                          "start": {
                            "column": 57,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        347,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 14
                        },
                        "start": {
                          "column": 45,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        361,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 14
                        },
                        "start": {
                          "column": 59,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      347,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 14
                      },
                      "start": {
                        "column": 45,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    347,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 14
                    },
                    "start": {
                      "column": 45,
                      "line": 14
                    }
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zWorkAround",
                        "optional": false,
                        "range": [
                          320,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          332,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 14
                          },
                          "start": {
                            "column": 30,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        320,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 18,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        334,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 14
                        },
                        "start": {
                          "column": 32,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      320,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    320,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
                    }
                  }
                },
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zWorkAround",
                    "optional": false,
                    "range": [
                      304,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      316,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 14
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    304,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 2,
                      "line": 14
                    }
                  }
                },
                "range": [
                  304,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              "range": [
                304,
                372
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          404,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 16
                          },
                          "start": {
                            "column": 30,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          406,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 16
                          },
                          "start": {
                            "column": 32,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        404,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 16
                        },
                        "start": {
                          "column": 30,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        408,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 16
                        },
                        "start": {
                          "column": 34,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      404,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 16
                      },
                      "start": {
                        "column": 30,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    404,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 16
                    },
                    "start": {
                      "column": 30,
                      "line": 16
                    }
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          387,
                          388
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          389,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        387,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        391,
                        399
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      387,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    387,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      376,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 16
                      },
                      "start": {
                        "column": 2,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      383,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    376,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 16
                    },
                    "start": {
                      "column": 2,
                      "line": 16
                    }
                  }
                },
                "range": [
                  376,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              },
              "range": [
                376,
                419
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            103,
            421
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 46,
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
          "name": "main",
          "optional": false,
          "range": [
            73,
            77
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
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
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              },
              "range": [
                79,
                101
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        81,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      81,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      92,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  81,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              78,
              101
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          }
        ],
        "range": [
          64,
          421
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
