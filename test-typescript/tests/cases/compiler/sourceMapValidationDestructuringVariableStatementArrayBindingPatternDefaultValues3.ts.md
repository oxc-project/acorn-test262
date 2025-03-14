__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1999
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
                49
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
                              "column": 16,
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          },
                          "range": [
                            34,
                            39
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              36,
                              39
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
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
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      },
                      "range": [
                        40,
                        46
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          42,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 19,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  49
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
              49
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
            49
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
        49
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
          55,
          60
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
              64,
              70
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
              72,
              78
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
              80,
              86
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
          63,
          87
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
        50,
        88
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "range": [
          94,
          111
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              115,
              121
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "range": [
                123,
                129
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "range": [
              123,
              131
            ],
            "loc": {
              "end": {
                "column": 42,
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
          114,
          132
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        }
      },
      "range": [
        89,
        133
      ],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              },
              "range": [
                145,
                152
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    147,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "range": [
                  147,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              139,
              152
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                  156,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  159,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mowing\"",
                "value": "mowing",
                "range": [
                  168,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              155,
              177
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          },
          "range": [
            139,
            177
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        135,
        178
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              },
              "range": [
                189,
                196
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    191,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  191,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              183,
              196
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                  200,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  203,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  214,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              199,
              225
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          },
          "range": [
            183,
            225
          ],
          "loc": {
            "end": {
              "column": 46,
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
      "kind": "var",
      "range": [
        179,
        226
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              },
              "range": [
                242,
                261
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    244,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 17,
                      "line": 9
                    }
                  }
                },
                "range": [
                  244,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              231,
              261
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  265,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 38,
                    "line": 9
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
                      275,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 9
                      },
                      "start": {
                        "column": 48,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      285,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 9
                      },
                      "start": {
                        "column": 58,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  274,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 9
                  },
                  "start": {
                    "column": 47,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              264,
              289
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 9
              },
              "start": {
                "column": 37,
                "line": 9
              }
            }
          },
          "range": [
            231,
            289
          ],
          "loc": {
            "end": {
              "column": 62,
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
      "kind": "var",
      "range": [
        227,
        290
      ],
      "loc": {
        "end": {
          "column": 63,
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              },
              "range": [
                306,
                325
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    308,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                "range": [
                  308,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              295,
              325
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                  329,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 10
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
                      341,
                      351
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
                    "raw": "\"edging\"",
                    "value": "edging",
                    "range": [
                      353,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 10
                      },
                      "start": {
                        "column": 62,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  340,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 10
                  },
                  "start": {
                    "column": 49,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              328,
              363
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 10
              },
              "start": {
                "column": 37,
                "line": 10
              }
            }
          },
          "range": [
            295,
            363
          ],
          "loc": {
            "end": {
              "column": 72,
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
      "kind": "var",
      "range": [
        291,
        364
      ],
      "loc": {
        "end": {
          "column": 73,
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
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              },
              "range": [
                375,
                383
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  377,
                  383
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
              }
            },
            "range": [
              370,
              383
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            370,
            383
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 12
                },
                "start": {
                  "column": 26,
                  "line": 12
                }
              },
              "range": [
                392,
                400
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  394,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 28,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              385,
              400
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            385,
            400
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 12
            },
            "start": {
              "column": 19,
              "line": 12
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 12
                },
                "start": {
                  "column": 41,
                  "line": 12
                }
              },
              "range": [
                407,
                415
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  409,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 12
                  },
                  "start": {
                    "column": 43,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              402,
              415
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
          "init": null,
          "range": [
            402,
            415
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
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 12
                },
                "start": {
                  "column": 57,
                  "line": 12
                }
              },
              "range": [
                423,
                431
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  425,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 12
                  },
                  "start": {
                    "column": 59,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              417,
              431
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 12
              },
              "start": {
                "column": 51,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            417,
            431
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 12
            },
            "start": {
              "column": 51,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        366,
        432
      ],
      "loc": {
        "end": {
          "column": 66,
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
            "type": "Identifier",
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              },
              "range": [
                447,
                468
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        450,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        459,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 13
                        },
                        "start": {
                          "column": 26,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    450,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                },
                "range": [
                  449,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              437,
              468
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            437,
            468
          ],
          "loc": {
            "end": {
              "column": 35,
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
        433,
        469
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "type": "Identifier",
            "decorators": [],
            "name": "multiSkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              },
              "range": [
                486,
                496
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    488,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                "range": [
                  488,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              475,
              496
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            475,
            496
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              },
              "range": [
                504,
                512
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  506,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 35,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              498,
              512
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            498,
            512
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 15
            },
            "start": {
              "column": 27,
              "line": 15
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 64,
                  "line": 15
                },
                "start": {
                  "column": 56,
                  "line": 15
                }
              },
              "range": [
                527,
                535
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  529,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 15
                  },
                  "start": {
                    "column": 58,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              514,
              535
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 15
              },
              "start": {
                "column": 43,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            514,
            535
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 15
            },
            "start": {
              "column": 43,
              "line": 15
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 89,
                  "line": 15
                },
                "start": {
                  "column": 81,
                  "line": 15
                }
              },
              "range": [
                552,
                560
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  554,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 15
                  },
                  "start": {
                    "column": 83,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              537,
              560
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 15
              },
              "start": {
                "column": 66,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            537,
            560
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 15
            },
            "start": {
              "column": 66,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        471,
        561
      ],
      "loc": {
        "end": {
          "column": 90,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              },
              "range": [
                581,
                604
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        584,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 22,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          593,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 16
                          },
                          "start": {
                            "column": 31,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        593,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 16
                        },
                        "start": {
                          "column": 31,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    584,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                },
                "range": [
                  583,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 16
                  },
                  "start": {
                    "column": 21,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              566,
              604
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            566,
            604
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        562,
        605
      ],
      "loc": {
        "end": {
          "column": 43,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  610,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 3,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  618,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "range": [
                610,
                631
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 3,
                  "line": 18
                }
              }
            }
          ],
          "optional": false,
          "range": [
            607,
            632
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotA",
          "optional": false,
          "range": [
            635,
            641
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
        "range": [
          607,
          641
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        607,
        642
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                "name": "nameB",
                "optional": false,
                "range": [
                  646,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 19
                  },
                  "start": {
                    "column": 3,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  654,
                  667
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 19
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              },
              "range": [
                646,
                667
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 3,
                  "line": 19
                }
              }
            }
          ],
          "optional": false,
          "range": [
            643,
            668
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "range": [
              671,
              680
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 28,
                "line": 19
              }
            }
          },
          "optional": false,
          "range": [
            671,
            682
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 19
            },
            "start": {
              "column": 28,
              "line": 19
            }
          }
        },
        "range": [
          643,
          682
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        643,
        683
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                "name": "nameB",
                "optional": false,
                "range": [
                  687,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 20
                  },
                  "start": {
                    "column": 3,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  695,
                  708
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              },
              "range": [
                687,
                708
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 3,
                  "line": 20
                }
              }
            }
          ],
          "optional": false,
          "range": [
            684,
            709
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                713,
                714
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 29,
                  "line": 20
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                716,
                725
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 32,
                  "line": 20
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimming\"",
              "value": "trimming",
              "range": [
                727,
                737
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 20
                },
                "start": {
                  "column": 43,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            712,
            738
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 20
            },
            "start": {
              "column": 28,
              "line": 20
            }
          }
        },
        "range": [
          684,
          738
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        684,
        739
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                "name": "multiSkillB",
                "optional": false,
                "range": [
                  743,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 21
                  },
                  "start": {
                    "column": 3,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  757,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              },
              "range": [
                743,
                759
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 3,
                  "line": 21
                }
              }
            }
          ],
          "optional": false,
          "range": [
            740,
            760
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "range": [
            763,
            774
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 21
            },
            "start": {
              "column": 23,
              "line": 21
            }
          }
        },
        "range": [
          740,
          774
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        740,
        775
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                "name": "multiSkillB",
                "optional": false,
                "range": [
                  779,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 3,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  793,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 17,
                    "line": 22
                  }
                }
              },
              "range": [
                779,
                795
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 3,
                  "line": 22
                }
              }
            }
          ],
          "optional": false,
          "range": [
            776,
            796
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "range": [
              799,
              813
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "optional": false,
          "range": [
            799,
            815
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 22
            },
            "start": {
              "column": 23,
              "line": 22
            }
          }
        },
        "range": [
          776,
          815
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        776,
        816
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                "name": "multiSkillB",
                "optional": false,
                "range": [
                  820,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 23
                  },
                  "start": {
                    "column": 3,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  834,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              },
              "range": [
                820,
                836
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 3,
                  "line": 23
                }
              }
            }
          ],
          "optional": false,
          "range": [
            817,
            837
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "\"roomba\"",
              "value": "roomba",
              "range": [
                841,
                849
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
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
                    852,
                    860
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 23
                    },
                    "start": {
                      "column": 35,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"mopping\"",
                  "value": "mopping",
                  "range": [
                    862,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 23
                    },
                    "start": {
                      "column": 45,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                851,
                872
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 23
                },
                "start": {
                  "column": 34,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            840,
            873
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 23
            },
            "start": {
              "column": 23,
              "line": 23
            }
          }
        },
        "range": [
          817,
          873
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        817,
        874
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  877,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 25
                  },
                  "start": {
                    "column": 1,
                    "line": 25
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
                    888,
                    889
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  887,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              },
              "range": [
                877,
                889
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 1,
                  "line": 25
                }
              }
            }
          ],
          "optional": false,
          "range": [
            876,
            890
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "range": [
            893,
            899
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 25
            },
            "start": {
              "column": 17,
              "line": 25
            }
          }
        },
        "range": [
          876,
          899
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        876,
        900
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  902,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 26
                  },
                  "start": {
                    "column": 1,
                    "line": 26
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
                    913,
                    914
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  912,
                  914
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "range": [
                902,
                914
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 1,
                  "line": 26
                }
              }
            }
          ],
          "optional": false,
          "range": [
            901,
            915
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "range": [
              918,
              927
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 26
              },
              "start": {
                "column": 17,
                "line": 26
              }
            }
          },
          "optional": false,
          "range": [
            918,
            929
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 26
            },
            "start": {
              "column": 17,
              "line": 26
            }
          }
        },
        "range": [
          901,
          929
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        901,
        930
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  932,
                  939
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 27
                  },
                  "start": {
                    "column": 1,
                    "line": 27
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
                    943,
                    944
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 27
                    },
                    "start": {
                      "column": 12,
                      "line": 27
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  942,
                  944
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "range": [
                932,
                944
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 1,
                  "line": 27
                }
              }
            }
          ],
          "optional": false,
          "range": [
            931,
            945
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                949,
                950
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 27
                },
                "start": {
                  "column": 18,
                  "line": 27
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                952,
                961
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 27
                },
                "start": {
                  "column": 21,
                  "line": 27
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimming\"",
              "value": "trimming",
              "range": [
                963,
                973
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 27
                },
                "start": {
                  "column": 32,
                  "line": 27
                }
              }
            }
          ],
          "range": [
            948,
            974
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 27
            },
            "start": {
              "column": 17,
              "line": 27
            }
          }
        },
        "range": [
          931,
          974
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        931,
        975
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  977,
                  983
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 28
                  },
                  "start": {
                    "column": 1,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  986,
                  999
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 28
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              },
              "range": [
                977,
                999
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 1,
                  "line": 28
                }
              }
            }
          ],
          "optional": false,
          "range": [
            976,
            1000
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "range": [
            1003,
            1014
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 28
            },
            "start": {
              "column": 27,
              "line": 28
            }
          }
        },
        "range": [
          976,
          1014
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        976,
        1015
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  1017,
                  1023
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 29
                  },
                  "start": {
                    "column": 1,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1026,
                  1039
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              },
              "range": [
                1017,
                1039
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 1,
                  "line": 29
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1016,
            1040
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "range": [
              1043,
              1057
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 29
              },
              "start": {
                "column": 27,
                "line": 29
              }
            }
          },
          "optional": false,
          "range": [
            1043,
            1059
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 29
            },
            "start": {
              "column": 27,
              "line": 29
            }
          }
        },
        "range": [
          1016,
          1059
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        1016,
        1060
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  1062,
                  1068
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 1,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1071,
                  1084
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              },
              "range": [
                1062,
                1084
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 30
                },
                "start": {
                  "column": 1,
                  "line": 30
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1061,
            1085
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                1089,
                1098
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 30
                },
                "start": {
                  "column": 28,
                  "line": 30
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
                    1101,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 30
                    },
                    "start": {
                      "column": 40,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"edging\"",
                  "value": "edging",
                  "range": [
                    1113,
                    1121
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 30
                    },
                    "start": {
                      "column": 52,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                1100,
                1122
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 30
                },
                "start": {
                  "column": 39,
                  "line": 30
                }
              }
            }
          ],
          "range": [
            1088,
            1123
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 30
            },
            "start": {
              "column": 27,
              "line": 30
            }
          }
        },
        "range": [
          1061,
          1123
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        1061,
        1124
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  1127,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 32
                  },
                  "start": {
                    "column": 1,
                    "line": 32
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
                    1138,
                    1139
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 32
                    },
                    "start": {
                      "column": 12,
                      "line": 32
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  1137,
                  1139
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 32
                  },
                  "start": {
                    "column": 11,
                    "line": 32
                  }
                }
              },
              "range": [
                1127,
                1139
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 1,
                  "line": 32
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "range": [
                  1141,
                  1146
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1149,
                  1162
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 32
                  },
                  "start": {
                    "column": 23,
                    "line": 32
                  }
                }
              },
              "range": [
                1141,
                1162
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "range": [
                  1164,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 32
                  },
                  "start": {
                    "column": 38,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"noSkill\"",
                "value": "noSkill",
                "range": [
                  1173,
                  1182
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 32
                  },
                  "start": {
                    "column": 47,
                    "line": 32
                  }
                }
              },
              "range": [
                1164,
                1182
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 32
                },
                "start": {
                  "column": 38,
                  "line": 32
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1126,
            1183
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "range": [
            1186,
            1192
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 32
            },
            "start": {
              "column": 60,
              "line": 32
            }
          }
        },
        "range": [
          1126,
          1192
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        1126,
        1193
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  1195,
                  1202
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 33
                  },
                  "start": {
                    "column": 1,
                    "line": 33
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
                    1206,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  1205,
                  1207
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                }
              },
              "range": [
                1195,
                1207
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 33
                },
                "start": {
                  "column": 1,
                  "line": 33
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "range": [
                  1209,
                  1214
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 33
                  },
                  "start": {
                    "column": 15,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1217,
                  1230
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 33
                  },
                  "start": {
                    "column": 23,
                    "line": 33
                  }
                }
              },
              "range": [
                1209,
                1230
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 33
                },
                "start": {
                  "column": 15,
                  "line": 33
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "range": [
                  1232,
                  1238
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 33
                  },
                  "start": {
                    "column": 38,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"noSkill\"",
                "value": "noSkill",
                "range": [
                  1241,
                  1250
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 33
                  },
                  "start": {
                    "column": 47,
                    "line": 33
                  }
                }
              },
              "range": [
                1232,
                1250
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 33
                },
                "start": {
                  "column": 38,
                  "line": 33
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1194,
            1251
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "range": [
              1254,
              1263
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 33
              },
              "start": {
                "column": 60,
                "line": 33
              }
            }
          },
          "optional": false,
          "range": [
            1254,
            1265
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 33
            },
            "start": {
              "column": 60,
              "line": 33
            }
          }
        },
        "range": [
          1194,
          1265
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        1194,
        1266
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  1268,
                  1275
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 34
                  },
                  "start": {
                    "column": 1,
                    "line": 34
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
                    1279,
                    1280
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 34
                    },
                    "start": {
                      "column": 12,
                      "line": 34
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  1278,
                  1280
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 34
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "range": [
                1268,
                1280
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 34
                },
                "start": {
                  "column": 1,
                  "line": 34
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "range": [
                  1282,
                  1287
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1290,
                  1303
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 34
                  },
                  "start": {
                    "column": 23,
                    "line": 34
                  }
                }
              },
              "range": [
                1282,
                1303
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "range": [
                  1305,
                  1311
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 34
                  },
                  "start": {
                    "column": 38,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"noSkill\"",
                "value": "noSkill",
                "range": [
                  1314,
                  1323
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 34
                  },
                  "start": {
                    "column": 47,
                    "line": 34
                  }
                }
              },
              "range": [
                1305,
                1323
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 34
                },
                "start": {
                  "column": 38,
                  "line": 34
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1267,
            1324
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1328,
                1329
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 34
                },
                "start": {
                  "column": 61,
                  "line": 34
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                1331,
                1340
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 34
                },
                "start": {
                  "column": 64,
                  "line": 34
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimming\"",
              "value": "trimming",
              "range": [
                1342,
                1352
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 34
                },
                "start": {
                  "column": 75,
                  "line": 34
                }
              }
            }
          ],
          "range": [
            1327,
            1353
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 34
            },
            "start": {
              "column": 60,
              "line": 34
            }
          }
        },
        "range": [
          1267,
          1353
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1267,
        1354
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  1356,
                  1362
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 35
                  },
                  "start": {
                    "column": 1,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1365,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 35
                  },
                  "start": {
                    "column": 10,
                    "line": 35
                  }
                }
              },
              "range": [
                1356,
                1378
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 35
                },
                "start": {
                  "column": 1,
                  "line": 35
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillB",
                      "optional": false,
                      "range": [
                        1381,
                        1394
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 35
                        },
                        "start": {
                          "column": 26,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "range": [
                        1397,
                        1406
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 35
                        },
                        "start": {
                          "column": 42,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1381,
                      1406
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 35
                      },
                      "start": {
                        "column": 26,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "range": [
                        1408,
                        1423
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 35
                        },
                        "start": {
                          "column": 53,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "range": [
                        1426,
                        1435
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 35
                        },
                        "start": {
                          "column": 71,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1408,
                      1435
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 35
                      },
                      "start": {
                        "column": 53,
                        "line": 35
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  1380,
                  1436
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 35
                  },
                  "start": {
                    "column": 25,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  1439,
                  1441
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 35
                  },
                  "start": {
                    "column": 84,
                    "line": 35
                  }
                }
              },
              "range": [
                1380,
                1441
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 35
                },
                "start": {
                  "column": 25,
                  "line": 35
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1355,
            1442
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "range": [
            1445,
            1456
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 35
            },
            "start": {
              "column": 90,
              "line": 35
            }
          }
        },
        "range": [
          1355,
          1456
        ],
        "loc": {
          "end": {
            "column": 101,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1355,
        1457
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  1459,
                  1465
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 36
                  },
                  "start": {
                    "column": 1,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1468,
                  1481
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              },
              "range": [
                1459,
                1481
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 36
                },
                "start": {
                  "column": 1,
                  "line": 36
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillB",
                      "optional": false,
                      "range": [
                        1484,
                        1497
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 36
                        },
                        "start": {
                          "column": 26,
                          "line": 36
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "range": [
                        1500,
                        1509
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 36
                        },
                        "start": {
                          "column": 42,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1484,
                      1509
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 36
                      },
                      "start": {
                        "column": 26,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "range": [
                        1511,
                        1526
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 36
                        },
                        "start": {
                          "column": 53,
                          "line": 36
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "range": [
                        1529,
                        1538
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 36
                        },
                        "start": {
                          "column": 71,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1511,
                      1538
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 36
                      },
                      "start": {
                        "column": 53,
                        "line": 36
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  1483,
                  1539
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 36
                  },
                  "start": {
                    "column": 25,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  1542,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 36
                  },
                  "start": {
                    "column": 84,
                    "line": 36
                  }
                }
              },
              "range": [
                1483,
                1544
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 36
                },
                "start": {
                  "column": 25,
                  "line": 36
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1458,
            1545
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "range": [
              1548,
              1562
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 36
              },
              "start": {
                "column": 90,
                "line": 36
              }
            }
          },
          "optional": false,
          "range": [
            1548,
            1564
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 36
            },
            "start": {
              "column": 90,
              "line": 36
            }
          }
        },
        "range": [
          1458,
          1564
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        1458,
        1565
      ],
      "loc": {
        "end": {
          "column": 107,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "range": [
                  1567,
                  1573
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 37
                  },
                  "start": {
                    "column": 1,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "raw": "\"helloNoName\"",
                "value": "helloNoName",
                "range": [
                  1576,
                  1589
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 37
                  },
                  "start": {
                    "column": 10,
                    "line": 37
                  }
                }
              },
              "range": [
                1567,
                1589
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 1,
                  "line": 37
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillB",
                      "optional": false,
                      "range": [
                        1592,
                        1605
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 37
                        },
                        "start": {
                          "column": 26,
                          "line": 37
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "range": [
                        1608,
                        1617
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 37
                        },
                        "start": {
                          "column": 42,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1592,
                      1617
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 37
                      },
                      "start": {
                        "column": 26,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "range": [
                        1619,
                        1634
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 37
                        },
                        "start": {
                          "column": 53,
                          "line": 37
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "range": [
                        1637,
                        1646
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 37
                        },
                        "start": {
                          "column": 71,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1619,
                      1646
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 37
                      },
                      "start": {
                        "column": 53,
                        "line": 37
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  1591,
                  1647
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 37
                  },
                  "start": {
                    "column": 25,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  1650,
                  1652
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 37
                  },
                  "start": {
                    "column": 84,
                    "line": 37
                  }
                }
              },
              "range": [
                1591,
                1652
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 37
                },
                "start": {
                  "column": 25,
                  "line": 37
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1566,
            1653
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                1661,
                1670
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 5,
                  "line": 38
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
                    1673,
                    1683
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 17,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"edging\"",
                  "value": "edging",
                  "range": [
                    1685,
                    1693
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 38
                    },
                    "start": {
                      "column": 29,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                1672,
                1694
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 38
                }
              }
            }
          ],
          "range": [
            1660,
            1695
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        },
        "range": [
          1566,
          1695
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        1566,
        1696
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  1699,
                  1706
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 40
                  },
                  "start": {
                    "column": 1,
                    "line": 40
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
                    1710,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 40
                    },
                    "start": {
                      "column": 12,
                      "line": 40
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  1709,
                  1711
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 40
                  },
                  "start": {
                    "column": 11,
                    "line": 40
                  }
                }
              },
              "range": [
                1699,
                1711
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 1,
                  "line": 40
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
                  1716,
                  1726
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 40
                  },
                  "start": {
                    "column": 18,
                    "line": 40
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1713,
                1726
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1698,
            1727
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "range": [
            1730,
            1736
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 40
            },
            "start": {
              "column": 32,
              "line": 40
            }
          }
        },
        "range": [
          1698,
          1736
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1698,
        1737
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  1739,
                  1746
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 41
                  },
                  "start": {
                    "column": 1,
                    "line": 41
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
                    1750,
                    1751
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 41
                    },
                    "start": {
                      "column": 12,
                      "line": 41
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  1749,
                  1751
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 41
                  }
                }
              },
              "range": [
                1739,
                1751
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 1,
                  "line": 41
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
                  1756,
                  1766
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 41
                  },
                  "start": {
                    "column": 18,
                    "line": 41
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1753,
                1766
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 41
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1738,
            1767
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "range": [
              1770,
              1779
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 41
              },
              "start": {
                "column": 32,
                "line": 41
              }
            }
          },
          "optional": false,
          "range": [
            1770,
            1781
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 41
            },
            "start": {
              "column": 32,
              "line": 41
            }
          }
        },
        "range": [
          1738,
          1781
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1738,
        1782
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                  1784,
                  1791
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 42
                  },
                  "start": {
                    "column": 1,
                    "line": 42
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
                    1795,
                    1796
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 42
                    },
                    "start": {
                      "column": 12,
                      "line": 42
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  1794,
                  1796
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 42
                  },
                  "start": {
                    "column": 11,
                    "line": 42
                  }
                }
              },
              "range": [
                1784,
                1796
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 42
                },
                "start": {
                  "column": 1,
                  "line": 42
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
                  1801,
                  1811
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 42
                  },
                  "start": {
                    "column": 18,
                    "line": 42
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1798,
                1811
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 42
                },
                "start": {
                  "column": 15,
                  "line": 42
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1783,
            1812
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1823,
                  1824
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 42
                  },
                  "start": {
                    "column": 40,
                    "line": 42
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  1826,
                  1835
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 42
                  },
                  "start": {
                    "column": 43,
                    "line": 42
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  1837,
                  1847
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 42
                  },
                  "start": {
                    "column": 54,
                    "line": 42
                  }
                }
              }
            ],
            "range": [
              1822,
              1848
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 42
              },
              "start": {
                "column": 39,
                "line": 42
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Robot",
              "optional": false,
              "range": [
                1816,
                1821
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 42
                },
                "start": {
                  "column": 33,
                  "line": 42
                }
              }
            },
            "range": [
              1816,
              1821
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 42
              },
              "start": {
                "column": 33,
                "line": 42
              }
            }
          },
          "range": [
            1815,
            1848
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 42
            },
            "start": {
              "column": 32,
              "line": 42
            }
          }
        },
        "range": [
          1783,
          1848
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        1783,
        1849
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
                  "name": "skillB",
                  "optional": false,
                  "range": [
                    1889,
                    1895
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 45
                    },
                    "start": {
                      "column": 16,
                      "line": 45
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
                    1877,
                    1884
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
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
                    1885,
                    1888
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1877,
                  1888
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "range": [
                1877,
                1896
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              1877,
              1897
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1871,
          1899
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 20,
            "line": 44
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
            1855,
            1860
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "range": [
            1864,
            1869
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 44
            },
            "start": {
              "column": 13,
              "line": 44
            }
          }
        },
        "range": [
          1855,
          1869
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 44
          },
          "start": {
            "column": 4,
            "line": 44
          }
        }
      },
      "range": [
        1851,
        1899
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 44
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotB",
              "optional": false,
              "range": [
                1935,
                1941
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 49
                },
                "start": {
                  "column": 11,
                  "line": 49
                }
              }
            },
            "range": [
              1928,
              1942
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1922,
          1944
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 21,
            "line": 48
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobotB",
        "optional": false,
        "range": [
          1910,
          1919
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 48
          },
          "start": {
            "column": 9,
            "line": 48
          }
        }
      },
      "params": [],
      "range": [
        1901,
        1944
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 48
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotB",
              "optional": false,
              "range": [
                1985,
                1996
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 53
                },
                "start": {
                  "column": 11,
                  "line": 53
                }
              }
            },
            "range": [
              1978,
              1997
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          1972,
          1999
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 26,
            "line": 52
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobotB",
        "optional": false,
        "range": [
          1955,
          1969
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 52
          }
        }
      },
      "params": [],
      "range": [
        1946,
        1999
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 54
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
