__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1781
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
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "range": [
                  124,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 35,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              123,
              139
            ],
            "loc": {
              "end": {
                "column": 50,
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
          140
        ],
        "loc": {
          "end": {
            "column": 51,
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
        141
      ],
      "loc": {
        "end": {
          "column": 52,
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
                153,
                160
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    155,
                    160
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
                  155,
                  160
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
              147,
              160
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
                  164,
                  165
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
                  167,
                  174
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
                  176,
                  184
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
              163,
              185
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
            147,
            185
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
        143,
        186
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
                197,
                204
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    199,
                    204
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
                  199,
                  204
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
              191,
              204
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
                  208,
                  209
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
                  211,
                  220
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
                  222,
                  232
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
              207,
              233
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
            191,
            233
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
        187,
        234
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
                250,
                269
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    252,
                    269
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
                  252,
                  269
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
              239,
              269
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
                  273,
                  280
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
                      283,
                      291
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
                      293,
                      295
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
                  282,
                  296
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
              272,
              297
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
            239,
            297
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
        235,
        298
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
                314,
                333
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    316,
                    333
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
                  316,
                  333
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
              303,
              333
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
                  337,
                  346
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
                      349,
                      359
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
                      361,
                      369
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
                  348,
                  370
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
              336,
              371
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
            303,
            371
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
        299,
        372
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
                383,
                391
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  385,
                  391
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
              378,
              391
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
            378,
            391
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
                400,
                408
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  402,
                  408
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
              393,
              408
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
            393,
            408
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
                415,
                423
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  417,
                  423
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
              410,
              423
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
            410,
            423
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
                431,
                439
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  433,
                  439
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
              425,
              439
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
            425,
            439
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
        374,
        440
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
                455,
                476
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        458,
                        464
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
                        467,
                        473
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
                    458,
                    473
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
                  457,
                  476
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
              445,
              476
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
            445,
            476
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
        441,
        477
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
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              },
              "range": [
                494,
                512
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      497,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      505,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  496,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 33,
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
              483,
              512
            ],
            "loc": {
              "end": {
                "column": 33,
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
            483,
            512
          ],
          "loc": {
            "end": {
              "column": 33,
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
                  "column": 49,
                  "line": 15
                },
                "start": {
                  "column": 41,
                  "line": 15
                }
              },
              "range": [
                520,
                528
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  522,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 15
                  },
                  "start": {
                    "column": 43,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              514,
              528
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 15
              },
              "start": {
                "column": 35,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            514,
            528
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 15
            },
            "start": {
              "column": 35,
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
                  "column": 72,
                  "line": 15
                },
                "start": {
                  "column": 64,
                  "line": 15
                }
              },
              "range": [
                543,
                551
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  545,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 15
                  },
                  "start": {
                    "column": 66,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              530,
              551
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 15
              },
              "start": {
                "column": 51,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            530,
            551
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 15
            },
            "start": {
              "column": 51,
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
                  "column": 97,
                  "line": 15
                },
                "start": {
                  "column": 89,
                  "line": 15
                }
              },
              "range": [
                568,
                576
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  570,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 15
                  },
                  "start": {
                    "column": 91,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              553,
              576
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 15
              },
              "start": {
                "column": 74,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            553,
            576
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 15
            },
            "start": {
              "column": 74,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        479,
        577
      ],
      "loc": {
        "end": {
          "column": 98,
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
                  "column": 50,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              },
              "range": [
                597,
                628
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        600,
                        606
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
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            610,
                            616
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 16
                            },
                            "start": {
                              "column": 32,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            618,
                            624
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 16
                            },
                            "start": {
                              "column": 40,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        609,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
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
                    600,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                },
                "range": [
                  599,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 50,
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
              582,
              628
            ],
            "loc": {
              "end": {
                "column": 50,
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
            582,
            628
          ],
          "loc": {
            "end": {
              "column": 50,
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
        578,
        629
      ],
      "loc": {
        "end": {
          "column": 51,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "range": [
                634,
                639
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
            }
          ],
          "optional": false,
          "range": [
            631,
            640
          ],
          "loc": {
            "end": {
              "column": 9,
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
            643,
            649
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        },
        "range": [
          631,
          649
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        631,
        650
      ],
      "loc": {
        "end": {
          "column": 19,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "range": [
                654,
                659
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
            }
          ],
          "optional": false,
          "range": [
            651,
            660
          ],
          "loc": {
            "end": {
              "column": 9,
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
              663,
              672
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          },
          "optional": false,
          "range": [
            663,
            674
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        },
        "range": [
          651,
          674
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        651,
        675
      ],
      "loc": {
        "end": {
          "column": 24,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "range": [
                679,
                684
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
            }
          ],
          "optional": false,
          "range": [
            676,
            685
          ],
          "loc": {
            "end": {
              "column": 9,
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
                689,
                690
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                692,
                701
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimming\"",
              "value": "trimming",
              "range": [
                703,
                713
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            688,
            714
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        },
        "range": [
          676,
          714
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        676,
        715
      ],
      "loc": {
        "end": {
          "column": 39,
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "range": [
                719,
                730
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
            }
          ],
          "optional": false,
          "range": [
            716,
            731
          ],
          "loc": {
            "end": {
              "column": 15,
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
            734,
            745
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 21
            },
            "start": {
              "column": 18,
              "line": 21
            }
          }
        },
        "range": [
          716,
          745
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        716,
        746
      ],
      "loc": {
        "end": {
          "column": 30,
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "range": [
                750,
                761
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
            }
          ],
          "optional": false,
          "range": [
            747,
            762
          ],
          "loc": {
            "end": {
              "column": 15,
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
              765,
              779
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "optional": false,
          "range": [
            765,
            781
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 22
            },
            "start": {
              "column": 18,
              "line": 22
            }
          }
        },
        "range": [
          747,
          781
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        747,
        782
      ],
      "loc": {
        "end": {
          "column": 35,
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "range": [
                786,
                797
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
            }
          ],
          "optional": false,
          "range": [
            783,
            798
          ],
          "loc": {
            "end": {
              "column": 15,
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
                802,
                810
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 23
                },
                "start": {
                  "column": 19,
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
                    813,
                    821
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 30,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"mopping\"",
                  "value": "mopping",
                  "range": [
                    823,
                    832
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 23
                    },
                    "start": {
                      "column": 40,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                812,
                833
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 23
                },
                "start": {
                  "column": 29,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            801,
            834
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 23
            }
          }
        },
        "range": [
          783,
          834
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        783,
        835
      ],
      "loc": {
        "end": {
          "column": 52,
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                838,
                845
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
            }
          ],
          "optional": false,
          "range": [
            837,
            846
          ],
          "loc": {
            "end": {
              "column": 9,
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
            849,
            855
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 25
            },
            "start": {
              "column": 12,
              "line": 25
            }
          }
        },
        "range": [
          837,
          855
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        837,
        856
      ],
      "loc": {
        "end": {
          "column": 19,
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                858,
                865
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
            }
          ],
          "optional": false,
          "range": [
            857,
            866
          ],
          "loc": {
            "end": {
              "column": 9,
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
              869,
              878
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          },
          "optional": false,
          "range": [
            869,
            880
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 26
            },
            "start": {
              "column": 12,
              "line": 26
            }
          }
        },
        "range": [
          857,
          880
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        857,
        881
      ],
      "loc": {
        "end": {
          "column": 24,
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                883,
                890
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
            }
          ],
          "optional": false,
          "range": [
            882,
            891
          ],
          "loc": {
            "end": {
              "column": 9,
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
                895,
                896
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                898,
                907
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 27
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimming\"",
              "value": "trimming",
              "range": [
                909,
                919
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 27
                },
                "start": {
                  "column": 27,
                  "line": 27
                }
              }
            }
          ],
          "range": [
            894,
            920
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 27
            },
            "start": {
              "column": 12,
              "line": 27
            }
          }
        },
        "range": [
          882,
          920
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        882,
        921
      ],
      "loc": {
        "end": {
          "column": 39,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "range": [
                923,
                929
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
            }
          ],
          "optional": false,
          "range": [
            922,
            930
          ],
          "loc": {
            "end": {
              "column": 8,
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
            933,
            944
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 28
            },
            "start": {
              "column": 11,
              "line": 28
            }
          }
        },
        "range": [
          922,
          944
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        922,
        945
      ],
      "loc": {
        "end": {
          "column": 23,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "range": [
                947,
                953
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
            }
          ],
          "optional": false,
          "range": [
            946,
            954
          ],
          "loc": {
            "end": {
              "column": 8,
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
              957,
              971
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          },
          "optional": false,
          "range": [
            957,
            973
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 29
            },
            "start": {
              "column": 11,
              "line": 29
            }
          }
        },
        "range": [
          946,
          973
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        946,
        974
      ],
      "loc": {
        "end": {
          "column": 28,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "range": [
                976,
                982
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
            }
          ],
          "optional": false,
          "range": [
            975,
            983
          ],
          "loc": {
            "end": {
              "column": 8,
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
                987,
                996
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 30
                },
                "start": {
                  "column": 12,
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
                    999,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 30
                    },
                    "start": {
                      "column": 24,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"edging\"",
                  "value": "edging",
                  "range": [
                    1011,
                    1019
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 30
                    },
                    "start": {
                      "column": 36,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                998,
                1020
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 23,
                  "line": 30
                }
              }
            }
          ],
          "range": [
            986,
            1021
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 30
            },
            "start": {
              "column": 11,
              "line": 30
            }
          }
        },
        "range": [
          975,
          1021
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        975,
        1022
      ],
      "loc": {
        "end": {
          "column": 47,
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                1025,
                1032
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "range": [
                1034,
                1039
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "range": [
                1041,
                1047
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 17,
                  "line": 32
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1024,
            1048
          ],
          "loc": {
            "end": {
              "column": 24,
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
            1051,
            1057
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 32
            },
            "start": {
              "column": 27,
              "line": 32
            }
          }
        },
        "range": [
          1024,
          1057
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        1024,
        1058
      ],
      "loc": {
        "end": {
          "column": 34,
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                1060,
                1067
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "range": [
                1069,
                1074
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 10,
                  "line": 33
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "range": [
                1076,
                1082
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1059,
            1083
          ],
          "loc": {
            "end": {
              "column": 24,
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
              1086,
              1095
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 33
              },
              "start": {
                "column": 27,
                "line": 33
              }
            }
          },
          "optional": false,
          "range": [
            1086,
            1097
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 33
            },
            "start": {
              "column": 27,
              "line": 33
            }
          }
        },
        "range": [
          1059,
          1097
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        1059,
        1098
      ],
      "loc": {
        "end": {
          "column": 39,
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                1100,
                1107
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "range": [
                1109,
                1114
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "range": [
                1116,
                1122
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 34
                },
                "start": {
                  "column": 17,
                  "line": 34
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1099,
            1123
          ],
          "loc": {
            "end": {
              "column": 24,
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
                1127,
                1128
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 34
                },
                "start": {
                  "column": 28,
                  "line": 34
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimmer\"",
              "value": "trimmer",
              "range": [
                1130,
                1139
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 34
                },
                "start": {
                  "column": 31,
                  "line": 34
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"trimming\"",
              "value": "trimming",
              "range": [
                1141,
                1151
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 34
                },
                "start": {
                  "column": 42,
                  "line": 34
                }
              }
            }
          ],
          "range": [
            1126,
            1152
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 34
            },
            "start": {
              "column": 27,
              "line": 34
            }
          }
        },
        "range": [
          1099,
          1152
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1099,
        1153
      ],
      "loc": {
        "end": {
          "column": 54,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "range": [
                1155,
                1161
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
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "range": [
                    1164,
                    1177
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
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "range": [
                    1179,
                    1194
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                1163,
                1195
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 35
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1154,
            1196
          ],
          "loc": {
            "end": {
              "column": 42,
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
            1199,
            1210
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 35
            },
            "start": {
              "column": 45,
              "line": 35
            }
          }
        },
        "range": [
          1154,
          1210
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1154,
        1211
      ],
      "loc": {
        "end": {
          "column": 57,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "range": [
                1213,
                1219
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
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "range": [
                    1222,
                    1235
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
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "range": [
                    1237,
                    1252
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                1221,
                1253
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1212,
            1254
          ],
          "loc": {
            "end": {
              "column": 42,
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
              1257,
              1271
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 36
              },
              "start": {
                "column": 45,
                "line": 36
              }
            }
          },
          "optional": false,
          "range": [
            1257,
            1273
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 36
            },
            "start": {
              "column": 45,
              "line": 36
            }
          }
        },
        "range": [
          1212,
          1273
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        1212,
        1274
      ],
      "loc": {
        "end": {
          "column": 62,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "range": [
                1276,
                1282
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
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "range": [
                    1285,
                    1298
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
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "range": [
                    1300,
                    1315
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                1284,
                1316
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1275,
            1317
          ],
          "loc": {
            "end": {
              "column": 42,
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
                1321,
                1330
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 37
                },
                "start": {
                  "column": 46,
                  "line": 37
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
                    1333,
                    1343
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 37
                    },
                    "start": {
                      "column": 58,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"edging\"",
                  "value": "edging",
                  "range": [
                    1345,
                    1353
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 37
                    },
                    "start": {
                      "column": 70,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                1332,
                1354
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 37
                },
                "start": {
                  "column": 57,
                  "line": 37
                }
              }
            }
          ],
          "range": [
            1320,
            1355
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 37
            },
            "start": {
              "column": 45,
              "line": 37
            }
          }
        },
        "range": [
          1275,
          1355
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        1275,
        1356
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 37
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                1359,
                1366
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 39
                },
                "start": {
                  "column": 1,
                  "line": 39
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
                  1371,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 39
                  },
                  "start": {
                    "column": 13,
                    "line": 39
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1368,
                1381
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 39
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1358,
            1382
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "range": [
            1385,
            1391
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 39
            },
            "start": {
              "column": 27,
              "line": 39
            }
          }
        },
        "range": [
          1358,
          1391
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        1358,
        1392
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                1394,
                1401
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
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "robotAInfo",
                "optional": false,
                "range": [
                  1406,
                  1416
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 40
                  },
                  "start": {
                    "column": 13,
                    "line": 40
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1403,
                1416
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1393,
            1417
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
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
              1420,
              1429
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 40
              },
              "start": {
                "column": 27,
                "line": 40
              }
            }
          },
          "optional": false,
          "range": [
            1420,
            1431
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 40
            },
            "start": {
              "column": 27,
              "line": 40
            }
          }
        },
        "range": [
          1393,
          1431
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
        1393,
        1432
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
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                1434,
                1441
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
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "robotAInfo",
                "optional": false,
                "range": [
                  1446,
                  1456
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 41
                  },
                  "start": {
                    "column": 13,
                    "line": 41
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1443,
                1456
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 41
                },
                "start": {
                  "column": 10,
                  "line": 41
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1433,
            1457
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
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
                  1468,
                  1469
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 41
                  },
                  "start": {
                    "column": 35,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  1471,
                  1480
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 41
                  },
                  "start": {
                    "column": 38,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  1482,
                  1492
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 41
                  },
                  "start": {
                    "column": 49,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              1467,
              1493
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 41
              },
              "start": {
                "column": 34,
                "line": 41
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
                1461,
                1466
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 41
                },
                "start": {
                  "column": 28,
                  "line": 41
                }
              }
            },
            "range": [
              1461,
              1466
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 41
              },
              "start": {
                "column": 28,
                "line": 41
              }
            }
          },
          "range": [
            1460,
            1493
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 41
            },
            "start": {
              "column": 27,
              "line": 41
            }
          }
        },
        "range": [
          1433,
          1493
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1433,
        1494
      ],
      "loc": {
        "end": {
          "column": 61,
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
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "range": [
                  1499,
                  1514
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1496,
                1514
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 42
                },
                "start": {
                  "column": 1,
                  "line": 42
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1495,
            1515
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotA",
          "optional": false,
          "range": [
            1518,
            1529
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 42
            },
            "start": {
              "column": 23,
              "line": 42
            }
          }
        },
        "range": [
          1495,
          1529
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        1495,
        1530
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "range": [
                  1535,
                  1550
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1532,
                1550
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 43
                },
                "start": {
                  "column": 1,
                  "line": 43
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1531,
            1551
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
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
              1554,
              1568
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 43
              },
              "start": {
                "column": 23,
                "line": 43
              }
            }
          },
          "optional": false,
          "range": [
            1554,
            1570
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 43
            },
            "start": {
              "column": 23,
              "line": 43
            }
          }
        },
        "range": [
          1531,
          1570
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1531,
        1571
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "range": [
                  1576,
                  1591
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                1573,
                1591
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 44
                },
                "start": {
                  "column": 1,
                  "line": 44
                }
              }
            }
          ],
          "optional": false,
          "range": [
            1572,
            1592
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
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
                1596,
                1605
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 44
                },
                "start": {
                  "column": 24,
                  "line": 44
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
                    1608,
                    1618
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 44
                    },
                    "start": {
                      "column": 36,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"edging\"",
                  "value": "edging",
                  "range": [
                    1620,
                    1628
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 44
                    },
                    "start": {
                      "column": 48,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1607,
                1629
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 44
                },
                "start": {
                  "column": 35,
                  "line": 44
                }
              }
            }
          ],
          "range": [
            1595,
            1630
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 44
            },
            "start": {
              "column": 23,
              "line": 44
            }
          }
        },
        "range": [
          1572,
          1630
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1572,
        1631
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
                    1671,
                    1677
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 47
                    },
                    "start": {
                      "column": 16,
                      "line": 47
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
                    1659,
                    1666
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
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
                    1667,
                    1670
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 12,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1659,
                  1670
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "range": [
                1659,
                1678
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1659,
              1679
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          1653,
          1681
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 20,
            "line": 46
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
            1637,
            1642
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "range": [
            1646,
            1651
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 46
            },
            "start": {
              "column": 13,
              "line": 46
            }
          }
        },
        "range": [
          1637,
          1651
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 46
          },
          "start": {
            "column": 4,
            "line": 46
          }
        }
      },
      "range": [
        1633,
        1681
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
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
                1717,
                1723
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "range": [
              1710,
              1724
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1704,
          1726
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 21,
            "line": 50
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
          1692,
          1701
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
          }
        }
      },
      "params": [],
      "range": [
        1683,
        1726
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
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
                1767,
                1778
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 55
                },
                "start": {
                  "column": 11,
                  "line": 55
                }
              }
            },
            "range": [
              1760,
              1779
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1754,
          1781
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 26,
            "line": 54
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
          1737,
          1751
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 54
          },
          "start": {
            "column": 9,
            "line": 54
          }
        }
      },
      "params": [],
      "range": [
        1728,
        1781
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 56
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
