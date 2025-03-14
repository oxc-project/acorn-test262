__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    357
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonEmptyStringArray",
        "optional": false,
        "range": [
          27,
          46
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              50,
              56
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  66,
                  74
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      67,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  61,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 39,
                    "line": 3
                  }
                }
              },
              "range": [
                61,
                74
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 39,
                  "line": 3
                }
              }
            },
            "range": [
              58,
              74
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            }
          }
        ],
        "range": [
          49,
          75
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 3
          },
          "start": {
            "column": 27,
            "line": 3
          }
        }
      },
      "range": [
        22,
        75
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              },
              "range": [
                90,
                111
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonEmptyStringArray",
                  "optional": false,
                  "range": [
                    92,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "range": [
                  92,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              83,
              111
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'one'",
                "value": "one",
                "range": [
                  115,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'two'",
                "value": "two",
                "range": [
                  122,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 50,
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
              114,
              128
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          "range": [
            83,
            128
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        77,
        128
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s0",
                "optional": false,
                "range": [
                  136,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  140,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "range": [
                  144,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              135,
              147
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings",
            "optional": false,
            "range": [
              150,
              157
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 21,
                "line": 6
              }
            }
          },
          "range": [
            135,
            157
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        129,
        158
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s0",
            "optional": false,
            "range": [
              160,
              162
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "range": [
              163,
              174
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 3,
                "line": 8
              }
            }
          },
          "range": [
            160,
            174
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          160,
          176
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        160,
        176
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
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
            "name": "s1",
            "optional": false,
            "range": [
              177,
              179
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "range": [
              180,
              191
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            177,
            191
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          177,
          193
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        177,
        193
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
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
            "name": "s2",
            "optional": false,
            "range": [
              195,
              197
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "range": [
              198,
              209
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          },
          "range": [
            195,
            209
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          195,
          211
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        195,
        211
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "strings2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              },
              "range": [
                235,
                271
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      238,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          254,
                          262
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              255,
                              261
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 12
                              },
                              "start": {
                                "column": 42,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 41,
                            "line": 12
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          249,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 12
                          },
                          "start": {
                            "column": 36,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        249,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 36,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      246,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 12
                      },
                      "start": {
                        "column": 33,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      264,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 12
                      },
                      "start": {
                        "column": 51,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  237,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              227,
              271
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            227,
            271
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 12
            },
            "start": {
              "column": 14,
              "line": 12
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        213,
        271
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "range": [
                  280,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "range": [
                  284,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "range": [
                  288,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              279,
              291
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings2",
            "optional": false,
            "range": [
              294,
              302
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 21,
                "line": 14
              }
            }
          },
          "range": [
            279,
            302
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        273,
        303
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
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
            "name": "s3",
            "optional": false,
            "range": [
              305,
              307
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 16
              },
              "start": {
                "column": 0,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "range": [
              308,
              319
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 3,
                "line": 16
              }
            }
          },
          "range": [
            305,
            319
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          305,
          321
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        305,
        321
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
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
            "name": "s4",
            "optional": false,
            "range": [
              322,
              324
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "range": [
              325,
              336
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 3,
                "line": 17
              }
            }
          },
          "range": [
            322,
            336
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          322,
          338
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        322,
        338
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
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
            "name": "s5",
            "optional": false,
            "range": [
              340,
              342
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "range": [
              343,
              354
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 3,
                "line": 18
              }
            }
          },
          "range": [
            340,
            354
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          340,
          356
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        340,
        356
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
      "line": 3
    }
  },
  "hashbang": null
}
```
