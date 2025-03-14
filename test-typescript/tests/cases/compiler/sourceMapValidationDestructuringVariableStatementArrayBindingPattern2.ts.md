__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    608
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
        "name": "MultiSkilledRobot",
        "optional": false,
        "range": [
          58,
          75
        ],
        "loc": {
          "end": {
            "column": 22,
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
            "type": "TSStringKeyword",
            "range": [
              79,
              85
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "range": [
                  88,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 4
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  96,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 4
                  },
                  "start": {
                    "column": 43,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              87,
              103
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 4
              },
              "start": {
                "column": 34,
                "line": 4
              }
            }
          }
        ],
        "range": [
          78,
          104
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 4
          },
          "start": {
            "column": 25,
            "line": 4
          }
        }
      },
      "range": [
        53,
        105
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              },
              "range": [
                121,
                140
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    123,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "range": [
                  123,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              110,
              140
            ],
            "loc": {
              "end": {
                "column": 34,
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
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  144,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"mowing\"",
                    "value": "mowing",
                    "range": [
                      154,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 5
                      },
                      "start": {
                        "column": 48,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      164,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 5
                      },
                      "start": {
                        "column": 58,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  153,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 5
                  },
                  "start": {
                    "column": 47,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              143,
              168
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          "range": [
            110,
            168
          ],
          "loc": {
            "end": {
              "column": 62,
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
        106,
        169
      ],
      "loc": {
        "end": {
          "column": 63,
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                185,
                204
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    187,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                "range": [
                  187,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              174,
              204
            ],
            "loc": {
              "end": {
                "column": 34,
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
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  208,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"trimming\"",
                    "value": "trimming",
                    "range": [
                      220,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 6
                      },
                      "start": {
                        "column": 50,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"edging\"",
                    "value": "edging",
                    "range": [
                      232,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 6
                      },
                      "start": {
                        "column": 62,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  219,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 6
                  },
                  "start": {
                    "column": 49,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              207,
              242
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 6
              },
              "start": {
                "column": 37,
                "line": 6
              }
            }
          },
          "range": [
            174,
            242
          ],
          "loc": {
            "end": {
              "column": 72,
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
        170,
        243
      ],
      "loc": {
        "end": {
          "column": 73,
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
                "type": "Identifier",
                "decorators": [],
                "name": "skillA",
                "optional": false,
                "range": [
                  252,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              249,
              259
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "name": "multiRobotA",
            "optional": false,
            "range": [
              262,
              273
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          },
          "range": [
            249,
            273
          ],
          "loc": {
            "end": {
              "column": 28,
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
        245,
        274
      ],
      "loc": {
        "end": {
          "column": 29,
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  280,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 11,
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
              279,
              287
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "multiRobotB",
            "optional": false,
            "range": [
              290,
              301
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
              }
            }
          },
          "range": [
            279,
            301
          ],
          "loc": {
            "end": {
              "column": 26,
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
        275,
        302
      ],
      "loc": {
        "end": {
          "column": 27,
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMA",
                "optional": false,
                "range": [
                  308,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "range": [
                      317,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "range": [
                      332,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  316,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              307,
              349
            ],
            "loc": {
              "end": {
                "column": 46,
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
            "name": "multiRobotA",
            "optional": false,
            "range": [
              352,
              363
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 10
              },
              "start": {
                "column": 49,
                "line": 10
              }
            }
          },
          "range": [
            307,
            363
          ],
          "loc": {
            "end": {
              "column": 60,
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
        303,
        364
      ],
      "loc": {
        "end": {
          "column": 61,
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMC",
                "optional": false,
                "range": [
                  371,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 11,
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
              370,
              378
            ],
            "loc": {
              "end": {
                "column": 12,
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
                "raw": "\"roomba\"",
                "value": "roomba",
                "range": [
                  382,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"vacuum\"",
                    "value": "vacuum",
                    "range": [
                      393,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 12
                      },
                      "start": {
                        "column": 27,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"mopping\"",
                    "value": "mopping",
                    "range": [
                      403,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 12
                      },
                      "start": {
                        "column": 37,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  392,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 26,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              381,
              414
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 12
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          },
          "range": [
            370,
            414
          ],
          "loc": {
            "end": {
              "column": 48,
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
        366,
        415
      ],
      "loc": {
        "end": {
          "column": 49,
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
                "name": "nameMC2",
                "optional": false,
                "range": [
                  421,
                  428
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
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primarySkillC",
                    "optional": false,
                    "range": [
                      431,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondarySkillC",
                    "optional": false,
                    "range": [
                      446,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 13
                      },
                      "start": {
                        "column": 30,
                        "line": 13
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  430,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 13
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              420,
              463
            ],
            "loc": {
              "end": {
                "column": 47,
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
                "raw": "\"roomba\"",
                "value": "roomba",
                "range": [
                  467,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 13
                  },
                  "start": {
                    "column": 51,
                    "line": 13
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"vacuum\"",
                    "value": "vacuum",
                    "range": [
                      478,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 13
                      },
                      "start": {
                        "column": 62,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"mopping\"",
                    "value": "mopping",
                    "range": [
                      488,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 13
                      },
                      "start": {
                        "column": 72,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  477,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 13
                  },
                  "start": {
                    "column": 61,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              466,
              499
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 13
              },
              "start": {
                "column": 50,
                "line": 13
              }
            }
          },
          "range": [
            420,
            499
          ],
          "loc": {
            "end": {
              "column": 83,
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
        416,
        500
      ],
      "loc": {
        "end": {
          "column": 84,
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
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    510,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  507,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              506,
              526
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "name": "multiRobotA",
            "optional": false,
            "range": [
              529,
              540
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 15
              }
            }
          },
          "range": [
            506,
            540
          ],
          "loc": {
            "end": {
              "column": 38,
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
        502,
        541
      ],
      "loc": {
        "end": {
          "column": 39,
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
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "range": [
                        583,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        590,
                        591
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
                      583,
                      592
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
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "range": [
                        595,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 18
                        },
                        "start": {
                          "column": 28,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        602,
                        603
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 18
                        },
                        "start": {
                          "column": 35,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      595,
                      604
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    583,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
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
                    571,
                    578
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
                    579,
                    582
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
                  571,
                  582
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
                571,
                605
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              571,
              606
            ],
            "loc": {
              "end": {
                "column": 39,
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
          565,
          608
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 22,
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
          "name": "nameMB",
          "optional": false,
          "range": [
            547,
            553
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "nameMA",
          "optional": false,
          "range": [
            557,
            563
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        },
        "range": [
          547,
          563
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        543,
        608
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
