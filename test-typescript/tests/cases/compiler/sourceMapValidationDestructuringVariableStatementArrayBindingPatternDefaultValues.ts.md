__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    564
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                52
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        27,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          },
                          "range": [
                            34,
                            42
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              36,
                              42
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 2
                              },
                              "start": {
                                "column": 13,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          31,
                          42
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 2
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      },
                      "range": [
                        43,
                        49
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          45,
                          49
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 2
                          },
                          "start": {
                            "column": 22,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  21,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              52
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            52
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        52
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "range": [
          58,
          63
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
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "range": [
              67,
              73
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              75,
              81
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              83,
              89
            ],
            "loc": {
              "end": {
                "column": 36,
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
          66,
          90
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        53,
        91
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                102,
                109
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    104,
                    109
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
                  104,
                  109
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
              }
            },
            "range": [
              96,
              109
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  113,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  116,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mowing\"",
                "value": "mowing",
                "range": [
                  125,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              112,
              134
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            96,
            134
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        92,
        135
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              },
              "range": [
                146,
                153
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    148,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "range": [
                  148,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              140,
              153
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  157,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  160,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  171,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              156,
              182
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          "range": [
            140,
            182
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        136,
        183
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    192,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"noName\"",
                  "value": "noName",
                  "range": [
                    200,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  192,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              189,
              209
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              212,
              218
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            }
          },
          "range": [
            189,
            218
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        185,
        219
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    225,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 5,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      236,
                      237
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
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    235,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "range": [
                  225,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              224,
              238
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              241,
              247
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            }
          },
          "range": [
            224,
            247
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        220,
        248
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    254,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      266,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 17,
                        "line": 10
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    265,
                    267
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
                  254,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    269,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"noName\"",
                  "value": "noName",
                  "range": [
                    278,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
                    }
                  }
                },
                "range": [
                  269,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    288,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 10
                    },
                    "start": {
                      "column": 39,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"noSkill\"",
                  "value": "noSkill",
                  "range": [
                    298,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 10
                    },
                    "start": {
                      "column": 49,
                      "line": 10
                    }
                  }
                },
                "range": [
                  288,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 10
                  },
                  "start": {
                    "column": 39,
                    "line": 10
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              253,
              308
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              311,
              317
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 10
              },
              "start": {
                "column": 62,
                "line": 10
              }
            }
          },
          "range": [
            253,
            317
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        249,
        318
      ],
      "loc": {
        "end": {
          "column": 69,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberC2",
                  "optional": false,
                  "range": [
                    325,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      337,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    336,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                "range": [
                  325,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              324,
              339
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  343,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"edging\"",
                "value": "edging",
                "range": [
                  346,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 26,
                    "line": 12
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"Trimming edges\"",
                "value": "Trimming edges",
                "range": [
                  356,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 12
                  },
                  "start": {
                    "column": 36,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              342,
              373
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "range": [
            324,
            373
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        320,
        374
      ],
      "loc": {
        "end": {
          "column": 54,
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberC",
                  "optional": false,
                  "range": [
                    380,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      391,
                      392
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
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    390,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                },
                "range": [
                  380,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 5,
                    "line": 13
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "range": [
                    394,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 19,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"noName\"",
                  "value": "noName",
                  "range": [
                    402,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  }
                },
                "range": [
                  394,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 19,
                    "line": 13
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "range": [
                    412,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 13
                    },
                    "start": {
                      "column": 37,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"noSkill\"",
                  "value": "noSkill",
                  "range": [
                    421,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 13
                    },
                    "start": {
                      "column": 46,
                      "line": 13
                    }
                  }
                },
                "range": [
                  412,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 13
                  },
                  "start": {
                    "column": 37,
                    "line": 13
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              379,
              431
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  435,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 13
                  },
                  "start": {
                    "column": 60,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"edging\"",
                "value": "edging",
                "range": [
                  438,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 13
                  },
                  "start": {
                    "column": 63,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"Trimming edges\"",
                "value": "Trimming edges",
                "range": [
                  448,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 13
                  },
                  "start": {
                    "column": 73,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              434,
              465
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 13
              },
              "start": {
                "column": 59,
                "line": 13
              }
            }
          },
          "range": [
            379,
            465
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        375,
        466
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 13
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    473,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 15
                    },
                    "start": {
                      "column": 5,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      485,
                      486
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
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    484,
                    486
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
                  473,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "range": [
                    491,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 15
                    },
                    "start": {
                      "column": 23,
                      "line": 15
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  488,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              472,
              502
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              505,
              511
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 15
              },
              "start": {
                "column": 37,
                "line": 15
              }
            }
          },
          "range": [
            472,
            511
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        468,
        512
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    553,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    541,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    549,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  541,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                541,
                561
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              541,
              562
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          535,
          564
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 21,
            "line": 17
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "range": [
            518,
            523
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA2",
          "optional": false,
          "range": [
            527,
            533
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        "range": [
          518,
          533
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        514,
        564
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
